'use client'
import { createContext, useState } from "react";

export const TimelineAppContext = createContext();

const TimelineAppsProvider = ({ children }) => {

    const [timeline, setTImeline] = useState([]);

    const data = {
        timeline,
        setTImeline,
        
    }; 

    return <TimelineAppContext.Provider value={data}>{children}</TimelineAppContext.Provider>
};

export default TimelineAppsProvider;
