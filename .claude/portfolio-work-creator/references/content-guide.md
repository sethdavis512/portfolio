# Content Writing Guide for Work Items

Follow these patterns when writing content for portfolio work items.

## Core Content Principles

From [CONTENT_STYLE_GUIDE.md](../../../CONTENT_STYLE_GUIDE.md):

- **Practical**: Focus on real-world applications and tangible benefits
- **Efficient**: Clear, concise communication without fluff
- **Solution-oriented**: Emphasize problem-solving and productivity
- **Direct**: Get to the point quickly

## Three-Part Structure (TechShowcase)

Work items using `TechShowcase` require three content blocks:

### 1. Project Overview (`about` prop)

**Purpose**: Explain what the project is, what it does, and how it works.

**What to include**:
- What the application/project is
- Primary features and capabilities
- Technical architecture and key technologies
- The problem it solves

**Length**: 3-5 sentences (one paragraph)

**Example** (Video Machine):
```
Video Machine is a comprehensive video rendering platform that transforms content 
into engaging TikTok-style slide presentations. Built with React Router 7 and 
Remotion, this application enables users to programmatically generate videos 
with a credit-based system. The platform integrates Polar for payment processing 
and authentication, Trigger.dev for reliable background video rendering, and 
Railway S3 for efficient video storage and delivery. The application demonstrates 
the power of combining modern web technologies to create a production-ready SaaS 
solution that handles complex video generation workflows at scale.
```

**Pattern**: [Platform type] + [What it does] + [Key tech] + [How it works] + [Scale/impact]

### 2. Knowledge Gained (`learned` prop)

**Purpose**: Demonstrate technical growth and learning from building the project.

**What to include**:
- Technical insights and discoveries
- New skills or technologies mastered
- Architectural lessons learned
- Challenges overcome and solutions found
- Deep dives into specific technical aspects

**Length**: 4-6 sentences (one paragraph)

**Example** (Video Machine):
```
This project deepened my understanding of distributed systems and asynchronous 
job processing. Working with Remotion revealed the intricacies of server-side 
video rendering and the challenges of managing long-running processes in a web 
application. The integration of Trigger.dev taught me valuable lessons about 
task orchestration, retry strategies, and building resilient background job 
systems. I explored payment integration patterns with Polar, implementing 
credit-based systems with webhooks for real-time balance updates. The Railway 
S3 integration provided insights into efficient file storage strategies and 
implementing presigned URLs for secure content delivery.
```

**Pattern**: [Context] + [Specific technical learnings] + [Integration insights] + [Systems understanding]

### 3. Portfolio Value (`value` prop)

**Purpose**: Explain why this project matters for your portfolio and what it demonstrates.

**What to include**:
- What capabilities this showcases
- Technical proficiency demonstrated
- Breadth of skills shown
- How it positions you professionally
- What it communicates to employers/clients

**Length**: 4-5 sentences (one paragraph)

**Example** (Video Machine):
```
Video Machine showcases my ability to architect and build complete SaaS 
applications from end to end. It demonstrates technical proficiency across 
multiple domains: video rendering technology, payment systems integration, 
distributed task processing, cloud storage, and database management. The 
project highlights my understanding of production-ready infrastructure 
patterns, including authentication flows, webhook handling, and error 
recovery mechanisms. As a portfolio piece, it effectively communicates my 
capability to build complex, revenue-generating applications that solve 
real problems while maintaining clean architecture and excellent user 
experience.
```

**Pattern**: [What it showcases] + [Domains covered] + [Production readiness] + [Professional capability]

## Custom Layout Content

For custom layouts, follow the same three sections but use headings:

### Section Headings
- "Project Overview"
- "Knowledge Gained"  
- "The Impact"

Same content principles apply, just formatted with Heading components.

## Meta Description

Write concise, keyword-rich meta descriptions:

**Format**: [What it is] + [Key feature/tech] + [Benefit/outcome]

**Length**: 150-160 characters maximum

**Examples**:
- "A video rendering platform that creates TikTok-style slide videos using Remotion. Features credit-based payments, background processing with Trigger.dev, and Railway S3 storage."
- "Production-ready SaaS boilerplate built with React Router 7, TypeScript, BetterAuth, Polar.sh, and PostgreSQL"

## Voice and Tone Checklist

Before finalizing content, ensure:

- [ ] Uses active voice
- [ ] Focuses on practical benefits
- [ ] Avoids jargon or explains technical terms
- [ ] Demonstrates expertise without boasting
- [ ] Answers "why this matters" clearly
- [ ] Uses concrete examples over vague claims
- [ ] Paragraph length: 3-6 sentences max
- [ ] States facts and outcomes, not marketing fluff

## Common Patterns

### For SaaS/Products
- Lead with problem solved
- Highlight technical architecture
- Emphasize production-readiness
- Focus on user value

### For Tools/Libraries
- Start with developer pain point
- Show technical approach
- Highlight reusability
- Emphasize efficiency gains

### For Client Work
- Focus on business objectives met
- Highlight stakeholder collaboration
- Show technical execution
- Demonstrate delivery quality

### For Experiments/Demos
- Lead with learning objective
- Highlight novel techniques
- Show technical curiosity
- Connect to broader skills

## Keyword Integration

Naturally incorporate relevant keywords:
- Primary tech stack (React Router 7, TypeScript, etc.)
- Domain expertise (SaaS, video rendering, authentication, etc.)
- Professional capabilities (full-stack, system architecture, etc.)

Never force keywords—they should flow naturally in technical descriptions.
