(() => {
const categories = [
  {key: 'all', label: 'All 65', cls: 'c0'},
  {key: 'planning', label: 'Planning', cls: 'c1'},
  {key: 'priority', label: 'Prioritization', cls: 'c2'},
  {key: 'estimation', label: 'Estimation', cls: 'c3'},
  {key: 'factors', label: 'Story Size Factors', cls: 'c4'},
  {key: 'financial', label: 'Financial Value', cls: 'c5'},
  {key: 'quality', label: 'Quality', cls: 'c6'},
  {key: 'hr', label: 'HR Theories', cls: 'c7'},
];

const lecture3Questions = [
  {
    cat: "planning",
    diff: "easy",
    q: "Traditional project planning uses a Top-Down approach. What does this mean?",
    opts: [
      "The entire project is decomposed from the whole into sequential tasks before any work begins",
      "Planning starts at the task level and works up to the project vision",
      "Only the top-priority stories are planned, leaving the rest until later",
      "The most senior manager makes all daily decisions for the team"
    ],
    ans: 0,
    explain: "Top-Down planning means the entire project is broken down from the whole into sequential components upfront — all planning is done before execution begins.",
    deep: "This contrasts with Agile's rolling-wave planning, where only the near-term is planned in detail and long-term plans are kept loose and updated sprint by sprint."
  },
  {
    cat: "planning",
    diff: "easy",
    q: "In Agile planning, who should be actively involved in scheduling and estimating work?",
    opts: [
      "The Product Owner, who understands business value and priorities best",
      "The people doing the work, since they are closest to the problem",
      "An external estimating consultant with no stake in the outcome",
      "The project manager, who has the most visibility across the project"
    ],
    ans: 1,
    explain: "Agile planning requires the people doing the work to be actively involved in scheduling. Those closest to the problem make the most accurate estimates.",
    deep: "When a PM estimates without developer input, estimates are often wrong. When developers estimate their own work, accuracy improves and ownership increases."
  },
  {
    cat: "planning",
    diff: "easy",
    q: "Agile projects take a \"requirement-based approach\" to planning. What does this mean?",
    opts: [
      "All requirements must be approved by stakeholders before any sprint begins",
      "Requirements are prioritised by technical complexity rather than business value",
      "Each sprint delivers a complete feature rather than just one layer like design or code",
      "Requirements are collected upfront and handed to developers as a complete specification"
    ],
    ans: 2,
    explain: "A requirement-based approach means each sprint delivers a complete, working feature — not just a design phase or a coding phase. The full slice is delivered end-to-end.",
    deep: "Traditional projects deliver phases (e.g. \"all design done by month 3\"). Agile delivers complete features in each sprint, meaning working software is available from Sprint 1."
  },
  {
    cat: "planning",
    diff: "med",
    q: "Traditional planning tries to \"maintain scope at the expense of time and cost.\" What does this mean in practice?",
    opts: [
      "The project manager cuts quality to ensure all features are delivered on time",
      "The team negotiates with the client to remove features that are too complex",
      "The project reduces features delivered in order to stay on budget and on schedule",
      "The project adds more time and money to deliver all originally planned features, causing overruns"
    ],
    ans: 3,
    explain: "Traditional projects commit to delivering all planned scope regardless of cost or time, often resulting in budget overruns and late delivery.",
    deep: "Agile does the opposite — it fixes time and budget, then adjusts scope. The highest-value features are delivered first so that even a stopped project delivers something valuable."
  },
  {
    cat: "planning",
    diff: "med",
    q: "How does Agile handle a situation where a client changes their requirements halfway through the project?",
    opts: [
      "The new requirement is added to the Product Backlog and prioritised for a future sprint",
      "The change is rejected because requirements are fixed at project start",
      "The current sprint is cancelled and the project is replanned from the beginning",
      "A formal change request is raised, reviewed, and usually approved after a lengthy process"
    ],
    ans: 0,
    explain: "In Agile, new requirements are added to the Product Backlog and prioritised for a future sprint. Change is welcomed, not resisted.",
    deep: "This is one of Agile's biggest competitive advantages. Markets change, user needs evolve. Agile lets teams respond to reality rather than being locked into a plan made months ago."
  },
  {
    cat: "planning",
    diff: "med",
    q: "Why does Agile planning include training time and interactions with external players?",
    opts: [
      "To satisfy HR compliance requirements for professional development",
      "Because learning time is real effort that must be estimated honestly like any other work",
      "To justify a larger budget allocation from the project sponsor",
      "Because training is free and does not count toward sprint capacity"
    ],
    ans: 1,
    explain: "Training and external interactions are real work that consume sprint capacity. Including them in plans ensures estimates are honest and commitments are achievable.",
    deep: "A common planning mistake is ignoring non-coding activities. If a developer spends 2 days learning a new framework, that sprint has 2 fewer days of feature development — the plan must reflect this."
  },
  {
    cat: "planning",
    diff: "hard",
    q: "In traditional planning, who provides effort estimates and how are they approved?",
    opts: [
      "The development team estimates each story and the Scrum Master approves the total",
      "An external auditor reviews estimates before they can be used for planning",
      "The project manager provides estimates and gets approval from the client for the entire project",
      "Estimates are crowdsourced from all stakeholders and averaged"
    ],
    ans: 2,
    explain: "In traditional projects, the project manager provides estimates and gets approval for the entire project upfront — before any work begins.",
    deep: "This creates a single point of failure. The PM is often furthest from the technical work and therefore the least qualified to estimate it accurately. Agile distributes estimation to those who know the work."
  },
  {
    cat: "planning",
    diff: "hard",
    q: "Agile planning states \"you can accurately plan in detail only for nearby tasks.\" What is the practical consequence of this for sprint planning?",
    opts: [
      "Sprints should be as long as possible to allow time for detailed planning of all upcoming work",
      "Detailed planning is avoided entirely and all estimates are made on the day of delivery",
      "The entire project backlog must be estimated in detail before the first sprint can begin",
      "Only the current sprint's stories are planned in detail; future sprints remain loosely defined until they approach"
    ],
    ans: 3,
    explain: "Only the current sprint's stories are planned in detail. Future sprints are kept in a rough state until they are close enough to plan accurately.",
    deep: "This is called rolling-wave planning. Trying to plan distant future work in detail is wasteful because requirements will change before that work is reached. Plan near work in detail, far work in outline."
  },
  {
    cat: "priority",
    diff: "easy",
    q: "In Business Value-Addition prioritization, who determines the business value score for each story?",
    opts: [
      "The Product Owner or PO team, based on client input, surveys, and financial tools",
      "External stakeholders who vote on which features they find most useful",
      "The development team, based on how technically interesting each story is",
      "The Scrum Master, based on sprint capacity and team workload"
    ],
    ans: 0,
    explain: "The Product Owner or PO team determines business value scores — through customer interviews, surveys, and financial analysis.",
    deep: "Business value reflects the actual impact on the organisation — revenue generated, cost saved, risk reduced, or customer satisfaction gained. The PO is the bridge between business and development."
  },
  {
    cat: "priority",
    diff: "easy",
    q: "In MoSCoW prioritization, what happens if a \"Must Have\" story is not delivered by the end of the sprint?",
    opts: [
      "The Scrum Master decides whether the sprint was successful based on circumstances",
      "The sprint or release is considered a failure — Must Haves are non-negotiable",
      "The sprint is considered successful if at least 80% of Must Have stories were completed",
      "The story is automatically moved to the next sprint without further discussion"
    ],
    ans: 1,
    explain: "Must Have stories are non-negotiable. If a Must Have is not delivered, the sprint or release is considered a failure — these are the minimum requirements for success.",
    deep: "This is why Must Have stories should be genuinely critical. If everything is \"Must Have,\" the category loses its meaning. A well-applied MoSCoW has a realistic split across all four tiers."
  },
  {
    cat: "priority",
    diff: "easy",
    q: "Which MoSCoW category explicitly acknowledges a feature is wanted but will NOT be delivered in this sprint or release?",
    opts: [
      "Must Have — it is mandatory but may slip to the next sprint if needed",
      "Should Have — it is deferred but still expected soon",
      "Won't Have — explicitly out of scope now but a candidate for a future release",
      "Could Have — it is optional and may not make it this sprint"
    ],
    ans: 2,
    explain: "Won't Have means explicitly out of scope for now. This is important because it prevents scope creep by clearly communicating \"not this sprint\" rather than leaving it ambiguous.",
    deep: "Without a Won't Have category, stakeholders may assume their request is being worked on. Explicit Won't Have entries manage expectations and prevent last-minute surprises at the Sprint Review."
  },
  {
    cat: "priority",
    diff: "easy",
    q: "What is the correct order for applying Business Value-Addition and MoSCoW when ranking a backlog?",
    opts: [
      "MoSCoW is used for new stories only; BV score is used for all existing backlog items",
      "BV score first to rank all stories, then MoSCoW to categorise them",
      "Both are applied simultaneously and the average of the two determines final rank",
      "MoSCoW tier first to group stories, then BV score to order within each tier"
    ],
    ans: 3,
    explain: "MoSCoW tier is applied first — Must Haves always rank above Should Haves, which always rank above Could Haves. Then BV score orders stories within each tier.",
    deep: "A Should Have with BV 10 still ranks below a Must Have with BV 1. Tier is the primary sort; BV score is the secondary sort within a tier."
  },
  {
    cat: "priority",
    diff: "med",
    q: "Technology Risk-Based prioritization places the riskiest stories first. Why is this counter-intuitive but correct?",
    opts: [
      "Discovering a technical impossibility in Sprint 1 is far cheaper than discovering it in Sprint 10",
      "High-risk stories require more developers, who are available at the start of the project",
      "High-risk stories are always more valuable to the business and should be built first",
      "Risky stories are easier to estimate because they have well-known unknowns"
    ],
    ans: 0,
    explain: "Failing fast is the goal. If a risky feature turns out to be impossible or far harder than expected, finding out early saves the cost of building everything around it first.",
    deep: "This is the \"fail fast, fail cheap\" principle. Discovering an architectural dead-end in Sprint 1 might cost 2 weeks. Discovering it in Sprint 10 might invalidate months of dependent work."
  },
  {
    cat: "priority",
    diff: "med",
    q: "In the Kano Model, what distinguishes a \"Dissatisfier\" from an \"Indifferent\" feature?",
    opts: [
      "Dissatisfiers are features clients asked for; Indifferent features were added by the team",
      "Dissatisfiers cause unhappiness when absent; Indifferent features have no effect on satisfaction whether present or absent",
      "Dissatisfiers are found in early sprints; Indifferent features are deferred to the final release",
      "Dissatisfiers are costly to build; Indifferent features are inexpensive to implement"
    ],
    ans: 1,
    explain: "Dissatisfiers are baseline expectations — clients are unhappy if they are missing, but merely neutral if they are present. Indifferent features have no effect on satisfaction in either direction.",
    deep: "A login page on a banking app is a Dissatisfier — clients expect it and won't praise you for having it. An irrelevant internal debug log is Indifferent — nobody cares whether it exists."
  },
  {
    cat: "priority",
    diff: "med",
    q: "An \"Exciter/Delighter\" in the Kano Model is a feature that customers did not know they wanted. What happens to customer satisfaction if it is absent?",
    opts: [
      "Customers are very dissatisfied because they expect all advertised features to be present",
      "Customers switch to a competitor product immediately upon noticing its absence",
      "Customers are neutral about its absence because they did not know to expect it",
      "Customers request a refund or escalate a complaint to the Product Owner"
    ],
    ans: 2,
    explain: "Exciters/Delighters do not cause dissatisfaction when absent — customers never expected them. But their presence creates delight and differentiation.",
    deep: "This is why innovation creates competitive advantage. The first app to add fingerprint login delighted users. Before it existed, nobody was dissatisfied by its absence."
  },
  {
    cat: "priority",
    diff: "med",
    q: "Dot Voting is described as effective for prioritising a large list of items quickly. What is the core mechanism?",
    opts: [
      "The Product Owner assigns dots by personal priority",
      "Software places dots randomly to remove bias",
      "Stakeholders cast one vote for their top story",
      "Team members place dots to show relative priority"
    ],
    ans: 3,
    explain: "Each team member receives coloured dots and places them on stories according to an agreed scale. The distribution of dots makes relative priorities immediately visible to the whole group.",
    deep: "The visual nature of Dot Voting is its strength. When everyone can see where dots are clustering, discussions become focused and consensus emerges faster than in purely verbal discussions."
  },
  {
    cat: "priority",
    diff: "hard",
    q: "A story has MoSCoW = Should Have and BV score = 9. Another story has MoSCoW = Must Have and BV score = 4. Which ranks higher in the prioritized backlog and why?",
    opts: [
      "The Must Have / BV 4 story ranks higher because MoSCoW tier always takes precedence over BV score",
      "The Should Have / BV 9 story ranks higher because its business value score is more than double the other",
      "The ranking depends on the sprint capacity available at the time of planning",
      "Both stories rank equally because MoSCoW and BV score cancel each other out"
    ],
    ans: 0,
    explain: "The Must Have / BV 4 story ranks higher. MoSCoW tier is the primary ranking criterion — Must Have always outranks Should Have regardless of the BV score.",
    deep: "BV score only determines order WITHIN a tier. A Must Have with BV 1 still ranks above a Should Have with BV 10. Tier first, BV second — always."
  },
  {
    cat: "priority",
    diff: "hard",
    q: "When applying Business Value-Addition scoring, what factors should the Product Owner consider?",
    opts: [
      "Technical complexity, developer availability, and codebase impact",
      "Revenue generated, cost saved, risk reduced, and customer satisfaction gained",
      "Number of lines of code, test coverage percentage, and bug density",
      "Sprint length, team size, and Definition of Done criteria"
    ],
    ans: 1,
    explain: "Business value is determined by: revenue a feature could generate, cost it could save, risk it mitigates, and the satisfaction it creates for the customer.",
    deep: "These factors allow non-financial value to be compared on a common scale. A feature that saves no money but dramatically reduces churn can legitimately outrank one that saves a small amount."
  },
  {
    cat: "priority",
    diff: "hard",
    q: "A team applies MoSCoW and discovers that 90% of their stories are labelled \"Must Have.\" What is the most significant problem with this?",
    opts: [
      "The sprint will take longer than planned because Must Have stories are always complex",
      "Must Have stories cannot be estimated using Planning Poker and require a different technique",
      "The MoSCoW categories have lost their meaning — if everything is critical, nothing is prioritised",
      "The Product Owner must approve each Must Have story individually before it can be estimated"
    ],
    ans: 2,
    explain: "If 90% of stories are Must Have, the category provides no prioritisation benefit. MoSCoW only works when there is a genuine spread across the four tiers.",
    deep: "A useful MoSCoW distribution is roughly: 60% Must Have, 20% Should Have, 15% Could Have, 5% Won't Have. When everything is Must Have, scope is not being managed — it is just being renamed."
  },
  {
    cat: "priority",
    diff: "hard",
    q: "The Kano Model classifies features as Exciters, Satisfiers, Dissatisfiers, or Indifferent. Which category should a product team aim to ELIMINATE from their backlog?",
    opts: [
      "Satisfiers, because customers will always want more of them regardless of how many are built",
      "Exciters, because they are unpredictable and make cost estimation unreliable",
      "Dissatisfiers, because customers will never be pleased no matter how well they are implemented",
      "Indifferent features, because they consume time and budget without affecting customer satisfaction"
    ],
    ans: 3,
    explain: "Indifferent features should be eliminated — they consume sprint capacity and budget without moving customer satisfaction in either direction.",
    deep: "Every story in the backlog costs time and money to build. Indifferent features have a cost but no return. Eliminating them frees capacity for Exciters and Satisfiers that actually delight customers."
  },
  {
    cat: "estimation",
    diff: "easy",
    q: "What is a story point, and what does it measure?",
    opts: [
      "A relative measure of effort that captures complexity, uncertainty, and amount of work together",
      "A financial measure of business value expressed in currency units",
      "An absolute time estimate — one story point equals one hour of development work",
      "A count of the number of tasks contained within a single user story"
    ],
    ans: 0,
    explain: "A story point is a relative measure of effort — not hours. It captures complexity, uncertainty, and work together in one number relative to other stories.",
    deep: "Story points are relative to the team's own scale. A 5-point story for one team may be a 13-point story for another. The value lies in comparison within a team, not across teams."
  },
  {
    cat: "estimation",
    diff: "easy",
    q: "Why do Planning Poker participants reveal their votes simultaneously rather than one at a time?",
    opts: [
      "Because the Scrum Guide mandates simultaneous reveal as a ceremony rule",
      "To prevent anchoring bias — nobody is influenced by others' estimates before they vote",
      "To save time during the estimation session by getting all votes at once",
      "To make it easier for the Scrum Master to record all estimates at once"
    ],
    ans: 1,
    explain: "Simultaneous reveal prevents anchoring bias. If one influential person votes first, others may adjust their own estimates toward that number rather than thinking independently.",
    deep: "Anchoring is a well-documented cognitive bias where the first number mentioned in a discussion disproportionately influences all subsequent estimates. Simultaneous reveal neutralises it."
  },
  {
    cat: "estimation",
    diff: "easy",
    q: "What happens in Planning Poker when team members' votes are significantly different from each other?",
    opts: [
      "The average of all votes is calculated and used as the final estimate",
      "The highest estimate is automatically selected to avoid under-estimating",
      "The team discusses their reasoning and re-votes until the group reaches unanimity",
      "The Product Owner casts the deciding vote to break the deadlock"
    ],
    ans: 2,
    explain: "Divergent votes trigger discussion. Team members share their reasoning, which often reveals different assumptions or knowledge gaps. The team then re-votes until reaching unanimous consensus.",
    deep: "Wide disagreement is valuable information. It usually means one person knows something others don't, or the story is poorly understood. The discussion itself is often more valuable than the final number."
  },
  {
    cat: "estimation",
    diff: "easy",
    q: "T-shirt sizing uses XS, S, M, L, XL labels. When is this technique most useful?",
    opts: [
      "When teams need to replace points forever",
      "When sprint capacity needs precise planning",
      "When sizes must be compared across teams",
      "When many unclear stories need quick sizing"
    ],
    ans: 3,
    explain: "T-shirt sizing is best for large backlogs with big, unclear stories where Fibonacci numbers would create false precision. It is fast and good for rough relative sizing.",
    deep: "If a story is too unclear to estimate with a Fibonacci number, forcing a \"13\" or \"20\" implies precision that doesn't exist. An \"L\" or \"XL\" honestly communicates the order of magnitude without false accuracy."
  },
  {
    cat: "estimation",
    diff: "med",
    q: "Planning Poker uses a modified Fibonacci sequence (1, 2, 3, 5, 8, 13, 20, 40, 100) instead of a linear scale. Why?",
    opts: [
      "Growing gaps between numbers reflect growing uncertainty — large stories have proportionally more unknowns",
      "The Fibonacci sequence is easier to memorise than a linear scale of equal intervals",
      "The sequence was mandated by the original Scrum Alliance guidelines for estimation",
      "Fibonacci numbers are statistically proven to reduce average estimation error by 40%"
    ],
    ans: 0,
    explain: "Growing gaps reflect growing uncertainty. A 13-point story has significantly more unknowns than an 8 — the larger gap between them is intentional and meaningful.",
    deep: "Using a linear scale (1,2,3,4,5,6...) implies the difference between a 6 and a 7 is as well-understood as the difference between a 1 and a 2. The Fibonacci gaps prevent this false precision for large items."
  },
  {
    cat: "estimation",
    diff: "med",
    q: "The Bucket System is suited for large backlogs. What makes it faster than Planning Poker for this use case?",
    opts: [
      "It uses fewer estimation values, making decisions faster for each individual story",
      "One story is placed as a reference point, then team members split up and place remaining stories independently in parallel",
      "The Product Owner pre-assigns all stories to buckets, removing the need for team discussion",
      "Stories are estimated in batches of ten, reducing the number of estimation rounds needed"
    ],
    ans: 1,
    explain: "The Bucket System uses a \"divide and conquer\" approach. After one reference story is placed, remaining stories are divided among team members who estimate independently — then review together.",
    deep: "Planning Poker requires the whole team to discuss every story sequentially. The Bucket System parallelises the work. For 200 stories, Planning Poker takes days; the Bucket System can take hours."
  },
  {
    cat: "estimation",
    diff: "med",
    q: "Big/Uncertain/Small estimation is described as a simplification of the Bucket System. What does it sacrifice for speed?",
    opts: [
      "It sacrifices accuracy entirely — the three categories provide no useful sizing information",
      "It sacrifices team involvement — only the Scrum Master assigns items to the three categories",
      "It sacrifices granularity — three broad categories are less precise than the Bucket System's 13 buckets",
      "It sacrifices repeatability — the same story might be classified differently every time it is used"
    ],
    ans: 2,
    explain: "Big/Uncertain/Small sacrifices granularity for speed. Three broad categories give less precision than 13 buckets, but the trade-off is worthwhile when a rough sort is all that is needed.",
    deep: "For an initial backlog triage, knowing which items are roughly \"big,\" \"uncertain,\" or \"small\" is often enough to start planning. Fine-grained estimates can be added to individual stories closer to their sprint."
  },
  {
    cat: "estimation",
    diff: "med",
    q: "In the Ordering Protocol technique, what does it mean when a team member chooses to \"pass\" on their turn?",
    opts: [
      "They are removing the item from the backlog because it lacks sufficient detail to estimate",
      "They are delegating their turn to the Scrum Master to break any potential deadlock",
      "They are flagging the item for removal from the sprint backlog entirely",
      "They are satisfied with the item's current position on the scale and do not want to change it"
    ],
    ans: 3,
    explain: "Passing means the team member is satisfied with the item's current position on the low-to-high scale. When all members pass in sequence, the ordering is considered complete.",
    deep: "The Ordering Protocol is complete when everyone passes consecutively — meaning consensus has been reached on the relative ordering of all items without any individual needing to move anything."
  },
  {
    cat: "estimation",
    diff: "hard",
    q: "A team is estimating a story and one developer votes 3 while another votes 20. What should the Scrum Master facilitate next?",
    opts: [
      "Ask the developer who voted 20 to justify their estimate so the team can identify what they know that others may not",
      "Average the two votes to get 11.5 and round to the nearest Fibonacci number",
      "Discard both extreme votes and take the median of the remaining estimates",
      "Ask the Product Owner to clarify the requirement so both developers can re-estimate alone"
    ],
    ans: 0,
    explain: "Wide divergence triggers discussion. The team should ask both the highest and lowest voter to share their reasoning. Often, one has identified complexity or risk the others hadn't considered.",
    deep: "A 3-vs-20 split is not a problem to be averaged away — it is a signal that the story is not uniformly understood. The discussion that follows is where the most value is created."
  },
  {
    cat: "estimation",
    diff: "hard",
    q: "Why is it important that story point scales are NOT used to compare velocity across different teams?",
    opts: [
      "Because velocity must stay private within teams",
      "Because each team calibrates points differently",
      "Because teams may use different point sequences",
      "Because points are being replaced by a standard"
    ],
    ans: 1,
    explain: "Each team calibrates their own point scale based on their specific experience, tech stack, and working style. Cross-team comparison is meaningless — and creates harmful competition.",
    deep: "Comparing team velocities creates an incentive to inflate estimates artificially. Velocity is a within-team planning tool only — it tells you how much THIS team can commit to, not how productive they are."
  },
  {
    cat: "estimation",
    diff: "hard",
    q: "A story receives a Planning Poker estimate of 100. What should the team do with this story?",
    opts: [
      "Reject the estimate and re-vote until the team reaches a number below 40",
      "Accept the estimate and plan the story across multiple sprints as a large item",
      "Decompose the story into smaller sub-stories before attempting to estimate it again",
      "Escalate to the Product Owner and ask them to reduce the story's scope"
    ],
    ans: 2,
    explain: "A 100-point estimate signals the story is too large — it is effectively an Epic. It should be broken into smaller, independently estimable stories before being added to a sprint.",
    deep: "A 100-point story cannot be completed in a single sprint. Breaking it down makes estimates more accurate, enables parallel work, and allows the team to deliver parts of the value earlier."
  },
  {
    cat: "estimation",
    diff: "hard",
    q: "The Divide Until Maximum Size technique sets a maximum story size before estimation begins. What is the benefit of this constraint?",
    opts: [
      "It reduces the total number of stories in the backlog by merging small related stories",
      "It ensures all stories take exactly the same amount of time to complete each sprint",
      "It allows the Scrum Master to assign stories to developers based on their maximum daily capacity",
      "It forces stories to be small enough to complete within a sprint, preventing large uncommittable items from entering the backlog"
    ],
    ans: 3,
    explain: "Setting a maximum size ensures every backlog item is small enough to be completed within a sprint. Stories that exceed the limit are split until they comply.",
    deep: "Large stories create commitment uncertainty — can we finish it this sprint? Small stories allow confident commitment and cleaner sprint planning. The technique enforces the \"small\" part of the INVEST criteria."
  },
  {
    cat: "factors",
    diff: "easy",
    q: "How many factors does the lecture identify that collectively determine a story's size (story points)?",
    opts: [
      "Six: design, coding, testing, and expertise",
      "Four: design, coding, testing, and review",
      "Three: coding, testing, and deployment",
      "Two: complexity and assigned developers"
    ],
    ans: 0,
    explain: "Six factors determine story size: Design, Coding, Unit Testing, Integration Testing, Acceptance Testing, and Team Expertise.",
    deep: "Story points are not just about coding. A story with simple code but complex integration or high uncertainty due to new technology will be larger than the code volume alone suggests."
  },
  {
    cat: "factors",
    diff: "easy",
    q: "Why does \"Team Expertise\" affect a story's point estimate?",
    opts: [
      "Team expertise determines which Fibonacci number is closest to the actual hours required",
      "A team unfamiliar with the technology or domain needs extra time to learn — this uncertainty adds to the estimate",
      "More experienced teams always produce better code and therefore get more story points",
      "Story points decrease automatically as team expertise increases over time"
    ],
    ans: 1,
    explain: "A team new to a technology or domain must account for learning time in their estimate. An experienced team would estimate the same story lower because they have no learning curve.",
    deep: "This is why story points are team-relative. Transferring a team's velocity data to a different team is meaningless — the new team has different expertise and will estimate the same stories differently."
  },
  {
    cat: "factors",
    diff: "easy",
    q: "What is the difference between Unit Testing effort and Integration Testing effort when estimating a story?",
    opts: [
      "Unit tests are automated; integration tests are manual",
      "Unit tests check UI; integration tests check the database",
      "Unit tests isolate parts; integration tests check interactions",
      "Unit tests are developer work; integration tests are QA work"
    ],
    ans: 2,
    explain: "Unit testing checks individual code components in isolation. Integration testing checks how the new feature interacts with other existing features — which can be extensive for stories touching many system components.",
    deep: "A story that adds a simple display change has minimal integration testing needs. A story that connects a new payment provider touches security, billing, notifications, and reporting — major integration testing effort."
  },
  {
    cat: "factors",
    diff: "med",
    q: "During Sprint Planning, user stories are broken into tasks. How are tasks estimated, and how does this differ from story point estimation?",
    opts: [
      "Tasks use days set by the Scrum Master",
      "Tasks are not estimated in Scrum",
      "Tasks use points just like stories do",
      "Tasks use hours; stories use story points"
    ],
    ans: 3,
    explain: "Tasks are estimated in hours for sprint-level scheduling. Stories use story points for relative sizing at the backlog level. These are two different levels of planning precision.",
    deep: "Hours are appropriate for tasks because the team has decided what to build and how — the uncertainty is gone. Points are appropriate for stories because exact implementation is still unknown."
  },
  {
    cat: "factors",
    diff: "med",
    q: "A story has simple coding requirements but very complex acceptance testing criteria. How should this affect its story point estimate?",
    opts: [
      "Estimate total effort, including acceptance testing",
      "Split points into separate coding and testing values",
      "Reject the story because acceptance is too complex",
      "Estimate only coding because code is the deliverable"
    ],
    ans: 0,
    explain: "Story points capture total effort across all dimensions. Complex acceptance testing adds real effort that must be reflected in the estimate even if the coding is straightforward.",
    deep: "A story that takes 4 hours to code but 3 days to test and demonstrate to stakeholders is not a small story. Ignoring testing effort consistently leads to sprint overruns."
  },
  {
    cat: "factors",
    diff: "med",
    q: "Why is the Design factor important when estimating a story that uses technology the team has not worked with before?",
    opts: [
      "Design only applies to front-end stories",
      "Research and design uncertainty add effort",
      "New technology always gets maximum points",
      "New technology always requires full redesign"
    ],
    ans: 1,
    explain: "When the team doesn't know how to implement a story, research and design time must be included in the estimate. This uncertainty is a legitimate cost that drives the point value up.",
    deep: "Ignoring design uncertainty is a common cause of sprint failure. The team commits to 5 points based on coding effort alone, then spends 2 days just figuring out the approach before writing a line of code."
  },
  {
    cat: "factors",
    diff: "hard",
    q: "Two different teams estimate the same user story. Team A gives it 5 points; Team B gives it 13 points. Does this mean one team is wrong?",
    opts: [
      "No — but both teams should re-estimate together to establish a shared standard",
      "Yes — the higher estimate should always be used as a safety buffer to prevent under-commitment",
      "No — each team calibrates to their own context; the same story can legitimately be different sizes for different teams",
      "Yes — story points are universal, so one team has made an estimation error that needs to be corrected"
    ],
    ans: 2,
    explain: "Neither team is wrong. Story points are relative to each team's experience, technology stack, and working style. The same story is genuinely a different size for different teams.",
    deep: "This is why comparing velocities across teams is meaningless. Team A's \"5\" and Team B's \"13\" may represent exactly the same amount of actual work — they just calibrated their scales differently."
  },
  {
    cat: "factors",
    diff: "hard",
    q: "A story's coding is straightforward, but it touches six other features that all need regression testing. Which estimation factor drives up the story point estimate most in this case?",
    opts: [
      "Acceptance Testing — the Product Owner will need to approve six separate feature interactions",
      "Design — the interaction with six features requires significant architectural planning",
      "Team Expertise — the team must learn the six related systems before they can test them",
      "Integration Testing — the story touches many system components requiring extensive cross-feature testing"
    ],
    ans: 3,
    explain: "Integration Testing is the primary driver here. A story that touches six other features requires testing all of those interaction points — significantly more work than the coding itself.",
    deep: "Stories at the intersection of many system components are often underestimated because teams focus on coding effort and overlook the integration testing burden. Six-feature touchpoints can multiply test effort many times over."
  },
  {
    cat: "financial",
    diff: "easy",
    q: "What does ROI stand for, and what does it measure?",
    opts: [
      "Return on Investment — the ratio of net profit to the cost of investment",
      "Risk of Implementation — the probability that a project will fail to deliver value",
      "Release of Increment — the process of shipping working software to end users",
      "Rate of Iteration — the number of sprints completed per month"
    ],
    ans: 0,
    explain: "ROI = Return on Investment. It measures the ratio of net profit to the cost of investment — how much value is returned for every dollar spent.",
    deep: "Scrum emphasises value-driven delivery. ROI provides a financial lens to justify project decisions. A project with ROI of 1.4 returns $1.40 for every $1.00 invested — a 140% return."
  },
  {
    cat: "financial",
    diff: "easy",
    q: "A project costs $125,000 and is expected to generate $300,000. What is the ROI?",
    opts: [
      "240% — based on total revenue as a percentage of cost",
      "140% — based on net profit ($175,000) divided by cost ($125,000)",
      "58% — based on cost as a percentage of revenue",
      "175% — based on revenue divided by cost"
    ],
    ans: 1,
    explain: "ROI = (Revenue − Cost) ÷ Cost = ($300,000 − $125,000) ÷ $125,000 = $175,000 ÷ $125,000 = 1.4 = 140%.",
    deep: "The formula uses NET profit (revenue minus cost), not gross revenue. A common mistake is dividing revenue by cost directly — that gives a different number and is not the ROI formula."
  },
  {
    cat: "financial",
    diff: "easy",
    q: "What is the Payback Period, and what does it tell a business?",
    opts: [
      "The number of sprints before the team can begin delivering value to end users",
      "The period during which the project is protected from scope changes by stakeholders",
      "The amount of time it takes to recover the initial investment cost through the project's cash flows",
      "The maximum time allowed before a project must be cancelled for underperformance"
    ],
    ans: 2,
    explain: "The Payback Period is the time it takes to recover the initial investment. A shorter payback period means less financial risk.",
    deep: "Payback Period = Initial Investment ÷ Annual Cash Flow. A $100M project generating $25M/year has a 4-year payback period. After year 4, the project generates pure profit."
  },
  {
    cat: "financial",
    diff: "easy",
    q: "What is the formula for calculating the Payback Period?",
    opts: [
      "(Revenue − Cost) ÷ Cost",
      "Net Present Value ÷ Discount Rate",
      "Annual Cash Flow ÷ Initial Investment × 100",
      "Initial Investment ÷ Annual Cash Flow"
    ],
    ans: 3,
    explain: "Payback Period = Initial Investment ÷ Annual Cash Flow. The result gives the number of years (or periods) until the investment is fully recovered.",
    deep: "Example: $100M ÷ $25M/year = 4 years. After 4 years, the project has broken even. Everything earned after year 4 is net profit."
  },
  {
    cat: "financial",
    diff: "med",
    q: "What concept does Net Present Value (NPV) account for that a simple profit calculation ignores?",
    opts: [
      "The time-value of money — a dollar received in the future is worth less than a dollar received today",
      "The opportunity cost of assigning developers to one project instead of another",
      "The likelihood that stakeholder requirements will change before the project is complete",
      "The technical risk associated with implementing complex software features"
    ],
    ans: 0,
    explain: "NPV accounts for the time-value of money. A dollar received in 3 years is worth less than a dollar today because of inflation and foregone investment opportunities.",
    deep: "A project promising $800 in 3 years at 8% discount rate is only worth ~$635 in today's money. If the project costs $1,000 today, its NPV is negative — it loses money in real terms despite nominal profit."
  },
  {
    cat: "financial",
    diff: "med",
    q: "A project has a nominal profit of $500,000 but a negative NPV. What does this mean for the investment decision?",
    opts: [
      "More scope should be added until NPV rises",
      "Future cash flows lose value in today's terms",
      "The negative NPV must be a formula error",
      "Nominal profit is enough to approve it"
    ],
    ans: 1,
    explain: "A negative NPV means the project's future cash flows are worth less in today's dollars than the initial investment — it destroys value in real terms despite appearing nominally profitable.",
    deep: "This is why NPV is more sophisticated than simple profit calculation. It accounts for the fact that money promised in 5 years is genuinely worth less than money in hand today."
  },
  {
    cat: "financial",
    diff: "med",
    q: "Why does Scrum emphasise project justification before and during a project, not just at the start?",
    opts: [
      "The Scrum Master is required to present ROI calculations at every Sprint Review",
      "Ongoing justification allows the team to request additional budget from the sponsor at any time",
      "Scrum values value-driven delivery — if a project stops generating sufficient value, it should be re-evaluated or stopped",
      "Legal regulations require ongoing financial reporting for all software projects"
    ],
    ans: 2,
    explain: "Scrum emphasises continuous value delivery. If the project's ROI or NPV becomes negative during development, the organisation should re-evaluate whether to continue.",
    deep: "This is one of Agile's key advantages over Waterfall. Traditional projects commit to completion regardless of changing business conditions. Scrum allows the organisation to pivot or stop before further value is lost."
  },
  {
    cat: "financial",
    diff: "hard",
    q: "Two projects have the same ROI but different payback periods — Project A recovers investment in 2 years, Project B in 6 years. Which is generally preferable and why?",
    opts: [
      "Project B is preferable because longer projects always generate more total value over time",
      "Both are equally attractive since ROI is the same — payback period is irrelevant when ROI matches",
      "Project B is preferable because a longer payback period means the project generates cash flows for longer",
      "Project A is preferable because it recovers the investment sooner, reducing financial risk and freeing capital earlier"
    ],
    ans: 3,
    explain: "Project A is preferable. A shorter payback period means the organisation recovers its investment faster, reducing exposure to risk and freeing capital for other investments sooner.",
    deep: "A 6-year payback period means 6 years of risk — the project could be cancelled, the market could change, or the technology could be obsoleted before breaking even. Shorter payback = lower risk."
  },
  {
    cat: "financial",
    diff: "hard",
    q: "Scrum's iterative delivery model affects ROI compared to Waterfall's single release. How?",
    opts: [
      "Scrum delivers returns earlier through increments",
      "ROI is identical if total features match",
      "Waterfall raises ROI through one polished release",
      "Scrum lowers ROI because planning adds overhead"
    ],
    ans: 0,
    explain: "Scrum starts generating returns from Sprint 1. Earlier returns reduce the effective payback period and improve ROI compared to Waterfall, where value is only realised at the single final release.",
    deep: "A Waterfall project delivering in 2 years generates no return for 24 months. A Scrum project may release working features after Sprint 3 (6 weeks). Those early returns compound, significantly improving overall ROI."
  },
  {
    cat: "financial",
    diff: "hard",
    q: "A project has positive ROI but a payback period of 8 years. What additional concern should the business consider before approving it?",
    opts: [
      "Whether the sponsor will still oversee delivery",
      "Whether the market will still be relevant then",
      "Whether the ROI discount rate is conservative",
      "Whether story points cover all 8 years of work"
    ],
    ans: 1,
    explain: "An 8-year payback period means 8 years of risk — the market may shift, the technology may be obsoleted, or the competitive landscape may make the product irrelevant before it breaks even.",
    deep: "ROI alone is not sufficient for investment decisions. Payback period adds a time-risk dimension. A 200% ROI over 10 years may be less attractive than a 100% ROI over 2 years in a fast-moving market."
  },
  {
    cat: "quality",
    diff: "easy",
    q: "Who is responsible for defining the Acceptance Criteria for a user story?",
    opts: [
      "The development team, based on technical constraints and implementation details",
      "External QA testers, who determine what conditions must pass before acceptance",
      "The Product Owner, who represents the customer and defines what \"done\" looks like for each story",
      "The Scrum Master, who mediates between business and technical requirements"
    ],
    ans: 2,
    explain: "The Product Owner defines Acceptance Criteria — they represent the customer and are responsible for articulating what the story must achieve to be accepted.",
    deep: "At the end of each sprint, the PO reviews each story against its Acceptance Criteria. Stories that fail are returned to the Product Backlog for the next sprint — they do not count as delivered."
  },
  {
    cat: "quality",
    diff: "easy",
    q: "What happens to a user story that fails its Acceptance Criteria at the Sprint Review?",
    opts: [
      "The development team receives no velocity credit and must fix it overnight",
      "It is marked as partially complete and counts for half its story points in velocity",
      "It is automatically carried into the next sprint without re-prioritisation",
      "It is returned to the Product Backlog and re-prioritised for a future sprint"
    ],
    ans: 3,
    explain: "Stories that fail Acceptance Criteria are returned to the Product Backlog. They count as zero toward velocity and must be re-prioritised and re-committed in a future sprint.",
    deep: "This \"all or nothing\" rule is what keeps quality high. If partial completion counted, teams would be incentivised to ship half-finished stories. Returning them to the backlog ensures they are fully addressed."
  },
  {
    cat: "quality",
    diff: "easy",
    q: "What is Technical Debt in Scrum, and what causes it?",
    opts: [
      "Deferred or rushed work that gains cost over time",
      "Training cost for an unfamiliar codebase",
      "Money owed for licences and infrastructure",
      "Bugs tracked in a separate debt register"
    ],
    ans: 0,
    explain: "Technical debt is work deferred or rushed to meet higher priorities. Like financial debt, it accrues — the longer it is left, the more expensive it becomes to address.",
    deep: "Skipping error handling in Sprint 1 to ship faster creates technical debt. When that missing handling causes bugs in Sprint 4, fixing it costs far more than it would have originally."
  },
  {
    cat: "quality",
    diff: "med",
    q: "What is the difference between Quality Control and Quality Assurance in Scrum?",
    opts: [
      "QC tracks coverage; QA tracks stakeholder ratings",
      "QC executes quality work; QA evaluates quality process",
      "QC checks sprints; QA checks only final releases",
      "QC belongs to developers; QA belongs to Scrum Masters"
    ],
    ans: 1,
    explain: "Quality Control = executing planned quality activities while building deliverables (are we building it right?). Quality Assurance = evaluating the processes and standards that govern quality (are we building the right thing?).",
    deep: "QC is embedded in every sprint — testing, code review, and demonstration. QA is more systemic — evaluating whether the team's overall processes reliably produce quality outcomes."
  },
  {
    cat: "quality",
    diff: "med",
    q: "What is the purpose of Quality Planning in Scrum?",
    opts: [
      "Assigning quality duties to individuals",
      "Scheduling fixed test days in each sprint",
      "Prioritising quality where it matters most",
      "Writing the full test plan before Sprint 1"
    ],
    ans: 2,
    explain: "Quality Planning ensures the team focuses quality efforts on essential functionality first. Technical debt is acknowledged as a planned cost that must be paid back — not ignored.",
    deep: "Prioritisation and quality are linked. By focusing quality effort on Must Have stories first, the most important features meet the highest standard. Lower-priority work may accumulate debt that is consciously paid later."
  },
  {
    cat: "quality",
    diff: "med",
    q: "Why does accumulating technical debt tend to reduce team velocity over time?",
    opts: [
      "It adds backlog items and lengthens planning",
      "It directly lowers future story point estimates",
      "The Scrum Master lowers sprint commitments",
      "Old shortcuts make future changes slower"
    ],
    ans: 3,
    explain: "Technical debt makes the codebase harder to work with over time. Future stories take longer because developers must navigate, work around, or fix earlier shortcuts — reducing the team's effective throughput.",
    deep: "Teams that never pay down technical debt often see a velocity trend that looks like: Sprint 1-5 high velocity, Sprint 10-20 noticeably lower. The debt is silently compounding in the background."
  },
  {
    cat: "quality",
    diff: "hard",
    q: "A story meets its Acceptance Criteria but the code has no unit tests and was never reviewed. Is the story \"done\" in Scrum?",
    opts: [
      "No — the Definition of Done typically requires code review and unit testing; meeting AC alone is insufficient",
      "Yes — the Product Owner accepted it based on Acceptance Criteria, which is the authoritative definition",
      "Yes, but the team should voluntarily add tests in the next sprint as a goodwill gesture",
      "It depends on whether unit testing was listed as a task in the sprint backlog"
    ],
    ans: 0,
    explain: "No. The Definition of Done requires all quality criteria to be met — including code review and unit testing. Acceptance Criteria confirm the story works as specified; the DoD confirms it was built properly.",
    deep: "A story that skips the DoD creates hidden technical debt. The PO should not accept it. Accepting it sets a precedent that quality criteria are optional, degrading team standards over time."
  },
  {
    cat: "quality",
    diff: "hard",
    q: "How does Scrum's approach of embedding quality into every sprint differ from traditional projects that test at the end?",
    opts: [
      "Scrum requires more total testing effort because every sprint includes testing overhead",
      "Bugs are discovered within days in Scrum rather than months in Waterfall — making them dramatically cheaper to fix",
      "Traditional projects have higher quality because dedicated testing teams work without developer interruption",
      "Scrum eliminates the need for final release testing by spreading it across sprints"
    ],
    ans: 1,
    explain: "In Scrum, bugs are discovered within a 1–2 week sprint — when the code is fresh and context is clear. In Waterfall, bugs are found months or years later when fixing them requires re-understanding large amounts of old code.",
    deep: "Research consistently shows that bugs found and fixed in the sprint they are introduced cost 10–100x less than bugs found in final testing or production. Continuous quality is not just better — it is significantly cheaper."
  },
  {
    cat: "hr",
    diff: "easy",
    q: "Tuckman's Model describes four stages of team development. In which order do they occur?",
    opts: [
      "Storming → Forming → Norming → Performing",
      "Norming → Forming → Performing → Storming",
      "Forming → Storming → Norming → Performing",
      "Forming → Norming → Storming → Performing"
    ],
    ans: 2,
    explain: "Tuckman's stages in order: Forming → Storming → Norming → Performing. Teams must pass through all four stages to reach peak performance.",
    deep: "Teams cannot skip Storming. Conflict is necessary for teams to establish working norms, resolve power dynamics, and build genuine trust. Teams that avoid conflict often have hidden tensions that surface later."
  },
  {
    cat: "hr",
    diff: "easy",
    q: "At which Tuckman stage does a Scrum team achieve stable velocity and confident sprint commitments?",
    opts: [
      "Forming — the team is motivated and eager to prove themselves",
      "Norming — the team has resolved conflicts and is beginning to collaborate",
      "Storming — conflict forces the team to clarify roles and expectations",
      "Performing — roles are established, trust is high, and the team operates at maximum effectiveness"
    ],
    ans: 3,
    explain: "The Performing stage is when velocity stabilises and the team can commit confidently. Trust, clear roles, and established norms allow the team to operate at peak efficiency.",
    deep: "A Forming team has low, unpredictable velocity because they are still figuring out how to work together. A Performing team's velocity is stable and predictable — making sprint planning reliable."
  },
  {
    cat: "hr",
    diff: "easy",
    q: "McGregor's Theory Y assumes employees are motivated in which way?",
    opts: [
      "Employees are self-motivated, seek responsibility, and perform best when given autonomy",
      "Employees are inherently lazy and require supervision and incentives to perform adequately",
      "Employees are neutral and will perform exactly as directed — no more, no less",
      "Employees are motivated primarily by financial rewards and will work harder for higher pay"
    ],
    ans: 0,
    explain: "Theory Y assumes employees are self-motivated, seek greater responsibility, and perform best when given autonomy and trust — not micromanagement.",
    deep: "Scrum is built on Theory Y assumptions. Self-organising teams, people choosing their own work, and the Scrum Master as servant-leader all reflect the belief that people want to do good work."
  },
  {
    cat: "hr",
    diff: "med",
    q: "The \"Storming\" stage of Tuckman's Model is often uncomfortable. Why is it considered necessary rather than something to avoid?",
    opts: [
      "The discomfort of Storming motivates team members to improve their individual performance",
      "Conflict during Storming forces the team to establish working norms, clarify roles, and build authentic trust",
      "Storming produces creative energy that leads directly to higher sprint velocity",
      "Storming is required by the Scrum Guide as a formal ceremony in early sprints"
    ],
    ans: 1,
    explain: "Storming forces the team to confront differences in working style, establish norms, and resolve power dynamics — creating the authentic foundation needed for effective Performing.",
    deep: "Teams that skip Storming (through excessive politeness or avoidance) often seem to perform well early but have hidden tensions. These typically surface destructively later when pressure increases."
  },
  {
    cat: "hr",
    diff: "med",
    q: "In conflict management, what makes the Win-Win outcome the most desirable for a Scrum team?",
    opts: [
      "Win-Win is the only legally acceptable conflict resolution approach in team environments",
      "Win-Win outcomes take the least time to achieve, leaving more time for development",
      "All parties reach an acceptable solution, preserving trust and collaboration for future sprints",
      "Win-Win means the team lead gets their preferred outcome without visible opposition"
    ],
    ans: 2,
    explain: "Win-Win preserves trust and collaboration. All parties feel heard and respected — making future collaboration more effective and preventing resentment that would damage team cohesion.",
    deep: "Win-Lose outcomes may resolve the immediate conflict but create resentment that undermines future collaboration. In a Scrum team that works together every sprint, relationship damage compounds over time."
  },
  {
    cat: "hr",
    diff: "hard",
    q: "Maslow's Hierarchy suggests that Safety needs (level 2) must be met before Esteem needs (level 4). What does this mean for a Scrum Master managing their team?",
    opts: [
      "Norming must come before esteem motivation",
      "Physical office safety must come before praise",
      "Salary needs must come before challenging work",
      "Psychological safety must come before recognition"
    ],
    ans: 3,
    explain: "If team members don't feel psychologically safe — afraid to voice concerns or admit mistakes — higher-level motivators like recognition and challenging work will have little effect.",
    deep: "A Retrospective is a perfect example. If the team doesn't feel safe to say \"that approach didn't work,\" the Retrospective produces no improvement. Psychological safety (level 2) is the prerequisite for effective learning."
  },
  {
    cat: "hr",
    diff: "hard",
    q: "A Scrum Master micromanages developers, assigns all tasks personally, and checks in every hour. Which management theory best describes this behaviour, and is it compatible with Scrum?",
    opts: [
      "Theory X; it violates self-organization",
      "Win-Win; it balances work across the team",
      "Theory Y; it shows engaged servant leadership",
      "Tuckman Forming; it naturally fades later"
    ],
    ans: 0,
    explain: "This is Theory X behaviour — assuming developers cannot be trusted to manage themselves. It directly violates Scrum's Self-Organization principle and the Scrum Master's servant-leader role.",
    deep: "Micromanagement destroys the psychological safety and autonomy that Scrum depends on. A Scrum Master who assigns tasks is not a Scrum Master — they are a traditional project manager in Scrum clothing."
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
  id: 'lecture3',
  title: 'Lecture 3',
  subtitle: 'Agile Project Management',
  description: '65 deep Q&A questions on Agile planning, prioritization, estimation, financial value, quality, and HR theories.',
  categories,
  questions: lecture3Questions.map(shuffleQuestionOptions)
});
})();
