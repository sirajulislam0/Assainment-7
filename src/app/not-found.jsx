import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">

            <h1 className="text-7xl font-extrabold text-[#244d3f] tracking-widest">
                404
            </h1>

            <p className="mt-4 text-lg text-gray-600">
                Oops! The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 rounded-lg border border-[#244d3f] text-[#244d3f] font-semibold hover:bg-[#244d3f] hover:text-white transition"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default NotFound;