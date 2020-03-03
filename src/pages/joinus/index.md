---
templateKey: joinus-page
title: Join Us
verticalImage: /img/Vertical.jpg
horizontalImage: /img/Horizontal.jpg
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
  - actionName: Upload
    label: Upload Resume
    placeholder: 'Please upload ONLY SINGLE PAGE PDF. (Filename: Resume_Firstname Lastname)'
    questions: []
    required: true
    type: file
    validation: VALID_FILE
  - actionName: Upload
    label: Statement of Purpose
    placeholder: >-
      Upload a PDF containing separate answers to the following two questions
      (Filename: SOP_Firstname Lastname):
    questions:
      - text: Q1. How does Samagra align with your goals? (max 200 words)
      - text: >-
          Q2. Why do you believe yourself to be a good fit for Samagra? (max 300
          words)
    required: true
    type: file
    validation: VALID_FILE
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
  - label: Current College
    options:
      - text: Columbia University
      - text: 'Columbia University, School of International and Public Affairs'
      - text: Harvard University
      - text: 'Harvard University, Harvard Business School'
      - text: 'Harvard University, Harvard Graduate School of Education'
      - text: 'Harvard University, Harvard Kennedy School'
      - text: Princeton University
      - text: >-
          Princeton University, Woodrow Wilson School of Public and
          International Affairs
      - text: University of Pennsylvania
      - text: 'University of Pennsylvania, The Wharton School'
      - text: Yale University
      - text: 'Yale University, Graduate School of Arts and Sciences'
      - text: 'Yale University, Jackson Institute for Global Affairs'
      - text: 'Yale University, Yale School of Management'
    otherOptionAvailable:
      activateOn: Others
      label: College Name
      placeholder: College Name
    placeholder: Current College
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
---

