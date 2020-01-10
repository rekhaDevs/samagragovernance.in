import React, {useState} from "react";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";
import axios from "axios";

const service = {
    baseUrl: 'http://api.samagragovernance.in/'
};
// const fileUploadURL = 'https://us-central1-samagragovernance-in.cloudfunctions.net/api/image-upload';
const fileUploadURL = service.baseUrl + 'image-upload';

export const JoinUsFormSection = ({verticleImage, horizontalImage, joinUsPageContent}) => {
    // const reachingOptions = [];
    const camelCase = (str) => {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
    const [showForm, setShowForm] = useState(true);
    const [formObject, setFormObject] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [activeOption, setActiveOption] = useState(-1);

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
        return formObject && formObject[element.key]
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
            }
        }
    };
    // const formsElements = [{
    //     key: 'fullName',
    //     type: 'text',
    //     label: 'Full Name',
    //     required: true,
    //     placeholder: 'Enter your full name',
    //     validation: VALID_TEXT
    // }, {
    //     key: 'contactNumber',
    //     type: 'text',
    //     label: 'Contact Number',
    //     required: true,
    //     placeholder: 'Enter your contact number',
    //     validation: VALID_TEXT
    // }, {
    //     key: 'email',
    //     type: 'text',
    //     label: 'Email',
    //     required: true,
    //     placeholder: 'Enter your email',
    //     validation: VALID_TEXT
    // }, {
    //     key: 'currentLocation',
    //     type: 'text',
    //     label: 'Current Location',
    //     required: true,
    //     placeholder: 'Enter current location',
    //     validation: VALID_TEXT
    // }, {
    //     key: 'ugInstitute',
    //     type: 'select',
    //     label: 'Undergraduate Institute',
    //     required: true,
    //     otherOptionAvailable: {
    //         key: 'ugInstituteName',
    //         activateOn: 'Others',
    //         label: 'Institute Name',
    //         placeholder: 'Institute Name'
    //     },
    //     options: [
    //         'Ashoka University',
    //         'Birla Institute of Technology and Science',
    //         'College of Business Studies',
    //         'Columbia University',
    //         'Delhi College of Engineering',
    //         'Faculty of Management Studies',
    //         'Harvard Kennedy School',
    //         'IIIT Hyderabad',
    //         'IIM Ahemdabad',
    //         'IIM Bangalore',
    //         'IIM Calcutta',
    //         'IIT Bombay',
    //         'IIT Delhi',
    //         'IIT Kanpur',
    //         'IIT Kharagpur',
    //         'IIT Madras',
    //         'IIT Roorkee',
    //         'IIT(ISM) Dhanbad',
    //         'Indian School of Business',
    //         'Lady Shri Ram College',
    //         'Lee Kuan Yew School of Public Policy',
    //         'National Law School of India University',
    //         'National University of Juridical Sciences',
    //         'Princeton University',
    //         'Shri Ram College of Commerce',
    //         'Yale University'
    //     ],
    //     placeholder: 'Select Institute',
    //     validation: VALID_OPTION
    // }, {
    //     key: 'pgInstitute',
    //     type: 'select',
    //     label: 'Post Graduate Institute',
    //     required: true,
    //     otherOptionAvailable: {
    //         key: 'pgInstituteName',
    //         activateOn: 'Others',
    //         label: 'Institute Name',
    //         placeholder: 'Institute Name'
    //     },
    //     options: [
    //         'Not Applicable',
    //         'Ashoka University',
    //         'Birla Institute of Technology and Science',
    //         'College of Business Studies',
    //         'Columbia University',
    //         'Delhi College of Engineering',
    //         'Faculty of Management Studies',
    //         'Harvard Kennedy School',
    //         'IIIT Hyderabad',
    //         'IIM Ahemdabad',
    //         'IIM Bangalore',
    //         'IIM Calcutta',
    //         'IIT Bombay',
    //         'IIT Delhi',
    //         'IIT Kanpur',
    //         'IIT Kharagpur',
    //         'IIT Madras',
    //         'IIT Roorkee',
    //         'IIT(ISM) Dhanbad',
    //         'Indian School of Business',
    //         'Lady Shri Ram College',
    //         'Lee Kuan Yew School of Public Policy',
    //         'National Law School of India University',
    //         'National University of Juridical Sciences',
    //         'Princeton University',
    //         'Shri Ram College of Commerce',
    //         'Yale University'
    //     ],
    //     placeholder: 'Select Institute',
    //     validation: VALID_OPTION
    // }, {
    //     key: 'currentOrganization',
    //     type: 'text',
    //     label: 'Current Organization/Institution',
    //     required: true,
    //     placeholder: 'Enter Organization',
    //     validation: VALID_TEXT
    // }, {
    //     key: 'experienceInMonths',
    //     type: 'text',
    //     label: 'Total Professional Experience (in months)',
    //     required: true,
    //     placeholder: 'Enter Organization',
    //     validation: VALID_NUMBER
    // }, {
    //     key: 'linkedInProfile',
    //     type: 'text',
    //     label: 'LinkedIn Profile',
    //     required: false,
    //     placeholder: 'Enter your linkedin profile link',
    //     validation: VALID_LINK
    // }, {
    //     key: 'blogLink',
    //     type: 'text',
    //     label: 'Blogs/Reference Links',
    //     required: false,
    //     placeholder: 'Enter your any blog/reference links',
    //     validation: VALID_LINK
    // }, {
    //     key: 'resume',
    //     type: 'file',
    //     label: 'Upload Resume',
    //     required: true,
    //     fileKeyName: 'resumeFileName',
    //     fileErrorKey: 'resumeFileError',
    //     actionName: 'Upload',
    //     placeholder: 'Please upload ONLY SINGLE PAGE PDF. (Filename: Resume_Firstname Lastname)',
    //     validation: VALID_FILE
    // }, {
    //     key: 'statementFile',
    //     type: 'file',
    //     fileKeyName: 'statementFileName',
    //     fileErrorKey: 'statementFileError',
    //     label: 'Statement of Purpose',
    //     questions: ['Q1. How does Samagra align with your goals? (max 200 words)',
    //         'Q2. Why do you believe yourself to be a good fit for Samagra? (max 300 words)'],
    //     required: true,
    //     actionName: 'Upload',
    //     placeholder: 'Upload a PDF containing separate answers to the following two questions (Filename: SOP_Firstname Lastname):',
    //     validation: VALID_FILE
    // }, {
    //     key: 'leadFrom',
    //     type: 'radio',
    //     label: 'Where did you hear about Samagra?',
    //     required: true,
    //     options: ['Word of Mouth',
    //         'Samagra Team Member',
    //         'LinkedIn',
    //         'Samagra Website',
    //         'Campus Placements',
    //         'Recruitment Agency',
    //         'Facebook'],
    //     otherOptionAvailable: {
    //         key: 'leadFromOther',
    //         activateOn: 'Other',
    //         label: 'Other',
    //         placeholder: 'Other',
    //     },
    //     placeholder: 'Upload a PDF containing separate answers to the following two questions (Filename: SOP_Firstname Lastname):',
    //     validation: VALID_OPTION
    // }];

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
                return <div className="col-6" style={{padding: '0 15px'}}>
                    <fieldset className={'form-group'}>
                        <label> {element.label} <span
                            className={`${formObject[element.fileErrorKey] ? 'invalid-size' : ''}`}>(pdf only, max size 1mb) </span>
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
                                               formObjectTemp[element.key] = service.baseUrl + 'uploads/' + image.key;
                                               formObjectTemp[element.fileKeyName] = image.name;
                                               setFormObject(formObjectTemp);
                                           }).catch((e) => {
                                           console.error((e));
                                       })

                                   }}/>
                            <div className="input-group-append">
                                        <span className="input-group-text" style={{
                                            background: '#ec672c',
                                            color: 'white',
                                            paddingLeft: '50px',
                                            paddingRight: '50px',
                                            border: 'none'
                                        }}>{element.actionName}</span>
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

            <div className="container">
                <div className="row mb-5">
                    <img
                        src={horizontalImage.childImageSharp ? horizontalImage.childImageSharp.fluid.src : horizontalImage}
                        className={'hide-for-small-only'}
                        style={{maxWidth: '600px', margin: 'auto'}} width={'100%'} alt=""/>
                    <img src={verticleImage.childImageSharp ? verticleImage.childImageSharp.fluid.src : verticleImage}
                         className={'show-for-small-only'} width={'100%'}
                         alt=""/>
                </div>
            </div>
            <div className={'join-us-form'}>

                <div className="container">
                    {showForm ?
                        <div className="row">
                            {
                                formsElements.map((fE) => {
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
                                        // return;
                                    }
                                    formsElements.forEach((element) => {
                                        if (element.type === 'select' && element.otherOptionAvailable && element.otherOptionAvailable.activateOn && formObject[element.key] === element.otherOptionAvailable.activateOn) {
                                            reqObject[element.key] = reqObject[element.otherOptionAvailable.key];
                                        }
                                    });

                                    axios.post('https://us-central1-samagragovernance-in.cloudfunctions.net/api/form-submit', reqObject, {headers: {'Content-Type': 'application/json'}})
                                        .then(function (response) {
                                            setShowForm(false);
                                        })
                                        .catch(function (error) {
                                        });
                                }} text={'Submit'}/>
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
