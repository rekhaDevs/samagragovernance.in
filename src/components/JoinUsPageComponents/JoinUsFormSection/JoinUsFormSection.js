import React, {useState} from "react";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";
import axios from "axios";

const fileUploadURL = 'https://us-central1-samagragovernance-in-new.cloudfunctions.net/api/image-upload';
// const fileUploadURL = service.baseUrl + 'image-upload';

export const JoinUsFormSection = ({verticleImage, horizontalImage, joinUsPageContent, infoText1, infoText2}) => {
    // const reachingOptions = [];
    const camelCase = (str) => {
        if (!str) {
            return '';
        }
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    };
    const [showForm, setShowForm] = useState(true);
    const [videoError, setVideoError] = useState('');
    const [videoProgress, setVideoProgress] = useState(0);
    const [formObject, setFormObject] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [activeOption, setActiveOption] = useState(-1);
    const [loaderKey, setLoaderKey] = useState({});
    const formsElements = joinUsPageContent.formsElements || [];
    formsElements.forEach((fE) => {
        fE['key'] = camelCase(fE.label);
        fE['fileKeyName'] = camelCase(fE.label) + 'FileName';
        if (fE['otherOptionAvailable']) {
            fE['otherOptionAvailable'].key = camelCase(fE['otherOptionAvailable']['label']);
        }
        if (fE['type'] === 'file') {
            fE['fileErrorKey'] = fE.key + 'Error';
        }
    });
    const VALID_TEXT = (element) => {
        if (!element.required) {
            return true;
        }
        return formObject && formObject[element.key]
    };
    const VALID_NUMBER = (element) => {
        if (!element.required) {
            return true;
        }
        return formObject && formObject[element.key] && !isNaN(formObject[element.key])
    };
    const VALID_CONTACT = (element) => {
        if (!element.required) {
            return true;
        }
        return VALID_NUMBER(element) && formObject[element.key].length === 10;
    };
    const VALID_EMAIL = (element) => {
        if (!element.required) {
            return true;
        }
        return formObject && formObject[element.key] && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formObject[element.key]);
    };
    const VALID_LINK = (element) => {
        if (!element.required) {
            return true;
        }
        return formObject && formObject[element.key] && formObject[element.key].match("^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\./:]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$");
    };
    const VALID_FILE = (element) => {
        if (!element.required) {
            return true;
        }
        formObject[element.fileErrorKey] = element && formObject && !formObject[element.key];
        return element && formObject && formObject[element.key];
    };
    const VALID_OPTION = (element) => {

        if (!element.required) {
            return true;
        }
        return (formObject && element && (!!(formObject[element.key] && !element.otherOptionAvailable) ||
            !!(formObject[element.key] && element.otherOptionAvailable && formObject[element.key] !== element.otherOptionAvailable.activateOn) ||
            !!(element.otherOptionAvailable && element.otherOptionAvailable.key && formObject[element.otherOptionAvailable.key] && formObject[element.key] === element.otherOptionAvailable.activateOn)));
    };
    const customValidation = (element) => {
        if (element && element.validation) {
            switch (element.validation) {
                case 'VALID_TEXT':
                    return VALID_TEXT(element);
                case 'VALID_NUMBER':
                    return VALID_NUMBER(element);
                case 'VALID_LINK':
                    return VALID_LINK(element);
                case 'VALID_FILE':
                    return VALID_FILE(element);
                case 'VALID_OPTION':
                    return VALID_OPTION(element);
                case 'VALID_CONTACT':
                    return VALID_CONTACT(element);
                case 'VALID_EMAIL':
                    return VALID_EMAIL(element);
            }
        }
    };


    const renderInput = (element) => {
        switch (element.type) {
            case 'text':
                return <div className="col-md-4 col-sm-6 col-xs-12">
                    <fieldset className={'form-group'}>
                        <label>{element.label} {element.required ?
                            <span className={'required-mark'}>*</span> : null}</label>
                        <input type="text"
                               onChange={(e) => {
                                   const formObjectTemp = {
                                       ...formObject
                                   };
                                   formObjectTemp[element.key] = e.target.value;
                                   setFormObject(formObjectTemp);
                               }}
                               className={`form-control ${submitted && !customValidation(element) ? 'invalid' : ''}`}
                               placeholder={element.placeholder}/>
                    </fieldset>
                </div>;
            case 'select':
                return <React.Fragment>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <fieldset className={'form-group'}>
                            <label>{element.label} {element.required ?
                                <span className={'required-mark'}>*</span> : null}</label> <select
                            onChange={(e) => {
                                const formObjectTemp = {
                                    ...formObject
                                };
                                formObjectTemp[element.key] = e.target.value;
                                setFormObject(formObjectTemp);
                            }}
                            className={`form-control ${submitted && !customValidation(element) ? 'invalid' : ''}`}>
                            <option>{element.placeholder}</option>
                            {
                                element.options.map((u) => {
                                    return <option value={u.text || u}>{u.text || u}</option>
                                })
                            }
                            {
                                element.otherOptionAvailable && element.otherOptionAvailable.activateOn ? <option
                                    value={element.otherOptionAvailable.activateOn}>{element.otherOptionAvailable.activateOn}</option> : null
                            }
                        </select>
                        </fieldset>
                    </div>
                    {
                        element.otherOptionAvailable && element.otherOptionAvailable.activateOn && formObject[element.key] === element.otherOptionAvailable.activateOn ?
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>{element.otherOptionAvailable.label}
                                        <span className={'required-mark'}>*</span></label>
                                    <input type="text"
                                           onChange={(e) => {
                                               const formObjectTemp = {
                                                   ...formObject
                                               };
                                               formObjectTemp[element.otherOptionAvailable.key] = e.target.value;
                                               setFormObject(formObjectTemp);
                                           }}
                                           className={`form-control ${submitted && !customValidation(element) ? 'invalid' : ''}`}
                                           placeholder={element.otherOptionAvailable.placeholder}/>
                                </fieldset>
                            </div>
                            : null
                    }
                </React.Fragment>;
            case 'file':
                return <div className="col-12" style={{padding: '0 15px'}}>
                    <fieldset className={'form-group'}>
                        <label> {element.label} <span
                            className={`${formObject[element.fileErrorKey] ? 'invalid-size' : ''}`}>{element.contentDescription} </span>
                            <span
                                className={'required-mark'}>*</span></label>
                        {
                            element.questions ? <div className={'mb-4'}>
                                {
                                    element.questions.map((question) => {
                                        return <p>{question.text || question}</p>
                                    })
                                }
                            </div> : null
                        }
                        <div className="input-group">
                            <input type="text"
                                   value={formObject[element.fileKeyName]}
                                   className={`form-control ${submitted && !customValidation(element) ? 'invalid' : ''}`}
                                   placeholder={'No file selected'}/>
                            <input type="file" className={'file-input'} accept={'.pdf'}
                                   onChange={(e) => {
                                       const files = Array.from(e.target.files);
                                       const formData = new FormData();
                                       const formObjectTemp = {
                                           ...formObject
                                       };
                                       formData.append('file', files[0]);
                                       loaderKey[element.key] = true;
                                       setLoaderKey(JSON.parse(JSON.stringify(loaderKey)));
                                       fetch(fileUploadURL, {
                                           method: 'POST',
                                           body: formData
                                       })
                                           .then(res => {
                                               if (res && res.status === 422) {
                                                   formObjectTemp[element.fileErrorKey] = true;
                                                   setFormObject(formObjectTemp);
                                                   throw Error('File size Exceeded');
                                               } else {
                                                   formObjectTemp[element.fileErrorKey] = false;
                                                   return res.json();
                                               }
                                           })
                                           .then(image => {
                                               formObjectTemp[element.key] = image.key;
                                               formObjectTemp[element.fileKeyName] = image.name;
                                               setFormObject(formObjectTemp);
                                               setTimeout(() => {
                                                   const lK = JSON.parse(JSON.stringify(loaderKey));
                                                   lK[element.key] = false;
                                                   setLoaderKey(lK);
                                               }, 200);
                                           }).catch((e) => {
                                           console.error((e));
                                           setTimeout(() => {
                                               const lK = JSON.parse(JSON.stringify(loaderKey));
                                               lK[element.key] = false;
                                               setLoaderKey(lK);
                                           }, 200);
                                       })
                                   }}/>
                            <div className="input-group-append">
                                       <span className="input-group-text" style={{
                                           background: '#ec672c',
                                           color: 'white',
                                           paddingLeft: '30px',
                                           paddingRight: '30px',
                                           border: 'none'
                                       }}>{loaderKey[element.key] ? <div className="samagra-loader"></div> : null}
                                           {element.actionName}</span>
                            </div>

                        </div>
                        <span className={'hint'}>
                                       {element.placeholder}
                                       </span>
                    </fieldset>
                </div>;
            case 'radio' :
                return <div className="col-12">
                    <fieldset className={'form-group'}>
                        <label> {element.label} <span
                            className={'required-mark'}>*</span></label>
                        <div className="row reaching-options">
                            {
                                element.options.map((option, index) => {
                                    return <div className={'option col-md-4 col-sm-6 col-xs-12'}
                                                onClick={() => {
                                                    setActiveOption(index);
                                                    const formObjectTemp = {
                                                        ...formObject
                                                    };
                                                    formObjectTemp[element.key] = option.text;
                                                    setFormObject(formObjectTemp);
                                                }}>
                                        <div
                                            className={`selection ${activeOption === index ? 'active' : ''}`}>

                                        </div>
                                        <div>{option.text || option}</div>
                                    </div>
                                })
                            }
                            {element.otherOptionAvailable ?
                                <div className={'option col-md-4 col-sm-6 col-xs-12'}
                                     onClick={() => {
                                         setActiveOption(element.otherOptionAvailable.activateOn)
                                     }}>
                                    <div
                                        className={`selection ${activeOption === element.otherOptionAvailable.activateOn ? 'active' : ''}`}>

                                    </div>
                                    <div>{element.otherOptionAvailable.activateOn}</div>
                                    <div
                                        style={{padding: '0 10px'}}>{(activeOption === element.otherOptionAvailable.activateOn) ?
                                        <input
                                            onChange={(e) => {
                                                const formObjectTemp = {
                                                    ...formObject
                                                };
                                                formObjectTemp[element.otherOptionAvailable.key] = e.target.value;
                                                formObjectTemp[element.key] = e.target.value;
                                                setFormObject(formObjectTemp);
                                            }}
                                            type="text"
                                            className={'form-control'}
                                            placeholder={'Other'}/> : <span/>}</div>
                                </div> : null
                            }
                        </div>
                    </fieldset>
                </div>
        }
    };
    return (
        <div style={{paddingTop: '100px'}} className={'join-us-page-wrapper'}>

            <div className="container-fluid">
                {
                    infoText1 ?

                        <div className="row">
                            <p style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '26px',
                                fontWeight: '600',
                                color: '#444444'
                            }}> {infoText1}</p>
                        </div> : null
                }
                <div className="row mb-5">
                    <img
                        src={horizontalImage.childImageSharp ? horizontalImage.childImageSharp.fluid.src : horizontalImage}
                        className={'hide-for-small-only'}
                        style={{maxWidth: '700px', margin: 'auto'}} width={'100%'} alt=""/>
                    <img src={verticleImage.childImageSharp ? verticleImage.childImageSharp.fluid.src : verticleImage}
                         className={'show-for-small-only'} width={'100%'}
                         alt=""/>
                </div>
                {
                    infoText2 ?

                        <div className="row">
                            <p style={{
                                width: '100%',
                                textAlign: 'center',
                                fontSize: '14px',
                                fontWeight: '600',
                                color: '#444444'
                            }}> {infoText2}</p>
                        </div> : null
                }
            </div>
            <div className={'join-us-form'}>

                <div className="container">
                    {showForm ?
                        <div className="row">
                            {
                                formsElements.map((fE, index) => {
                                    if (index === (formsElements.length - 1)) {
                                        return <>
                                            <div className="col-12" style={{padding: '0 15px'}}>
                                                <fieldset className={'form-group'}>
                                                    <label> Upload Video &nbsp;<span
                                                        className={`${videoError ? 'invalid-size' : ''}`}>(mp4, mov, avi, wmv, flv only, max size 300 mb, max length of video 90 seconds) </span>
                                                        <span
                                                            className={'required-mark'}>*</span></label>
                                                    {
                                                        <div className={'mb-4'}>
                                                            <p>Q1. Why do you want to work with Samagra?</p>
                                                            <p>Q2. What is your greatest strength and your greatest
                                                                weakness?</p>
                                                        </div>
                                                    }
                                                    <div className="input-group">
                                                        <input type="text"
                                                               value={formObject['introVideo']}
                                                               className={`form-control ${submitted && !formObject['introVideo'] ? 'invalid' : ''}`}
                                                               placeholder={'No file selected'}/>
                                                        <input type="file" className={'file-input'} multiple={false}
                                                               onChange={(e) => {
                                                                   const files = Array.from(e.target.files);
                                                                   // const formData = new FormData();
                                                                   setVideoProgress(0);
                                                                   setVideoError('');
                                                                   const config = {
                                                                       onUploadProgress: function (progressEvent) {
                                                                           let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                                                                           setVideoProgress(percentCompleted)
                                                                           console.log(percentCompleted);
                                                                       }
                                                                   };

                                                                   let data = new FormData();
                                                                   data.append('file', files[0]);
                                                                   axios.post('http://luezoid.com:8282/upload', data, config)
                                                                       .then(res => {
                                                                           if (res.data && res.data.fileName) {
                                                                               const formObjectTemp = {
                                                                                   ...formObject
                                                                               };
                                                                               formObjectTemp['statementOfPurpose'] = res.data.fileName;
                                                                               formObjectTemp['introVideo'] = res.data.name;
                                                                               setFormObject(formObjectTemp);
                                                                           }

                                                                       })
                                                                       .catch(err => {
                                                                           if (err.response && err.response.data && err.response.data.message) {
                                                                               setVideoError(err.response.data.message);
                                                                           } else {
                                                                               setVideoError('Unable to upload');
                                                                           }
                                                                           setVideoProgress(0);
                                                                       })
                                                               }}/>
                                                        <div className="input-group-append">
                                       <span className="input-group-text" style={{
                                           background: '#ec672c',
                                           color: 'white',
                                           paddingLeft: '30px',
                                           paddingRight: '30px',
                                           border: 'none'
                                       }}>{videoProgress ? <>{videoProgress}%
                                           {
                                               videoProgress !== 100 && <div className="samagra-loader"></div>
                                           }
                                       </> : 'Upload'}
                                           </span>
                                                        </div>


                                                    </div>
                                                    <span className={'hint'}>
                                       Upload a video containing answers to the two questions listed above. Please ensure that the video is recorded against a white background with visual and audio clarity. Do not exceed the specified time limit of 90 seconds. (Filename: Video_Firstname Lastname):
                                       </span>
                                                    <span
                                                        className={`${videoError ? 'invalid-size' : ''}`}>
                                        {
                                            videoError
                                        }
                                    </span>
                                                </fieldset>
                                            </div>
                                            {renderInput(fE)}
                                        </>
                                    }
                                    return renderInput(fE);
                                })
                            }

                            <div className="col-12 " style={{textAlign: 'center', marginTop: '30px'}}>
                                <PrimaryButton click={() => {
                                    setSubmitted(true);
                                    let validForm = true;
                                    formsElements.forEach((element) => {
                                        if (!customValidation(element)) {
                                            validForm = false;
                                        }
                                    });
                                    let reqObject = JSON.parse(JSON.stringify(formObject));
                                    if (!validForm) {
                                        return;
                                    }
                                    if (videoProgress !== 100) {
                                        return;
                                    }
                                    formsElements.forEach((element) => {
                                        if (element.type === 'select' && element.otherOptionAvailable && element.otherOptionAvailable.activateOn && formObject[element.key] === element.otherOptionAvailable.activateOn) {
                                            reqObject[element.key] = reqObject[element.otherOptionAvailable.key];
                                        }
                                    });

                                    loaderKey['formSubmit'] = true;
                                    setLoaderKey(JSON.parse(JSON.stringify(loaderKey)));
                                    axios.post('https://us-central1-samagragovernance-in-new.cloudfunctions.net/api/form-submit', reqObject, {headers: {'Content-Type': 'application/json'}})
                                        .then(function (response) {
                                            setShowForm(false);
                                            setTimeout(() => {
                                                const lK = JSON.parse(JSON.stringify(loaderKey));
                                                lK['formSubmit'] = false;
                                                setLoaderKey(lK);
                                            }, 200);
                                        })
                                        .catch(function (error) {
                                            setTimeout(() => {
                                                const lK = JSON.parse(JSON.stringify(loaderKey));
                                                lK['formSubmit'] = false;
                                                setLoaderKey(lK);
                                            }, 200);
                                        });
                                }} text={'Submit'}>{loaderKey['formSubmit'] ?
                                    <div className="samagra-loader"></div> : null}</PrimaryButton>
                                <div style={{marginTop: '25px'}}>
                                    <a style={{fontSize: '12px', width: '100%', textAlign: 'center', color: '#fff'}}
                                       href="mailto:careers@samagragovernance.in">Have questions? Email us at <span
                                        style={{
                                            cursor: 'pointer',
                                            color: '#ec672c'
                                        }}>careers@samagragovernance.in</span></a>
                                </div>
                            </div>
                        </div>
                        : <div className={'thank-you-message'}>
                            Thank you
                            <div className="sub-title">
                                We have received your application. Our recruitment team will reach out to you
                                shortly.
                            </div>
                            <div className="sub-title">
                                In case you'd like to get regular updates on our work, please follow us on <a
                                target={'_blank'}
                                href="https://www.linkedin.com/company/samagra-transforming-governance/">LinkedIn</a> and <a
                                target={'_blank'} href="https://www.facebook.com/SamagraGovernance">Facebook</a>.
                            </div>
                            <div className={'video'}>
                                <div className="title">
                                    Learn more about Samagra
                                </div>
                                <iframe
                                    src="https://www.youtube.com/embed/videoseries?list=PLqeXOsUG-6BtvH-0GgwRGX9Z2uO89l-nB"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </div>

    )
};

export default JoinUsFormSection;
