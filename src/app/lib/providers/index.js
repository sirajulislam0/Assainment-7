'use cliend'
import InstalledAppsProvider from '@/context/SharedDataContext';
import React from 'react';

const Providers = ({children}) => {
    return (
       
       <InstalledAppsProvider>{children}</InstalledAppsProvider>
    );
};

export default Providers;