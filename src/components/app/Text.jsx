'use client'
import { TimelineAppContext } from '@/context/SharedDataContext';
import { useContext } from 'react';
import { IoMdText } from 'react-icons/io';
import { toast } from 'react-toastify';

const Text = ({ friend }) => {
    const { timeline, setTImeline } = useContext(TimelineAppContext)


    const handleText = () => {
        const exists = timeline.find(
            (item) => item.name === friend.name && item.type === 'Text'
        );

        if (exists) {
       
            toast.error(`${friend.name} Already added`);

            return;
        }

        const newItem = {
            name: friend.name,
            time: new Date(),
            type: 'Text',
        };

        setTImeline([...timeline, newItem]);

        toast.success(`Text with ${friend.name} `);
    };



    return (
        <div>
            <div onClick={() => handleText()} className='card shadow-sm b flex justify-center items-center gap-2.5  '>


                <h2 className="text-3xl font-bold text-[#000000] mt-4"><IoMdText /></h2>
                <h2 className="text-xl text-[#000000] mb-4">Text</h2>


            </div>
        </div>
    );
};

export default Text;