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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-3">
        <div className="shrink-0 leading-none">
  {/* Mobile logo */}
        <div className="w-[134px] max-w-[54vw] sm:hidden">
          <div className="flex items-end justify-between w-full">
            <span className="text-2xl font-semibold text-slate-200">a</span>
            <span className="text-2xl font-semibold text-slate-200">s</span>
            <span className="text-2xl font-semibold text-slate-200">c</span>
            <span className="text-sky-400 font-bold text-4xl leading-none">AI</span>
            <span className="text-2xl font-semibold text-slate-200">n</span>
            <span className="text-2xl font-semibold text-slate-200">d</span>
          </div>

          <div className="h-px bg-sky-400 mt-0.05 mb-1 w-full" />

          <p className="uppercase text-[7.5px] text-slate-300 tracking-[0.115em] whitespace-nowrap w-full text-center">
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
          href="https://calendly.com/yajuvinder-suneja/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow-lg inline-block text-center text-xs sm:text-base whitespace-nowrap shrink-0"
        >
          <span className="sm:hidden">Let’s Talk</span>
          <span className="hidden sm:inline">Let’s Talk</span>
        </a>
      </div>
      </header>

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
                href="https://calendly.com/yajuvinder-suneja/30min"
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

        <div className="border-t border-slate-200 pt-8 md:pt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-8 text-center">
          {[
            ["25+", "Years Experience"],
            ["$1.6B+", "Portfolio"],
            ["100+", "Clients"],
            ["$25M+", "Margin Impact"],
            ["500+", "Global Cross-Functional Impact"],
            ["Fortune 500", "Experience"],
            ["Global", "Delivery Leadership"],
          ].map(([value, label]) => (
            <div key={`${value}-${label}`}>
              <div className="text-2xl md:text-2xl font-bold text-slate-900">
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
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-50 rounded-3xl p-6 md:p-8 shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
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
              href="https://calendly.com/yajuvinder-suneja/30min"
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