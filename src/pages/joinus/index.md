---
templateKey: joinus-page
title: Join Us
infoText1: Join Us
infoText2: ' Thank you for your interest in Samagra. The entire application process can take between 4 to 6 weeks from the date of application.'
verticalImage: /img/recruitment-diagram_vf.jpg
horizontalImage: /img/recruitment-diagram_vf.jpg
formsElements:
  - label: Full Name
    placeholder: Enter your full name
    required: true
    type: text
    validation: VALID_TEXT
  - label: Contact Number
    placeholder: Enter your contact number
    required: true
    type: text
    validation: VALID_TEXT
  - label: Email
    placeholder: Enter your email
    required: true
    type: text
    validation: VALID_TEXT
  - label: Current Location
    placeholder: Enter current location
    required: true
    type: text
    validation: VALID_TEXT
  - label: Undergraduate Institute
    options: []
    otherOptionAvailable:
      activateOn: ''
      label: ''
      placeholder: ''
    placeholder: Select Institute
    required: true
    type: text
    validation: VALID_TEXT
  - label: Post Graduate Institute
    options:
      - text: Not Applicable
      - text: Ashoka University
      - text: Birla Institute of Technology and Science
      - text: College of Business Studies
      - text: Columbia University
      - text: Delhi College of Engineering
      - text: Faculty of Management Studies
      - text: Harvard Kennedy School
      - text: IIIT Hyderabad
      - text: IIM Ahemdabad
      - text: IIM Bangalore
      - text: IIM Calcutta
      - text: IIT Bombay
      - text: IIT Delhi
      - text: IIT Kanpur
      - text: IIT Kharagpur
      - text: IIT Madras
      - text: IIT Roorkee
      - text: IIT(ISM) Dhanbad
      - text: Indian School of Business
      - text: Lady Shri Ram College
      - text: Lee Kuan Yew School of Public Policy
      - text: London School of Economics & Political Science (LSE)
      - text: National Law School of India University
      - text: National University of Juridical Sciences
      - text: Princeton University
      - text: Shri Ram College of Commerce
      - text: University of Cambridge
      - text: University of Oxford
      - text: Yale University
    otherOptionAvailable:
      activateOn: Others
      label: PG Institute Name
      placeholder: Institute Name
    placeholder: Select Institute
    required: true
    type: select
    validation: VALID_OPTION
  - label: Last Employer
    placeholder: Enter Organization
    required: true
    type: text
    validation: VALID_TEXT
  - label: Total Professional Experience (in months)
    placeholder: Enter Organization
    required: true
    type: text
    validation: VALID_NUMBER
  - label: LinkedIn Profile
    placeholder: Enter your linkedin profile link
    required: false
    type: text
    validation: VALID_LINK
  - label: Blogs/Reference Links
    placeholder: Enter your any blog/reference links
    required: false
    type: text
    validation: VALID_LINK
  - actionName: Upload
    label: Upload Resume
    placeholder: 'Please upload ONLY SINGLE PAGE PDF. (Filename: Resume_Firstname Lastname)'
    questions: []
    required: true
    type: file
    validation: VALID_FILE
  - label: Where did you hear about Samagra?
    options:
      - text: Word of Mouth
      - text: Samagra Team Member
      - text: LinkedIn
      - text: Samagra Website
      - text: Campus Placements
      - text: Recruitment Agency
      - text: Facebook
    otherOptionAvailable:
      activateOn: Other
      label: Other
      placeholder: Other
    placeholder: >-
      Upload a PDF containing separate answers to the following two questions
      (Filename: SOP_Firstname Lastname):
    required: true
    type: radio
    validation: VALID_OPTION
---

