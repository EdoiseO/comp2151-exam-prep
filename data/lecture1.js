(() => {
const categories=[
  {key:'all',   label:'All 65', cls:'c0'},
  {key:'sdlc',  label:'SDLC',   cls:'c1'},
  {key:'wfall', label:'Waterfall', cls:'c2'},
  {key:'agile', label:'Agile Values', cls:'c3'},
  {key:'why',   label:'Why Agile', cls:'c4'},
  {key:'manif', label:'Manifesto', cls:'c5'},
  {key:'scrum', label:'Scrum', cls:'c6'},
];

const allQ = [
  {
    cat: "sdlc",
    diff: "easy",
    q: "What does SDLC stand for?",
    opts: [
      "Software Development Life Cycle",
      "System Design and Logic Cycle",
      "Software Deployment and Launch Cycle",
      "Software Delivery and Launch Cycle"
    ],
    ans: 0,
    explain: "SDLC = Software Development Life Cycle — the structured process of planning, creating, testing, and delivering software.",
    deep: "Without the SDLC, development would be chaotic. It provides clear phases, handoffs, and quality checkpoints that keep projects on track."
  },
  {
    cat: "sdlc",
    diff: "easy",
    q: "Which phase of the SDLC comes immediately after Requirements?",
    opts: [
      "Testing",
      "Design",
      "Maintenance",
      "Development"
    ],
    ans: 1,
    explain: "Requirements → Design → Development → Testing → Maintenance. Design always follows Requirements.",
    deep: "Design translates requirements into a blueprint — architecture, database schemas, UI wireframes — that developers follow in the next phase."
  },
  {
    cat: "sdlc",
    diff: "easy",
    q: "What is the LAST phase of the traditional SDLC?",
    opts: [
      "Design",
      "Deployment",
      "Maintenance",
      "Testing"
    ],
    ans: 2,
    explain: "Maintenance is the final phase — fixing bugs, updating features, and keeping software running after it goes live.",
    deep: "Maintenance is often the longest phase in total duration. Software may be actively maintained for 5–20 years after initial release."
  },
  {
    cat: "sdlc",
    diff: "easy",
    q: "What is the purpose of the Requirements phase?",
    opts: [
      "Test the completed application",
      "Design the database schema",
      "Write all the code for the system",
      "Gather and document what the software must do"
    ],
    ans: 3,
    explain: "The Requirements phase is about gathering and documenting exactly what the software needs to do — before any design or coding begins.",
    deep: "Poor requirements are the #1 cause of project failure. Getting this phase right prevents expensive rework later."
  },
  {
    cat: "sdlc",
    diff: "easy",
    q: "What happens in the Testing phase of the SDLC?",
    opts: [
      "QA teams verify the software works and find bugs",
      "Requirements are gathered from stakeholders",
      "The software is deployed to production",
      "The system architecture is designed"
    ],
    ans: 0,
    explain: "Testing is where QA teams verify that the software works correctly, find bugs, and validate it meets the original requirements.",
    deep: "In traditional SDLC, testing is a separate phase after development. In Agile, testing happens throughout every sprint — catching issues much earlier."
  },
  {
    cat: "sdlc",
    diff: "med",
    q: "Why is the SDLC divided into distinct phases?",
    opts: [
      "To give developers more breaks",
      "To improve design, product management, and project management",
      "To make the project take longer",
      "To satisfy government regulations"
    ],
    ans: 1,
    explain: "The SDLC divides projects into phases to improve design, product management, and project management — creating structure and clear accountability.",
    deep: "Each phase has defined inputs, outputs, and quality gates. This prevents skipping ahead and ensures each stage is properly completed."
  },
  {
    cat: "sdlc",
    diff: "med",
    q: "Which SDLC phase is typically the longest in a traditional project?",
    opts: [
      "Requirements",
      "Maintenance",
      "Development",
      "Design"
    ],
    ans: 2,
    explain: "Development is typically the longest — writing all the code takes the most time and resources in a traditional project.",
    deep: "Interestingly, when you add up the entire product lifetime, Maintenance often exceeds Development in total cost — software is maintained for years after release."
  },
  {
    cat: "sdlc",
    diff: "med",
    q: "Which SDLC phase produces \"blueprints\" like architecture diagrams and database schemas?",
    opts: [
      "Requirements",
      "Testing",
      "Development",
      "Design"
    ],
    ans: 3,
    explain: "The Design phase produces blueprints — system architecture diagrams, database schemas, UI wireframes — that developers use in the next phase.",
    deep: "Good design prevents costly refactoring. Changing architecture mid-development is like changing a building's foundation mid-construction."
  },
  {
    cat: "sdlc",
    diff: "hard",
    q: "A developer starts coding before the Design phase is complete. Which SDLC principle is being violated?",
    opts: [
      "Each phase must be completed before the next begins",
      "Requirements must come from the client only",
      "Testing must come before development",
      "Maintenance must be planned upfront"
    ],
    ans: 0,
    explain: "The SDLC requires each phase to be completed before the next begins. Coding without a complete design leads to inconsistent implementation.",
    deep: "This is called \"cowboy coding.\" Without a design, developers make conflicting architectural decisions that are expensive to fix later."
  },
  {
    cat: "sdlc",
    diff: "hard",
    q: "In what way does Agile fundamentally change the traditional SDLC?",
    opts: [
      "It eliminates design decisions completely",
      "It repeats SDLC work inside short sprints",
      "It removes testing from the delivery cycle",
      "It replaces requirements with stories only"
    ],
    ans: 1,
    explain: "Agile repeats requirements, design, development, and testing inside short sprints instead of running those phases once across a long project.",
    deep: "This means every 2-week sprint produces a mini version of the entire SDLC. Bugs surface in days, not months. Requirements are refined continuously, not frozen upfront."
  },
  {
    cat: "wfall",
    diff: "easy",
    q: "The Waterfall model is described as which type of approach?",
    opts: [
      "Incremental",
      "Adaptive",
      "Predictive",
      "Iterative"
    ],
    ans: 2,
    explain: "Waterfall is a predictive approach — it assumes everything can be planned upfront and executed in strict sequence.",
    deep: "\"Predictive\" means the team predicts all requirements, effort, and risks before writing a single line of code — which is rarely realistic for software."
  },
  {
    cat: "wfall",
    diff: "easy",
    q: "In Waterfall, what happens after one phase is complete?",
    opts: [
      "The team ships the software",
      "The team loops back to requirements",
      "A sprint review is held",
      "The next phase begins and the previous cannot be revisited"
    ],
    ans: 3,
    explain: "Waterfall is strictly sequential — each phase must be 100% complete before the next begins, with no going back.",
    deep: "This \"no going back\" rule is the root of most Waterfall problems. Software development is inherently unpredictable, and this model cannot accommodate that reality."
  },
  {
    cat: "wfall",
    diff: "easy",
    q: "What industry originally inspired the Waterfall model?",
    opts: [
      "Manufacturing and construction",
      "Aerospace",
      "Healthcare",
      "Finance"
    ],
    ans: 0,
    explain: "Waterfall was inherited from manufacturing and construction — industries where sequential phases make physical sense.",
    deep: "In construction, you genuinely cannot pour the foundation after building the walls. But software has no such physical constraint — yet Waterfall pretended it did."
  },
  {
    cat: "wfall",
    diff: "easy",
    q: "In a Waterfall project, when does testing occur?",
    opts: [
      "Throughout every phase",
      "After all development is complete",
      "During the design phase",
      "Before development begins"
    ],
    ans: 1,
    explain: "Testing occurs after all development is complete — near the very end of the project lifecycle.",
    deep: "This \"test late\" approach is costly. A bug introduced in Requirements and found in Testing has already been baked into months of Design and Development work."
  },
  {
    cat: "wfall",
    diff: "med",
    q: "What is the biggest risk of locking in requirements at the start of a Waterfall project?",
    opts: [
      "The plan becomes cheaper to change later",
      "Testing becomes easier than expected",
      "New user needs become expensive to add",
      "Developers gain too much design freedom"
    ],
    ans: 2,
    explain: "Locking requirements upfront is risky because clients often don't know exactly what they want until they see working software, when changes are then costly.",
    deep: "This is called the \"frozen requirements\" problem. Waterfall assumes requirements are perfectly known before coding begins — a false assumption in most real-world projects."
  },
  {
    cat: "wfall",
    diff: "med",
    q: "A Waterfall project has phases: Requirements, Design, Development, Testing. A bug is found in Testing that originated from a misunderstood requirement. How many phases must be revisited?",
    opts: [
      "Just Testing",
      "None — bugs are fixed directly in code",
      "Testing and Development only",
      "All four — Requirements, Design, Development, Testing"
    ],
    ans: 3,
    explain: "A Requirements-level bug that reaches Testing means you must fix the requirement, redo the affected design, recode, and retest — all four phases.",
    deep: "This cascading rework is called the \"cost of late discovery.\" Studies show fixing a bug in Testing costs 10x more than fixing it in Requirements."
  },
  {
    cat: "wfall",
    diff: "med",
    q: "Which of these best describes why Waterfall struggles with modern software projects?",
    opts: [
      "Markets and user needs change faster than Waterfall can respond",
      "It requires too many developers",
      "It requires expensive tools",
      "It has no testing phase"
    ],
    ans: 0,
    explain: "Modern software operates in fast-moving markets. Waterfall's rigid, upfront planning cannot respond to change — by the time software ships, requirements may be outdated.",
    deep: "A famous example: Kodak built software systems using Waterfall while digital photography was emerging. By the time systems shipped, the market had moved on entirely."
  },
  {
    cat: "wfall",
    diff: "hard",
    q: "Waterfall tries to \"maintain scope at the expense of time and cost.\" What does this mean in practice?",
    opts: [
      "Scope is reduced to protect the deadline",
      "Extra time and budget protect full scope",
      "Small releases protect the original plan",
      "Value ranking controls what ships first"
    ],
    ans: 1,
    explain: "Waterfall often commits to delivering the full planned scope, even when that means increasing time and budget.",
    deep: "This is the opposite of Agile's time-boxing approach. Agile fixes time and budget, and adjusts scope — delivering the highest-value features first."
  },
  {
    cat: "wfall",
    diff: "hard",
    q: "A long Waterfall project receives major new feature requests near the end. What is the most realistic outcome?",
    opts: [
      "The features enter the next sprint cleanly",
      "A quick patch solves the full change",
      "Earlier phases need expensive rework",
      "The Scrum Master reprioritises them"
    ],
    ans: 2,
    explain: "In Waterfall, adding major features near the end means revisiting requirements, design, development, and testing, which can invalidate earlier work.",
    deep: "This is why Waterfall struggles when business context changes. The later the change arrives, the more expensive the rework becomes."
  },
  {
    cat: "wfall",
    diff: "hard",
    q: "Waterfall is sometimes called \"Top-Down\" planning. What does this mean?",
    opts: [
      "Clients send tasks down to developers",
      "Managers sit above the delivery team",
      "Testing plans are written after coding",
      "The full project is decomposed upfront"
    ],
    ans: 3,
    explain: "Top-Down planning means the project is broken down from the whole into sequential components before execution begins.",
    deep: "This contrasts with Agile's rolling-wave planning, where only the near-term work is planned in detail and long-term plans are kept loose and updated continuously."
  },
  {
    cat: "agile",
    diff: "easy",
    q: "How many core values are in the Agile Manifesto?",
    opts: [
      "4",
      "3",
      "2",
      "6"
    ],
    ans: 0,
    explain: "There are 4 Agile values: Individuals & interactions, Working software, Customer collaboration, and Responding to change.",
    deep: "These 4 values are deliberately simple. They are not rules or processes — they are principles that guide decision-making when trade-offs must be made."
  },
  {
    cat: "agile",
    diff: "easy",
    q: "The Agile Manifesto values \"working software\" over what?",
    opts: [
      "Responding to change",
      "Comprehensive documentation",
      "Customer collaboration",
      "Individuals and interactions"
    ],
    ans: 1,
    explain: "The Manifesto values working software over comprehensive documentation — deliver something that works, not just paperwork about it.",
    deep: "This doesn't eliminate documentation — it means documentation should serve the software, not the other way around. Lean, just-enough docs are encouraged."
  },
  {
    cat: "agile",
    diff: "easy",
    q: "Which value addresses how teams should interact with clients?",
    opts: [
      "Working software over documentation",
      "Individuals and interactions over processes",
      "Customer collaboration over contract negotiation",
      "Responding to change over following a plan"
    ],
    ans: 2,
    explain: "\"Customer collaboration over contract negotiation\" — work closely with clients throughout, rather than hiding behind legal contracts.",
    deep: "Traditional projects often used contracts to protect both sides from each other. Agile assumes a collaborative relationship where both parties want the same outcome: great software."
  },
  {
    cat: "agile",
    diff: "easy",
    q: "The Agile value \"responding to change\" is reflected in which Scrum event?",
    opts: [
      "Sprint Planning",
      "Daily Standup",
      "Sprint Retrospective",
      "Sprint Review and backlog re-prioritisation"
    ],
    ans: 3,
    explain: "The Sprint Review and subsequent backlog re-prioritisation is where the team responds to change — adjusting plans based on stakeholder feedback.",
    deep: "Every sprint ends with a Review where stakeholders can redirect the project. This is \"responding to change\" made concrete — not just a philosophy, but a scheduled event."
  },
  {
    cat: "agile",
    diff: "med",
    q: "The Agile Manifesto says the items on the right side (processes, documentation, contracts, plans) have NO value. True or False?",
    opts: [
      "False — the Manifesto says \"while there is value in the items on the right\"",
      "True — they are completely worthless in Agile",
      "True — Agile eliminates all documentation",
      "False — but only contracts have value on the right"
    ],
    ans: 0,
    explain: "False. The Manifesto explicitly states \"while there is value in the items on the right, we value the items on the left more.\" Both sides have value.",
    deep: "This is a common misconception. Agile does NOT mean \"no documentation\" or \"no planning.\" It means these things should serve the goal of working software, not become ends in themselves."
  },
  {
    cat: "agile",
    diff: "med",
    q: "Which Agile value most directly supports Scrum's self-organizing teams?",
    opts: [
      "Working software over documentation",
      "Individuals and interactions over processes and tools",
      "Responding to change over following a plan",
      "Customer collaboration over contract negotiation"
    ],
    ans: 1,
    explain: "\"Individuals and interactions over processes and tools\" — trusting people (not processes) to make decisions is what makes self-organization possible.",
    deep: "Self-organizing teams work because they trust people closest to the work to make the best decisions. Rigid processes remove that agency and slow teams down."
  },
  {
    cat: "agile",
    diff: "med",
    q: "A project manager insists on 200-page requirement specifications before any coding begins. Which Agile value does this violate most directly?",
    opts: [
      "Customer collaboration over contract negotiation",
      "Individuals and interactions over processes",
      "Working software over documentation",
      "Responding to change over following a plan"
    ],
    ans: 2,
    explain: "\"Working software over documentation\" — spending months writing specs before any code is written prioritises documentation over delivering working software.",
    deep: "In Agile, requirements are captured as lightweight user stories, just detailed enough to be built in a sprint. Heavy upfront documentation delays value delivery."
  },
  {
    cat: "agile",
    diff: "med",
    q: "Agile advocates \"adaptive planning.\" What does this mean?",
    opts: [
      "Plans are made once and never changed",
      "Planning is done only by the Scrum Master",
      "Planning happens only at the start of the project",
      "Plans are continuously revised based on what the team learns"
    ],
    ans: 3,
    explain: "Adaptive planning means plans are continuously revised — updated each sprint based on new information, feedback, and changing priorities.",
    deep: "This is the opposite of Waterfall's upfront plan. In Agile, the plan is a living document. The Product Backlog represents the current best understanding of what to build next."
  },
  {
    cat: "agile",
    diff: "hard",
    q: "A legal team wants every requirement finalised in a contract before coding. Which Agile value is most affected?",
    opts: [
      "Customer collaboration over contracts",
      "Working software over documentation",
      "Individuals and interactions over tools",
      "Responding to change over plans"
    ],
    ans: 0,
    explain: "This most directly conflicts with customer collaboration over contract negotiation because it prioritises locked legal terms over ongoing learning.",
    deep: "This is a real tension in enterprise Agile. The solution is often \"contracts for collaboration\" — lightweight agreements that define the process (Agile) rather than the exact deliverables."
  },
  {
    cat: "agile",
    diff: "hard",
    q: "Which of the 4 Agile values is most visible in a Sprint Retrospective?",
    opts: [
      "Customer collaboration over contract negotiation",
      "Individuals and interactions over processes and tools",
      "Working software over documentation",
      "Responding to change over following a plan"
    ],
    ans: 1,
    explain: "\"Individuals and interactions\" — the Retrospective is a dedicated human-centred conversation where the team reflects and improves together, with no tools or processes required.",
    deep: "The Retrospective is Agile's most powerful event because it treats the team as the primary driver of improvement, not a process framework or a management directive."
  },
  {
    cat: "why",
    diff: "easy",
    q: "What was the main lesson from early IT project failure studies?",
    opts: [
      "Budget overruns were never a problem",
      "Most projects succeeded without changes",
      "Many projects failed under heavy planning",
      "Testing was usually completed too early"
    ],
    ans: 2,
    explain: "Early IT project studies showed that many projects were failing, arriving late, running over budget, or delivering less scope than planned.",
    deep: "The exam concept is the trend: traditional planning was not producing reliable software project outcomes, so the industry needed a different approach."
  },
  {
    cat: "why",
    diff: "easy",
    q: "What are the three dimensions of the Triple Constraint?",
    opts: [
      "People, Process, Technology",
      "Speed, Quality, Risk",
      "Plan, Build, Ship",
      "Time, Cost, Scope"
    ],
    ans: 3,
    explain: "The Triple Constraint = Time (schedule), Cost (budget), Scope (features delivered). Failing any one dimension is considered a project failure.",
    deep: "These three are interconnected — if you add more scope, you need more time or money. If you cut time, you must reduce scope or increase cost. Agile manages this by fixing time and money, and prioritising scope."
  },
  {
    cat: "why",
    diff: "easy",
    q: "What trend did later project research show after Agile became common?",
    opts: [
      "Failure rates dropped as practices improved",
      "Budgets stopped affecting project outcomes",
      "Failure rates rose as teams planned less",
      "Scope became irrelevant to success"
    ],
    ans: 0,
    explain: "Later project research showed lower failure rates as Agile practices became more common and teams used shorter feedback loops.",
    deep: "The important takeaway is not memorising a research body. It is understanding why earlier feedback and adaptive planning improved outcomes."
  },
  {
    cat: "why",
    diff: "easy",
    q: "What does it mean for a project to \"fail\" the Time constraint?",
    opts: [
      "The project costs more than budgeted",
      "The project is delivered later than the planned deadline",
      "The project is cancelled before completion",
      "The project delivers fewer features than planned"
    ],
    ans: 1,
    explain: "Failing the Time constraint means the project was delivered late — past its planned deadline.",
    deep: "Late delivery is common in Waterfall because problems discovered late (in Testing) still require full rework, causing delays. Agile's sprints surface issues early when they are cheap to fix."
  },
  {
    cat: "why",
    diff: "med",
    q: "What percentage of organisations report using Agile approaches sometimes or more frequently?",
    opts: [
      "55%",
      "89%",
      "71%",
      "41%"
    ],
    ans: 2,
    explain: "71% of organisations use Agile approaches sometimes or more frequently, according to PMI research.",
    deep: "This near-universal adoption reflects that Agile is now the industry standard — not just for software, but increasingly for marketing, HR, operations, and other business functions."
  },
  {
    cat: "why",
    diff: "med",
    q: "What trend connects Agile adoption with project success rates?",
    opts: [
      "Failure rates rose because scope became flexible",
      "Failure rates improved only with larger budgets",
      "Failure rates changed randomly across studies",
      "Failure rates declined as feedback loops shortened"
    ],
    ans: 3,
    explain: "The trend discussed in lecture is that project failure rates declined as Agile adoption spread and feedback loops became shorter.",
    deep: "This correlation supports Agile’s practical value: inspect sooner, adapt sooner, and avoid discovering major problems only at the end."
  },
  {
    cat: "why",
    diff: "med",
    q: "Which of these represents a failure of the COST constraint?",
    opts: [
      "The project required $2M extra funding beyond its original budget",
      "The testing team found 50 bugs",
      "The project shipped without 4 planned features",
      "The project delivered 3 months late"
    ],
    ans: 0,
    explain: "Exceeding the budget — requiring more money than originally planned — is a failure of the Cost constraint.",
    deep: "Cost overruns are often caused by scope creep (adding features without adjusting the budget) or late bug discovery (expensive rework in Testing)."
  },
  {
    cat: "why",
    diff: "med",
    q: "What does \"evolutionary development\" mean in Agile?",
    opts: [
      "The code changes without user feedback",
      "The product grows through repeated sprints",
      "The plan stays fixed until release day",
      "The team changes roles every iteration"
    ],
    ans: 1,
    explain: "Evolutionary development means each sprint adds to and improves the previous version, gradually evolving toward the full product.",
    deep: "This contrasts with Waterfall's \"big bang\" delivery — one large release at the end. Evolutionary development means something is always working and always improving."
  },
  {
    cat: "why",
    diff: "hard",
    q: "A project delivers on time, on budget, but with only 60% of planned features. Which constraint failed?",
    opts: [
      "None — 2 out of 3 is a pass",
      "Cost — it was over budget",
      "Scope — fewer features than planned",
      "Time — it was late"
    ],
    ans: 2,
    explain: "Scope failed — delivering fewer features than planned violates the Scope constraint, even if Time and Cost were met. All three must be satisfied.",
    deep: "Crucially, in Agile the 60% that does ship should be the MOST VALUABLE 60% — selected by MoSCoW prioritisation. Traditional projects often ship the easiest 60%, not the most important."
  },
  {
    cat: "why",
    diff: "hard",
    q: "Why does Agile improve IT project success rates compared to Waterfall?",
    opts: [
      "It guarantees larger project budgets",
      "It removes every documentation activity",
      "It spends more money on senior developers",
      "It finds problems early through sprints"
    ],
    ans: 3,
    explain: "Agile improves outcomes because short sprints surface problems early, when they are cheaper to fix, while continuous delivery keeps business value flowing.",
    deep: "The combination of early feedback, continuous improvement, and incremental delivery fundamentally changes the economics of software development — making success far more likely."
  },
  {
    cat: "manif",
    diff: "easy",
    q: "Which problem were lightweight Agile methods trying to solve?",
    opts: [
      "Heavy processes that delayed useful software",
      "Extra reports replacing customer feedback",
      "Tool choices becoming the project focus",
      "More meetings without clearer product value"
    ],
    ans: 0,
    explain: "Agile methods reacted against heavy processes that produced delays, handoffs, and paperwork before users saw useful software.",
    deep: "The important exam idea is not who met where. It is why Agile emerged: teams needed a better way to deliver working software in uncertain projects."
  },
  {
    cat: "manif",
    diff: "easy",
    q: "Why does the Agile Manifesto describe values instead of a detailed process?",
    opts: [
      "Values assign tasks to each developer",
      "Values guide decisions across different teams",
      "Values replace every project constraint",
      "Values remove the need to test software"
    ],
    ans: 1,
    explain: "The Manifesto gives decision-making values that can guide many methods and teams, instead of prescribing one rigid process.",
    deep: "This is why Scrum, XP, and other methods can all be Agile. They can differ in practice while still making similar trade-offs."
  },
  {
    cat: "manif",
    diff: "easy",
    q: "What does the Manifesto mean by valuing the left side more?",
    opts: [
      "The right side must be removed from teams",
      "Documentation should never be written",
      "Both sides matter, but people and outcomes lead",
      "Only the left side may be used in projects"
    ],
    ans: 2,
    explain: "The Manifesto does not say plans, contracts, or documentation are useless. It says people, collaboration, working software, and change response should lead.",
    deep: "This distinction matters in exams. Agile is not no planning or no documentation; it is choosing the work that creates the most learning and value."
  },
  {
    cat: "manif",
    diff: "easy",
    q: "Why does Scrum fit naturally with Agile values?",
    opts: [
      "It moves testing to the final project phase",
      "It assigns every task through management",
      "It freezes all requirements before coding starts",
      "It uses short feedback loops and working increments"
    ],
    ans: 3,
    explain: "Scrum fits Agile because every sprint creates inspection, feedback, adaptation, and a working increment.",
    deep: "Scrum turns Agile values into repeatable habits: planning, building, reviewing, and improving in short cycles."
  },
  {
    cat: "manif",
    diff: "med",
    q: "What frustration pushed developers toward lightweight methods?",
    opts: [
      "Projects produced paperwork instead of useful software",
      "Clients refused to sign larger fixed contracts",
      "Developers wanted longer handoff phases",
      "Teams had too few documents to review each week"
    ],
    ans: 0,
    explain: "A major frustration was that traditional methods often rewarded documentation and phase completion more than working software.",
    deep: "Agile shifted attention back to product outcomes. A document can help, but it is not a substitute for tested software in users’ hands."
  },
  {
    cat: "manif",
    diff: "med",
    q: "What does the whole-team product development idea emphasize?",
    opts: [
      "Testing begins only when development is complete",
      "Team members collaborate continuously toward one goal",
      "Managers approve every task before coding starts",
      "Specialists finish isolated phases before handoff"
    ],
    ans: 1,
    explain: "The whole-team idea emphasizes collaboration across roles instead of sequential handoffs between isolated specialists.",
    deep: "This is one reason Scrum uses cross-functional teams. The team moves together, learns together, and adapts together."
  },
  {
    cat: "manif",
    diff: "med",
    q: "Why are overlapping phases useful in software development?",
    opts: [
      "They remove the need for a product owner",
      "They make each role work in strict sequence",
      "They reveal design and requirement issues earlier",
      "They prevent stakeholders from giving feedback"
    ],
    ans: 2,
    explain: "Overlapping work helps teams discover requirement, design, and testing problems earlier, when they are cheaper to correct.",
    deep: "Agile compresses the learning loop. Instead of waiting until the end to learn whether the idea works, the team learns every sprint."
  },
  {
    cat: "manif",
    diff: "med",
    q: "Why does Scrum keep its official rules lightweight?",
    opts: [
      "Projects can avoid defining done work",
      "Managers can add unlimited approval layers",
      "Teams can ignore inspection and adaptation events",
      "Teams can adapt practices while keeping core roles clear"
    ],
    ans: 3,
    explain: "Scrum defines a small set of roles, events, artifacts, and rules so teams can adapt implementation details without losing the framework.",
    deep: "A lightweight framework creates discipline without turning into bureaucracy. The structure is enough to support transparency, inspection, and adaptation."
  },
  {
    cat: "manif",
    diff: "hard",
    q: "Why does formalizing a framework matter for teams adopting Scrum?",
    opts: [
      "It gives teams shared language for roles and events",
      "It makes sprint length unlimited by default",
      "It removes the need for backlog prioritization",
      "It guarantees every company uses identical tools"
    ],
    ans: 0,
    explain: "A formal framework gives teams shared language for responsibilities, events, artifacts, and expectations.",
    deep: "Shared language reduces confusion. When everyone understands Product Backlog, Sprint Backlog, Increment, Review, and Retrospective, coordination is easier."
  },
  {
    cat: "manif",
    diff: "hard",
    q: "How do the Agile principles support the four Manifesto values?",
    opts: [
      "They require one process for every organization",
      "They translate broad values into delivery behaviours",
      "They focus teams on documents over increments",
      "They replace sprint planning with fixed contracts"
    ],
    ans: 1,
    explain: "The principles turn broad values into practical delivery behaviours such as welcoming change, delivering working software, collaborating often, and reflecting regularly.",
    deep: "The values explain what Agile prefers. The principles explain how those preferences affect day-to-day software delivery."
  },
  {
    cat: "scrum",
    diff: "easy",
    q: "Scrum is described as what type of framework?",
    opts: [
      "A heavyweight, comprehensive methodology",
      "A programming language",
      "A lightweight process framework",
      "A project management standard"
    ],
    ans: 2,
    explain: "Scrum is a lightweight process framework — \"lightweight\" means minimal overhead so teams spend maximum time on productive work.",
    deep: "Compare Scrum's 3 roles, 3 artifacts, and 5 events to PRINCE2's dozens of roles and hundreds of processes. Scrum's power comes entirely from its simplicity."
  },
  {
    cat: "scrum",
    diff: "easy",
    q: "How many Scrum Principles are there?",
    opts: [
      "8",
      "4",
      "5",
      "6"
    ],
    ans: 3,
    explain: "There are 6 Scrum Principles: Empirical Process Control, Self-organization, Collaboration, Value-based Prioritization, Time-boxing, and Iterative Development.",
    deep: "Each principle underpins specific Scrum practices. Time-boxing explains why sprints have fixed lengths. Empirical Process Control explains why the Retrospective exists."
  },
  {
    cat: "scrum",
    diff: "easy",
    q: "How many Scrum Aspects are there?",
    opts: [
      "5",
      "6",
      "3",
      "4"
    ],
    ans: 0,
    explain: "There are 5 Scrum Aspects: Organization, Business Justification, Quality, Change, and Risk.",
    deep: "Aspects are the key dimensions that must be managed throughout every Scrum project. Unlike Principles (philosophical) and Processes (steps), Aspects are ongoing concerns."
  },
  {
    cat: "scrum",
    diff: "easy",
    q: "What are the 3 core Scrum roles?",
    opts: [
      "Analyst, Designer, Programmer",
      "Product Owner, Scrum Master, Development Team",
      "Manager, Developer, Tester",
      "CEO, CTO, Developer"
    ],
    ans: 1,
    explain: "The 3 core Scrum roles are: Product Owner (voice of the customer), Scrum Master (servant-leader), and Development Team (builders).",
    deep: "These 3 roles cover everything needed to deliver a product. No additional roles are defined in Scrum — though organisations can have non-core roles like stakeholders, vendors, etc."
  },
  {
    cat: "scrum",
    diff: "easy",
    q: "What are the 3 Scrum artifacts?",
    opts: [
      "Requirements, Design docs, Test cases",
      "User stories, tasks, bugs",
      "Product Backlog, Sprint Backlog, Increment",
      "Vision, Roadmap, Release plan"
    ],
    ans: 2,
    explain: "The 3 Scrum artifacts are: Product Backlog (all desired work), Sprint Backlog (this sprint's work), and Increment (working software built this sprint).",
    deep: "Each artifact provides transparency into a different aspect of progress: the Product Backlog shows the product vision, the Sprint Backlog shows current sprint progress, and the Increment shows what's been built."
  },
  {
    cat: "scrum",
    diff: "easy",
    q: "How long is a typical sprint?",
    opts: [
      "6 months",
      "1 day to 1 week",
      "1 to 3 months",
      "1 to 6 weeks, usually 2 weeks"
    ],
    ans: 3,
    explain: "A sprint lasts between 1 and 6 weeks, with 2 weeks being the most common choice in practice.",
    deep: "Shorter sprints (1-2 weeks) mean faster feedback loops but more ceremony overhead. Longer sprints (3-4 weeks) mean less overhead but slower feedback. Most teams find 2 weeks to be the sweet spot."
  },
  {
    cat: "scrum",
    diff: "med",
    q: "What is the difference between the Product Backlog and the Sprint Backlog?",
    opts: [
      "Product Backlog is all work; Sprint Backlog is current work",
      "They describe the same work list",
      "Product Backlog contains only reported bugs",
      "Sprint Backlog is owned only by stakeholders"
    ],
    ans: 0,
    explain: "Product Backlog is all desired work, owned by the Product Owner. Sprint Backlog is the committed work for the current sprint, owned by the Development Team.",
    deep: "A healthy Product Backlog is always longer than can be done in one sprint. The Sprint Backlog is a focused, achievable slice of that vision deliverable in 1–4 weeks."
  },
  {
    cat: "scrum",
    diff: "med",
    q: "The Scrum Master is best described as which type of leader?",
    opts: [
      "Authoritarian — assigns tasks and enforces deadlines",
      "Servant-leader — facilitates, removes impediments, protects the team",
      "Project manager — controls scope, time, and budget",
      "Technical lead — reviews all code"
    ],
    ans: 1,
    explain: "The Scrum Master is a servant-leader — they serve the team by facilitating events, removing obstacles, and creating conditions for self-organization.",
    deep: "This is a radical departure from traditional management. A Scrum Master never assigns tasks or makes technical decisions — their power comes from enabling others, not directing them."
  },
  {
    cat: "scrum",
    diff: "med",
    q: "What is the purpose of the Daily Standup?",
    opts: [
      "To give management a full report",
      "To review completed work with clients",
      "To sync progress and surface blockers",
      "To plan the next sprint backlog"
    ],
    ans: 2,
    explain: "The Daily Standup is a short daily sync where the team shares progress, plans, and impediments.",
    deep: "The 15-minute limit forces brevity and prevents the Standup becoming a meeting. Deep discussions happen after — not during — the Standup."
  },
  {
    cat: "scrum",
    diff: "med",
    q: "What happens during a Sprint Review?",
    opts: [
      "The team discusses internal improvements",
      "The team estimates story points",
      "Tasks are assigned for the next sprint",
      "Working software is demonstrated to stakeholders and feedback is gathered"
    ],
    ans: 3,
    explain: "The Sprint Review is where the team demonstrates completed working software to stakeholders and gathers feedback that shapes the next sprint.",
    deep: "The Sprint Review is Agile's \"show, don't tell\" moment. Rather than status reports, stakeholders see real working software. Their feedback directly influences what gets built next."
  },
  {
    cat: "scrum",
    diff: "med",
    q: "What is the purpose of the Sprint Retrospective?",
    opts: [
      "To improve how the team works next",
      "To select stories for the next sprint",
      "To refine the whole product backlog",
      "To demo working software to clients"
    ],
    ans: 0,
    explain: "The Sprint Retrospective is where the team reflects on what went well, what did not, and what to improve next sprint.",
    deep: "The Retrospective embodies the Agile principle of continuous improvement. Teams that skip Retrospectives miss their most powerful tool for becoming more effective over time."
  },
  {
    cat: "scrum",
    diff: "hard",
    q: "If the Scrum Master assigns tasks during Sprint Planning, which Scrum principle is violated?",
    opts: [
      "Empirical Process Control",
      "Self-organization",
      "Time-boxing",
      "Iterative Development"
    ],
    ans: 1,
    explain: "Self-organization is violated — the Development Team chooses its own work. No one, not even the Scrum Master, assigns tasks.",
    deep: "Self-organizing teams consistently outperform directed teams because those closest to the work make the best decisions. Top-down assignment creates dependency and destroys initiative."
  },
  {
    cat: "scrum",
    diff: "hard",
    q: "The Increment must be \"potentially releasable.\" What does this mean in practice?",
    opts: [
      "It only needs passing unit tests",
      "It must always ship to users immediately",
      "It is complete enough to ship if chosen",
      "It can be documented without working"
    ],
    ans: 2,
    explain: "Potentially releasable means the Increment is complete, meets the Definition of Done, and could be deployed if the Product Owner chose to.",
    deep: "This is a high bar. It forces quality into every sprint rather than saving it for a \"hardening sprint\" at the end — a common anti-pattern that delays quality work."
  },
  {
    cat: "scrum",
    diff: "hard",
    q: "Value-based Prioritization means the team builds the most technically complex stories first. True or False?",
    opts: [
      "False; client request order comes first",
      "True; technical complexity drives planning",
      "True; complexity always reduces risk early",
      "False; highest business value comes first"
    ],
    ans: 3,
    explain: "False. Value-based Prioritization means the highest business-value stories are built first, not the most technically complex ones.",
    deep: "Building high-value stories first means even if the project is cancelled after Sprint 1, the most important features have been delivered. Low-value, high-complexity stories are deferred or dropped."
  },
  {
    cat: "scrum",
    diff: "hard",
    q: "Empirical Process Control is based on three pillars. Which set correctly identifies them?",
    opts: [
      "Transparency, Inspection, Adaptation",
      "Sprint, Review, Retrospect",
      "Plan, Do, Check",
      "Observe, Measure, Improve"
    ],
    ans: 0,
    explain: "Empirical Process Control rests on three pillars: Transparency (everyone can see what's happening), Inspection (regularly examine progress), and Adaptation (adjust based on what you find).",
    deep: "These three pillars underpin ALL Scrum events. The Daily Standup (inspect daily), Sprint Review (inspect increment), and Retrospective (adapt process) are all expressions of Empirical Process Control."
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
  id: 'lecture1',
  title: 'Lecture 1',
  subtitle: 'Deep Q&A',
  description: 'Every concept from Lecture 1 tested. Filter by topic or attempt all 65.',
  categories,
  questions: allQ.map(shuffleQuestionOptions)
});
})();
