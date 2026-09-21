
/* Small technical label. Renders "01 – RESEARCH" when both parts are given. */
export function Kicker({ index, children, className = '' }) {
  return (
    <div className={`kicker ${className}`}>
      {index ? (
        <>
          <span className="text-fg-faint">{index}</span>
          <span className="mx-2 text-fg-faint" aria-hidden>
            &ndash;
          </span>
        </>
      ) : null}
      {children}
    </div>
  );
}

/* Soft card surface used for every panel on the page. */
export function Card({ children, className = '', as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`rounded-[14px] border border-border bg-surface ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* Section wrapper: one vertical rhythm for the whole page. */
export function Section({ id, children, className = '', tone = 'plain' }) {
  const bg = tone === 'soft' ? 'bg-surface/55' : '';
  return (
    <section
      id={id}
      className={`border-t border-border-soft ${bg} py-[72px] sm:py-20 lg:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1060px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

/*
 * Two-tone section heading: the statement lands in ink, the qualifying clause
 * recedes into grey. One heading treatment for every section on the page.
 */
export function SectionHeading({ index, label, title, tail, lede, children, className = '' }) {
  return (
    <div className={`mb-10 sm:mb-14 ${className}`}>
        <Kicker index={index}>{label}</Kicker>
        <h2 className="mt-5 max-w-[22ch] text-[30px] font-normal leading-[1.1] tracking-[-0.022em] text-fg text-balance sm:text-[38px] sm:max-w-[26ch] lg:text-[42px]">
          {title}
          {tail ? (
            <>
              {' '}
              <span className="tone-soft">{tail}</span>
            </>
          ) : null}
        </h2>
        {lede ? (
          <p className="mt-6 max-w-[62ch] text-[16.5px] leading-[1.62] text-fg-muted">{lede}</p>
        ) : null}
        {children}
    </div>
  );
}

