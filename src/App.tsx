import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import './App.css';
import { useTweaks } from 'use-tweaks';

function App() {
    const PARAMS = useTweaks('Controls', {
        posXOpposite: { value: 20, min: 0, max: 40, label: 'X left' },
        posX: { value: 20, min: 0, max: 40, label: 'X right' },
        posYOpposite: { value: 20, min: 0, max: 40, label: 'Y left' },
        posY: { value: 20, min: 0, max: 40, label: 'Y right' },

        angle: { value: 145, min: 0, max: 400 },
        blur: { value: 0, min: 0, max: 40 },

        textColor: '#F6F5F7',
        textColorOpposite: '#184177',
        baseColor: '#184177',
        darkColor: '#143765',
        lightColor: '#1c4b89',
        firstGradientColor: '#184177',
        secondGradientColor: '#184177',

        size: { value: 300, min: 0, max: 400 },
        radius: { value: 50, min: 0, max: 400 },
    });

    const type = {
        '--positionX': `${PARAMS.posX}px`,
        '--positionXOpposite': `-${PARAMS.posXOpposite}px`,
        '--positionY': `${PARAMS.posY}px`,
        '--positionYOpposite': `-${PARAMS.posYOpposite}px`,

        '--angle': `${PARAMS.angle}deg`,
        '--blur': `${PARAMS.blur}px`,
    
        '--textColor': `${PARAMS.textColor}`,
        '--textColorOpposite': `${PARAMS.textColorOpposite}`,
        '--baseColor': `${PARAMS.baseColor}`,
        '--darkColor': `${PARAMS.darkColor}`,
        '--lightColor': `${PARAMS.lightColor}`,
        '--firstGradientColor': `${PARAMS.firstGradientColor}`,
        '--secondGradientColor': `${PARAMS.secondGradientColor}`,


        '--size': `${PARAMS.secondGradientColor}px`,
        '--radius': `${PARAMS.secondGradientColor}px`,
    } as CSSProperties;

    console.log({PARAMS});

    return (
        <div className="App bg-green-50 h-screen flex place-items-center justify-center">
            <div className="relative w-96 h-96" style={type}>
                <div className="w-20 h-20 bg-purple-600 threed box1 absolute top-0 left-0 threed"></div>
                <div className="w-20 h-20 bg-purple-400 threed box1 absolute top-0 right-0" style={{}}></div>
                <div className="w-20 h-20 bg-purple-500 threed box1 absolute bottom-0 right-0 threed" style={type}></div>
            </div>
        </div>
    );
}

export default App;
