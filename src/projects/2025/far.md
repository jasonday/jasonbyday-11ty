---
title: FAR, The Fidelity Accessibility Requirements
description: "The Fidelity Accessibility Requirements (FAR) framework I developed at Fidelity Investments stands as an innovative approach in digital accessibility. Unlike traditional methods that overwhelm teams with exhaustive WCAG criteria, FAR's tiered structure empowered product teams to own accessibility testing."
date: 2025-03-04
image: "/assets/images/projects/FAR/FAR-dash.PNG"
imageAlt: "Mockup of dashboard for the Fidelity Accessibility Requirements"
gallery:
  - image: /assets/images/projects/FAR/FAR1-workbook.PNG
    alt: 'Fidelity Investments FAR workbook, 1st page'
    caption: 'Fidelity Accessibility Requirements scoring workbook'
  - image: /assets/images/projects/FAR/FAR1-scores-for-steps.PNG
    alt: 'Close-up of a delicate white flower with a yellow center, surrounded by green leaves'
    caption: 'Jasmine nightshades blooming in July'
  - image: /assets/images/projects/FAR/FAR1-worksheet.PNG
    alt: "A traditional Asturian village with it's raised granaries, surrounded by lush green hills and mountains"
    caption: 'Traditional houses in Santullano, Somiedo Natural Park, Asturias'
  - image: /assets/images/projects/FAR/FAR1-worksheet-filled.PNG
    alt: 'Close-up with unfocused background of a vibrant large blue butterfly gracefully perched on a delicate flower amidst lush green grass'
    caption: 'A large blue (Phengaris arion)'
---



## Pioneering Progressive Accessibility Testing at Fidelity Investments

**My Role**: Principal Accessibility Designer  
**My Contributions**: Led program management, conducted user research, authored the Fidelity Accessibility Requirements (FAR) framework  

### Introduction
The Fidelity Accessibility Requirements (FAR) framework I developed at Fidelity Investments stands as an innovative approach in digital accessibility. Unlike traditional methods that overwhelm teams with exhaustive WCAG criteria, FAR's tiered structure empowered product teams to own accessibility testing, progressively building skills and accountability from basic checks to advanced techniques. This not only drove inclusion by embedding accessibility into every product's DNA but also offered a scalable ramp-up for teams new to the practice. For leadership, FAR provided a transparent lens into a product's accessibility status, revealing whether a team consistently hit Tier II or, due to timelines or constraints, opted for Tier I on certain projects equipping them with precise insights into progress and risk exposure.

### Overview

At Fidelity Investments, product teams are responsible for testing their own products due to a lack of dedicated QA resources. This case study details the development and implementation of the Fidelity Accessibility Requirements (FAR) framework, a progressive approach to accessibility testing designed to empower product teams and improve the accessibility of Fidelity's digital offerings.

### Problem

Our products did not meet Fidelity's Accessibility Standards leading to inaccessible products being launched. Teams faced challenges including:

* Lack of accessibility knowledge and skills.
* Difficulty incorporating accessibility standards comprehensively.
* Being overwhelmed when presented with the full scope of WCAG 2.1 AA guidelines.
* With limited time or resources, a recurring request of “What do we have to test right now?”

This resulted in products that did not meet Fidelity's Accessibility Standards, creating barriers for users and exposing Fidelity to legal and business risks, potential loss of retail customers and sizeable customer accounts. 

### Goals & Objectives

The FAR framework aimed to:

* Provide a progressive checklist and approach to accessibility testing.
* Gradually "shift accessibility left" within the development process.
* Introduce accessibility standards and behaviors incrementally to foster digital accessibility maturity and inclusion.
* Empower product teams to conduct accessibility testing efficiently and effectively.
* Build accessibility skills through clear testing guidelines and expectations.

### Solution: The Fidelity Accessibility Requirements (FAR) Framework

The FAR framework is a tiered system that breaks down WCAG 2.1 AA guidelines into actionable, manageable steps for product teams. It includes:

* **Reorganized Accessibility Guidelines:** WCAG 2.1 AA success criteria were broken down into discrete, actionable guidelines with clear test criteria. For example, instead of presenting "1.3.1 Info & Relationships" as a single criterion, it was divided into specific tests for semantic HTML, ARIA landmarks, form control grouping, and list coding.
* **FAR Checklist:** A tiered checklist that progressively introduces accessibility testing.
    * **Tier 1:** Focuses on basic accessibility checks that can be performed by visual inspection (e.g., color contrast, heading structure).
    * **Tier 2:** Introduces more advanced testing, such as keyboard navigation.
    * **Tier 3:** Includes complex testing that may require expert guidance and screen reader usage.

This tiered approach allows teams to build their accessibility testing skills gradually, starting with fundamental checks and progressing to more advanced techniques.

### Scoring Mechanism

To track progress and measure the effectiveness of FAR, a scoring mechanism was implemented. In the initial MVP, an Excel spreadsheet was developed to:

* Capture user input on the pages being tested and the FAR level being assessed.
* Provide a checklist of test criteria with a pass/fail input for each.
* Calculate an accessibility score using weighted averages based on the pass/fail results.

This scoring system enabled teams and leadership to monitor progress over time and provided a quantifiable metric for accessibility testing performance. This ultimately led to the introduction of an accessibility score/report card, for measurement over time.

{% include "partials/gallery.njk" %}


### Process

1.  **Research and Analysis:** Conducted stakeholder interviews to understand the challenges product teams faced with accessibility testing. Identified the need for a progressive framework to address the "test everything" overload.
2.  **Framework Development:** Collaborated with the accessibility team to develop the FAR framework, including reorganizing WCAG guidelines and creating the tiered checklist.
3.  **Implementation and Training:**
    * Identified pilot teams to start with FAR, gather feedback, and provide improvement suggestions.
    * Performed user interviews throughout the SDLC process to understand potential gaps in FAR.
    * Conducted "roadshows" to discuss FAR pre-introduction, gather feedback, and identify potential obstacles with some teams.
    * Provided training through office hours, guides on our internal website, and step-by-step training sessions.
4.  **Adoption and Measurement:**
    * Worked with leadership to get FAR adopted as a KPI within UX.
    * Used FAR to measure scores quarterly for "cornerstone" experiences (consistent high-value evergreen experiences).

### Outcomes

The implementation of the FAR framework resulted in:

* Increased engagement of product teams in accessibility testing, seeing a 25% increase within the first 6 months
* Overall average defect reduction of 10-15% across quarters
* More mature product teams, overall reduction in "low hanging fruit" support requests
* The introduction of an accessibility score/report card system for ongoing measurement and tracking of progress.
* The FAR framework being adopted as an official product team KPI.
* Leadership gained visibility: teams hitting Tier II consistently signaled maturity, while Tier I execution flagged timeline-driven risks.

### Key Achievements

* **Shifted Accessibility Left:** FAR enabled teams to integrate accessibility testing earlier in the development lifecycle.
* **Empowered Product Teams:** FAR provided teams with the tools and knowledge to take ownership of accessibility testing.
* **Improved Product Accessibility:** Increased accessibility testing led to more accessible digital products for Fidelity users.
* **Established Measurable Metrics:** FAR provided a framework for measuring and tracking accessibility testing progress.
* **Innovative Approach:** The FAR framework's progressive, tiered structure was a novel approach to accessibility implementation, addressing a significant gap in how accessibility testing is operationalized within development teams. This proactive approach is believed to be quite revolutionary, as similar frameworks are not commonly seen in the accessibility space.

### Learnings

The initial iteration of the FAR framework revealed valuable insights:

* Tier Prioritization: In the first version, Tier 1 was designed to include the most critical accessibility tests. However, this resulted in the inclusion of some complex test items in Tier 1, which lowered the completion rate as teams struggled with the more difficult criteria. This learning led to a refinement of the tier structure to ensure a more gradual progression in complexity.
* The initial MVP tracking method via Excel required manual entry, increasing time to collect data to get a big picture view. Next phase plans included building a dashboard to collate data into a central source
* The first phase was web focused, and it was determined that native and document versions of FAR would require different approaches in how the tiers were structured, which could potentially lead to confusion for some teams. Further investigation would be needed to determine next steps. 

### Additional Detail

* **Collaboration:** I collaborated closely with the accessibility team to develop training workshops for product teams on using the FAR framework. .
* **Problem-Solving:** Through user research and feedback analysis, we identified that teams were overwhelmed not just by the volume of WCAG criteria, but also by the perceived complexity of some Tier 1 items. To address this, we restructured the tiers based on test complexity and the natural workflow of development, prioritizing quick wins in early tiers to build momentum.
* **Technology and Tools:** For the initial MVP, an Excel spreadsheet was utilized with Visual Basic for Applications (VBA) to calculate accessibility scores. This highlighted the need for a more scalable solution, which informed the requirements for a future accessibility dashboard.

### Conclusion

The FAR framework successfully addressed the challenges of limited accessibility testing within product teams at Fidelity Investments. By providing a progressive, tiered approach, FAR empowered teams to effectively integrate accessibility testing into their workflows, leading to more accessible products and a more inclusive user experience. This initiative demonstrates the effectiveness of a structured, supportive, and innovative framework in driving organizational change and improving digital accessibility.
