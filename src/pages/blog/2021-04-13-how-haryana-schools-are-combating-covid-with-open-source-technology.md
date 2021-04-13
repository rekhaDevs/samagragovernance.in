---
templateKey: blog-post
title: How Haryana schools are combating Covid with Open Source technology
author: Sagari Handa
projectId: Saksham Haryana-Education
authorImage: /img/Sagari.jpg
date: 2021-04-13T13:20:13.379Z
description: >-
  Leveraging Samiksha for prompt deployment of the new use cases saved the
  Department the hassle and cost involved in onboarding a vendor and managing a
  new application altogether. 
featuredimage: /img/0_img-20210309-wa0040.jpg
---
As India tries to manage the surge in Covid-19 cases, it is unclear how the next academic year will pan out for crores of school students. After one year of closures, it is still an open question how government schools will carry out the safe reopening of schools.



The Government of Haryana started planning for this in September. A key element of the state’s reopening strategy was mandating daily thermal scanning for all students and staff, and recording their temperature and attendance. The rationale for this is that granular reporting of data, over and above a strictly followed safety protocol, will ensure timely action by block and district authorities and prevent schools from becoming pandemic hotspots. Haryana has been able to ensure this through the use of an existing mobile app that the state was already using for recording observations from school visits--Saksham Samiksha. In just over a month, the app was updated to have this additional feature.  



Between October and March, as schools for most grades opened up, the app’s uptake remained strong with ~29,000 teachers across 14,000+ schools recording student attendance and temperature daily. 



**Developing the app**



In 2019, the Saksham Haryana-Education and SamagraX teams started working with the Haryana government to develop the Samiksha app. At that point, the objective was  to replace a vendor-managed mobile app for recording the observations of district and block officials during school visits. 

The app was built by putting together freely available and open source components, which meant that the cost of development was zero. Additionally, the configurable nature of visit forms and dashboards allowed for frequent updation of questions being asked on the form. A simple and clean UI/UX allowed users to navigate the app easily without necessitating many training sessions. 

These factors together allowed for a smooth transition from the previously used mobile app, while saving on expensive maintenance fees being charged by the vendor month-on-month. 

Within 6 months of the app’s launch, 80,000+ school visits had been conducted on the app covering 89% of all schools. 

**Saksham Samiksha 2.0**

Samiksha has been built by leveraging open source tools to develop modules or components that serve a specific purpose. For example, ODK ([open data kit](https://opendatakit.org/)) powers data collection on Samiksha and [Metabase](https://www.metabase.com/) enables visualization of recorded data into simple dashboards. All of these modules can be plugged in or out of the app’s architecture to enable additional functionalities. 

The modular nature of Samiksha allowed for plugging in one or two additional modules without modifying the app’s inherent architecture to enable new use cases of recording student and teacher level attendance and temperature. Leveraging Samiksha for prompt deployment of the new use cases saved the Department the hassle and cost involved in onboarding a vendor and managing a new application altogether. The Saksham Samiksha tech architecture is shown below.



![](/img/screenshot-2021-04-13-192413.jpg)



Based on our experience creating different GovTech products as part of our work with state governments, certain design principles were kept in mind to make the app user-friendly.  



1. Minimizing time spent on reporting data: Real-time API linkage was set up with the Education Department’s MIS to ensure details of students and teachers came pre-loaded on the app. This meant that teachers could simply select the absent students from a list without having to manually enter their information. 
2. Saving time on subsequent usage: In schools with high enrolment, students of a single grade are often divided into sections. However, a student’s section is not stored in the student’s profile on Department MIS. Therefore, a one-time functionality to assign students from a particular grade into separate sections (A, B etc.) was provided such that teachers could access only the students from their class section and save time during subsequent usage.             
3. Driving action through Dashboards: Along with the app launch, a real-time dashboard was set up where district and block officials could see the list of schools in their district or block that have not submitted attendance and temperature records on a particular day. Through this information, officials could follow up with Principals of listed schools and bring up overall compliance.  





**Challenges and Lessons Learnt**

The new functionalities developed on Samiksha have now been in use for over 5 months. In this time, several challenges came up which had to be resolved:



1. Data of ~6 lakh students not visible on the app: Student data on Samiksha was fetched using an API linkage set up by a vendor who managed the Department's MIS. However, due to a broken API, data of over 6 lakh students was missing. To rectify this, daily coordination was done with the Department and MIS vendor to ensure resolution within 3 days. 
2. No option to mark if teacher was on leave or working from home: When the functionality was launched, teachers could be marked as either present or absent. However, this led to lobbying by teacher unions as they felt teachers who were working from home or on deputation outside the school will be wrongly represented as absent. Hence, modifications were made within 2 weeks to enable marking teachers as present in school, on leave, working outside the school or absent
3. Mechanism for query resolution not streamlined: For the first few weeks post the launch, the Saksham Haryana and SamagraX teams resolved issues raised by users on the field on a daily basis, on WhatsApp groups. However, this led to haphazard issue resolution without proper tracking. Post that, an admin console was developed for backend user management and a department operator was trained to resolve queries full time.  



While Samiksha was initially developed as a mobile app for recording school visit observations, its open source and modular architecture allowed the state to adapt its use cases as per its need within a few weeks. The experience of Haryana’s education department shows how open source technology can be leveraged to modify existing products for different governance use cases at scale without cumbersome vendor management.
