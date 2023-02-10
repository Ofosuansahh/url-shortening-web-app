import React from 'react';
import showcase from "../images/illustration-working.svg";


function Showcase() {
  return (
    <div>
        <section className="py-10 lg:py-20">
            <div className="max-width grid grid-cols-1 md:grid-cols-2 md:gap-10 md:place-items-center">
                <article className="text-center md:text-left">
                    <h1 className="text-4xl md:5xl lg:text-6xl mb-5 font-bold text-slate-800">More than just shorter links</h1>
                    <p className="lg:text-lg text-slate-400 mb-10">
                        Build your brand’s recognition and get detailed insights 
                        on how your links are performing.
                    </p>
                    <button className="btn-cta rounded-full">
                        Get Started
                    </button>
                </article>

                <article>
                    <img src={showcase} alt="shortly" />
                </article>
            </div>
        </section>
    </div>
  )
}

export default Showcase