---
templateKey: blog-post
title: Building an Open Source tech platform for agriculture
author: Kalpesh Agrawal
projectId: ADAPT
authorImage: /img/Kalpesh.jpg
date: 2020-08-31T06:18:01.982Z
description: >-
  This blog delves into  the tech principles on which Govt of Odisha's Decision
  Support System is built.
featuredimage: /img/aayush_blog.jpg
---
In a previous blog, we explained [how data is fuelling Odisha’s agricultural transformation](https://www.samagragovernance.in/blog/2020-03-29-how-data-is-fuelling-odisha%E2%80%99s-agricultural-transformation/) through the Decision Support System (DSS). To recap, DSS is the powerhouse pulling agriculture data from 20+ different databases (like predicted rainfall data from the Indian Meteorological Department system, Mission for Integrated Development of Horticulture scheme data from the Central government system and the Jalanidhi scheme data from the NIC Odisha system). This is in addition to the data that is being captured on the platform itself (like data of 50+ agriculture schemes, Pradhan Mantri Fasal Bima Yojana claims disbursement data and crop coverage data of multiple crops). In essence, DSS houses all relevant data points related to agriculture that can help a government official at multiple levels make data-backed decisions.

This blog delves into the tech principles on which DSS is built. 

**1) Using only Open Source components**

The tech stack used to build DSS is PHP Laravel with MySQL database. The diagram below explains the different components of the system.

![](/img/dss1.jpg)



Typically, data feeding will happen in either of three ways: 

* _Data collection forms_: We are leveraging Open Data Kit (ODK), a Open Source tool, to collect unstructured data on DSS and its mobile app version (Agri Extension app). In addition, we have built a configurable forms module on DSS that allows the government officers to configure forms for collecting data of any existing/new scheme launched in the state.  
* _Application Program Interface (API)/Web-service or Database_: We are using the Community version of Talend Open Studio to extract, transform/perform calculations and feed data in the DSS from other agriculture-related tech systems in the state.
* _File uploads_: We are creating jobs, which are essentially a combination of drag and drop components provided in the Graphical User Interface (GUI) of Talend Open Studio to extract data from a file, transform/perform calculations on the data and store the data in the database.

The following diagram provides an overview of the architecture of working of file uploads on DSS:

![](/img/dss2.png)

* _Data pipeline_: For scheduling jobs and data extraction configurations created in Talend, we are using Apache Airflow, which is an Open Source workflow management platform.
* _Data visualisation_: To visualise all the data captured from different sources and to create insightful dashboards, we are leveraging Superset embedded dashboards on the DSS. Superset is  an Open Source tool that can be used to create a chart/dashboard based on data points captured in the  database. 

**2) Configurable by the user**

DSS has been designed in a manner that future use cases can be enabled with minimal dependence on engineers.



Data collection is configured by ODK tool, the configurable forms module and the Talend jobs. The dashboards from the data collected is powered by Superset where any chart/dashboard can be configured by the government officer without dependency on the engineers



In addition, we have created a configurable Schemes module on DSS which allows government officers to configure forms to collect scheme targets and achievements against these targets . Currently, the module has been used to digitize 56 agriculture schemes in Odisha and will be leveraged to digitize any new scheme launched by the state government in the future.



Furthermore, DSS is powered by a configurable access control module which enables the user (admin) to create login credentials for any officer and limit access/visualizations for that officer

**3) Scalable**

We have built DSS on a scalable architecture. 



Currently data being collected on DSS is collected at various administrative levels like district, block and gram panchayat, depending on the availability of data. But the database schema of DSS is designed to accept data at any administrative unit from state to village. So if data being collected today is at the district-level and next year the data is collected at the block level, the database schema will not require any changes.  



The peak traffic on the DSS servers is around 300 API calls/sec but we have optimized the servers to handle approximately 1,000 API calls/second.



Currently, the data volume being handled by DSS is nearly 20 lakh farmers across various agriculture dimensions during just one agriculture season (Kharif) of the year. To manage the volume of data flowing into DSS at all times, we have implemented table partitioning, which is essentially storing data in partitioned tables as opposed to storing it in one table. The partitioning of tables can be done based on any logic (say for example season or year)

**4) Offline support**

In many parts of Odisha, internet connectivity is absent or weak. Therefore, the AgriExtension app has been designed to handle use cases in offline mode with syncing functionality when the internet is available.



The principles on which DSS was built have helped the state government:

* Develop an agriculture tech platform which is self-sustaining with minimal dependency on engineers for rework.  
* Avoid the use of any purchased softwares/tools/solutions and leverage Open Source tools and components which eliminate  licensing fees or annual maintenance costs charged by software providers. 
* Develop a platform which can be replicated  by any other state or another country with a similar context.
