import React, {useState} from "react";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";
import axios from "axios";
const service = {};

export const JoinUsFormSection = ({verticleImage, horizontalImage}) => {
    const reachingOptions = [
        'Word of Mouth',
        'Samagra Team Member',
        'LinkedIn',
        'Samagra Website',
        'Campus Placements',
        'Recruitment Agency',
        'Facebook',
        'Other '
    ];
    const [showForm, setShowForm] = useState(true);
    const [formObject, setFormObject] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [activeOption, setActiveOption] = useState(-1);
    const validFullName = () => {
        return formObject && formObject['fullName']
    };
    const validPhoneNumber = () => {
        return formObject && formObject['contactNumber'] && !isNaN(parseInt(formObject['contactNumber'])) && formObject['contactNumber'].length === 10;
    };
    const validEmail = () => {

        return formObject && formObject['email'] && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formObject['email']));
    };
    const validCurrentLocation = () => {
        return formObject && formObject['currentLocation']
    };
    const validInstitute = (key) => {
        if (formObject && formObject[key] && formObject[key] === 'Others' && formObject[key + 'Name']) {
            return true;
        }

        return formObject && formObject[key] && formObject[key] !== 'Others';
    };
    const validText = (key) => {
        return formObject && formObject[key]
    };
    const validMonths = () => {
        return formObject && formObject['experienceInMonths'] && !isNaN(parseInt(formObject['experienceInMonths']));
    };
    const validLink = (key, nullable = false) => {
        if (nullable && !formObject[key]) {
            return true;
        }
        return formObject && formObject[key] && formObject[key].match("^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\./:]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$");
    };
    const ugUniversity = [
        'Ashoka University',
        'Birla Institute of Technology and Science',
        'College of Business Studies',
        'Columbia University',
        'Delhi College of Engineering',
        'Faculty of Management Studies',
        'Harvard Kennedy School',
        'IIIT Hyderabad',
        'IIM Ahemdabad',
        'IIM Bangalore',
        'IIM Calcutta',
        'IIT Bombay',
        'IIT Delhi',
        'IIT Kanpur',
        'IIT Kharagpur',
        'IIT Madras',
        'IIT Roorkee',
        'IIT(ISM) Dhanbad',
        'Indian School of Business',
        'Lady Shri Ram College',
        'Lee Kuan Yew School of Public Policy',
        'National Law School of India University',
        'National University of Juridical Sciences',
        'Princeton University',
        'Shri Ram College of Commerce',
        'Yale University',
        'Others'
    ];
    const pgUniversity = [
        'Not Applicable',
        'Ashoka University',
        'Birla Institute of Technology and Science',
        'College of Business Studies',
        'Columbia University',
        'Delhi College of Engineering',
        'Faculty of Management Studies',
        'Harvard Kennedy School',
        'IIIT Hyderabad',
        'IIM Ahemdabad',
        'IIM Bangalore',
        'IIM Calcutta',
        'IIT Bombay',
        'IIT Delhi',
        'IIT Kanpur',
        'IIT Kharagpur',
        'IIT Madras',
        'IIT Roorkee',
        'IIT(ISM) Dhanbad',
        'Indian School of Business',
        'Lady Shri Ram College',
        'Lee Kuan Yew School of Public Policy',
        'National Law School of India University',
        'National University of Juridical Sciences',
        'Princeton University',
        'Shri Ram College of Commerce',
        'Yale University',
        'Others'
    ];

    return (
        <div style={{paddingTop: '100px'}} className={'join-us-page-wrapper'}>

            <div className="container">
                <div className="row mb-5">
                    <img src={horizontalImage} className={'hide-for-small-only'} style={{maxWidth: '600px', margin: 'auto'}} width={'100%'} alt=""/>
                    <img src={verticleImage} className={'show-for-small-only'} width={'100%'} alt=""/>
                </div>
            </div>
            <div className={'join-us-form'}>
                <div className="container">
                    {showForm ? <div className="row">
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>Full Name <span className={'required-mark'}>*</span></label>
                                    <input type="text" onChange={(e) => {
                                        const formObjectTemp = {
                                            ...formObject
                                        };
                                        formObjectTemp['fullName'] = e.target.value;
                                        setFormObject(formObjectTemp);
                                    }}
                                           className={`form-control ${submitted && !validFullName() ? 'invalid' : ''}`}
                                           placeholder={'Enter your full name'}/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>Contact Number <span className={'required-mark'}>*</span></label>
                                    <input
                                        onChange={(e) => {
                                            const formObjectTemp = {
                                                ...formObject
                                            };
                                            formObjectTemp['contactNumber'] = e.target.value;
                                            setFormObject(formObjectTemp);
                                        }}
                                        type="text"
                                        className={`form-control ${submitted && !validPhoneNumber() ? 'invalid' : ''}`}
                                        placeholder={'Enter your contact number'}/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>Email <span className={'required-mark'}>*</span></label>
                                    <input
                                        onChange={(e) => {
                                            const formObjectTemp = {
                                                ...formObject
                                            };
                                            formObjectTemp['email'] = e.target.value;
                                            setFormObject(formObjectTemp);
                                        }}
                                        type="email"
                                        className={`form-control ${submitted && !validEmail() ? 'invalid' : ''}`}
                                        placeholder={'Enter your email'}/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>Current Location <span className={'required-mark'}>*</span></label>
                                    <input
                                        onChange={(e) => {
                                            const formObjectTemp = {
                                                ...formObject
                                            };
                                            formObjectTemp['currentLocation'] = e.target.value;
                                            setFormObject(formObjectTemp);
                                        }}
                                        type="text"
                                        className={`form-control ${submitted && !validCurrentLocation() ? 'invalid' : ''}`}
                                        placeholder={'Enter current location'}/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>Undergraduate Institute <span className={'required-mark'}>*</span></label>
                                    <select
                                        onChange={(e) => {
                                            const formObjectTemp = {
                                                ...formObject
                                            };
                                            formObjectTemp['ugInstitute'] = e.target.value;
                                            setFormObject(formObjectTemp);
                                        }}
                                        className={`form-control ${submitted && !validInstitute('ugInstitute') ? 'invalid' : ''}`}>
                                        <option>Please select Institute</option>
                                        {
                                            ugUniversity.map((u) => {
                                                return <option value={u}>{u}</option>
                                            })
                                        }
                                    </select>
                                </fieldset>
                            </div>
                            {formObject['ugInstitute'] && formObject['ugInstitute'] === 'Others' ?
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <fieldset className={'form-group'}>
                                        <label>UG Institute Name<span className={'required-mark'}>*</span></label>
                                        <input
                                            onChange={(e) => {
                                                const formObjectTemp = {
                                                    ...formObject
                                                };
                                                formObjectTemp['ugInstituteName'] = e.target.value;
                                                setFormObject(formObjectTemp);
                                            }}
                                            type="text"
                                            className={`form-control ${submitted && !validInstitute('ugInstitute') ? 'invalid' : ''}`}
                                            placeholder={'Institute Name'}/>
                                    </fieldset>
                                </div> : <span/>
                            }
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>Post Graduate Institute <span className={'required-mark'}>*</span></label>
                                    <select
                                        onChange={(e) => {
                                            const formObjectTemp = {
                                                ...formObject
                                            };
                                            formObjectTemp['pgInstitute'] = e.target.value;
                                            setFormObject(formObjectTemp);
                                        }}
                                        className={`form-control ${submitted && !validInstitute('pgInstitute') ? 'invalid' : ''}`}>
                                        <option>Please select Institute</option>
                                        {
                                            pgUniversity.map((u) => {
                                                return <option value={u}>{u}</option>
                                            })
                                        }
                                    </select>
                                </fieldset>
                            </div>
                            {formObject['pgInstitute'] && formObject['pgInstitute'] === 'Others' ?
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <fieldset className={'form-group'}>
                                        <label>UG Institute Name<span className={'required-mark'}>*</span></label>
                                        <input
                                            onChange={(e) => {
                                                const formObjectTemp = {
                                                    ...formObject
                                                };
                                                formObjectTemp['pgInstituteName'] = e.target.value;
                                                setFormObject(formObjectTemp);
                                            }}
                                            type="text"
                                            className={`form-control ${submitted && !validInstitute('pgInstitute') ? 'invalid' : ''}`}
                                            placeholder={'Institute Name'}/>
                                    </fieldset>
                                </div> : <span/>
                            }
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>Current Organization/Institution <span
                                        className={'required-mark'}>*</span></label>
                                    <input onChange={(e) => {
                                        const formObjectTemp = {
                                            ...formObject
                                        };
                                        formObjectTemp['currentOrganization'] = e.target.value;
                                        setFormObject(formObjectTemp);
                                    }} type="text"
                                           className={`form-control ${submitted && !validText('currentOrganization') ? 'invalid' : ''}`}
                                           placeholder={'Enter current organization'}/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label>Total Professional Experience (in months) <span
                                        className={'required-mark'}>*</span></label>
                                    <input onChange={(e) => {
                                        const formObjectTemp = {
                                            ...formObject
                                        };
                                        formObjectTemp['experienceInMonths'] = e.target.value;
                                        setFormObject(formObjectTemp);
                                    }} type="text"
                                           className={`form-control ${submitted && !validMonths() ? 'invalid' : ''}`}
                                           placeholder={'Enter your total experience'}/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label> LinkedIn Profile</label>
                                    <input onChange={(e) => {
                                        const formObjectTemp = {
                                            ...formObject
                                        };
                                        formObjectTemp['linkedInProfile'] = e.target.value;
                                        setFormObject(formObjectTemp);
                                    }} type="text"
                                           className={`form-control ${submitted && !validLink('linkedInProfile', true) ? 'invalid' : ''}`}
                                           placeholder={'Enter your linkedin profile link'}/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label> Blogs/Reference Links</label>
                                    <input onChange={(e) => {
                                        const formObjectTemp = {
                                            ...formObject
                                        };
                                        formObjectTemp['blogLink'] = e.target.value;
                                        setFormObject(formObjectTemp);
                                    }} type="text"
                                           className={`form-control ${submitted && !validLink('blogLink', true) ? 'invalid' : ''}`}
                                           placeholder={'Enter your any blog/reference links'}/>
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <fieldset className={'form-group'}>
                                    <label> Upload Resume  <span className={`${formObject['resumeFileError'] ? 'invalid-size' : ''}`}>(pdf only, max size 1mb)</span> <span className={'required-mark'}>*</span></label>
                                    <div className="input-group">
                                        <input type="text"
                                               value={formObject['resumeFileName']}
                                               className={`form-control ${submitted && !validLink('resume') ? 'invalid' : ''}`}
                                               placeholder={'No file selected'}/>
                                        <input type="file" className={'file-input'} accept={'.pdf'} onChange={(e) => {
                                            const files = Array.from(e.target.files);
                                            const formData = new FormData();
                                            const formObjectTemp = {
                                                ...formObject
                                            };
                                            formData.append('file', files[0]);
                                            fetch(`${service.baseUrl}image-upload`, {
                                                method: 'POST',
                                                body: formData
                                            })
                                                .then(res => {
                                                    if (res && res.status === 422) {
                                                        formObjectTemp['resumeFileError'] = true;
                                                        setFormObject(formObjectTemp);
                                                        throw Error('File size Exceeded');
                                                    } else {
                                                        formObjectTemp['resumeFileError'] = false;
                                                        return res.json();
                                                    }
                                                })
                                                .then(image => {
                                                    formObjectTemp['resume'] = service.baseUrl + 'uploads/' + image.key;
                                                    formObjectTemp['resumeFileName'] = image.name;
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
                                        }}>Upload</span>
                                        </div>
                                        <span className={'hint'}>
                                        Please upload ONLY SINGLE PAGE PDF. (Filename: Resume_Firstname Lastname)
                                    </span>
                                    </div>

                                </fieldset>
                            </div>
                            <div className="col-12 mt-3">
                                <fieldset className={'form-group'}>
                                    <label> Statement of Purpose <span className={`${formObject['statementFileError'] ? 'invalid-size' : ''}`}>(pdf only, max size 1mb)</span> <span
                                        className={'required-mark'}>*</span></label>
                                    <p>Q1. How does Samagra align with your goals? (max 200 words)</p>
                                    <p>Q2. Why do you believe yourself to be a good fit for Samagra? (max 300 words)</p>
                                    <div className="input-group mt-3">
                                        <input type="text"
                                               value={formObject['statementFileName']}
                                               className={`form-control ${submitted && !validLink('statementFile') ? 'invalid' : ''}`}
                                               placeholder={'No file selected'}/>
                                        <input type="file" className={'file-input'} accept={'.pdf'} onChange={(e) => {
                                            const files = Array.from(e.target.files);
                                            const formData = new FormData();
                                            const formObjectTemp = {
                                                ...formObject
                                            };
                                            formData.append('file', files[0]);
                                            fetch(`${service.baseUrl}image-upload`, {
                                                method: 'POST',
                                                body: formData
                                            })
                                                .then(res => {
                                                    if (res && res.status === 422) {
                                                        formObjectTemp['statementFileError'] = true;
                                                        setFormObject(formObjectTemp);
                                                        throw Error('File size Exceeded');
                                                    } else {
                                                        formObjectTemp['statementFileError'] = false;
                                                        return res.json();
                                                    }
                                                })
                                                .then(image => {
                                                    formObjectTemp['statementFile'] = service.baseUrl + 'uploads/' + image.key;
                                                    formObjectTemp['statementFileName'] = image.name;
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
                                        }}>Upload</span>
                                        </div>

                                    </div>
                                    <span className={'hint'}>
                                        Upload a PDF containing separate answers to the following two questions (Filename: SOP_Firstname Lastname):
                                    </span>
                                </fieldset>
                            </div>

                            <div className="col-12">
                                <fieldset className={'form-group'}>
                                    <label> Where did you hear about Samagra? <span
                                        className={'required-mark'}>*</span></label>
                                    <div className="row reaching-options">
                                        {
                                            reachingOptions.map((option, index) => {
                                                return <div className={'option col-md-4 col-sm-6 col-xs-12'}
                                                            onClick={() => {
                                                                setActiveOption(index)
                                                            }}>
                                                    <div
                                                        className={`selection ${activeOption === index ? 'active' : ''}`}>

                                                    </div>
                                                    <div>{option}</div>
                                                    <div
                                                        style={{padding: '0 10px'}}>{(activeOption === reachingOptions.length - 1 && activeOption === index) ?
                                                        <input
                                                        onChange={(e) => {
                                                            const formObjectTemp = {
                                                                ...formObject
                                                            };
                                                            formObjectTemp['leadFromOther'] = e.target.value;
                                                            setFormObject(formObjectTemp);
                                                        }}
                                                        type="text"
                                                        className={'form-control'}
                                                        placeholder={'Other'}/> : <span/>}</div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </fieldset>
                            </div>
                            <div className="col-12 " style={{textAlign: 'center', marginTop: '30px'}}>
                                <PrimaryButton click={() => {
                                    setSubmitted(true);

                                    const formObjectTemp = {
                                        ...formObject
                                    };
                                    formObjectTemp['leadFrom'] = '';
                                    if (reachingOptions[activeOption] && activeOption !== reachingOptions.length - 1) {
                                        formObjectTemp['leadFrom'] = reachingOptions[activeOption];
                                    } else if (activeOption === reachingOptions.length - 1) {

                                        console.log(formObjectTemp);
                                        formObjectTemp['leadFrom'] = formObjectTemp['leadFromOther'];
                                    }

                                    setFormObject(formObjectTemp);
                                    if (!validFullName() || !validLink('linkedInProfile', true) || !validLink('blogLink', true) || !validPhoneNumber() || !validLink('statementFile') || !validLink('resume') || !validInstitute('pgInstitute') || !validInstitute('ugInstitute') || !validEmail() || !validCurrentLocation() || !validText('currentOrganization') || !formObjectTemp['leadFrom']) {
                                        return
                                    }

                                    // const bodyFormData = new FormData();

                                    axios.post(service.baseUrl + 'form/submit', formObjectTemp, {headers: {'Content-Type': 'application/json'}})
                                        .then(function (response) {
                                            setShowForm(false);
                                        })
                                        .catch(function (error) {
                                        });
                                }} text={'Submit'}/>
                                <div style={{fontSize: '12px',marginTop:'25px', textAlign: 'center', color: '#fff'}} href="mailto:careers@samagragovernance.in">Have questions? Email us at <span style={{cursor: 'pointer', color: '#ec672c'}}>careers@samagragovernance.in</span></div>
                            </div>
                        </div>
                        : <div className={'thank-you-message'}>
                            Thank you
                            <div className="sub-title">
                                We have received your application. Our recruitment team will reach out to you shortly.
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
