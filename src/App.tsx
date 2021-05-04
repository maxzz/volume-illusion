import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import './App.css';
import { useTweaks } from 'use-tweaks';
import { colorLuminance } from './utils';

function App() {
    const PARAMS = useTweaks('Controls', {
        color: '#184177',
        size: { value: 150, min: 10, max: 400 },
        radius: { value: 90, min: 0, max: 100 },
        distance: { value: 22, min: 5, max: 50 },
        intensity: { value: 0.2, min: 0.01, max: 0.6 },
        blur: { value: 23, min: 0, max: 100 },

        shape: { value: 1, min: 1, max: 4 },



        posXOpposite: { value: 20, min: 0, max: 40, label: 'X left' },
        posX: { value: 20, min: 0, max: 40, label: 'X right' },
        posYOpposite: { value: 20, min: 0, max: 40, label: 'Y left' },
        posY: { value: 20, min: 0, max: 40, label: 'Y right' },

        angle: { value: 145, min: 0, max: 400 },

        textColor: '#F6F5F7',
        textColorOpposite: '#184177',
        baseColor: '#184177',
        firstGradientColor: '#184177',
        secondGradientColor: '#184177',

    });

    const gradient = true;
    const darkColor = colorLuminance(PARAMS.color, PARAMS.intensity * -1);
    const lightColor = colorLuminance(PARAMS.color, PARAMS.intensity);

    const firstGradientColor = gradient && PARAMS.shape !== 1 ? colorLuminance(PARAMS.color, PARAMS.shape === 3 ? 0.07 : -0.1) : PARAMS.color;
    const secondGradientColor = gradient && PARAMS.shape !== 1 ? colorLuminance(PARAMS.color, PARAMS.shape === 2 ? 0.07 : -0.1) : PARAMS.color;

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

        '--darkColor': `${darkColor}`,
        '--lightColor': `${lightColor}`,
        '--firstGradientColor': `${firstGradientColor}`,
        '--secondGradientColor': `${secondGradientColor}`,

        '--size': `${PARAMS.size}px`,
        '--radius': `${PARAMS.radius}px`,
    } as CSSProperties;

    console.log({ PARAMS });

    return (
        <div className="App bg-green-50 h-screen flex place-items-center justify-center">
            <div className="relative w-96 h-96" style={type}>
                <div className="bg-purple-600 threed box1 absolute top-0 left-0 threed"></div>
                <div className="w-20 h-20 bg-purple-400 threed box1 absolute top-0 right-0" style={{}}></div>
                <div className="bg-purple-500 threed box1 absolute bottom-0 right-0 threed" style={type}></div>
            </div>
        </div>
    );
}

export default App;
