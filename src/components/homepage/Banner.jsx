import React from 'react';
import { IoIosAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className="bg-white">

                <div className="m-10 ">



                    <div className="flex justify-center items-center flex-col gap-y-4 text-center">
                        <h2 className="text-5xl font-bold text-[#1f2937]">Friends to keep close in your life</h2>

                        <p className="text-[#68788e]"> Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            <br />relationships that matter most.</p>

                        <button className="btn bg-[#244d3f] text-white"><IoIosAdd className="text-2xl" />Add a Friend</button>


                    </div>





                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto mt-10'>
                        <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>


                            <h2 className="text-3xl font-bold text-[#3a5f52] mt-4">10</h2>
                            <h2 className="text-xl text-[#717f95] mb-4">Total Friends </h2>


                        </div>
                        <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>


                            <h2 className="text-3xl font-bold text-[#3a5f52] mt-4">3</h2>
                            <h2 className="text-xl text-[#717f95] mb-4">On Track </h2>


                        </div>
                        <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>


                            <h2 className="text-3xl font-bold text-[#3a5f52] mt-4">6</h2>
                            <h2 className="text-xl text-[#717f95] mb-4">Need Attention</h2>


                        </div>
                        <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>


                            <h2 className="text-3xl font-bold text-[#3a5f52] mt-4">12</h2>
                            <h2 className="text-xl text-[#717f95] mb-4">Interactions This Month </h2>


                        </div>

                    </div>

                </div>
            </div>
            <hr className="mt-3 mb-3 text-[#323131]" />

        </div>
    );
};

export default Banner;