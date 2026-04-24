'use client'
import { TimelineAppContext } from '@/context/SharedDataContext';
import Image from 'next/image';
// import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { toast } from 'react-toastify';

const TimeLine = () => {

    const { timeline, setTImeline } = useContext(TimelineAppContext)
    const [sorting, setSorting] = useState('')
    console.log(sorting, 'this this sorting');

    const filteredTimeline = sorting
        ? timeline.filter(item => item.type === sorting)
        : timeline;

    useEffect(() => {
        if (sorting && filteredTimeline.length === 0) {
            toast.error('No data found');
        }
    }, [sorting, filteredTimeline]);


    return (
        <div className='container mx-auto my-8'>
            <h3 className='text-3xl font-bold'>Timeline </h3>

            <div className="dropdown dropdown-center">
                <div tabIndex={0} role="button" className="btn m-1">Filter timeline  <IoIosArrowDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => setSorting('Call')

                    }><a>Call</a></li>
                    <li onClick={() => setSorting('Text')}><a>Text</a></li>
                    <li onClick={() => setSorting('Video')}><a>Video</a></li>
                </ul>
            </div>

            <div >
                {
                    filteredTimeline.map((dataName, id) => <div key={id}>
                        <div className="border border-gray-100 my-2 rounded-lg p-4 flex items-start gap-4 mx-3 bg-white shadow-sm">

                            <div className="w-10 h-10 flex items-center justify-center">

                                {dataName.type === 'Video' ? <Image
                                    src="/video.png"
                                    alt="Video Logo"
                                    width={40}
                                    height={40}
                                /> :
                                    dataName.type === 'Call' ? <Image
                                        src="/call.png"
                                        alt="call Logo"
                                        width={40}
                                        height={40}
                                    /> :

                                        dataName.type ===
                                            'Text' ? <Image
                                            src="/text.png"
                                            alt="text Logo"
                                            width={40}
                                            height={40}
                                        /> : 'no'
                                }


                            </div>

                            <div>
                                <h2 className="text-sm font-semibold text-gray-800">
                                    {dataName.type === 'Video' ? 'Meetup' :
                                        dataName.type === 'Text' ? 'Massege' :
                                            dataName.type === 'Call' ? 'Called' : ''} <span className="text-gray-500 font-normal">{dataName.name}</span>
                                </h2>
                                <p className="text-xs text-gray-400 mt-1">
                                    March 29, 2026
                                </p>
                            </div>

                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default TimeLine;