import Reveal from './Reveal';

const proof = [
  { value: '7 figures', label: 'AI infra product revenue' },
  { value: '4,500+', label: 'hosted models' },
  { value: '2M+', label: 'network inferences' },
  { value: '500K+', label: 'verifiable proofs' },
  { value: '50M+', label: 'campaign views' },
];

export default function ProofStrip() {
  return (
    <section aria-label="Selected proof points" className="border-t border-border bg-surface/45">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
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
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
