# Spec Kit Talk — Speaker Notes

**Deck:** `/slides/spec-kit` (21 slides, `fade` transition throughout)
**Target length:** ~20 minutes (talk-only, before Q&A)
**Audience:** developers who have already tried AI coding tools and felt the pain

The arc:
1. Set the stakes (slides 1–2)
2. Land two war stories every dev has lived (slides 3–6)
3. Define the tool now that the audience cares (slides 7–8)
4. Preview the workflow and get it on disk (slides 9–10)
5. Walk every command end-to-end (slides 11–16)
6. Three audience cuts: solo, agency, enterprise (slides 17–19)
7. Caveats + close (slides 20–21)

The first six slides do the heaviest lifting. If the war stories don't land, the rest of the deck is theory. The command walkthrough (slides 11–16) is the meat. Slow down there.

---

## 1. `intro` — "Spec Kit." (30s)

**Screen:** Centered title, subtitle "A better way to build with AI."

**Talking points:**
- Most of you have already tried Claude Code, Cursor, Copilot, something.
- You've also felt the moment where the agent does too much, or the wrong thing, or the right thing for a different codebase.
- Tonight is about the discipline that makes AI coding tools worth keeping.

**Cue to advance:** "Let me show you what I mean."

---

## 2. `problem` — "AI made coding faster. The next leap is coherence." (60s)

**Screen:** Three cards — Drift, Rework, Amnesia.

**Talking points:**
- Drift: the second prompt forgets the first prompt's decisions.
- Rework: what shipped rarely matches what you asked for.
- Amnesia: switch agents and you lose context. Switch repos and you lose conventions.
- The footer line is the thesis: "The bigger unit of work is the specification."

**Cue to advance:** "Let me make this concrete."

---

## 3. `for-instance` — "You asked for pagination." (90s — let the slide breathe)

**Screen:** Bash block with the user's prompt and a `git diff --stat` of what shipped.

**Talking points:**
- Pause. Let the room read the diff.
- Read the prompt out loud: "add pagination to the users list."
- Then walk the diff: six files, one new top-level dependency, `useMemo` removed, tests "fixed" to pass.
- Punchline: "A week later, nobody remembers why."
- This is the moment of recognition. Watch for the laughs.

**Cue to advance:** "So here's the move."

---

## 4. `for-instance-fix` — "A spec is a boundary." (75s)

**Screen:** Two markdown blocks — `.specify/memory/constitution.md` (three rules) and `specs/users-pagination/spec.md` (the prompt with constraints).

**Talking points:**
- Read the constitution rules first. These are the guardrails the agent never crosses.
- Then the spec: "preserve the existing component shape. Preserve the existing tests."
- Now the agent has a line it can't cross.
- The diff stays the size you expected.

**Cue to advance:** "Here's the same problem in a different shape."

---

## 5. `for-instance-form` — "You asked for a contact form." (90s)

**Screen:** Actual Formik + Yup + `validateOnChange` code the agent might generate.

**Talking points:**
- Read the prompt out loud: "add a contact form with validation."
- Walk the code: Formik, Yup, `validateOnChange`.
- Punchline: your codebase already uses React Hook Form, Zod, and validates on blur. The agent doesn't know that.
- This is a different kind of pain. Pagination was about quantity. Form handling is about quality. The agent picked the wrong tool from the wrong shelf.

**Cue to advance:** "Same answer."

---

## 6. `for-instance-form-fix` — "One constitution. Every feature inherits it." (60s)

**Screen:** Constitution rules for forms + a tight `/speckit.specify` for the contact form.

**Talking points:**
- Three lines in a constitution. Forms use React Hook Form + Zod. Validation fires on blur. Errors route through `toast()`.
- The agent stops picking libraries you didn't pick.
- Notice the parallel: same pattern as the pagination fix. The shape works for any feature.

**Cue to advance:** "So what is this thing?"

---

## 7. `what` — "Spec Kit turns specifications into the source code of your software." (30s)

**Screen:** Centered headline, subtitle "An open-source toolkit from GitHub..."

**Talking points:**
- Short version: it's a CLI called `specify`. Open source. From GitHub.
- You write the spec. The agent writes the code.
- The room is now primed to hear it.

**Cue to advance:** "And here's the philosophical move."

---

## 8. `flip` — "Spec-Driven Development flips the script." (45s)

**Screen:** Two-column before/after.

**Talking points:**
- Before: code is the artifact, specs are scaffolding you throw away.
- After: the spec is the artifact. The code is what falls out of it.
- This is what "Spec-Driven Development" actually means. It's not a tagline — it's a reversal of where the source of truth lives.

**Cue to advance:** "There are six commands."

---

## 9. `workflow` — "Six commands. One disciplined loop." (75s)

**Screen:** 3x2 grid of commands with one-line jobs.

**Talking points:**
- Walk the grid left-to-right, top-to-bottom.
- `constitution` writes the rules. Once per project.
- `specify` is the what. `clarify` is the agent asking you what you forgot.
- `plan` is the how. `tasks` is the ordered list. `implement` is the code.
- Each command produces a markdown file that feeds the next. The agent never works from a single prompt.
- "We're going to walk through every one of these."

**Cue to advance:** "First, get it on your machine."

---

## 10. `install` — "One install. Thirty-plus agents." (45s)

**Screen:** Bash with `uv tool install`, `specify init`, `specify integration list`.

**Talking points:**
- Install the CLI once with `uv`.
- Bootstrap a project, choose your agent at init time.
- Spec Kit supports 30+ agents. Claude, Copilot, Gemini, Cursor, Codex, and more.
- The spec is the same whether your agent is Claude today or Gemini tomorrow.

**Cue to advance:** "Command one."

---

## 11. `cmd-constitution` — "Write the rules once." (60s)

**Screen:** Sample `.specify/memory/constitution.md` with engineering, style, and safety sections.

**Talking points:**
- This is the file that powered the war stories at the start.
- Walk the categories: engineering principles, style rules, safety rails.
- Notice: "no new top-level deps without an ADR." That's the rule that would have stopped the TanStack Query surprise from slide 3.
- One file. Inherited by every feature. Read by every command that follows.

**Cue to advance:** "Now you describe the thing."

---

## 12. `cmd-specify` — "Describe the what. Skip the how." (75s)

**Screen:** Verbatim photo-album spec from the README.

**Talking points:**
- This is straight from the Spec Kit README. Real prompt.
- Read it out loud: "build an application that can help me organize my photos..."
- Now notice what's missing. No framework. No library. No database. No architecture.
- The point is the *product*, not the *build*. The build comes next.

**Cue to advance:** "Before the agent guesses, it asks."

---

## 13. `cmd-clarify` — "The agent asks what you forgot." (60s)

**Screen:** Interactive prompt-style block — albums sharable? storage policy? viewport? touch DnD?

**Talking points:**
- The clarify step is what makes this feel different from chat.
- The agent reads your spec and asks structured questions before it writes a plan.
- Every answer lands in the spec file. It's not chat history. It's a document.
- Better to answer once than to guess twice.

**Cue to advance:** "Now the stack."

---

## 14. `cmd-plan` — "Now name the stack." (45s)

**Screen:** Verbatim plan prompt — Vite, vanilla JS, SQLite, local-only.

**Talking points:**
- Same project, second command. Now you tell it: Vite, vanilla JS, SQLite, local-only.
- The plan becomes a markdown file. The next command reads it.
- Notice the discipline: each command produces a file. There's no chat scroll to lose.

**Cue to advance:** "Break it down."

---

## 15. `cmd-tasks` — "Break the plan into reviewable steps." (60s)

**Screen:** `tasks.md` checklist — 8 tasks from scaffolding to smoke test.

**Talking points:**
- The tasks command turns the plan into ordered, scoped steps.
- Each task fits in your head. The whole plan fits in a PR description.
- If you're a team, this is the moment you would point at `/speckit.taskstoissues` to push the list into GitHub Issues.
- The PM gets scope. The dev gets acceptance criteria. The agent gets the next step.

**Cue to advance:** "Now the agent ships."

---

## 16. `cmd-implement` — "The agent ships the code." (45s)

**Screen:** Same task list with `[x]` checkmarks and "8 tasks complete. 0 deviations from spec."

**Talking points:**
- This is where it gets boring on purpose.
- The agent walks the task list. Each task gets implemented and checked off.
- The diff is the size the spec promised. No bonus refactors. No surprise dependencies.
- You review. You don't type.

**Cue to advance:** "Three audiences. Three ways to use this."

---

## 17. `solo` — "One founder. Six side projects." (45s)

**Screen:** Three cards — Carry conventions, Ship with discipline, Leverage.

**Talking points:**
- If you're solo, your superpower is that all the context is in your head.
- The constitution lets you externalize it once and reuse it across every side project.
- A 10-minute spec saves a Saturday of rework.
- This is the senior engineer you can't afford to hire.

**Cue to advance:** "Scale up one level."

---

## 18. `agency` — "Ten to fifty engineers. A new client every month." (60s)

**Screen:** Three cards — Per-client constitutions, Tickets automatically, Estimate with confidence.

**Talking points:**
- Each client gets a constitution. Their brand, their stack, their compliance — baked in.
- `/speckit.tasks` becomes `/speckit.taskstoissues` and lands in GitHub Issues.
- `/speckit.analyze` cross-checks before the SOW goes out. Fewer surprises in week three.
- The next dev who picks up the client doesn't need a brain-dump.

**Cue to advance:** "Scale up again."

---

## 19. `enterprise` — "Thousands of engineers. Compliance. Design systems. Multi-cloud." (60s)

**Screen:** Three cards — Org-wide constitution, Audit-ready quality, Agent-independent.

**Talking points:**
- Security, privacy, approved cloud providers, design tokens — written once at the org level.
- Every team inherits the guardrails.
- `/speckit.checklist` generates audit-ready quality gates. The spec doubles as the compliance artifact.
- And the methodology survives the agent shuffle. Procurement changes the vendor. The spec doesn't move.

**Cue to advance:** "Two more slides."

---

## 20. `when-not` — "Skip Spec Kit when…" (60s)

**Screen:** Three cards — one-offs, spikes, throwaways.

**Talking points:**
- I'm not selling you a religion. This is a tool.
- Skip it when the script is shorter than the spec would be.
- Skip it when you're learning by poking and the shape isn't knowable yet.
- Skip it for the demo that dies on Monday.
- A method is a tool. Use it when the problem is bigger than your memory.

**Cue to advance:** "Last slide."

---

## 21. `end` — "Specify it." (30s)

**Screen:** Big "Specify it." + GitHub link + sethdavis.tech.

**Talking points:**
- One ask: pick a feature you're going to ship this week. Write the spec before you write the prompt.
- See what the agent does when it has a line it can't cross.
- Link is on the slide. Questions are welcome.

---

## If asked

**"Doesn't this add a ton of overhead?"**
The first spec takes 15 minutes. The first rework you avoid pays for it. After two features, the constitution is reusable and the per-feature spec is the same shape as a good GitHub issue.

**"Why not just write better prompts?"**
Better prompts are still prompts. They live in chat history, they don't compose, they can't be reviewed in a PR. A spec is a file. The next person (human or agent) can read it.

**"What if the agent ignores the constitution?"**
It rarely does, because Spec Kit feeds the constitution into every step as structured context. When it slips, you catch it in `/speckit.analyze` before the implementation phase, or in code review like any other regression.

**"Does this work with our stack?"**
Spec Kit is language- and framework-agnostic. The constitution is plain markdown. If your agent supports tool use, Spec Kit supports your stack.

**"Is this just for greenfield projects?"**
No. The most valuable use is on existing codebases, because the constitution captures the conventions that the agent would otherwise violate. Start with one feature, not the whole codebase.

**"What's `/speckit.analyze` actually doing?"**
It reads spec.md, plan.md, and tasks.md and looks for contradictions or coverage gaps — a task that doesn't map to anything in the spec, a constitution rule the plan violates, an acceptance criterion with no task behind it. Catches the misalignment before you've built on top of it.
