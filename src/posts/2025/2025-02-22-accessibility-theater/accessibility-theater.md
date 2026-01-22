---
title: "Accessibility Theater: The Cautionary Tale of Overlays"
description: "Accessibility Theater: The Cautionary Tale of Overlays takes us into the modern boardrooms and living rooms where the drama of digital inclusion, or exclusion, plays out daily."
discover:
  description: "Accessibility Theater: The Cautionary Tale of Overlays takes us into the modern boardrooms and living rooms where the drama of digital inclusion, or exclusion, plays out daily. Our story examines how not-so-well intentioned solutions can become mere performance, a facade of accessibility that ultimately fails those it claims to serve."
date: 2025-02-22
tags: ['accessibility']
image: "/posts/2025/2025-02-22-accessibility-theater/robot-widget.png"
alt: A broken robot, electricity sparking and smoking, saying 'install me'
blueskyUri: 'at://did:plc:re2tqdl3vjkgtdwhx2mjixmw/app.bsky.feed.post/3lcgrbxfzr22y'
---


**Update 1/22/2026:** To make this article clearer and more actionable, and frankly more readable, I've whittled down the lengthy "play", which was a bit of self-indulgence, and expanded the explanation of why accessibility overlays amount to accessibility theater.

---

## Introduction
Digital accessibility has never been more essential, but as organizations scramble to meet legal requirements, many are sold on and reach for what is advertised as the quickest solution available - an accessibility overlay, or widget. 

Overlays promise [full WCAG compliance](https://www.ftc.gov/legal-library/browse/cases-proceedings/2223156-accessibe-inc), AI-powered fixes, and one-line-of-code miracles, and for organizations that are under pressure, it's a tempting pitch. Critics rightfully point out that these tools often interfere with assistive technology and raise serious privacy concerns, but behind those technical failures lies a harder truth. Overlays are accessibility theater. They create the appearance of inclusion without actually delivering it.

To understand what an overlay is, what it tries to do, and why it's harmful beyond the reasons laid out here, get more info at [overlayfactsheet.com](https://overlayfactsheet.com/)

## What Makes Overlays "Accessibility Theater"?

Overlays don’t solve accessibility issues; they mask them. They're performative and here's why that matters. 

### 1. They treat symptoms, not causes

Overlays sit on top of inaccessible code. They can't repair broken markup, missing labels, inaccessible forms, complex widgets, or PDFs. They create the illusion of improvement without addressing the root issues.

Because overlays attempt to guess what needs fixing and how to fix it, they can't consistently address problems in any meaningful way. They don't understand context and frequently get things wrong.

![Head and shoulders portrait of George Washington](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Gilbert-Stuart_Williamstown_Portrait_of_George_Washington.jpg/250px-Gilbert-Stuart_Williamstown_Portrait_of_George_Washington.jpg)

Take this portrait of George Washington. AI-generated alt text from several overlay tools produces something like:

> Portrait of an older man with white hair, wearing a dark coat and white ruffled shirt, set against a dark background.

Which is technically accurate, but completely meaningless. Alt text should align with context and author intent:
* Wikipedia uses "Head and shoulders portrait of George Washington" which is succinct and accurate.
* An article about the portrait artist might use: "The Williamstown Portrait of George Washington painted by Gilbert Stuart in 1803"
* An article about the wearing of wigs in colonial American politics might use: "Portrait of George Washington with his natural powdered hair"

Context matters. Overlays can't provide it because they don't understand context, users tasks, or business goals. They apply generic fixes to specific problems, which may or may not address the needs of users. 

**What this means for you:** You're paying for a solution that doesn't actually solve the problem. The underlying barriers are still there and so is the legal risk.

### 2. They promise compliance they can't deliver

Overlay vendors often make bold claims such as "complete protection", "WCAG compliance", and "full ADA compliance", but accessibility isn't something you can fix with a script. 

Accessibility ([WCAG conformance](https://www.boia.org/blog/the-difference-between-accessibility-compliance-and-accessibility-conformance) and usability) requires building it into the foundation of a site through semantic HTML, proper heading structures, keyboard navigation that makes sense, forms that screen readers can parse, images with meaningful alternative text, and interactive components that announce their state and purpose. It means testing with actual users who rely on assistive technology and fixing what breaks.

An overlay can't do all of this. An overlay cannot restructure poor HTML or add authentic meaning where none exists. Although some tools attempt to programmatically create logical relationships between elements, because they rely on automated guesswork, they may apply incorrect semantics or add features that make the site unusable for people with disabilities. At best, an overlay offers a superficial layer of cosmetic changes. At worst, it creates new barriers that didn't exist before.

Where overlays excel is at creating the appearance of action through widgets, dashboards, and compliance reports. This allows organizations to check a box and claim that accessibility has been addressed. This is theater. It's equivalent to the person that looks busy at work, but isn't getting anything done. These overlays give the appearance of inclusion without actual action. 

**What this means for you:** The compliance protection you paid for doesn't exist. When legal issues arise, and they likely will if your site remains inaccessible, the overlay won't protect you. Courts and plaintiffs don't care that you installed a widget. They care whether your site actually works for people with disabilities.

### 3. They may increase legal risk

Organizations install overlays to reduce legal exposure, but it may be doing the opposite.

According to UsableNet, [25% of all accessibility lawsuits in 2025](https://blog.usablenet.com/ada-web-lawsuit-trends-2026) cited overlays alongside the specific barriers. Law firms that specialize in accessibility litigation may be using the presence of overlays as evidence that a company opted for a shortcut instead of genuine remediation.

Consider the optics in court. By implementing an overlay, an organization understands that accessibility is required/important, and that their site has barriers, but instead of fixing those barriers, the organization installed a widget that the plaintiff's legal team can demonstrate doesn't actually provide access. The overlay becomes documentation of the decision to avoid implementing accessibility at a fundamental level. 

**What this means for you:** Choosing to install an overlay to protect your organization may actually be making you a more attractive target for litigation. Besides failing to reduce risk, you're potentially increasing it while paying for the privilege.

### 4. They delay real progress

Perhaps the biggest harm of overlays is what they prevent, which is fundamental accessibility improvements.

When an organization installs an overlay, the urgency disappears because the problem appears solved. Instead of fostering a culture of inclusion, the presence of a widget often reduces accessibility to a low-priority task that remains at the bottom of the development backlog, or removes it's consideration entirely. Budget conversations shift. Timelines extend. Product teams move on to other priorities. After all, with a widget now on the site, isn't that enough?.

It's not. Not only do overlays fail to fix accessibility, but they also actively delay it. They allow an organization to play act at accessibility without committing resources. They turn accessibility into an add-on rather than a fundamental practice woven into design and development.

Real accessibility inclusion requires investment in time, expertise, cultural change, and a commitment to doing things right from the start. Overlays offer an attractive shortcut that actually doesn't go anywhere.

**What this means for you:** Every day spent relying on an overlay is a day the actual work isn't happening. You are not just paying for something that doesn't work; you are paying to delay the solution that would. The gap between where you are and where you need to be grows wider, the eventual remediation becomes more expensive, and your legal risk compounds.

## The Bottom Line

Overlays promise protection, compliance, and accessibility. But it's a perfomance, ineffective or redundant at best and harmful at worst. 

For decision makers evaluating accessibility solutions, the question isn't whether overlays are perfect, it's whether they deliver the intended result of a legally compliant, accessible website that serves all users.

The answer is no. And that's not just an accessibility problem—it's a business problem.

Avoid paying for this particular kind of theater. It's not entertaining. 

### Addendum: What About AI?
Many overlay vendors tout their artificial intelligence or machine learning. Their pitch is compelling and suggests that AI can detect and fix accessibility issues automatically, making overlays smarter and more effective than ever before.

This does not change the fundamental problem.

Artificial intelligence, or Large Language Models, do have the potential to improve digital accessibility, but that potential is not realized by layering them on top of inaccessible code. The same limitations apply. AI may struggle to restructure poor HTML or fully grasp context, and cannot replace human judgment regarding what makes an experience genuinely accessible.

Where AI may actually help is in two different applications:

**As a development tool:** AI can assist developers during the building process by suggesting semantic markup and identifying potential issues before they ship. This approach allows AI to support the creation of accessible code from the start rather than attempting to fix broken code after the fact.

**As a user-facing assistant:** AI could power intelligent interfaces that adapt to individual needs in real time. Rather than relying on generic accessibility modes, personalized microinteractions could learn from and respond to how someone actually navigates a site. While this is still largely theoretical, it represents a fundamentally different approach than the static nature of an overlay.

The key difference is that in both cases, AI is a tool that enhances human work instead of acting as a replacement for doing the work correctly. 



## Accessibility Theater: The Cautionary Tale of Overlays
And speaking of something that's not entertaining, here's a revised version of the play I wrote prior. 

Welcome to Masterpiece Digital Theater. Tonight we present a compelling drama that explores the world of digital accessibility - or rather, its charlatan counterfeits.

"Accessibility Theater: The Cautionary Tale of Overlays" takes us into the modern boardrooms where the drama of digital inclusion, or exclusion, plays out daily. Our story examines how not-so-well intentioned solutions can become mere performance, a facade of accessibility that ultimately fails those it claims to serve.


**Characters:**

*   **EXECUTIVE** — wants accessibility, mostly wants it cheap
    
*   **OVERLAY** — flashy, overconfident, allergic to real work
    
*   **CHORUS OF USERS** — people with disabilities
    
*   **ENGINEER** — the reality check
    

### **Scene: A Boardroom, Mid‑Panic**

EXECUTIVE stares at a stack of accessibility requirements.

**EXECUTIVE:** 
> There’s no way we can fix all this.

A glittery cloud appears. The OVERLAY leaps out wearing a sparkly jacket.

**OVERLAY:** 
> Sure you can! One line of code — instant accessibility!

**EXECUTIVE:** 
> One line? Sign me up.

The OVERLAY tap‑dances across an imaginary website, tossing sparkling cards labeled “AI,” “Automation,” and “Compliance.”

**OVERLAY:** 
> Behold! Fonts fixed! Contrast corrected! Screen readers tamed!

CHORUS OF USERS enters, unimpressed.

**CHORUS OF USERS:** 
> My screen reader can’t get past your pop‑up.
> 
> The layout’s still unreadable.
> 
> Keyboard navigation is a disaster.

The OVERLAY tap‑dances harder. A bead of sweat appears on it's brow. Nothing improves.

ENGINEER steps forward, holding the overlay’s “one line of code” card with a confused look on their face.

**ENGINEER:** 
> This isn’t accessibility. You can’t override bad code with… jazz hands.

The OVERLAY attempts a final jazz hand. It fizzles out.

EXECUTIVE sighs.

**EXECUTIVE:** 
> Alright. Point made.

Lights fade. Curtain.

\[End]


