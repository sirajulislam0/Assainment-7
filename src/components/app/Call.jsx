'use client'
import { TimelineAppContext } from '@/context/SharedDataContext';
import React, { useContext } from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { toast } from 'react-toastify';

const Call = ({ friend }) => {

    const { timeline, setTImeline } = useContext(TimelineAppContext)



    const handleCall = () => {
        const exists = timeline.find(
            (item) => item.name === friend.name && item.type === 'Call'
        );

        if (exists) {
            toast.error(`${friend.name} Already added ❌`);
            return;
        }

        const newItem = {
            name: friend.name,
            time: new Date(),
            type: 'Call',
        };

        setTImeline([...timeline, newItem]);

        toast.success(`${friend.name} added to Call`);
    };


    return (
        <div>

            <div onClick={() => handleCall()} className='card shadow-sm b flex justify-center items-center gap-2.5  '>

                <h2 className="text-3xl font-bold text-[#000000] mt-4"><BiSolidPhoneCall /></h2>
                <h2 className="text-xl text-[#000000] mb-4">Call</h2>
            </div>
        </div>
    );
};

export default Call;
