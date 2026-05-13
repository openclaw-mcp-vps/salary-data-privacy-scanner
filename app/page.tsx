export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-16">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
          Privacy Tool
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Is your salary data<br />
          <span className="text-[#58a6ff]">being sold right now?</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto">
          Salary Data Privacy Scanner monitors hundreds of data broker sites and sends you an instant email alert the moment your salary information surfaces for sale.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scanning — $12/mo
          </a>
          <a
            href="#pricing"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See Pricing
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e] mt-2">
          <span>✓ 200+ data brokers monitored</span>
          <span>✓ Instant email alerts</span>
          <span>✓ Cancel anytime</span>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">$12</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm">Everything you need to keep your salary data private.</p>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Continuous monitoring of 200+ data brokers",
              "Instant email alerts on matches",
              "Weekly privacy report",
              "Removal request templates",
              "Up to 3 monitored profiles"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-center text-sm"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] text-center">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "How does the scanner find my salary data?",
              a: "We use automated scrapers and API integrations to continuously check 200+ known data broker sites for records matching your name, employer, and location. When a match is found, you receive an immediate email alert."
            },
            {
              q: "What do I do when a match is found?",
              a: "We provide ready-to-send removal request templates tailored to each data broker. Most brokers are legally required to remove your data within 30 days upon request."
            },
            {
              q: "Is my personal information safe with you?",
              a: "We store only the minimum data needed for monitoring — your name, employer, and location. We never sell your data, and all information is encrypted at rest and in transit."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-white text-sm">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-4">
        © {new Date().getFullYear()} Salary Data Privacy Scanner. All rights reserved.
      </footer>
    </main>
  );
}
