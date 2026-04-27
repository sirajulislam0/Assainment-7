import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PriendsPage = async () => {

    const res = await fetch('http://localhost:3000/friends.json',{cache:"no-store"})
    const friends = await res.json()
    
    

    return (
        <div className='container mx-auto mb-9'>

            <h2 className='font-semibold text-2xl my-4'>Your Friends</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ml-2 mr-2 '>
                {
                    friends.map(friend => <div key={friend.id}>

                        <Link href={`/friends/${friend.id}`} className='card shadow-sm b flex justify-center items-center gap-2.5  '>

                            <div className='bg-fuchsia-300 rounded-full  mt-8 flex justify-center items-center'>

                                <Image
                                    className='rounded-full'
                                    src={friend.picture}
                                    alt={friend.name}
                                    width={100}
                                    height={100}
                                />
                            </div>

                            <p className='text-[#64748b]'>{friend.days_since_contact}d ago</p>
                            <h2 className='text-3xl font-black '>{friend.name}</h2>


                            <div className='flex justify-baseline gap-2' >{friend.tags.map((tag, index) => <h2 key={index} className='rounded-3xl bg-[#cbfadb] px-3 text-[#295244]' >{tag}</h2>)}</div>




                            <button className={friend.status === 'overdue' ? "rounded-3xl bg-[#ef4444] px-4 py-2 text-white mb-4" : friend.status === 'almost due' ? "rounded-3xl bg-[#efad44] px-4 py-2 text-white mb-4" : friend.status === 'on-track' ? "rounded-3xl bg-[#244d3f] px-4 py-2 text-white mb-4" : ''}> {friend.status}</button>
                        </Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PriendsPage;