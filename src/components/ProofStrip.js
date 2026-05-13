import Reveal from './Reveal';

const proof = [
  { value: '7 figures', label: 'Revenue', detail: 'AI infra product' },
  { value: '4,500+', label: 'Models', detail: 'hosted on-network' },
  { value: '2M+', label: 'Inferences', detail: 'network volume' },
  { value: '500K+', label: 'Proofs', detail: 'signed outputs' },
  { value: '50M+', label: 'Views', detail: 'OpenGradient films' },
];

export default function ProofStrip() {
  return (
    <section aria-label="Selected outcomes" className="border-y border-border bg-surface/35">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="grid gap-5 py-5 sm:py-6 lg:grid-cols-[220px_1fr] lg:items-center">
            <div className="border-l border-accent/35 pl-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Snapshot
              </div>
              <p className="mt-2 max-w-xs font-serif text-[14px] leading-[1.45] text-fg-muted">
                A few numbers for context.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border border-border bg-border sm:grid-cols-5">
              {proof.map((item, index) => (
                <dl
                  key={item.label}
                  className={`bg-bg px-4 py-4 sm:px-5 sm:py-5 ${
                    index === proof.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-fg-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-serif text-[25px] leading-none text-fg sm:text-[30px]">
                    {item.value}
                  </dd>
                  <dd className="mt-2 font-serif text-[13px] leading-snug text-fg-dim">
                    {item.detail}
                  </dd>
                </dl>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
