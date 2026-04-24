'use client'
import { TimelineAppContext } from '@/context/SharedDataContext';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const Stats = () => {
    const { timeline } = useContext(TimelineAppContext)


    const textCount = timeline.filter(item => item.type === 'Text').length;
    const callCount = timeline.filter(item => item.type === 'Call').length;
    const videoCount = timeline.filter(item => item.type === 'Video').length;

    // console.log('Text:', textCount);
    // console.log('Call:', callCount);
    // console.log('Video:', videoCount);


    const data = [
        { name: 'Text', value: textCount, fill: '#7f37f5' },
        { name: 'Call', value: callCount, fill: '#244d3f' },
        { name: 'Video', value: videoCount, fill: '#37a163' },
    ];


    return (


        <div className=' container mx-auto'>
                <h2 className="text-4xl font-bold my-9">Friendship Analytics </h2>

            <div className='bg-white shadow-sm rounded-2xl w-10/10 ml-4 mr-4 my-4 mx-auto'>

            <h2 className='text-2xl font-semibold ml-6 mt-3'>By Interaction Type</h2>


                <div className='flex justify-center my-15' >
                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />

                        <Legend />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>


        </div>

    );
};

export default Stats;