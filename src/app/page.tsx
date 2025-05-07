import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center gap-12 justify-items-center p-4 md:p-8 pb-20 sm:p-20 font-[family-name:var(--font-noto-sans)]">
      <section className="intro-copy-container flex flex-col items-center gap-4">
        <h1 className="intro-subhead text-indigo-700 text-center font-semibold">One Time Purchase</h1>
        <h2 className="intro-heading text-center text-3xl md:text-5xl font-semibold">Pay As You Need</h2>
        <p className="intro-copy text-center max-w-[52ch] text-neutral-600">We offer one-time purchases with credits, for you tu use as needed. Always active.</p>
      </section>
      <section className="2-col-pricing-section flex flex-col gap-6 lg:flex-row ">
        <div className="pricing-list md:px-4 lg:w-1/2">
          <h2 className="checklist-heading pb-8 text-2xl md:text-5xl font-semibold">Unlock creativity once, enjoy forever</h2>
          <ul className="flex flex-col gap-4">
            <li className="intro-copy text-neutral-600 bg-[url(/check-fill.svg)] bg-no-repeat bg-left pl-8">128 available credits for all images</li>
            <li className="intro-copy text-neutral-600 bg-[url(/check-fill.svg)] bg-no-repeat bg-left pl-8">Up to 3 users</li>
            <li className="intro-copy text-neutral-600 bg-[url(/check-fill.svg)] bg-no-repeat bg-left pl-8">24 hour response time</li>
            <li className="intro-copy text-neutral-600 bg-[url(/check-fill.svg)] bg-no-repeat bg-left pl-8">Advanced analytics</li>
          </ul>
        </div>
        <div className="pricing-card py-8 px-4 border-1 border-neutral-200 shadow-lg rounded-lg lg:w-1/2 relative min-h-[180px] flex flex-col gap-4 items-center">
          <p className="px-4 py-2 border-2 bg-green-50 border-green-200 text-green-700 rounded-full">Popular</p>
          <p className="text-center text-5xl md:text-5xl font-semibold">$699</p>
          <p className="text-neutral-600">Prices in USD</p>
          <p>Pay once, use it forever.<br /> 
             No strings attached.</p>
          <a role="button" href="#"
          className="bg-indigo-700 text-white w-full text-center rounded-sm py-2 max-w-[90%]">Buy Now</a>
        </div>
      </section>
    </div>
  );
}
