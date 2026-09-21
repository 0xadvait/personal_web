/* One column, one label style. That is the whole system. */

export function Section({ id, label, children, className = '' }) {
  return (
    <section id={id} className={`mt-16 sm:mt-20 ${className}`}>
      {label ? <h2 className="kicker">{label}</h2> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
