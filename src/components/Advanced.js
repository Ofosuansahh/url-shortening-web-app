import React from 'react';
import brand from "../images/icon-brand-recognition.svg";
import records from "../images/icon-detailed-records.svg"
import fully from "../images/icon-fully-customizable.svg"

function Advanced() {
  return (
    <div>
        <section className="bg-gray-100 pt-32 mt-10 md:mt-0 pb-10 lg:pb-40 push-up">
            <div className="max-width">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 text-center mt-20 adv">Advanced Statistics</h2>
            <p className="text-slate-400 text-center mb-10 lg:mb-20 width">
                Track how your links are performing across the
                web with our advanced statistics dashboard.
            </p>

            <div className="relative card grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 mt-5">
                <div className="line"></div>
                <article className="bg-white p-5 rounded relative mobi">
                    <img src={brand} alt=""
                    className="p-3 -mt-12 bg-slate-800 rounded-full" />
                    <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Brand Recognition</h3>
                    <p className="text-slate-400 text-sm">
                        Boost your brand recognition with each click. Generic links don’t 
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </article>

                <article className="bg-white p-5 rounded relative mobi">
                    <img src={records} alt=""
                    className="p-3 -mt-12 bg-slate-800 rounded-full" />
                    <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Detailed Records</h3>
                    <p className="text-slate-400 text-sm">
                        Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions.
                    </p>
                </article>

                <article className="bg-white p-5 rounded relative mobi">
                    <img src={fully} alt=""
                    className="p-3 -mt-12 bg-slate-800 rounded-full" />
                    <h3 className="text-slate-800 text-lg mt-5 mb-2 font-bold">Fully Customizable</h3>
                    <p className="text-slate-400 text-sm">
                        Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement.
                    </p>
                </article>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Advanced