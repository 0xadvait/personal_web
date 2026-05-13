import Reveal from './Reveal';

const proof = [
  { value: '7 figures', label: 'AI infra revenue', detail: 'new product motion' },
  { value: '4,500+', label: 'hosted models', detail: 'network surface area' },
  { value: '2M+', label: 'network inferences', detail: 'execution volume' },
  { value: '500K+', label: 'verifiable proofs', detail: 'signed receipts' },
  { value: '50M+', label: 'campaign views', detail: 'technical narrative' },
];

export default function ProofStrip() {
  return (
    <section aria-label="Selected proof points" className="border-t border-border bg-surface/45">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 border-x border-border lg:grid-cols-[1.25fr_repeat(5,minmax(0,1fr))]">
            <div className="col-span-2 border-b border-r border-border px-4 py-5 sm:px-5 lg:col-span-1 lg:border-b-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Receipts
              </div>
              <p className="mt-2 max-w-sm font-serif text-[14px] leading-[1.45] text-fg-muted">
                Hard outcomes the rest of the page has to earn.
              </p>
            </div>
            {proof.map((item) => (
              <dl
                key={item.label}
                className="border-b border-r border-border px-4 py-5 last:border-r-0 lg:border-b-0 lg:px-5 lg:py-6"
              >
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-fg-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 font-serif text-2xl leading-none text-fg sm:text-3xl">
                  {item.value}
                </dd>
                <dd className="mt-2 font-serif text-[13px] leading-snug text-fg-dim">
                  {item.detail}
                </dd>
              </dl>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
