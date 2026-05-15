import { useEffect, useState } from "react";
export default function AdvisoryWebsite() {
  const services = [
    {
      title: "Enterprise Transformation Strategy",
      text: "Define AI-first transformation vision, prioritize high-impact initiatives, and build a clear roadmap aligned to business outcomes.",
    },
    {
      title: "AI Strategy & Governance",
      text: "Establish enterprise AI strategy, governance frameworks, risk controls, and operating models for scalable and responsible adoption.",
    },
    {
      title: "Operating Model & Process Transformation",
      text: "Redesign enterprise processes, standardize operations, and embed AI and automation into core business workflows.",
    },
    {
      title: "AI & Automation Execution",
      text: "Deliver end-to-end execution across AI, automation, copilots, and intelligent workflows to drive measurable outcomes.",
    },
    {
      title: "Managed Services Transformation",
      text: "Transform service desk, infrastructure, cloud, and enterprise operations into AI-first, scalable, and efficient delivery models.",
    },
    {
      title: "Executive Advisory",
      text: "Provide board-level and CXO advisory on transformation strategy, investments, governance, and enterprise-wide execution.",
    },
  ];

  const insights = [
    "Moving from AI Pilots to Enterprise Scale",
    "Building an AI Center of Excellence",
    "AI Governance in Practice",
    "Managed Services Transformation with AI",
    "Agentic AI and the Future of Operations",
    "Measuring ROI from AI Investments",
  ];


  const servicePages = {
    "enterprise-transformation": {
      eyebrow: "Enterprise Transformation Strategy",
      title: "Transform AI ambition into enterprise-scale execution",
      intro:
        "Move from fragmented pilots, modernization activity, and tool-led initiatives to a governance-aware transformation system aligned to measurable business outcomes.",
      challenge:
        "Many enterprises have AI pilots, automation ideas, and platform investments, but momentum gets diluted by unclear priorities, weak decision flows, fragmented ownership, and limited value tracking. The harder question is no longer whether transformation can start; it is whether it can scale with discipline, confidence, and measurable enterprise value.",
      pointOfView:
        "ascAInd approaches transformation as a capability evolution journey. The work connects the AI Continuum, Constraint-to-Value thinking, flow-based architecture, governance rhythm, and workforce readiness into one practical transformation roadmap. The focus is not more activity; it is a clearer system for how value moves through strategy, operations, data, governance, people, and execution.",
      visualTitle: "From fragmented initiatives to enterprise transformation rhythm",
      visualSteps: [
        "Strategic Ambition",
        "Constraint-to-Value Mapping",
        "AI-First Roadmap",
        "Governance Rhythm",
        "Capability Evolution",
        "Value Realization",
      ],
      capabilities: [
        ["Transformation North Star", "Define the ambition, business outcomes, strategic choices, and enterprise transformation priorities."],
        ["Constraint-to-Value Mapping", "Identify decision, operating model, data, governance, and execution constraints that block scale."],
        ["AI-First Roadmap", "Sequence foundation, scaling, adoption, and value realization initiatives into an executable roadmap."],
        ["Governance Rhythm", "Establish executive forums, prioritization logic, decision rights, and value-tracking discipline."],
        ["Capability Evolution", "Assess the capabilities required to move from pilots to repeatable transformation execution."],
        ["Value Realization", "Translate strategy into measurable business, operational, workforce, and customer outcomes."],
      ],
      outcome:
        "The result is a transformation system that helps leadership teams move from ambition to execution with portfolio discipline, governance confidence, and measurable value realization.",
    },
    "ai-strategy-governance": {
      eyebrow: "AI Strategy & Governance",
      title: "Scale AI with confidence, control, and responsible momentum",
      intro:
        "Build an AI strategy and governance operating model that enables innovation without losing control over risk, accountability, trust, and enterprise value.",
      challenge:
        "AI adoption often moves faster than governance. Copilots, GenAI tools, automation agents, and analytics initiatives proliferate before ownership, risk tiering, human oversight, lifecycle controls, and executive reporting are clear.",
      pointOfView:
        "ascAInd positions governance as a strategic enabler, not compliance overhead. The approach uses the AI Continuum to place initiatives by maturity and autonomy, human-complementary AI principles to protect workforce value, fairness-audit thinking to strengthen trust, and layered governance to make accountability visible without slowing responsible innovation.",
      visualTitle: "Responsible AI operating system",
      visualSteps: [
        "AI Ambition",
        "Use-Case Intake",
        "Risk Classification",
        "Human Oversight",
        "Lifecycle Controls",
        "Assurance & Value Tracking",
      ],
      capabilities: [
        ["AI Strategy Blueprint", "Define enterprise AI ambition, investment themes, priority domains, and adoption pathways."],
        ["Governance Operating Model", "Clarify forums, ownership, decision rights, escalation routes, and policy responsibilities."],
        ["Risk & Control Framework", "Classify use cases by risk and apply proportionate controls across the AI lifecycle."],
        ["Human Oversight Design", "Define where humans approve, supervise, intervene, or remain accountable."],
        ["Responsible Scaling", "Move validated AI use cases from pilots into repeatable enterprise adoption."],
        ["Observability & Assurance", "Track performance, risk, fairness, adoption, and business value over time."],
      ],
      outcome:
        "The result is an AI governance foundation that gives leaders the confidence to scale responsibly while preserving speed, trust, and strategic flexibility.",
    },
    "operating-model-transformation": {
      eyebrow: "Operating Model & Process Transformation",
      title: "Redesign how work flows through the AI-enabled enterprise",
      intro:
        "Modernize operating models, workflows, roles, decisions, and process governance so AI and automation improve the way work actually gets done.",
      challenge:
        "Many organizations automate fragments of work without redesigning the operating model. Processes remain complex, handoffs remain manual, roles remain unclear, and modern tools sit on top of legacy ways of working.",
      pointOfView:
        "ascAInd uses Workflow-Empathy-Technology thinking to balance efficiency with human adoption and experience. The 3W lens keeps Work, Workers, and Workplace visible, while RISE/FADE-style thinking helps decide what to reinforce, simplify, elevate, automate, redesign, or retire.",
      visualTitle: "Operating model evolution",
      visualSteps: [
        "Workflow Reality",
        "Decision Ownership",
        "AI & Automation Fit",
        "Governance & Controls",
        "Adoption Readiness",
        "Operational Metrics",
      ],
      capabilities: [
        ["Workflow Redesign", "Map and redesign end-to-end workflows around outcomes, decisions, and experience."],
        ["AI & Automation Embedding", "Identify where intelligence, automation, copilots, and agents can improve work execution."],
        ["Role & Decision Clarity", "Define human, AI, and shared decision responsibilities across the operating model."],
        ["Process Governance", "Create ownership, standards, exception handling, and continuous improvement routines."],
        ["Adoption Readiness", "Address workforce confidence, behavior shifts, skills, and identity transition risks."],
        ["Operational Metrics", "Measure cycle time, quality, experience, productivity, resilience, and value realization."],
      ],
      outcome:
        "The result is not generic process mapping; it is a practical redesign of how work, decisions, systems, controls, and people operate together in an AI-enabled enterprise.",
    },
    "ai-automation-execution": {
      eyebrow: "AI & Automation Execution",
      title: "Turn AI and automation ideas into governed enterprise outcomes",
      intro:
        "Create execution discipline across intake, prioritization, architecture, build, deployment, adoption, monitoring, and measurable value realization.",
      challenge:
        "Enterprises often have more AI and automation ideas than execution capacity. Use cases are captured, but prioritization is unclear. Proofs of concept emerge, but production readiness, controls, integration, adoption, and measurement remain inconsistent.",
      pointOfView:
        "ascAInd treats execution as the bridge between ambition and value. The approach combines use-case intake, feasibility, architecture, human-AI fit design, governance controls, and value tracking. Concepts such as SCOPE-style problem framing, implementation barrier analysis, adaptive scaling, and the 4R model help keep execution grounded in the right problem and the right level of intervention.",
      visualTitle: "Idea-to-impact execution path",
      visualSteps: [
        "Use-Case Intake",
        "Prioritization Engine",
        "Solution Architecture",
        "Production Readiness",
        "Adoption Enablement",
        "Value Tracking",
      ],
      capabilities: [
        ["Use Case Intake", "Capture AI and automation opportunities with business context, effort, risk, and value signals."],
        ["Prioritization Engine", "Rank opportunities by impact, feasibility, readiness, risk, and strategic alignment."],
        ["Solution Architecture", "Design AI, automation, integration, data, security, and governance components together."],
        ["Production Readiness", "Prepare controls, testing, exception handling, monitoring, and support ownership."],
        ["Adoption Enablement", "Ensure users, process owners, and operations teams can confidently adopt the solution."],
        ["Value Tracking", "Measure effort savings, quality improvement, cycle-time reduction, experience, and ROI."],
      ],
      outcome:
        "The result is a disciplined execution model that turns AI and automation opportunities into production-ready outcomes with governance, adoption, and measurable value built in.",
    },
    "managed-services-transformation": {
      eyebrow: "Managed Services Transformation",
      title: "Evolve managed services from labor-centric delivery to AI-first operations",
      intro:
        "Modernize service desk, infrastructure, cloud, workplace, and enterprise operations into predictive, experience-led, automation-enabled delivery ecosystems.",
      challenge:
        "Traditional managed services models are optimized around tickets, resource towers, SLA reporting, and manual escalation. Clients increasingly expect proactive service, predictive insight, self-healing operations, better employee experience, and transparent value realization.",
      pointOfView:
        "ascAInd helps service organizations move from ticket-centric operations to signal-led, AI-assisted, and outcome-driven services. The approach connects AI-first service desk patterns, intelligent operations, service orchestration, knowledge modernization, experience design, and value governance into one transformation roadmap.",
      visualTitle: "From ticket handling to intelligent service orchestration",
      visualSteps: [
        "Service Signals",
        "AI Intake & Triage",
        "Automation & Self-Healing",
        "Knowledge Modernization",
        "Experience Governance",
        "Value Realization",
      ],
      capabilities: [
        ["AI-First Service Desk", "Improve intake, triage, knowledge retrieval, virtual assistance, and automated resolution."],
        ["Intelligent Operations", "Use monitoring signals, event correlation, predictive insights, and automation to reduce noise."],
        ["Service Orchestration", "Connect ITSM, monitoring, identity, endpoint, cloud, and automation workflows."],
        ["Knowledge Modernization", "Improve knowledge quality, chatbot readiness, reuse, and self-service effectiveness."],
        ["Experience Focus", "Design services around employee experience, transparency, responsiveness, and trust."],
        ["Value Governance", "Track productivity, SLA improvement, deflection, MTTR, quality, and client value."],
      ],
      outcome:
        "The result is a future-ready managed services model that improves efficiency while strengthening experience, transparency, governance, and scalable service intelligence.",
    },
    "executive-advisory": {
      eyebrow: "Executive Advisory",
      title: "Help leadership teams navigate the AI frontier with clarity",
      intro:
        "Provide board-level and CXO advisory on AI strategy, transformation choices, governance confidence, operating model alignment, and enterprise-wide execution.",
      challenge:
        "Boards want innovation, business units want speed, technology teams want architecture discipline, risk leaders want control, and employees want clarity. Executives must make decisions in a moving frontier where hype, risk, value, and adoption pressures collide.",
      pointOfView:
        "ascAInd supports executive teams with signal-to-noise leadership, AI frontier portfolio thinking, governance-aware autonomy, human-complementary AI choices, and 3W-based organizational impact assessment. The goal is to help leaders move from uncertainty to structured executive action.",
      visualTitle: "Executive clarity model",
      visualSteps: [
        "Strategic Signals",
        "Leadership Alignment",
        "Investment Choices",
        "Governance Confidence",
        "Capability Roadmap",
        "Transformation Cadence",
      ],
      capabilities: [
        ["Executive Alignment", "Align board, CXO, technology, risk, operations, and business stakeholders around AI priorities."],
        ["AI Investment Choices", "Prioritize where to invest, where to experiment, where to scale, and where to pause."],
        ["Governance Confidence", "Define decision rights, escalation paths, risk controls, and responsible AI guardrails."],
        ["Leadership Workshops", "Facilitate focused sessions on AI strategy, maturity, operating model choices, and execution readiness."],
        ["Capability Roadmap", "Identify leadership, workforce, architecture, data, governance, and execution capabilities required."],
        ["Transformation Cadence", "Create rhythm, metrics, accountability, and momentum for enterprise-wide transformation."],
      ],
      outcome:
        "The result is a trusted executive advisory model that helps leadership teams make clearer AI-era decisions with maturity, judgment, and enterprise transformation discipline.",
    },
  };

  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isAgentFactoryPage = currentHash === "#agent-factory";
  const currentServiceKey = currentHash.replace("#", "");
  const currentServicePage = servicePages[currentServiceKey];

  const goHome = () => {
    window.location.hash = "";
    setCurrentHash("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAgentFactory = () => {
    window.location.hash = "agent-factory";
    setCurrentHash("#agent-factory");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openServicePage = (serviceKey) => {
    window.location.hash = serviceKey;
    setCurrentHash(`#${serviceKey}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Header = () => (
    <header
      onClick={goHome}
      className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/60 cursor-pointer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-3">
        <div className="shrink-0 leading-none">
          {/* Mobile logo */}
          <div className="w-[134px] max-w-[54vw] sm:hidden">
            <div className="flex items-end justify-between w-full">
              <span className="text-2xl font-semibold text-slate-200 leading-none">a</span>
              <span className="text-2xl font-semibold text-slate-200 leading-none">s</span>
              <span className="text-2xl font-semibold text-slate-200 leading-none">c</span>
              <span className="text-sky-400 font-bold text-4xl leading-none relative top-[2px]">
                AI
              </span>
              <span className="text-2xl font-semibold text-slate-200 leading-none">n</span>
              <span className="text-2xl font-semibold text-slate-200 leading-none">d</span>
            </div>

            <div className="h-px bg-sky-400 mt-[1px] mb-[4px] w-full" />

            <p className="uppercase text-[7.5px] text-slate-300 tracking-[0.115em] whitespace-nowrap w-full text-center leading-none">
              Enterprise Transformation
            </p>
          </div>

          {/* Desktop logo */}
          <div className="hidden sm:block w-[219px]">
            <div className="flex items-end justify-between w-full">
              <span className="text-4xl font-semibold text-slate-200">a</span>
              <span className="text-4xl font-semibold text-slate-200">s</span>
              <span className="text-4xl font-semibold text-slate-200">c</span>
              <span className="text-sky-400 font-bold text-5xl leading-none">AI</span>
              <span className="text-4xl font-semibold text-slate-200">n</span>
              <span className="text-4xl font-semibold text-slate-200">d</span>
            </div>

            <div className="h-px bg-sky-400 mt-0.5 mb-0.5 w-full" />

            <p className="uppercase text-xs text-slate-300 tracking-[0.16em] whitespace-nowrap w-full text-center">
              Enterprise Transformation
            </p>
          </div>
        </div>

        <a
          href="https://calendly.com/ascAInd/30min"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="bg-white text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow-lg inline-block text-center text-xs sm:text-base whitespace-nowrap shrink-0"
        >
          <span className="sm:hidden">Let’s Talk</span>
          <span className="hidden sm:inline">Let’s Talk</span>
        </a>
      </div>
    </header>
  );


  const ServiceDetailPage = ({ page }) => (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      <section className="bg-slate-900 text-white px-5 sm:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-300 mb-4">
            {page.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 max-w-5xl">
            {page.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
            {page.intro}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/ascAInd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 text-slate-950 px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block text-center hover:bg-sky-400 transition"
            >
              Schedule a Discussion
            </a>
            <a
              href="mailto:info@ascaind.com"
              className="border border-slate-500 text-white px-6 py-3 rounded-2xl font-semibold inline-block text-center hover:bg-white/10 transition"
            >
              Email ascAInd
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-3">
              Strategic Challenge
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Why this matters now
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {page.challenge}
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-sky-300 mb-3">
              ascAInd Point of View
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Depth without complexity
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {page.pointOfView}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
              Transformation Model
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {page.visualTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {page.visualSteps.map((step, index) => (
              <div
                key={step}
                className="bg-slate-50 rounded-3xl p-5 shadow-md border border-slate-200 text-center"
              >
                <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-slate-900 text-sky-300 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="font-semibold text-slate-900 leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <div className="mb-10 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
            Capability Blocks
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            What ascAInd helps shape
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {page.capabilities.map(([title, text]) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-14 md:py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
            Executive Outcome
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Move forward with clarity, confidence, and execution discipline
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            {page.outcome}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendly.com/ascAInd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block text-center"
            >
              Schedule a Discussion
            </a>
            <a
              href="mailto:info@ascaind.com"
              className="border border-slate-500 px-6 py-3 rounded-2xl font-semibold inline-block text-center hover:bg-white/10 transition"
            >
              Contact ascAInd
            </a>
          </div>
        </div>
      </section>
    </div>
  );


  const AgentFactoryPage = () => {
    const flowRows = [
      [
        "User Flow",
        "Open the web link → Enter access code → Fill campaign inputs → Run workflow → View marketing review package.",
        "Open form/app/Teams link → Authenticate → Fill inputs → Submit workflow → Receive package → Review/approve.",
      ],
      [
        "Data Flow",
        "Campaign inputs → JSON payload → FastAPI → CrewAI → OpenAI/SERPER → PostgreSQL/logs → UI package.",
        "Form/app inputs → Workflow variables → AI actions → Generated content → Storage/logs → App/email/Teams output.",
      ],
      [
        "Control Flow",
        "React UI → FastAPI APIs → CrewAI orchestration → OpenAI/SERPER → governance logic → response to UI.",
        "Forms/apps → Workflow engine → AI connectors/actions → approval workflow → notifications/storage.",
      ],
      [
        "Security Flow",
        "Access code gate → No frontend secrets → Backend env variables → Server-side API keys → secure logs.",
        "Platform login → secured connectors → managed credentials → role-based permissions → audit-safe logs.",
      ],
      [
        "Governance & Observability",
        "Execution ID → Governance mode → Human review → Risk checklist → token/cost estimate → logged review status.",
        "Workflow run ID → Approval rules → Human review → review notes → run history → approval tracking.",
      ],
    ];

    const layerRows = [
      ["Interaction Layer", "React + Vite web interface hosted on Vercel", "Power Apps / Forms / Teams / n8n forms"],
      ["API Layer", "FastAPI REST endpoints", "Native workflow triggers, HTTP connectors, API actions"],
      ["Orchestration Layer", "Python workflow logic + CrewAI orchestration", "n8n / Power Automate / Copilot Studio workflows"],
      ["Agentic / AI Layer", "CrewAI agents using OpenAI and SERPER enrichment", "AI actions, Copilot prompts, OpenAI connector"],
      ["Data Layer", "PostgreSQL + JSON execution artifacts", "Dataverse / SharePoint / Excel / managed database"],
      ["Governance Layer", "Human-review package, risk review, approval status, execution metrics", "Approval actions, workflow history, audit logs"],
      ["Deployment Layer", "Vercel frontend + Render backend", "Low-code platform hosting and managed workflow runtime"],
    ];

    const toolRows = [
      ["Frontend / UI", "React, Vite, JavaScript", "Power Apps, Microsoft Forms, Teams, n8n forms"],
      ["Backend / Workflow", "FastAPI, Python", "Power Automate, n8n, Copilot Studio"],
      ["Agentic Logic", "CrewAI multi-agent framework", "Low-code AI action blocks and workflow connectors"],
      ["AI Models", "OpenAI models", "OpenAI connector / Copilot / AI Builder"],
      ["Search Enrichment", "SERPER", "Search/API connector or configured web step"],
      ["Persistence", "PostgreSQL", "Dataverse / SharePoint / Excel / managed DB"],
      ["Hosting", "Render + Vercel", "Workflow platform-managed runtime"],
      ["Configuration", "Environment variables", "Connector credentials and connection references"],
    ];

    return (
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <Header />

        <section className="bg-slate-900 text-white px-5 sm:px-8 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-sky-300 mb-4">
              Live in Action
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 max-w-5xl">
              Marketing Campaign Multi-Agent Agentic Workflow
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
              Two business-user experiences for the same marketing campaign workflow,
              helping teams generate AI-assisted campaign content with human-review
              governance, execution visibility, and controlled workflow design.
            </p>

            <div className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://enterprise-ai-agent-factory.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 text-slate-950 px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block text-center hover:bg-sky-400 transition"
                >
                  Open Live Experience
                </a>

                <a
                  href="https://github.com/ysuneja06/enterprise-ai-agent-factory/archive/refs/heads/main.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-500 text-white px-6 py-3 rounded-2xl font-semibold inline-block text-center hover:bg-white/10 transition"
                >
                  Download Engineering Excellence Package
                </a>
              </div>

              <p className="text-sm text-slate-400 mt-4">
                Request access code at{" "}
                <a
                  href="mailto:info@ascaind.com?subject=Access Code Request - Enterprise AI Agent Factory"
                  className="text-slate-200 underline hover:text-sky-400"
                >
                  info@ascaind.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200">
              <p className="text-sm uppercase text-slate-400 mb-3">
                Custom Engineering Architecture
              </p>

              <h2 className="text-3xl font-bold tracking-[0.25em] uppercase mb-6">
                Engineering Excellence Version
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Built using React, FastAPI, CrewAI, OpenAI, SERPER, PostgreSQL,
                Render, and Vercel for deeper control, extensibility, reusable
                components, and platform-grade engineering.
              </p>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="font-semibold mb-2">Best suited for:</p>
                <p className="text-slate-600 leading-relaxed">
                  Organizations that need custom agent logic, API flexibility,
                  deeper governance design, and reusable enterprise AI workflow
                  patterns.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl">
              <p className="text-sm uppercase text-slate-300 mb-3">
                Workflow-Led Configuration
              </p>

              <h3 className="text-3xl font-bold tracking-[0.25em] uppercase text-sky-400 mb-6">
                Low-Code / No-Code Version
              </h3>
              <p className="text-slate-300 leading-relaxed mb-5">
                Built using tools such as n8n, Power Automate, Copilot Studio,
                Forms, Teams, SharePoint, and API connectors for faster
                configuration and business-team maintainability.
              </p>
              <div className="bg-slate-800 rounded-2xl p-5">
                <p className="font-semibold mb-2">Best suited for:</p>
                <p className="text-slate-300 leading-relaxed">
                  Organizations that want faster deployment, lower custom-code
                  dependency, easier maintenance, and workflow-led automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
                Business User Experience
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Same Outcome, Two Delivery Models
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: "Engineering Excellence Version",
                  items: [
                    "Users enter campaign details through a web interface.",
                    "Inputs include company name, campaign goal, target audience, topic, tone, CTA, and governance mode.",
                    "Output includes campaign summary, generated email draft, governance/risk review, approval checklist, and execution metrics.",
                    "Status: Content Ready for Human Review. Approval: Pending.",
                  ],
                },
                {
                  title: "Low-Code / No-Code Version",
                  items: [
                    "Users enter similar details through a form, app, Teams interface, or workflow screen.",
                    "Inputs are captured through low-code forms or workflow variables.",
                    "Output includes campaign summary, generated email draft, governance review, approval checklist, and workflow status.",
                    "Status: Content Ready for Human Review. Approval: Pending.",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="bg-slate-50 rounded-3xl p-6 md:p-8 shadow-md border border-slate-200"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-5">
                    {block.title}
                  </h3>
                  <div className="space-y-4">
                    {block.items.map((item) => (
                      <div
                        key={item}
                        className="bg-white rounded-2xl p-4 border border-slate-200 text-slate-600 leading-relaxed"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
          <div className="mb-10 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
              Enterprise Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Five Architecture Flows
            </h2>
          </div>

          <div className="space-y-5">
            {flowRows.map(([flow, engineering, lowcode]) => (
              <div
                key={flow}
                className="bg-white rounded-3xl p-5 md:p-6 shadow-md border border-slate-200"
              >
                <h3 className="text-xl font-semibold mb-4 text-slate-900">
                  {flow}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                    <p className="font-semibold mb-2">Engineering Excellence</p>
                    <p className="text-slate-600 leading-relaxed">{engineering}</p>
                  </div>
                  <div className="bg-slate-900 text-white rounded-2xl p-4">
                    <p className="font-semibold mb-2">Low-Code / No-Code</p>
                    <p className="text-slate-300 leading-relaxed">{lowcode}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white py-14 md:py-20 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
                Agentic Framework
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Workflow Logic and Human Review
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {[
                ["Research Agent / Step", "Enriches campaign context, market themes, and audience pain points."],
                ["Draft Agent / Step", "Generates the first campaign draft using configured AI prompts or agent tasks."],
                ["Brand Agent / Step", "Refines tone, credibility, and enterprise positioning."],
                ["Review Preparation", "Produces assumptions, risks, checklist, and review package for human approval."],
              ].map(([title, text]) => (
                <div key={title} className="bg-slate-800 rounded-3xl p-6 shadow-xl">
                  <h3 className="text-xl font-semibold mb-4">{title}</h3>
                  <p className="text-slate-300 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
          <div className="mb-10 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
              Layer Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Engineering and Low-Code Comparison
            </h2>
          </div>

          <div className="space-y-4">
            {layerRows.map(([layer, engineering, lowcode]) => (
              <div
                key={layer}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white rounded-3xl p-5 shadow-md border border-slate-200"
              >
                <div className="font-semibold text-slate-900">{layer}</div>
                <div className="text-slate-600 leading-relaxed">{engineering}</div>
                <div className="text-slate-600 leading-relaxed">{lowcode}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-14 md:py-20 px-5 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
                Technology Stack
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Tools and Platform Choices
              </h2>
            </div>

            <div className="space-y-4">
              {toolRows.map(([category, engineering, lowcode]) => (
                <div
                  key={category}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-slate-50 rounded-3xl p-5 shadow-sm border border-slate-200"
                >
                  <div className="font-semibold text-slate-900">{category}</div>
                  <div className="text-slate-600 leading-relaxed">{engineering}</div>
                  <div className="text-slate-600 leading-relaxed">{lowcode}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };

  if (currentServicePage) {
    return <ServiceDetailPage page={currentServicePage} />;
  }

  if (isAgentFactoryPage) {
    return <AgentFactoryPage />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />

      <section className="bg-slate-900 text-white px-5 sm:px-8 py-10 md:py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Transforming Enterprises and Scaling AI with Confidence
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Driving enterprise transformation through AI-first strategy,
              automation, and operating model excellence for measurable business
              impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/ascAInd/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block text-center"
              >
                Schedule a Discussion
              </a>

              <button className="border border-slate-400 px-6 py-3 rounded-2xl font-semibold text-center">
                Download Services Overview
              </button>
            </div>

            <p className="text-sm text-slate-400 mt-4">
              Or email directly at{" "}
              <a
                href="mailto:info@ascaind.com"
                className="text-slate-200 underline hover:text-sky-400"
              >
                info@ascaind.com
              </a>
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Enterprise Transformation Strategy",
                "AI Strategy & Governance",
                "Operating Model Transformation",
                "Executive Advisory",
              ].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="bg-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer block"
                >
                  <h3 className="font-semibold text-base sm:text-lg">{item}</h3>
                </a>
              ))}
            </div>

            <button
              onClick={openAgentFactory}
              className="mt-5 w-full rounded-full bg-sky-500 px-6 py-4 text-base sm:text-lg text-slate-950 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-sky-400"
            >
              <span className="font-bold">Live in Action:</span>{" "}
              Enterprise - AI-Agent - Factory
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <div className="text-center mb-8 md:mb-5">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
            About
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-5">
            Enterprise Impact at Scale
          </h2>

          <p className="max-w-4xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
            Enterprise transformation leadership spanning AI, automation,
            operational excellence, customer strategy & growth, enterprise
            enablement, and large-scale portfolio execution. Trusted advisor to
            CXOs and boards across North America, APAC, and EMEA.
          </p>
        </div>

        <div className="border-t border-slate-200 pt-8 md:pt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8 text-center">
          {[
            ["25+", "Years Experience"],
            ["$1.6B+", "Portfolio"],
            ["100+", "Clients"],
            ["$500M+", "Revenue Influence"],
            ["$25M+", "Margin Impact"],
            ["500+", "Global Cross-Functional Impact"],
            ["Fortune 500", "Experience"],
            ["Global", "Delivery Leadership"],
          ].map(([value, label]) => (
            <div key={`${value}-${label}`}>
              <div className="text-2xl md:text-2xl font-bold text-slate-900 whitespace-nowrap">
                {value}
              </div>
              <div className="text-sm text-slate-500 mt-2 leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="bg-white py-14 md:py-20 px-5 sm:px-8 scroll-mt-16 md:scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14 text-center">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Core Offerings</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const serviceKeyMap = {
                "Enterprise Transformation Strategy": "enterprise-transformation",
                "AI Strategy & Governance": "ai-strategy-governance",
                "Operating Model & Process Transformation": "operating-model-transformation",
                "AI & Automation Execution": "ai-automation-execution",
                "Managed Services Transformation": "managed-services-transformation",
                "Executive Advisory": "executive-advisory",
              };

              return (
                <button
                  key={service.title}
                  onClick={() => openServicePage(serviceKeyMap[service.title])}
                  className="text-left bg-slate-50 rounded-3xl p-6 md:p-8 shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {service.text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-xl">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
              Who This Helps
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Ideal for Organizations That Need Clarity, Structure, and Momentum
            </h2>
            <div className="grid grid-cols-1 gap-4 text-slate-300">
              {[
                "Enterprises moving from fragmented AI pilots to scalable adoption",
                "Leadership teams needing AI governance and operating discipline",
                "Managed service organizations modernizing delivery models",
                "Companies seeking executive advisory without a full-time CAIO",
                "Businesses needing practical AI strategy tied to measurable outcomes",
                "Organizations looking to prioritize AI investments with stronger ROI visibility",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 rounded-2xl px-5 py-4 text-base leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-md border border-slate-200">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
              Insights
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Thought Leadership
            </h2>
            <div className="space-y-4">
              {insights.map((item) => (
                <div
                  key={item}
                  className="border border-slate-200 rounded-2xl px-5 py-4 hover:shadow-sm text-base leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-14 md:py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Let’s Discuss Your Transformation Journey
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Advisory engagements, executive workshops, AI readiness assessments,
            operating model design, and managed services transformation
            initiatives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://calendly.com/ascAInd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg inline-block text-center"
            >
              Book an Introductory Call
            </a>

            <a
              href="https://www.linkedin.com/in/yajuvinder"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-500 px-6 py-3 rounded-2xl font-semibold inline-block text-center hover:bg-white/10 transition"
            >
              Connect on LinkedIn
            </a>
          </div>

          <p className="text-sm text-slate-400 mt-5">
            Prefer email?{" "}
            <a
              href="mailto:info@ascaind.com"
              className="text-slate-200 underline hover:text-sky-400"
            >
              info@ascaind.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}