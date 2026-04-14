---
layout: default
sidebar_position: 6
title: Roadmap
---

# Roadmap 2026-2028

Please find below a proposed three-year roadmap developed by AboutCode in collaboration with the community to strengthen ClearlyDefined’s technical foundations, expand its capabilities, and grow its global adoption.

## **Goals of the Proposal**

The roadmap is designed to address key challenges while positioning ClearlyDefined for long-term success. The proposal focuses on several foundational changes to improve efficiency and reach:

* Combine ClearlyDefined and AboutCode operations and backends when possible to enable scan data reuse and avoid duplicated, wasted compute resources across ecosystems, creating mutually beneficial synergies  
* Refactor ClearlyDefined backend and frontend to reduce the technical debts and improve data quality  
* Enroll new sponsors to share the cloud compute costs  
* Unlock data access for increased community adoption  
* Enable new use cases around security and project health

These efforts are intended to reduce costs while improving performance, usability, and adoption.

## **Themes by Year**

The roadmap is structured around three phases, each with a distinct focus:

**2026: Strengthening the Foundation**

* Reduce technical debt and operating costs  
* Improve the harvesting and curation queue and user interface  
* Facilitate community contributions

**2027: Expanding Architecture and Use Cases**

* Migrate to a federated data architecture  
* Further reduce hosting costs  
* Unlock broader data access  
* Initiate work on vulnerabilities, project health, and risk use cases

**2028: Delivering Advanced Capabilities**

* Deploy security-related use cases  
* Deliver project health insights and analytics

In parallel, ongoing work will support infrastructure maintenance, data quality, and community engagement throughout all three years.

## **The Six Core Objectives**

The roadmap organizes its deliverables around six key objectives:

### **1\) Create better license and package scans, faster and more efficiently**

* Enable reusing scans across ClearlyDefined harvests and AboutCode data collections  
* Design a priority mechanism to scan packages based on actual usage  
* Improve the performance of ScanCode for faster and more cost efficient scans  
* Improve ScanCode license detection based from the analysis of ClearlyDefined curated data  
* Adopt federated data design with data mirrored across multiple hosts to improve service availability and reduce costs, reusing existing scans

### **2\) Reduce technical debt**

* Update dependencies to latest versions  
* Refactor storage of scans and attachments  
* Switch to the Open Source DocumentDB from the proprietary MongoDB  
* Maintain and improve the ClearlyDefined code base, CI/CD, and infrastructure  
* Update project documentation to reflect new and ongoing development  
* Facilitate outreach and onboarding for new contributors and sponsors

### **3\) Shared scans for shared costs**

* Expand the pool of organizations hosting scans to share the scanning costs  
* Design new prioritized scan queue to scan packages in an order that aligns with business needs  
* Integrate distributed scanning with federated data access with on-premises, private data usage

### **4\) Integrate PURL and SBOM for easier interoperability**

* Create new API endpoints to access ClearlyDefined data keyed by PURL  
* Create a new SBOM API endpoint to expose reference package data in SBOM formats  
* Adopt PURL as a core identifier in the database and file store

### **5\) Improve curation processes and user experience**

* Develop and deploy a new and improved UI for efficient data curation  
* Make it easier for organization to contribute their curations back in bulk  
* Improve the data models for curation storage  
* Create a new specification for multi-stakeholder data curations exchange

### **6\) Support for more use cases**

* Security with vulnerability data  
* Data for project health and lifecycle events and analytics  
* Usage to find the most used Open Source components and drive scan priorities

These objectives reflect a balance between technical modernization, ecosystem collaboration, and expanded functionality.
