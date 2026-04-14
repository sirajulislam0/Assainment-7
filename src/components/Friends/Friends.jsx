import React from 'react';
import CardFriend from './CardFriend';

const Friends = async() => {

   const res = await fetch('http://localhost:3000/friends.json')
    const friends = await res.json();
    console.log(friends);

    return (
        <div className='container mx-auto mb-11'>
             
             <h2 className='font-bold text-2xl my-8'>Your Friends</h2>

           
           <div className='grid grid-cols-4 gap-4'>
              {
                friends.map(friend => <CardFriend friend ={friend} key={friend.id}> </CardFriend>)
             }
           </div>
        </div>
    );
};

export default Friends;