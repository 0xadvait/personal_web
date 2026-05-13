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
          <div className="border-x border-border">
            <div className="grid gap-4 border-b border-border px-4 py-4 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:px-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                Receipts
              </div>
              <p className="max-w-3xl font-serif text-[15px] leading-[1.55] text-fg-muted sm:text-base">
                Hard outcomes matter on a personal site. These are the numbers the rest of the page
                has to earn.
              </p>
            </div>
          </div>
          <dl className="grid grid-cols-2 border-x border-border sm:grid-cols-5">
            {proof.map((item) => (
              <div
                key={item.label}
                className="border-b border-r border-border px-4 py-5 last:border-r-0 sm:border-b-0 sm:px-5 sm:py-6"
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
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
