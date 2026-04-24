'use client '
import Call from "@/components/app/Call";
import Text from "@/components/app/Text";
import Video from "@/components/app/Video";
import Image from "next/image";

import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdText } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBinLine, RiHistoryFill, RiNotificationSnoozeLine } from "react-icons/ri";


const FriendDetails = async ({ params }) => {

    const { id } = await params
    const res = await fetch('http://localhost:3000/friends.json')

    const friends = await res.json()

    const friend = friends?.find(friend => friend.id == id)
    
    // console.log('This is friend arrys data ' , friend);
    

    return (
        <div className="container mx-auto gap-2 mb-9">


            <div className="flex gap-5 mt-10">
                <div>


                    <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>

                        <div className='bg-fuchsia-300 rounded-full  mt-8 flex justify-center items-center'>

                            <Image
                                className='rounded-full'
                                src={friend.picture}
                                alt={friend.name}
                                width={100}
                                height={100}
                            />
                        </div>

                        <h2 className='text-3xl font-black '>{friend.name}</h2>


                        <div className='flex justify-baseline gap-2' >{friend.tags.map((tag, index) => <h2 key={index} className='rounded-3xl bg-[#cbfadb] px-3 text-[#295244]' >{tag}</h2>)}</div>




                        <button
                            className={friend.status === 'overdue' ? "rounded-3xl bg-[#ef4444] px-4 py-2 text-white mb-4"
                                : friend.status === 'almost due' ? "rounded-3xl bg-[#efad44] px-4 py-2 text-white mb-4" :
                                    friend.status === 'on-track' ? "rounded-3xl bg-[#244d3f] px-4 py-2 text-white mb-4" : ''}> {friend.status}</button>

                        <p className="text-[#64748b] mx-11 font-semibold">{friend.bio}</p>
                        <p className="text-[#64748b] mb-7 text-center">Preferred : {friend.email}</p>
                    </div>




                    <div className="flex flex-col gap-4  justify-center  mt-10">
                        <h2 className="flex  text-2xl text-center items-center justify-center rounded-sm  shadow-sm py-3 px-9 "> <RiNotificationSnoozeLine className="text-3xl mr-2" />Snooze 2 weeks</h2>
                        <h2 className="flex  text-2xl text-center items-center justify-center rounded-sm  shadow-sm py-3 px-9 "> <LuArchive className="text-3xl mr-2" />Archive</h2>
                        <h2 className="flex  text-2xl text-center items-center justify-center rounded-sm  shadow-sm py-3 px-9  text-red-500"> <RiDeleteBinLine className="text-3xl mr-2 text-red-500" />Delete</h2>

                    </div>

                </div>


                {/* flex here */}
                <div>


                    <div className='grid grid-cols-3 gap-6 container mx-auto '>
                        <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>


                            <h2 className="text-3xl font-bold text-[#3a5f52] mt-4">62</h2>
                            <h2 className="text-xl text-[#717f95] mb-4">Days Since Contact</h2>


                        </div>
                        <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>


                            <h2 className="text-3xl font-bold text-[#3a5f52] mt-4">30</h2>
                            <h2 className="text-xl text-[#717f95] mb-4">Goal (Days) </h2>


                        </div>
                        <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>


                            <h2 className="text-3xl font-bold text-[#3a5f52] mt-4">Feb 27, 2026</h2>
                            <h2 className="text-xl text-[#717f95] mb-4">Next Due</h2>


                        </div>



                    </div>

                    <div className=' mt-8 p-6 shadow-sm b flex justify-between  gap-2.5  '>


                        <div>
                            <h2 className="text-[18px]">Relationship Goal</h2>
                            <h2 className="text-[18px]">Connect every <span className="font-bold text-xl"> 30 days</span></h2>

                        </div>

                        <div>
                            <button className="btn btn-soft">Edit</button>

                        </div>
                    </div>

                    {/*   call & text & and Video  */}
                    <div className=' mt-8 p-6 shadow-sm b flex flex-col  gap-2.5  '>

                        <h2 className="text-xl text-[#244d3f]">Quick Check-In</h2>

                        <div className='grid grid-cols-3 gap-6 container mx-auto '>

                         
                         <Call friend ={friend}  />
                         <Text friend ={friend}/>
                         <Video friend = {friend}/>



                        </div>

                    </div>

                    {/* History page here */}

                    <div className=' mt-8 p-6 shadow-sm b flex flex-col  gap-2.5  '>
                        <div className="flex justify-between">
                            <h2 className="text-xl text-[#244d3f]">Recent Interactions</h2>
                            <button className="btn btn-soft"><RiHistoryFill /> Full History</button>

                        </div>

                        <div className="flex justify-between items-center">

                            <div className="flex justify-baseline items-center gap-3">

                                <h2> <IoMdText className="text-[40px]" /></h2>
                                <div>
                                    <h2>Text</h2>
                                    <p className="text-[#04040476]">Asked for career advice</p>
                                </div>
                            </div>




                            <h2 className="text-[#04040476]">Jan 28, 2026</h2>

                        </div>

                        <div className="divider"></div>

                        <div className="flex justify-between items-center">

                            <div className="flex justify-baseline items-center gap-3">

                                <h2> <BiSolidPhoneCall className="text-[40px]" /></h2>
                                <div>
                                    <h2>Meetup</h2>
                                    <p className="text-[#04040476]">Industry conference meetup</p>
                                </div>
                            </div>




                            <h2 className="text-[#04040476]">Jan 28, 2026</h2>

                        </div>

                        <div className="divider"></div>

                        <div className="flex justify-between items-center">

                            <div className="flex justify-baseline items-center gap-3">

                                <h2> <IoVideocamOutline className="text-[40px]" /></h2>
                                <div>
                                    <h2>Video</h2>
                                    <p className="text-[#04040476]">Asked for career advice</p>
                                </div>
                            </div>




                            <h2 className="text-[#04040476]">Jan 28, 2026</h2>

                        </div>

                        <div className="divider"></div>
                        <div className="flex justify-between items-center">

                            <div className="flex justify-baseline items-center gap-3">

                                <h2> <IoMdText className="text-[40px]" /></h2>
                                <div>
                                    <h2>Text</h2>
                                    <p className="text-[#04040476]">Asked for career advice</p>
                                </div>
                            </div>




                            <h2 className="text-[#04040476]">Jan 28, 2026</h2>

                        </div>


                    </div>


                </div>

            </div>





        </div >
    );
};

export default FriendDetails;