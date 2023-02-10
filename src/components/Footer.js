import React from 'react';
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import logo from "../images/footer-logo.svg";

function Footer() {
  return (
    <div>
        <footer className="bg-slate-900 py-10 lg:py-20">
            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
                <article>
                    <img src={logo} />
                </article>

                <article>
                    <h3 className="text-white text-lg font-bold traking-wide">Features</h3>
                    <ul>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">Branded Links</button></li>
                        <li><button className="text-slate-200 text-sm mt-1 hover:tetext-cyan-500">Analytics</button></li>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">Links Shortening</button></li>
                    </ul>
                </article>

                <article>
                    <h3 className="text-white text-lg font-bold traking-wide">Resources</h3>
                    <ul>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">Blog</button></li>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">Developers</button></li>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">Support</button></li>
                    </ul>
                </article>

                <article>
                <h3 className="text-white text-lg font-bold traking-wide">Company</h3>
                    <ul>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">About</button></li>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">Our Team</button></li>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">Careers</button></li>
                        <li><button className="text-slate-200 text-sm mt-1 hover:text-cyan-500">Contact</button></li>
                    </ul>
                </article>

                <article>
                    <ul className="flex items-center cursor-pointer">
                        <li><img src={facebook} alt="" /></li>
                        <li className="ml-4"><img src={twitter} alt="" /></li>
                        <li className="mx-5"><img src={pinterest} alt="" /></li>
                        <li><img src={instagram} alt="" /></li>
                    </ul>
                </article>
            </div>
        </footer>
    </div>
  )
}

export default Footer