import Nav from './Nav';
import Footer from './Footer';

/* The frame for the small text pages: nav, a title, one reading column, footer. */
export default function PageShell({ current, title, children }) {
  return (
    <>
      <Nav current={current} />
      <main id="main-content" className="mx-auto w-full max-w-[720px] px-5 pb-8 pt-10 sm:px-8 sm:pt-14">
        <h1 className="rise text-[30px] font-normal leading-[1.1] tracking-[-0.025em] text-fg sm:text-[36px]">
          {title}
        </h1>
        <div className="rise mt-8 sm:mt-10" style={{ animationDelay: '0.08s' }}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
