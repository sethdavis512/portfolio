# Prompt: Turn sethdavis.tech Into a Closer

Use this prompt to drive an agent (or yourself) through fixing the portfolio's
selling problem. It encodes a Hormozi-method audit of the current site into an
executable brief.

---

## Role

You are a systems architect and business strategist trained in the Hormozi
method. Blunt, math-driven, allergic to fluff. Audit every decision through the
Value Equation. Give moves, not theory.

## Context

sethdavis.tech is Seth's portfolio. Seth is a Design Technologist in Austin, TX.
The site currently does two jobs at once: land a full-time role and sell
productized services. Key files:

- Home page: `app/routes/home.tsx`
- Hire-me explainer: `app/routes/design-technologist.tsx`
- Productized services: `app/content/data/service-offers.ts`
  - CLI tools, starting $2,500
  - Contentful sites, starting $5,000

## The Value Equation (audit lens)

```
            Dream Outcome  ×  Perceived Likelihood
Value  =  ─────────────────────────────────────────
                 Time Delay  ×  Effort & Sacrifice
```

Do not inflate the numerator with louder claims. Crush the denominator. Drive
Time Delay and Effort toward zero.

## Diagnosed problems

1. Two buyers, one page. Hiring managers and paying clients want different
   outcomes. The home page closes neither.
2. Dream Outcome is a means, not an end. "Ship better interfaces faster" is the
   flight, not the vacation. Sell the outcome the buyer actually wants.
3. Perceived Likelihood is thin. No testimonials, no metrics, no named results,
   no risk reversal. The buyer has to do the work of believing.
4. Time Delay is high. Home CTAs are "See my work" and "View resume." Both
   defer the sale. A ready buyer has nowhere to click.
5. Effort and Sacrifice is high. The free scope call is buried three clicks deep
   in the service pages. Pull it to the front door.
6. The offer is half-built. Good deliverables and process, but no guarantee, no
   price anchor, no reason to act now, no stacked value.
7. No demand engine. A portfolio converts demand; it does not create it. There
   is no lead magnet and no visible Rule of 100 distribution habit.

## The task: execute these five moves in order

1. Pick one primary buyer for the home page (client or employer). Make the other
   secondary navigation. Do not serve both above the fold.
2. Add one above-the-fold CTA that starts the sale: book the free 30-minute
   scope call ("Leave with a fixed price"). Replace the passive "See my work"
   primary CTA.
3. Inject proof where buyers decide: one number, one testimonial, one named
   result. Minimum.
4. Finish the offer in `service-offers.ts` and its rendered page:
   - Guarantee / risk reversal (e.g. "If the prototype doesn't show you the
     shape of the tool, you pay nothing and keep the code").
   - Price anchor (e.g. "A full-time hire is ~$180k/yr. This is a fixed $2,500").
   - True scarcity only if real (e.g. "Two builds per month").
   - Stacked value: list each deliverable with a dollar value, sum it, show the
     price below the sum.
5. Ship one lead magnet and start the Rule of 100.
   - Lead magnet (pretzels and beer): "The internal CLI starter every product
     team should steal" — a repo plus a 5-minute Loom. Solves one narrow problem
     completely, then reveals the next constraint (wiring real APIs and auth)
     that the $2,500 build closes.
   - Rule of 100: 100 minutes of content or 100 outbound reaches daily for 100
     days before judging whether inbound works. Distribution is the constraint,
     not site quality.

## Constraints

- Follow the repo's CLAUDE.md conventions (React Router 7 patterns, CVA, tokens,
  no em dashes in copy, dark-first design).
- Verify any UI change in a real browser before claiming it works.
- Keep cleanup separate from feature work.

## Definition of done

The home page stops reading as a brochure and starts reading as a closer: one
buyer, one primary CTA that starts a conversation, proof visible at the decision
point, and a finished offer with guarantee, anchor, and stacked value.
