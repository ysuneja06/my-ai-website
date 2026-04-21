export default function AdvisoryWebsite() {
  const services = [
    {
      title: "AI Readiness Assessment",
      text: "Assess current AI maturity, prioritize use cases, identify governance gaps, and build a practical roadmap for adoption.",
    },
    {
      title: "AI Operating Model & Governance",
      text: "Define governance structures, AI CoE models, KPIs, intake frameworks, funding approaches, and enterprise roles.",
    },
    {
      title: "Managed Services Transformation",
      text: "Modernize service desk, infrastructure, cloud, digital workplace, and enterprise operations through AI and automation.",
    },
    {
      title: "Executive AI Strategy Advisory",
      text: "Provide board-level and executive advisory support on AI strategy, operating models, vendors, investments, and roadmaps.",
    },
    {
      title: "AI-First Service Operations",
      text: "Redesign service operations with AI, automation, copilots, chatbots, agentic workflows, and digital labor models.",
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
      <section className="bg-slate-900 text-white px-8 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-slate-300 mb-4">
              AI, Automation & Transformation Advisory
            </p>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Helping Enterprises Scale AI with Confidence
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Supporting organizations in moving from fragmented AI pilots to
              scalable operating models, measurable business outcomes, and
              enterprise-wide adoption.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg">
                Schedule a Discussion
              </button>
              <button className="border border-slate-400 px-6 py-3 rounded-2xl font-semibold">
                Download Services Overview
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Enterprise AI Strategy",
              "AI Governance",
              "Managed Services Transformation",
              "Executive Advisory",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-800 rounded-3xl p-6 shadow-xl"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
            About
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Executive Advisory with Real Enterprise Experience
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed">
            Backed by 25+ years of experience across enterprise transformation,
            AI strategy, automation, customer strategy, managed services, and
            global operations. Trusted advisor to CXOs and boards across North
            America, APAC, and EMEA.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "25+ Years Experience",
            "$1.6B Portfolio Exposure",
            "Fortune 500 Experience",
            "Global Delivery Leadership",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 text-center"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
              Services
            </p>
            <h2 className="text-4xl font-bold">Core Offerings</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-slate-50 rounded-3xl p-8 shadow-md border border-slate-200"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
              Who This Helps
            </p>
            <h2 className="text-3xl font-bold mb-6">
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
                  className="bg-slate-800 rounded-2xl px-5 py-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-md border border-slate-200">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
              Insights
            </p>
            <h2 className="text-3xl font-bold mb-6">Thought Leadership</h2>
            <div className="space-y-4">
              {insights.map((item) => (
                <div
                  key={item}
                  className="border border-slate-200 rounded-2xl px-5 py-4 hover:shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">
            Contact
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Let’s Discuss Your AI Transformation Journey
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Available for advisory engagements, executive workshops, AI
            readiness assessments, operating model design, and managed services
            transformation initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg">
              Book an Introductory Call
            </button>
            <button className="border border-slate-500 px-6 py-3 rounded-2xl font-semibold">
              Connect on LinkedIn
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
