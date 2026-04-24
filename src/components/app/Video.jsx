'use client'
import { TimelineAppContext } from '@/context/SharedDataContext';
import { createContext, useContext } from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const Video = ({ friend }) => {

    const { timeline, setTImeline } = useContext(TimelineAppContext)
    const handleVideo = () => {
        const exists = timeline.find(
            (item) => item.name === friend.name && item.type === 'Video'
        );

        if (exists) {
            toast.error(`${friend.name} Already added `);
            return;
        }

        const newItem = {
            name: friend.name,
            time: new Date(),
            type: 'Video',
        };

        setTImeline([...timeline, newItem]);

        toast.success(`Video with ${friend.name}  `);
    };


    return (
        <div>
            <div onClick={() => handleVideo()} className='card shadow-sm b flex justify-center items-center gap-2.5  '>

                <h2 className="text-3xl font-bold text-[#000000] mt-4"><IoVideocamOutline /></h2>
                <h2 className="text-xl text-[#000000] mb-4">Video</h2>


            </div>
        </div>
    );
};

export default Video;