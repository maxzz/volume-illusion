import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { useTweaks } from 'use-tweaks';

function App() {
    const { tint } = useTweaks('Test', {
        color: '',
        tint: '#22aaeeff',
    });

    console.log({tint});

    return (
        <div className="App bg-green-50 h-screen flex place-items-center justify-center">
            <div className="relative w-96 h-96">
                <div className="w-20 h-20 bg-purple-600 threed box1 absolute top-0 left-0" style={{ backgroundColor: `${tint}` }}></div>
                <div className="w-20 h-20 bg-purple-400 threed box1 absolute top-0 right-0" style={{}}></div>
                <div className="w-20 h-20 bg-purple-500 threed box1 absolute bottom-0 right-0" style={{}}></div>
            </div>
        </div>
    );
}

export default App;
