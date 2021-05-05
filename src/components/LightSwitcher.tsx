import React from 'react';

function LightSwitcher() {
    return (
        <div className="grid grid-cols-3 text-gray-100">
            <svg className="h-6 w-6 transform rotate-[135deg] col-span-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
            <svg className="h-6 w-6 transform rotate-[225deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>

            <div className="h-6 w-12 col-span-3 justify-self-center border rounded"></div>

            <svg className="h-6 w-6 transform rotate-[45deg] col-span-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
            <svg className="h-6 w-6 transform rotate-[-45deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
        </div>
    );
}

export default LightSwitcher;
