(() => {
const categories = [
  {key: 'all', label: 'All 71', cls: 'c0'},
  {key: 'overview', label: 'Overview', cls: 'c1'},
  {key: 'phase1', label: 'Initiate', cls: 'c2'},
  {key: 'phase2', label: 'Plan & Estimate', cls: 'c3'},
  {key: 'phase3', label: 'Implement', cls: 'c4'},
  {key: 'phase4', label: 'Review & Retrospect', cls: 'c5'},
  {key: 'phase5', label: 'Release', cls: 'c6'},
  {key: 'concepts', label: 'Key Concepts', cls: 'c7'},
];

const lecture4Questions = [
  {
    cat: "overview",
    diff: "easy",
    q: "How many phases and total processes make up the Scrum Process Framework?",
    opts: [
      "Five phases and nineteen processes",
      "Four phases and sixteen processes",
      "Six phases and twenty-four processes",
      "Three phases and twelve processes"
    ],
    ans: 0,
    explain: "The Scrum Process Framework has five phases and nineteen processes in total — from Initiate through to Release.",
    deep: "Knowing the structure helps you locate any process quickly. Phase 1 = 6 processes, Phase 2 = 6, Phase 3 = 3, Phase 4 = 2, Phase 5 = 2. The phases get shorter as the project focuses."
  },
  {
    cat: "overview",
    diff: "easy",
    q: "Which phase of the Scrum Process Framework contains the most individual processes?",
    opts: [
      "Phase 4: Review & Retrospect, because quality checking takes the most steps",
      "Phase 1: Initiate and Phase 2: Plan & Estimate, which each contain six processes",
      "Phase 5: Release, because delivery and documentation are highly detailed",
      "Phase 3: Implement, because sprint work is the most complex stage"
    ],
    ans: 1,
    explain: "Phase 1 (Initiate) and Phase 2 (Plan & Estimate) each contain six processes — the most of any phase. This reflects how much groundwork is required before and during sprint planning.",
    deep: "The decreasing process count across phases (6, 6, 3, 2, 2) is intentional. Most of the structural work happens upfront. Later phases focus on execution, validation, and learning."
  },
  {
    cat: "overview",
    diff: "easy",
    q: "What is the correct order of the five Scrum phases?",
    opts: [
      "Plan & Estimate → Initiate → Review & Retrospect → Implement → Release",
      "Initiate → Implement → Plan & Estimate → Review & Retrospect → Release",
      "Initiate → Plan & Estimate → Implement → Review & Retrospect → Release",
      "Plan & Estimate → Initiate → Implement → Release → Review & Retrospect"
    ],
    ans: 2,
    explain: "The five phases in order: Initiate → Plan & Estimate → Implement → Review & Retrospect → Release.",
    deep: "This order reflects the natural project lifecycle: set the foundation, plan each sprint, build the sprint, review and improve, then deliver. Phases 2–4 repeat every sprint; Phases 1 and 5 occur once per project."
  },
  {
    cat: "overview",
    diff: "med",
    q: "Which phases of the Scrum Process Framework repeat every sprint, and which occur only once per project?",
    opts: [
      "Phases 1, 2, and 5 occur once; only Phases 3 and 4 repeat each sprint",
      "Only Phase 3 (Implement) repeats; all other phases occur once",
      "All five phases repeat every sprint to ensure continuous alignment",
      "Phase 1 and Phase 5 occur once; Phases 2, 3, and 4 repeat every sprint"
    ],
    ans: 3,
    explain: "Phase 1 (Initiate) sets up the project once at the beginning. Phase 5 (Release) closes the project once at the end. Phases 2, 3, and 4 repeat every sprint cycle.",
    deep: "This cycling structure is what makes Scrum iterative. Each sprint is a mini-project: plan it (Phase 2), build it (Phase 3), review and improve it (Phase 4). The outer phases provide the project-level bookends."
  },
  {
    cat: "overview",
    diff: "med",
    q: "In the Scrum Process Framework, what is the primary purpose of Process 19 (Retrospect Project)?",
    opts: [
      "To close the project and capture lessons learned for the benefit of future projects across the organisation",
      "To review the sprint deliverables with stakeholders and get final acceptance",
      "To calculate the final ROI and present it to the project sponsor",
      "To re-prioritise any remaining backlog items for a potential follow-up project"
    ],
    ans: 0,
    explain: "Process 19 (Retrospect Project) formally closes the project and documents lessons learned so the whole organisation can benefit from this project's experience.",
    deep: "This is distinct from the Sprint Retrospective (Process 17), which is a team-level continuous improvement event. The Project Retrospective is broader — it involves organisational stakeholders and feeds into the Scrum Guidance Body."
  },
  {
    cat: "overview",
    diff: "med",
    q: "What distinguishes the Implement phase (Phase 3) from the Plan & Estimate phase (Phase 2) in terms of its processes?",
    opts: [
      "Phase 3 involves estimation activities",
      "Phase 2 prepares the sprint backlog and commitments",
      "Phase 2 creates the project vision",
      "Phase 3 involves stakeholder reviews"
    ],
    ans: 1,
    explain: "Phase 2 prepares for the sprint — creating stories, estimating, committing, and building the Sprint Backlog. Phase 3 executes the sprint — building deliverables, running Daily Standups, and grooming the backlog.",
    deep: "Phase 2 answers \"What will we build and how much can we commit to?\" Phase 3 answers \"Are we building it, and are we staying on track?\" Each has a distinct purpose in the sprint lifecycle."
  },
  {
    cat: "overview",
    diff: "hard",
    q: "Why does the Scrum Process Framework separate \"Demonstrate and Validate Sprint\" (16) from \"Retrospect Sprint\" (17) into two distinct processes?",
    opts: [
      "Process 16 can be skipped by mature teams",
      "Process 16 is owned by the PO only",
      "Process 16 inspects product; Process 17 inspects process",
      "Process 16 happens halfway through the sprint"
    ],
    ans: 2,
    explain: "These are two different kinds of inspection. Process 16 looks outward — \"did we build the right thing?\" with stakeholders. Process 17 looks inward — \"did we work the right way?\" with the team.",
    deep: "Combining them would dilute both. Stakeholders should not be present during a Retrospective (it chills honest reflection). The team's process issues are not relevant to a product demonstration meeting."
  },
  {
    cat: "overview",
    diff: "hard",
    q: "A Scrum project has just completed Phase 1. What is the minimum set of artefacts that should exist before Phase 2 can begin?",
    opts: [
      "Prototype, test plan, deployment pipeline, and release notes",
      "DoD, personas, sprint calendar, and technical design",
      "Contract, project plan, approved budget, and vendor list",
      "Vision, Scrum roles, epics, backlog, and release plan"
    ],
    ans: 3,
    explain: "Phase 1 produces: a Project Vision, an identified Scrum team and Scrum Master, developed Epics, a Prioritised Product Backlog, and a Release Planning Schedule. These are prerequisites for Phase 2.",
    deep: "Without these outputs, Phase 2 has no foundation. Sprint Planning requires a prioritised backlog of stories to pull from. Release Planning requires a delivery schedule to plan against. Phase 1 creates both."
  },
  {
    cat: "phase1",
    diff: "easy",
    q: "What is the purpose of the Project Vision Statement created in Process 1?",
    opts: [
      "It provides inspiration and focus for the entire project and is used to identify the PO",
      "It documents the budget approval and resource allocation for the development team",
      "It defines the technical architecture and database design for the system to be built",
      "It specifies the exact features to be delivered in each sprint of the project"
    ],
    ans: 0,
    explain: "The Project Vision Statement provides inspiration and focus for the entire project. It is created by reviewing the Business Case, and the Product Owner is identified at this stage.",
    deep: "The Vision answers \"Why are we building this?\" rather than \"What exactly will we build?\" It aligns all decisions throughout the project back to a shared purpose without constraining the how."
  },
  {
    cat: "phase1",
    diff: "easy",
    q: "What is an Epic in the context of Process 4 (Develop Epics)?",
    opts: [
      "A group of related sprints that together deliver a major product milestone",
      "A large, unrefined story written early in the project that will later be broken into smaller user stories",
      "A completed user story that has been accepted by the PO after a sprint review",
      "A high-priority story that must be completed in the very first sprint of the project"
    ],
    ans: 1,
    explain: "Epics are large, unrefined stories written in the initial phases of the project. They are later decomposed into sprint-sized user stories during Sprint Planning.",
    deep: "Epics sit at the top of the hierarchy: Epic → User Stories → Tasks. Writing epics early gives the project a high-level shape without requiring detailed requirements before the team is ready to work on them."
  },
  {
    cat: "phase1",
    diff: "easy",
    q: "What does the Release Planning Schedule (Process 6) define?",
    opts: [
      "The schedule of Reviews and Retrospectives across the project timeline",
      "The story points committed to in each individual sprint of the project",
      "Which deliverables are released to customers, at what planned intervals, and on what dates",
      "The order in which user stories will be developed within each sprint"
    ],
    ans: 2,
    explain: "The Release Planning Schedule defines which deliverables are released to customers, along with planned intervals and dates for those releases.",
    deep: "Release planning is distinct from sprint planning. A release may group several sprints together. Not every sprint necessarily triggers a customer-facing release — it depends on when a meaningful, coherent feature set is ready."
  },
  {
    cat: "phase1",
    diff: "easy",
    q: "The 100-Point Method is a backlog prioritisation technique. How does it work?",
    opts: [
      "Stories are ranked from 1 to 100 based on the number of votes each receives from stakeholders",
      "The team scores each story from 1 to 100 based on technical complexity",
      "Each story is assigned a value between 1 and 100 based on the Product Owner's business value assessment",
      "Customers are given 100 points to distribute across all stories in any proportion they choose"
    ],
    ans: 3,
    explain: "In the 100-Point Method, customers are given exactly 100 points to distribute across all stories in any way they choose. Stories with the most points receive the highest priority.",
    deep: "The 100-Point Method captures the customer's own relative weighting of features without any intermediary interpretation. It is especially useful when the client has many competing priorities and needs to make explicit trade-offs."
  },
  {
    cat: "phase1",
    diff: "med",
    q: "Why should HR input be sought when selecting the Scrum Master and forming the Scrum Team (Processes 2 and 3)?",
    opts: [
      "HR helps assess skills, fit, training needs, and costs",
      "HR approves the budget used to assign project team members",
      "HR must approve every software hire before project work",
      "HR manages guidance and approves team selections"
    ],
    ans: 0,
    explain: "HR expertise helps assess knowledge gaps, evaluate candidate suitability, analyse resource costs, ensure budget approvals, and identify training needs — all critical to forming an effective Scrum team.",
    deep: "HR involvement is often overlooked in Scrum literature. In practice, selecting the right people with complementary skills, assessing gaps, and planning training before the project starts significantly reduces early-sprint friction."
  },
  {
    cat: "phase1",
    diff: "med",
    q: "What are the key personal qualities sought when forming a Scrum Team (Process 3)?",
    opts: [
      "Seniority, technical specialisation, individual productivity metrics, and years of experience",
      "Independence, self-motivation, customer focus, responsibility, and collaborative ability",
      "Availability for overtime, willingness to follow directions, and adherence to coding standards",
      "Certification in Scrum, familiarity with the specific technology stack, and prior team experience"
    ],
    ans: 1,
    explain: "Scrum team members should be independent, self-motivated, customer-focused, responsible, and collaborative — qualities that enable self-organization and effective sprint delivery.",
    deep: "These qualities matter more than technical skills alone. A technically brilliant developer who refuses to collaborate or share knowledge can be more harmful to a Scrum team than a slightly less skilled but highly collaborative one."
  },
  {
    cat: "phase1",
    diff: "med",
    q: "In the Paired Comparison prioritisation technique, how is the final ranking determined?",
    opts: [
      "Each member ranks stories, and averages set final order",
      "The PO pairs similar stories and ranks each pair",
      "Stories are compared head-to-head; most wins rank highest",
      "Stories are sorted alphabetically, then adjusted by vote"
    ],
    ans: 2,
    explain: "In Paired Comparison, every story is compared directly against every other story in head-to-head decisions. The story winning the most comparisons earns the highest priority.",
    deep: "Paired Comparison is thorough but expensive for large backlogs — with N stories, there are N×(N-1)/2 comparisons. It suits small, high-stakes backlogs where getting the relative ranking exactly right is critical."
  },
  {
    cat: "phase1",
    diff: "med",
    q: "Why is it important that the Release Planning Schedule acknowledges releases may not happen after every sprint?",
    opts: [
      "It means shippable software is only occasional",
      "It lets the PO delay releases without approval",
      "It lets the team lower quality when no release follows",
      "Useful releases may need several sprints of features"
    ],
    ans: 3,
    explain: "Meaningful releases often require several sprints to build a coherent feature set. A release schedule acknowledges this reality rather than forcing an artificial release after every sprint.",
    deep: "The Increment must always be potentially releasable, but that does not mean it must always be released. The decision of when to actually release belongs to the Product Owner and the release schedule."
  },
  {
    cat: "phase1",
    diff: "hard",
    q: "A Project Vision Statement has been written but it describes very specific features and technical requirements. What is the problem with this approach?",
    opts: [
      "Detailed features constrain creativity and age quickly",
      "Vision statements must stay non-technical and accessible",
      "Only the PO is allowed to write the Vision Statement",
      "Vision statements must be approved by guidance first"
    ],
    ans: 0,
    explain: "A vision statement should inspire and focus — not prescribe. Specifying features and technical details upfront constrains problem-solving, creates false precision, and becomes outdated as the project learns and evolves.",
    deep: "A good vision answers \"what business problem are we solving and for whom?\" A bad vision says \"build these specific features using this specific technology.\" The first leaves room for creative solutions; the second does not."
  },
  {
    cat: "phase1",
    diff: "hard",
    q: "After Process 5 (Create Prioritised Product Backlog), the Product Owner notices the backlog contains 200 stories. Why is this not necessarily a problem?",
    opts: [
      "A large backlog signals a well-funded project with sufficient scope to keep the team busy",
      "The Product Backlog is expected to be larger than what can fit in any single sprint",
      "A backlog of 200 stories will ensure the project never runs out of work and can continue indefinitely",
      "With 200 stories, the team can immediately fill all future sprints without needing further grooming"
    ],
    ans: 1,
    explain: "A Product Backlog is intentionally larger than one sprint. It represents the full product vision. The first sprint will pull only the top-priority items; the rest will be groomed, refined, and worked through over time.",
    deep: "In fact, a backlog that exactly equals one sprint's capacity is a red flag — it means the team has only planned one sprint ahead. A healthy backlog extends well beyond the immediate sprint."
  },
  {
    cat: "phase1",
    diff: "hard",
    q: "A team skips Process 2 (Identify Scrum Master and Stakeholders) and moves straight to forming the team. What is the most significant risk?",
    opts: [
      "No one can schedule or run the Standup correctly",
      "Guidance approval is required before the project begins",
      "Missing SM and stakeholders removes key project support",
      "Budget approval is blocked because HR was skipped"
    ],
    ans: 2,
    explain: "Without an identified Scrum Master, there is no one to facilitate ceremonies, remove impediments, or protect the team. Without identified stakeholders, there is no feedback loop — the team builds without knowing if it is building the right thing.",
    deep: "The Scrum Master is the process guardian. Without them, ceremonies degrade, blockers go unresolved, and the team loses its agile discipline. Stakeholders without a defined relationship have no structured way to provide input."
  },
  {
    cat: "phase1",
    diff: "hard",
    q: "What is the relationship between the Business Case and the Project Vision Statement in Process 1?",
    opts: [
      "The Business Case and Project Vision are the same document with different names for different audiences",
      "The Business Case is written after the Project Vision to provide financial justification for it",
      "The Business Case is an optional input that is only used for large enterprise projects",
      "The Project Vision Statement is created by reviewing the Business Case"
    ],
    ans: 3,
    explain: "The Project Vision Statement is created by reviewing the Business Case. The Business Case provides the financial and strategic justification; the Vision translates that into an inspiring, directional statement for the team.",
    deep: "Without the Business Case, the Vision lacks grounding in business reality. Without the Vision, the Business Case lacks a human direction that teams can rally behind. They complement each other — analysis feeds inspiration."
  },
  {
    cat: "phase2",
    diff: "easy",
    q: "Who is primarily responsible for writing user stories in Process 7 (Create User Stories)?",
    opts: [
      "The PO, who ensures requirements are clearly captured and understood by all stakeholders",
      "The development team, who best understand what can be realistically implemented",
      "The SM, who translates stakeholder requests into technical requirements",
      "External business analysts, who are hired specifically to write formal requirements documentation"
    ],
    ans: 0,
    explain: "User stories are primarily written by the Product Owner to ensure customer requirements are clearly depicted and fully understood by all stakeholders.",
    deep: "The PO owns the \"what\" — what value should be delivered. Developers own the \"how\" — how to implement it. User stories sit squarely in the PO's domain because they describe user value, not technical implementation."
  },
  {
    cat: "phase2",
    diff: "easy",
    q: "What is the smallest unit of user functionality that can be delivered in a single sprint?",
    opts: [
      "A Task that implements part of a feature",
      "A User Story that delivers one user outcome",
      "An Epic — the high-level feature that drives the sprint's work",
      "A Theme that groups related stories together"
    ],
    ans: 1,
    explain: "A User Story that delivers one user outcome is the smallest unit of user functionality deliverable in one sprint. It must deliver particular value to the user and be describable in simple language.",
    deep: "Tasks are smaller than stories but are not user-facing — they are internal implementation steps. A story is the minimum unit that delivers observable value to a user. Tasks deliver value only when combined into a complete story."
  },
  {
    cat: "phase2",
    diff: "easy",
    q: "In Process 9 (Commit User Stories), what is the basis for how many stories the team commits to?",
    opts: [
      "The Scrum Master's estimate of team capacity based on working hours available",
      "The number of stories the PO believes are achievable based on the project timeline",
      "The team's velocity — the number of story points they have proven they can complete in a sprint",
      "The total number of stories in the backlog divided by the number of remaining sprints"
    ],
    ans: 2,
    explain: "The Scrum Team commits to stories based on their velocity — the number of story points they have demonstrated they can complete in a sprint. Stories are always selected in priority order.",
    deep: "Velocity-based commitment is the mechanism that prevents over-commitment. The team can only promise what their track record shows they can deliver, not what they hope they can deliver under pressure."
  },
  {
    cat: "phase2",
    diff: "easy",
    q: "What output does Process 11 (Estimate Tasks) produce?",
    opts: [
      "A Sprint Burndown Chart showing predicted versus actual progress",
      "An updated Product Backlog with story points assigned to all remaining items",
      "A velocity forecast showing projected sprint capacity for the next five sprints",
      "An Effort Estimated Task List with task dependencies (predecessors) established"
    ],
    ans: 3,
    explain: "Process 11 produces an Effort Estimated Task List — each task has an estimated duration and effort, and task dependencies (predecessors) are identified.",
    deep: "Task dependencies matter for scheduling. If Task B cannot start until Task A is complete, the team must sequence their work accordingly. Identifying these dependencies upfront prevents mid-sprint blocking."
  },
  {
    cat: "phase2",
    diff: "med",
    q: "Why are tasks estimated in hours rather than story points during Process 11?",
    opts: [
      "Task estimates use hours once the approach is known",
      "Hours are required by the framework for every task",
      "Story points are too abstract for daily task planning",
      "Hours let the SM assign tasks by available time"
    ],
    ans: 0,
    explain: "When tasks are identified, the team knows exactly what they will build and how. This removes the uncertainty that makes relative sizing (story points) appropriate at the story level — hours now provide the right precision.",
    deep: "This is the key insight: story points are for when you don't yet know the details. Hours are for when you do. Planning Poker for stories, hours for tasks — two levels of planning precision for two different stages."
  },
  {
    cat: "phase2",
    diff: "med",
    q: "What is the Scrumboard and why is it used to represent the Sprint Backlog?",
    opts: [
      "A tool that automatically tracks story point totals",
      "A visual board that makes sprint task progress transparent",
      "A signed document confirming sprint commitment",
      "A wall display of the Product Backlog order"
    ],
    ans: 1,
    explain: "The Scrumboard is a visual representation of the Sprint Backlog where tasks move through columns as work progresses — making the sprint's status immediately visible to the whole team.",
    deep: "The Scrumboard embodies Empirical Process Control. Anyone can walk into the team room and instantly see what is in progress, what is blocked, and what is done — without needing a status meeting or a report."
  },
  {
    cat: "phase2",
    diff: "med",
    q: "In Process 9 (Commit User Stories), stories must always be selected in what order?",
    opts: [
      "In the order the development team prefers, based on technical dependencies and convenience",
      "In the order the SM recommends, based on team capacity and skill sets",
      "According to the priorities defined by the PO — highest priority stories first",
      "In a balanced order that includes stories from all MoSCoW categories each sprint"
    ],
    ans: 2,
    explain: "Stories are committed in the order defined by the Product Owner's priorities — highest priority first. The team never skips high-priority stories in favour of easier or preferred ones.",
    deep: "This rule is what gives the Product Backlog its power. The PO's prioritisation ensures the most valuable work is always done first. If the project is cancelled after Sprint 1, the team will have built the most important features."
  },
  {
    cat: "phase2",
    diff: "med",
    q: "Process 12 states that risks should be included as tasks in the Sprint Backlog. Why?",
    opts: [
      "To satisfy auditing requirements that all project risks must be documented before any sprint work begins",
      "Because the Scrum Guidance Body requires risk tasks to be present in every Sprint Backlog",
      "To inflate the Sprint Backlog with extra tasks that protect the team from over-committing to feature work",
      "To make risks visible and ensure risk mitigation activities are planned and resourced within the sprint,"
    ],
    ans: 3,
    explain: "Including risks as tasks makes them visible and ensures mitigation activities are planned, resourced, and executed within the sprint rather than being forgotten or deferred.",
    deep: "A risk left off the Sprint Backlog is a risk that receives no attention. Making it a task gives it an owner, an estimate, and a slot in the sprint — ensuring it gets addressed, not just acknowledged."
  },
  {
    cat: "phase2",
    diff: "hard",
    q: "A team completes Story Estimation (Process 8) and then immediately begins building without running Process 9 (Commit User Stories). What is the most likely consequence?",
    opts: [
      "The sprint may include too many or too few stories",
      "The team will build features in the wrong order",
      "The Sprint Backlog cannot be created",
      "The PO loses the ability to prioritise the backlog"
    ],
    ans: 0,
    explain: "Without a formal commitment step, the team has no explicitly agreed sprint scope. They might start too many stories (over-commitment) or too few (under-utilisation) — both damage sprint effectiveness.",
    deep: "The commitment step is where the team translates velocity into a specific, agreed set of stories. Without it, the sprint has no defined scope — making it impossible to measure success or failure at sprint end."
  },
  {
    cat: "phase2",
    diff: "hard",
    q: "Task dependencies are established during Process 11. What practical problem do unidentified dependencies cause during sprint execution?",
    opts: [
      "The Scrumboard cannot show task status correctly",
      "Hidden dependencies create idle time and bottlenecks",
      "Developers cannot assign Fibonacci values to tasks",
      "The PO cannot accept stories with task dependencies"
    ],
    ans: 1,
    explain: "Unidentified dependencies cause blocking — a developer waiting to start Task B is idle because they don't know Task A must finish first. This creates bottlenecks that erode sprint capacity and can derail delivery.",
    deep: "Dependency mapping during task estimation prevents mid-sprint surprises. \"I can't continue until X is done\" discovered on Day 8 of a 10-day sprint is very different from knowing it on Day 1 and scheduling accordingly."
  },
  {
    cat: "phase2",
    diff: "hard",
    q: "Why is it significant that user stories in Process 7 must be \"describable in simple language\"?",
    opts: [
      "The Scrum Guide limits story length for readability",
      "Simple language prevents tool formatting problems",
      "Plain stories keep choices open and stakeholders included",
      "Simple language saves the PO story-writing time"
    ],
    ans: 2,
    explain: "Simple language keeps stories focused on user value rather than technical prescription, and ensures all stakeholders — including non-technical ones — can read, understand, and validate the requirement.",
    deep: "A story written in technical jargon is already making implementation decisions. A story in plain language describes the need and leaves the how to the development team — which is exactly how responsibilities should be divided."
  },
  {
    cat: "phase2",
    diff: "hard",
    q: "The Sprint Backlog (Process 12) is created at the start of the sprint and is not changed during the sprint. How does this interact with Backlog Grooming (Process 15) which happens during implementation?",
    opts: [
      "They are the same process under different names",
      "They conflict and should not happen together",
      "Grooming replaces the sprint plan at the midpoint",
      "They affect different backlogs at different times"
    ],
    ans: 3,
    explain: "These target different artefacts. Grooming updates the Prioritised Product Backlog — preparing future sprint content. The Sprint Backlog for the current sprint remains fixed once the sprint starts.",
    deep: "This distinction prevents scope creep mid-sprint. New requirements discovered during Phase 3 go into the Product Backlog (via grooming) for a future sprint — never into the current Sprint Backlog without the team's consent."
  },
  {
    cat: "phase3",
    diff: "easy",
    q: "What are the three processes in Phase 3 (Implement)?",
    opts: [
      "Create Deliverables, Conduct Standup, and Groom Prioritized Product Backlog",
      "Identify Tasks, Create Sprint Backlog, and Conduct Standup",
      "Create User Stories, Estimate Tasks, and Conduct Standup",
      "Create Deliverables, Retrospect Sprint, and Ship Deliverables"
    ],
    ans: 0,
    explain: "Phase 3 contains three processes: Create Deliverables (13), Conduct Daily Standup (14), and Groom Prioritized Product Backlog (15).",
    deep: "These three processes run in parallel and continuously throughout the sprint. The team builds (13), syncs daily (14), and keeps the future backlog healthy (15) — simultaneously, not sequentially."
  },
  {
    cat: "phase3",
    diff: "easy",
    q: "What are the three questions each team member answers at the Daily Standup?",
    opts: [
      "What did I commit to this sprint? What have I completed so far? What is my remaining capacity?",
      "What have I done since the last meeting? What do I plan to do before the next? What impediments am I facing?",
      "What are my story points today? What is blocking me? What does the PO need?",
      "What stories am I working on? What is my estimated completion time? Who needs my help today?"
    ],
    ans: 1,
    explain: "The three Daily Standup questions are: What have I done since the last meeting? What do I plan to do before the next meeting? What impediments or obstacles am I currently facing?",
    deep: "These three questions deliberately cover past, present, and blockers — giving the team a complete daily snapshot of sprint progress without becoming a lengthy status meeting. Everything else is handled after the 15 minutes."
  },
  {
    cat: "phase3",
    diff: "easy",
    q: "What is Refactoring as a tool used during Process 13 (Create Deliverables)?",
    opts: [
      "Replacing one technology framework with another midway through the sprint",
      "Removing low-priority stories from the Sprint Backlog to reduce team workload",
      "Improving the internal structure of existing code to make it simpler, more concise, and more flexible",
      "Rewriting features from scratch when the original implementation is found to be incorrect"
    ],
    ans: 2,
    explain: "Refactoring means improving the internal structure of existing code — making it simpler, more concise, and more flexible — without changing what the code does externally.",
    deep: "Refactoring is the primary tool for paying down technical debt during implementation. Done continuously, it prevents the codebase from becoming increasingly difficult to extend and maintain."
  },
  {
    cat: "phase3",
    diff: "easy",
    q: "What is the purpose of the Impediment Log during Phase 3?",
    opts: [
      "It records quality defects found during testing so they can be added to the Product Backlog",
      "It documents all change requests received during the sprint for review at the Review",
      "It records the story points completed each day to track progress against the burndown chart",
      "It logs blockers and hurdles the team encounters so they can be tracked, owned, and resolved by the SM"
    ],
    ans: 3,
    explain: "The Impediment Log records all blockers the team encounters. The Scrum Master takes ownership of resolving them. Unresolved impediments are a direct drag on velocity.",
    deep: "Making impediments visible forces them to be addressed. Teams without an Impediment Log often work around blockers silently — never resolving the root cause, just absorbing the cost as reduced velocity."
  },
  {
    cat: "phase3",
    diff: "med",
    q: "What is the \"War Room\" concept associated with the Daily Standup (Process 14)?",
    opts: [
      "A shared workspace with visible collaboration tools",
      "A room used only for team conflict resolution",
      "A virtual room for replacing physical co-location",
      "A secure room reserved for Scrum ceremonies"
    ],
    ans: 0,
    explain: "The War Room is a shared, co-located workspace where all team members work together with access to physical collaboration tools — index cards, sticky notes, whiteboards — to support workflow and problem solving.",
    deep: "The War Room embodies the Collaboration principle. Physical proximity accelerates communication — a question that would take an hour via email is resolved in 30 seconds when colleagues are side by side."
  },
  {
    cat: "phase3",
    diff: "med",
    q: "What happens to a deliverable that fails its Acceptance Criteria during Process 15 (Groom Prioritized Product Backlog)?",
    opts: [
      "The PO may accept it at reduced quality",
      "It remains unfinished and is reprioritised later",
      "It is deleted and rewritten as a new story",
      "It is partially complete and earns half points"
    ],
    ans: 1,
    explain: "Rejected deliverables remain in the Prioritized Product Backlog, are not marked as done, and are re-prioritised for development in a future sprint.",
    deep: "This ensures nothing is lost. A story that fails AC is not abandoned — it goes back into the prioritisation process. The PO may raise or lower its priority based on what was learned from the failed attempt."
  },
  {
    cat: "phase3",
    diff: "med",
    q: "The Daily Standup outputs include an updated Sprint Burndown Chart. What does the burndown chart reveal at this point?",
    opts: [
      "The total number of defects found and resolved across all previous sprints",
      "The individual productivity of each developer compared to their sprint estimates",
      "Whether the team is on track to complete the sprint",
      "The team's cumulative story point output since the project began"
    ],
    ans: 2,
    explain: "The updated burndown chart shows whether the team is on track by comparing actual remaining work against the ideal burndown line — immediately revealing if the sprint is at risk.",
    deep: "The burndown chart is one of the most powerful forms of Empirical Process Control. Updated daily, it gives the team an early warning signal if they are falling behind — while there is still time to adapt."
  },
  {
    cat: "phase3",
    diff: "hard",
    q: "Design Patterns are listed as a tool used during Process 13 (Create Deliverables). Why do they improve productivity rather than slow the team down?",
    opts: [
      "Patterns lower story points and raise velocity",
      "Tools generate patterns and remove manual coding",
      "Guidance approves patterns and removes review",
      "Patterns provide shared proven solutions"
    ],
    ans: 3,
    explain: "Design patterns provide proven solutions to recurring problems and give the team a shared vocabulary. This reduces time spent on design discussions and avoids reinventing solutions that have already been refined.",
    deep: "Without shared patterns, every developer might solve the same class of problem differently. Patterns create consistency, reduce cognitive load, and allow the team to focus their creative energy on novel problems rather than solved ones."
  },
  {
    cat: "phase3",
    diff: "hard",
    q: "Backlog Grooming (Process 15) includes the Product Owner meeting separately with stakeholders, the Scrum Master, and the Scrum Team. Why are these separate meetings rather than one combined meeting?",
    opts: [
      "Each group gives different input to the PO",
      "Separate meetings are always more efficient",
      "Scheduling all groups together is impractical",
      "The Scrum Guide requires separate meetings"
    ],
    ans: 0,
    explain: "Different audiences contribute different perspectives. Stakeholders provide business context and changing priorities. The SM provides process insight. The team provides technical feasibility input. Combined, these shape an accurate and realistic backlog.",
    deep: "Mixing these audiences in one meeting risks dynamics where the loudest voice (usually a stakeholder) dominates. Separate meetings allow each group to speak freely, giving the PO richer, more balanced input for grooming decisions."
  },
  {
    cat: "phase3",
    diff: "hard",
    q: "A team's Daily Standup regularly runs 45 minutes because team members give detailed technical updates. What is wrong with this, and what should the Scrum Master do?",
    opts: [
      "Too many impediments are being reported",
      "It became a status meeting and broke time-boxing",
      "Long Standups are acceptable early in a sprint",
      "Nothing is wrong if the whole team attends"
    ],
    ans: 1,
    explain: "A 45-minute Standup violates time-boxing and has become a status meeting — defeating its purpose. The SM should enforce the 15-minute limit and ensure detailed discussions happen in separate follow-up meetings.",
    deep: "The Standup's value is in brevity. Three short answers from each person. Deep technical discussion after. When Standups run long, people start dreading them and the information quality degrades as exhaustion sets in."
  },
  {
    cat: "phase4",
    diff: "easy",
    q: "What is the primary purpose of the Sprint Review Meeting (Process 16)?",
    opts: [
      "For the PO to present the updated backlog priorities for the next sprint",
      "For the SM to present velocity metrics and sprint capacity data to senior management",
      "For the Scrum Team to demonstrate sprint deliverables to the PO and stakeholders and secure their acceptance",
      "For the team to discuss what went well and what to improve in the next sprint"
    ],
    ans: 2,
    explain: "The Sprint Review Meeting is where the Scrum Team demonstrates deliverables to the Product Owner and stakeholders to secure approval and acceptance of the work done.",
    deep: "The Sprint Review is \"show, don't tell.\" Real working software is demonstrated — not slides, not reports, not prototypes. Stakeholders see actual functionality and their feedback directly shapes the next sprint."
  },
  {
    cat: "phase4",
    diff: "easy",
    q: "What are the outputs of the Retrospect Sprint process (Process 17)?",
    opts: [
      "Release Notes, a Working Deliverables Agreement, and an updated impediment log",
      "A new Project Vision Statement and revised release schedule",
      "Updated Sprint Backlog, revised acceptance criteria, and a new velocity estimate",
      "Agreed Actionable Improvements and Updated Scrum Guidance Body Recommendations"
    ],
    ans: 3,
    explain: "Process 17 outputs Agreed Actionable Improvements — specific changes the team commits to making next sprint — and Updated Scrum Guidance Body Recommendations.",
    deep: "\"Agreed Actionable\" is the key phrase. Vague intentions like \"communicate better\" are not actionable. A good Retrospective output is specific: \"We will hold a 30-minute design session before estimating any story over 8 points.\""
  },
  {
    cat: "phase4",
    diff: "easy",
    q: "What is the key distinction between the Sprint Review and the Sprint Retrospective?",
    opts: [
      "Review inspects product; Retrospective inspects process",
      "The Review happens in the middle of the sprint",
      "The PO runs Review; the team runs Retrospective",
      "The Review is optional for mature teams"
    ],
    ans: 0,
    explain: "The Sprint Review inspects the product — \"Did we build the right thing?\" — with external stakeholders. The Retrospective inspects the process — \"Did we work the right way?\" — internally with the team.",
    deep: "This distinction matters for who attends and what is discussed. Stakeholders are not present in the Retrospective because their presence inhibits honest internal reflection. The two meetings serve completely different purposes."
  },
  {
    cat: "phase4",
    diff: "med",
    q: "A story is demonstrated at the Sprint Review but fails its Acceptance Criteria. What happens next?",
    opts: [
      "The story is assigned to a different developer who must complete it in the next sprint without re-estimation",
      "The story is returned to the Prioritized Product Backlog, unmarked as done, to be re-prioritised for a future sprint",
      "The sprint is extended until the story is fixed and can be re-demonstrated to the PO",
      "The story is accepted anyway and marked as done to keep sprint velocity numbers accurate"
    ],
    ans: 1,
    explain: "Stories that fail Acceptance Criteria are returned to the Prioritized Product Backlog, not marked as done. They are re-prioritised for a future sprint.",
    deep: "This rule enforces quality. A story is either done or it isn't — partial credit does not exist in Scrum. Returning it to the backlog ensures it gets a full, quality implementation rather than a rushed patch."
  },
  {
    cat: "phase4",
    diff: "med",
    q: "Why should the Retrospective produce \"Actionable\" improvements rather than general observations?",
    opts: [
      "The PO must approve all improvements before they can be implemented in the next sprint",
      "General observations are already captured in the impediment log and do not need to be repeated",
      "Actionable improvements have a specific owner and can be implemented in the next sprint",
      "The Scrum Guidance Body requires all improvements to be measurable before they can be approved"
    ],
    ans: 2,
    explain: "Actionable improvements have a specific owner, a clear action, and can be started in the next sprint. Vague observations like \"improve communication\" generate no measurable behaviour change.",
    deep: "The test of a good Retrospective action: can you describe exactly what someone will do differently on Monday? If not, it's an observation, not an improvement. Specificity is what converts reflection into results."
  },
  {
    cat: "phase4",
    diff: "med",
    q: "The Sprint Retrospective outputs include \"Updated Scrum Guidance Body Recommendations.\" What does this mean?",
    opts: [
      "Improvements go to external certification bodies",
      "Guidance receives minutes for compliance",
      "The SM updates a private improvement log",
      "Broad learnings may become guidance for all teams"
    ],
    ans: 3,
    explain: "Broadly applicable lessons from the Retrospective can be elevated to the Scrum Guidance Body's recommendations — making them available to all Scrum teams in the organisation, not just the immediate team.",
    deep: "This mechanism allows one team's hard-won lesson to benefit every team. A solution that worked brilliantly for one team's impediment can be adopted across the organisation rather than each team independently rediscovering it."
  },
  {
    cat: "phase4",
    diff: "hard",
    q: "A team consistently produces the same Retrospective improvements sprint after sprint without changing their behaviour. What is the root cause of this pattern?",
    opts: [
      "The improvements are not truly actionable",
      "Retrospective outputs require PO approval before they can be implemented",
      "The team is too large to implement changes consistently across all members",
      "The SM is not enforcing the agreed improvements during the sprint"
    ],
    ans: 0,
    explain: "Recurring improvements that never change behaviour are usually not actionable. Without a specific owner, a defined action, and a way to verify it happened, the improvement is just an aspiration.",
    deep: "A Scrum Master can address this by challenging each proposed improvement: \"Who specifically will do what, by when?\" If the team cannot answer that, the improvement needs to be made more concrete before leaving the Retrospective."
  },
  {
    cat: "phase4",
    diff: "hard",
    q: "Stakeholders attend the Sprint Review but not the Sprint Retrospective. Why is it important to maintain this separation?",
    opts: [
      "Including stakeholders in the Retrospective would require extending it beyond its time box",
      "Stakeholder presence during the Retrospective inhibits honest reflection",
      "The Scrum Guide specifies that Retrospectives are confidential events restricted to core Scrum team members",
      "Stakeholders do not have the technical expertise to contribute to process improvement discussions"
    ],
    ans: 1,
    explain: "Stakeholder presence during the Retrospective inhibits honest reflection. Team members may censor genuine process concerns — about their own performance, team dynamics, or management issues — when external parties are present.",
    deep: "Psychological safety is the prerequisite for an effective Retrospective. Team members need to feel safe saying \"we struggle with X\" or \"our process for Y is broken.\" That safety disappears when stakeholders or managers are in the room."
  },
  {
    cat: "phase4",
    diff: "hard",
    q: "A Sprint Review ends with stakeholders providing feedback that suggests several committed stories missed the mark on what the business actually needed. How should this feedback be handled?",
    opts: [
      "The sprint is extended so the stories can be revised before being accepted by the PO",
      "The PO formally rejects the sprint and the team must restart from Sprint Planning",
      "The feedback is used to update the Product Backlog",
      "The team must refund the story points for those stories from their velocity calculation"
    ],
    ans: 2,
    explain: "Stakeholder feedback from the Sprint Review feeds directly into the Product Backlog — triggering new stories, reprioritisation, or refinement of existing items for future sprints.",
    deep: "This is Empirical Process Control at the product level. The sprint is a feedback experiment. When stakeholders reveal that the team built the wrong thing, that is valuable data — not a failure. The backlog is updated and the next sprint corrects course."
  },
  {
    cat: "phase4",
    diff: "hard",
    q: "Why is it important that lessons from the Sprint Retrospective are \"documented\" rather than just discussed verbally?",
    opts: [
      "Documentation lets the PO verify commitments",
      "Guidance requires a paper trail for audits",
      "Verbal agreements are not legally enforceable",
      "Documentation lets teams track improvement follow-through"
    ],
    ans: 3,
    explain: "Documented lessons create a reference that can be checked in future Retrospectives — allowing the team to confirm improvements were implemented and assess whether they actually made a difference.",
    deep: "Without documentation, the same issues surface repeatedly in Retrospectives with the team having no memory of previously agreeing to address them. Written records turn good intentions into institutional memory."
  },
  {
    cat: "phase5",
    diff: "easy",
    q: "What document formally confirms the successful delivery of a sprint or release in Process 18?",
    opts: [
      "The Working Deliverables Agreement",
      "The Impediment Log, which confirms all blockers were resolved before shipping",
      "The Sprint Backlog, which lists all completed tasks for the delivered sprint",
      "The Release Notes, which describe what features were delivered to the customer"
    ],
    ans: 0,
    explain: "The Working Deliverables Agreement formally documents the successful completion and transition of accepted deliverables to relevant stakeholders.",
    deep: "The Working Deliverables Agreement closes the delivery loop. It confirms both parties — the team and the receiving stakeholders — agree that what was promised has been delivered and accepted."
  },
  {
    cat: "phase5",
    diff: "easy",
    q: "What is the difference between Release Content and Release Notes produced during Process 18?",
    opts: [
      "Content is by developers; notes are by PO",
      "Content helps support teams assist customers",
      "Content is only for internal teams",
      "Content lists all bugs fixed in the release"
    ],
    ans: 1,
    explain: "Release Content assists the customer support team with essential information about the deliverables. Release Notes are external, market-facing shipping criteria describing what the customer receives.",
    deep: "These serve different audiences. The support team needs to understand what was built and how it works to handle customer queries. End customers need to know what is new, what changed, and what they can now do."
  },
  {
    cat: "phase5",
    diff: "easy",
    q: "What is the scope of Process 19 (Retrospect Project) compared to Process 17 (Retrospect Sprint)?",
    opts: [
      "Process 19 is led by senior management",
      "Both cover the same topics at different cadence",
      "Process 19 covers the whole project",
      "Process 19 covers only technical lessons"
    ],
    ans: 2,
    explain: "Process 19 covers the whole project in scope — it reviews the entire project and involves organisational stakeholders alongside the Scrum Core Team. Process 17 is sprint-scoped and team-focused.",
    deep: "Project-level learnings often cannot be extracted from individual sprints. Patterns visible across the whole project — about client engagement, scope management, or team scaling — only emerge when viewed in full."
  },
  {
    cat: "phase5",
    diff: "med",
    q: "Why might a release not be scheduled after every sprint, even though the Increment is potentially releasable at the end of each sprint?",
    opts: [
      "Guidance must approve each release",
      "Every-sprint release can create operational overhead",
      "The PO must save releases until project end",
      "Valuable releases may need several sprints of features"
    ],
    ans: 3,
    explain: "A single sprint's output may not constitute a meaningful customer release. Releases may group several sprints together when a coherent, user-valuable feature set is ready — even though every sprint produces potentially shippable software.",
    deep: "The distinction: every sprint produces a potentially releasable Increment (a team quality standard), but not every Increment must be released (a business decision). The PO and release schedule govern when customers actually receive the product."
  },
  {
    cat: "phase5",
    diff: "med",
    q: "Process 19 outputs \"Agreed Actionable Improvements.\" How do these differ from the improvements produced by the Sprint Retrospective (Process 17)?",
    opts: [
      "Sprint improvements guide next sprint; project ones guide future work",
      "They are identical in scope and audience",
      "Project Retro improvements focus on code quality",
      "Project Retro improvements are mandatory"
    ],
    ans: 0,
    explain: "Sprint Retrospective improvements are applied to the very next sprint. Project Retrospective improvements are organisational-level learnings for future projects — potentially updating the Scrum Guidance Body's recommendations.",
    deep: "Both types of improvement use the same format — specific, actionable, owned — but operate at different levels. Sprint improvements are tactical; Project improvements are strategic. Both feed the organisation's collective learning."
  },
  {
    cat: "phase5",
    diff: "hard",
    q: "The Release Phase emphasises \"internalising\" lessons learned. What does \"internalising\" mean in this context?",
    opts: [
      "Keeping lessons private within the team",
      "Embedding lessons into future practice",
      "Requiring teams to memorise lessons",
      "Archiving lessons for legal compliance"
    ],
    ans: 1,
    explain: "Internalising means embedding lessons into the organisation's culture, processes, and documentation — ensuring they actively improve future practice rather than sitting in a forgotten document.",
    deep: "Many organisations document lessons learned but never act on them. True internalisation means updating the Scrum Guidance Body's recommendations, training materials, and onboarding processes so the lessons shape future teams' behaviour from day one."
  },
  {
    cat: "phase5",
    diff: "hard",
    q: "A project ends without a Project Retrospective (Process 19) being run. What is the most significant organisational cost of this omission?",
    opts: [
      "The project budget cannot be released",
      "Guidance cannot update recommendations",
      "The organisation loses reusable project learning",
      "The team cannot receive final evaluations"
    ],
    ans: 2,
    explain: "Without the Project Retrospective, project-level learnings are lost. Future projects must rediscover the same lessons independently — repeating preventable mistakes and missing the compounding benefit of institutional knowledge.",
    deep: "Organisational learning is the highest return on investment from the Retrospect Project process. A single project's hard-won lessons, when properly internalised, can save dozens of future projects from repeating the same costly mistakes."
  },
  {
    cat: "phase5",
    diff: "hard",
    q: "Why does the Release phase include both \"Ship Deliverables\" (18) and \"Retrospect Project\" (19) rather than ending at shipping?",
    opts: [
      "Process 19 confirms original requirements",
      "Without Process 19, archiving cannot happen",
      "Process 19 updates undelivered backlog work",
      "Shipping delivers value but not learning"
    ],
    ans: 3,
    explain: "Shipping closes the delivery loop — the customer has the product. The Project Retrospective closes the learning loop — the organisation captures what was learned. A project is not fully complete until both loops are closed.",
    deep: "Scrum's value is not just in what it delivers but in how it develops the organisation's capability to deliver better over time. Without the retrospective, each project is isolated. With it, each project makes the next one better."
  },
  {
    cat: "concepts",
    diff: "easy",
    q: "What is the Scrumboard, and which process uses it most directly?",
    opts: [
      "A visual task board with columns (To Do, In Progress, Testing, Done) used to track sprint execution in Process 13",
      "A formal document listing all team members and their assigned stories",
      "A reporting dashboard used in the Review to display velocity and burndown data",
      "A planning tool used during Sprint Planning to distribute story points across sprints"
    ],
    ans: 0,
    explain: "The Scrumboard is a visual task board where sprint tasks move through columns as work progresses. It is a key tool in Process 13 (Create Deliverables) for making sprint status visible.",
    deep: "The Scrumboard makes sprint progress transparent to everyone — not just the team. Any stakeholder can see what is in progress, what is blocked, and what is done without asking for a status report."
  },
  {
    cat: "concepts",
    diff: "easy",
    q: "What is the primary function of the Impediment Log?",
    opts: [
      "To log all technical debt items that the team agrees to address in future sprints",
      "To track all blockers the team encounters, enabling the SM to take ownership and resolve them",
      "To record all stories rejected at the Review so they can be re-prioritised",
      "To document all change requests received during the sprint for the Product Owner's review"
    ],
    ans: 1,
    explain: "The Impediment Log records all blockers encountered during the sprint. The Scrum Master takes ownership of each logged impediment and works to remove it.",
    deep: "Visibility is the first step to resolution. An impediment that isn't logged often isn't resolved — it just becomes accepted background friction. The Impediment Log forces acknowledgement and ownership."
  },
  {
    cat: "concepts",
    diff: "easy",
    q: "What is the Working Deliverables Agreement and when is it produced?",
    opts: [
      "The project charter from initiation",
      "The team's sprint commitment document produced at the start of each sprint",
      "The delivery handoff agreement from release",
      "The acceptance document from the Review"
    ],
    ans: 2,
    explain: "The Working Deliverables Agreement is produced at Process 18 (Ship Deliverables). It formally documents the successful completion and handover of accepted deliverables to relevant stakeholders.",
    deep: "This document closes the formal delivery loop. Both the delivering team and the receiving stakeholders acknowledge in writing that what was agreed has been delivered — creating a clear record of what was handed over."
  },
  {
    cat: "concepts",
    diff: "med",
    q: "How does the 100-Point Method ensure that prioritisation reflects the customer's actual preferences rather than the Product Owner's interpretation?",
    opts: [
      "Customers explain each point allocation",
      "It gives developers direct priority control",
      "The method averages customer preferences",
      "Customers allocate points directly to items"
    ],
    ans: 3,
    explain: "The 100-Point Method gives customers direct control over prioritisation. Their own point distribution reveals their actual priorities without being filtered or reinterpreted by the Product Owner.",
    deep: "The PO's role is usually to translate customer needs into backlog priorities. The 100-Point Method eliminates the translation step entirely — valuable when the PO's interpretation risk is high or when customer preferences need to be documented directly."
  },
  {
    cat: "concepts",
    diff: "med",
    q: "In what scenario is the Paired Comparison technique more appropriate than MoSCoW or the 100-Point Method?",
    opts: [
      "When there is a small number of high-stakes stories where getting the exact relative ranking matters more than speed",
      "When all stories have the same MoSCoW category and need further differentiation within the tier",
      "When the backlog is very large (100+ stories) and a fast relative ranking is needed across all items",
      "When the customer is unavailable and the team must prioritise without external input"
    ],
    ans: 0,
    explain: "Paired Comparison suits small backlogs where precise relative ranking is important. Its thoroughness (comparing every story against every other) becomes impractical with large backlogs.",
    deep: "With N stories, Paired Comparison requires N×(N-1)/2 comparisons. Five stories = 10 comparisons. Twenty stories = 190 comparisons. The technique scales poorly but produces the most carefully considered relative ordering for small sets."
  },
  {
    cat: "concepts",
    diff: "med",
    q: "What is the relationship between the Scrumboard and the Sprint Burndown Chart?",
    opts: [
      "The Burndown Chart is produced first in Sprint Planning",
      "The Scrumboard tracks individual task status",
      "They are the same artefact displayed in different formats",
      "The Scrumboard is updated once per week"
    ],
    ans: 1,
    explain: "The Scrumboard shows the status of individual tasks (To Do, In Progress, Done). The Burndown Chart aggregates all that data into a graph showing total remaining work versus time — giving a sprint-level view of progress.",
    deep: "Both are updated daily. The Scrumboard answers \"what is each task's status?\" The Burndown Chart answers \"are we on track to finish the sprint?\" They complement each other — task-level detail and sprint-level trend."
  },
  {
    cat: "concepts",
    diff: "med",
    q: "Why is co-location (the War Room concept) particularly important during the Implement phase?",
    opts: [
      "Co-location is required for active sprint work",
      "Physical proximity improves task estimation",
      "Implementation needs frequent communication",
      "The War Room blocks stakeholder interruptions"
    ],
    ans: 2,
    explain: "During implementation, questions arise constantly and blockers emerge daily. Co-location enables instant discussion between team members, dramatically reducing the time spent waiting for answers and resolving problems.",
    deep: "A question answered in 10 seconds by turning to a colleague versus 4 hours waiting for an email reply has a compounding effect over a 10-day sprint. Co-location is not just convenient — it's a multiplier on sprint effectiveness."
  },
  {
    cat: "concepts",
    diff: "hard",
    q: "The Scrumboard shows that three tasks have been \"In Progress\" for five consecutive days without moving. What should the Scrum Master investigate?",
    opts: [
      "Whether assigned developers have enough points",
      "Whether lower estimates would speed completion",
      "Whether tasks should be removed from the sprint",
      "Whether these tasks hide unresolved impediments"
    ],
    ans: 3,
    explain: "Tasks stuck \"In Progress\" for many days are a signal of hidden impediments. The SM should investigate whether undeclared blockers are preventing progress — and if so, log and resolve them.",
    deep: "Teams sometimes don't surface blockers because they feel responsible for solving them alone. The SM's job is to notice these patterns on the Scrumboard and create space for the team to admit they are blocked without fear of judgment."
  },
  {
    cat: "concepts",
    diff: "hard",
    q: "Release Notes are described as \"external or market-facing shipping criteria.\" Why does this differ from the technical documentation the development team produces?",
    opts: [
      "Release Notes explain customer-facing changes",
      "Release Notes are shorter than technical docs",
      "Marketing writes notes without technical content",
      "Release Notes appear only for major features"
    ],
    ans: 0,
    explain: "Release Notes speak to the customer's experience — what they can now do, what has changed, what is new. Technical documentation speaks to implementation detail. These are entirely different audiences and languages.",
    deep: "A customer reading Release Notes wants to know \"how does this make my life better or different?\" A developer reading technical docs wants to know \"how does the system work?\" Conflating these produces documents that serve neither audience well."
  },
  {
    cat: "concepts",
    diff: "hard",
    q: "A project team discovers during the Project Retrospective that the same type of integration problem caused delays in four different sprints. What is the most valuable action from this finding?",
    opts: [
      "Document the finding in the project archive and ensure it is included in the project's final lessons learned report",
      "Escalate the pattern to the Scrum Guidance Body so it becomes an organisational standard",
      "Assign a developer to write a technical post-mortem for the team's internal reference",
      "Include the integration problem as a risk item in the next project's Sprint Backlog"
    ],
    ans: 1,
    explain: "A pattern recurring across four sprints represents a systemic issue, not a one-off problem. Escalating it to the Scrum Guidance Body converts one team's pain into an organisational standard that benefits all future teams.",
    deep: "This is the highest-value outcome of the Project Retrospective. Individual team learnings that are internalised into organisational standards create compounding returns — each future team starts from a higher baseline of knowledge."
  },
  {
    cat: "concepts",
    diff: "hard",
    q: "The Impediment Log is updated during the Daily Standup (Process 14) but also during Create Deliverables (Process 13). Why does it span both processes?",
    opts: [
      "The two processes are identical and both require the same artefacts to be updated simultaneously",
      "The Impediment Log is updated in Process 13 for technical blockers and in Process 14 for interpersonal team conflicts",
      "Impediments arise both during active development work (Process 13) and are formally surfaced in the Standup (Process 14)",
      "Process 13 creates new impediment entries while Process 14 only closes existing entries as they are resolved"
    ],
    ans: 2,
    explain: "Impediments can arise during development work (Process 13) at any time, and are also formally surfaced and discussed in the Daily Standup (Process 14). Both processes feed the same Impediment Log throughout the sprint.",
    deep: "Impediments do not wait for the Standup to appear. A developer hitting a blocker at 2pm on Tuesday should log it immediately — not wait until tomorrow's Standup. The Standup then confirms status and the SM's resolution actions."
  }
];

function shuffleQuestionOptions(question) {
  const shuffled = question.opts.map((text, index) => ({text, index}));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return {
    ...question,
    opts: shuffled.map(option => option.text),
    ans: shuffled.findIndex(option => option.index === question.ans)
  };
}

window.COMP2151_LECTURES = window.COMP2151_LECTURES || [];
window.COMP2151_LECTURES.push({
  id: 'lecture4',
  title: 'Lecture 4',
  subtitle: 'Scrum Processes',
  description: '71 deep Q&A questions on the Scrum Process Framework, phases, artefacts, review, release, and retrospectives.',
  categories,
  questions: lecture4Questions.map(shuffleQuestionOptions)
});
})();
