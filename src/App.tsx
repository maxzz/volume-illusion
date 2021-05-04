import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import './App.css';
import { useTweaks } from 'use-tweaks';

function App() {
    const PARAMS = useTweaks('Controls', {
        color: '',
        tint: '#22aaeeff',
        positionX: '20',
        positionXOpposite: '-20',
        positionY: '20',
        positionYOpposite: '-20',
    });

    const type = {
        '--positionX': `${PARAMS.positionX}px`,
        '--positionXOpposite': `${PARAMS.positionXOpposite}px`,
        '--positionY': `${PARAMS.positionY}px`,
        '--positionYOpposite': `${PARAMS.positionYOpposite}px`,
    } as CSSProperties;

    //console.log({tint});

    return (
        <div className="App bg-green-50 h-screen flex place-items-center justify-center">
            <div className="relative w-96 h-96" style={type}>
                <div className="w-20 h-20 bg-purple-600 threed box1 absolute top-0 left-0" style={{ backgroundColor: `${PARAMS.tint}` }}></div>
                <div className="w-20 h-20 bg-purple-400 threed box1 absolute top-0 right-0" style={{}}></div>
                <div className="w-20 h-20 bg-purple-500 threed box1 absolute bottom-0 right-0 threed" style={type}></div>
            </div>
        </div>
    );
}

export default App;
