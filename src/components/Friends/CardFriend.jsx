import Image from 'next/image';
import React from 'react';

const CardFriend = ({ friend }) => {

    const { name,tags,status,picture} =friend;

    return (

        <div className='card shadow-sm b flex justify-center items-center gap-2.5  '>

            <div className='  mt-8 flex justify-center items-center'>
             
             <Image className='rounded-full'
             src={picture}
             alt={name}
             width={100}
             height={100}
             />
            </div>

            <h2 className='text-3xl font-semibold '>{name}</h2>
            <button className="rounded-3xl bg-[#cbfadb] px-3 text-[#295244]">

            </button>

            <div className='flex justify-baseline gap-2.5'>
                {tags.map((tag, index) => (
                    <h2 className='rounded-3xl bg-[#cbfadb] px-3 text-[#295244]' key={index}>{tag}</h2>
                ))}

            </div>




            <button

                className={
                    status === 'almost due' ? 'rounded-3xl bg-[#efad44] px-4 py-2 text-white mb-10' :
                        status === 'overdue' ? 'rounded-3xl bg-[#ef4444] px-4 py-2 text-white mb-10' :
                            status === 'on-track' ? 'rounded-3xl bg-[#244d3f] px-4 py-2 text-white mb-10' : ''}

            >{friend.status}</button>


        </div>


    );
};

export default CardFriend;