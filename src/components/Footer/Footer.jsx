import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#244d3f]">

            <div className="mt-10 container mx-auto">


                <div className="flex justify-center items-center flex-col gap-y-4">
                    <h2 className="text-5xl font-bold text-white">KeenKeeper</h2>

                    <p className="text-[#ffffff6d]">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                    <div className="space-y-3">
                        <h5 className="font-semibold text-xl text-[#ffffffce]" >Social Links</h5>
                        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
                            <Image
                                src="/instagram.png"
                                alt="this is facebook"
                                width={30}
                                height={30}
                            />
                            <Image
                                src="/facebook.png"
                                alt="this is facebook"
                                width={30}
                                height={30}
                            />
                            <Image
                                src="/twitter.png"
                                alt="this is facebook"
                                width={30}
                                height={30}
                            />
                        </div>
                    </div>



                </div>


                <hr className="mt-3 mb-3 text-gray-500" />

                <div className="footer sm:footer-horizontal  text-neutral-content items-center  p-4">
                    <aside className="grid-flow-col items-center">

                        <p className="text-[#ffffff6d]">Copyright © {new Date().getFullYear()} - All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-[#ffffff6d]">


                        <a>

                            <h1>Privacy Policy</h1>
                        </a>

                        <a>

                            <h1>Terms of Service   </h1>
                        </a>

                        <a>

                            <h1>Cookies</h1>
                        </a>
                    </nav>
                </div>


            </div>
        </div>
    );
};

export default Footer;