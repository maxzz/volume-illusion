import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import './App.scss';
import { useTweaks } from 'use-tweaks';
import { colorLuminance, getContrast } from './utils';
import ShapeSwitcher from './components/ShapeSwitcher';
import LightSwitcher from './components/LightSwitcher';

type ShapeParams = {
    color: string;
    size: number;
    radius: number;
    distance: number;
    intensity: number;
    blur: number;
};

function App() {
    const PARAMS: ShapeParams = useTweaks('Controls', {
        color: '#4f8df3',
        size: { value: 150, min: 10, max: 400 },
        radius: { value: 20, min: 0, max: 100 },
        distance: { value: 15, min: 5, max: 50 },
        intensity: { value: 0.2, min: 0.01, max: 0.6 },
        blur: { value: 19, min: 0, max: 100 },
    });

    const [ newShape, setNewShape ] = useState(0);
    const [ newLight, setNewLight ] = useState(0);

    const gradient = true;

    const darkColor = colorLuminance(PARAMS.color, PARAMS.intensity * -1);
    const lightColor = colorLuminance(PARAMS.color, PARAMS.intensity);

    let shape = newShape;

    const firstGradientColor = gradient && shape !== 0 ? colorLuminance(PARAMS.color, shape === 3 ? 0.07 : -0.1) : PARAMS.color;
    const secondGradientColor = gradient && shape !== 0 ? colorLuminance(PARAMS.color, shape === 2 ? 0.07 : -0.1) : PARAMS.color;

    let activeLightSource = newLight + 1;

    let positionX;
    let positionY;
    let angle;

    // TODO: replace with a map
    switch (activeLightSource) {
        case 1:
            positionX = PARAMS.distance;
            positionY = PARAMS.distance;
            angle = 145;
            break;
        case 2:
            positionX = PARAMS.distance * -1;
            positionY = PARAMS.distance;
            angle = 225;
            break;
        case 3:
            positionX = PARAMS.distance;
            positionY = PARAMS.distance * -1;
            angle = 45;
            break;
        case 4:
            positionX = PARAMS.distance * -1;
            positionY = PARAMS.distance * -1;
            angle = 315;
            break;
        default:
            positionX = PARAMS.distance;
            positionY = PARAMS.distance;
            angle = 145;
            break;
    }

    const type = {
        '--positionX': `${positionX}px`,
        '--positionXOpposite': `${positionX * -1}px`,
        '--positionY': `${positionY}px`,
        '--positionYOpposite': `${positionY * -1}px`,

        '--angle': `${angle}deg`,
        '--blur': `${PARAMS.blur}px`,

        '--textColor': `${getContrast(PARAMS.color)}`,
        '--textColorOpposite': `${PARAMS.color}`,
        '--baseColor': `${PARAMS.color}`,

        '--darkColor': `${darkColor}`,
        '--lightColor': `${lightColor}`,
        '--firstGradientColor': `${firstGradientColor}`,
        '--secondGradientColor': `${secondGradientColor}`,

        '--size': `${PARAMS.size}px`,
        '--radius': `${PARAMS.radius}px`,
    } as CSSProperties;

    //console.log({ PARAMS });

    function handleLight(id: number) {
        setNewLight(id);
    }

    function handleShape(id: number) {
        setNewShape(id);
    }

    return (
        <div className="h-screen flex flex-col place-items-center justify-between" style={{ backgroundColor: PARAMS.color }}>
            <div className="self-start mx-2 mt-2 p-4 pt-0 overflow-hidden rounded-lg w-44 bg-[#2f3137] space-y-2 border-l-[3px] border-[#3d4146]">
                <div className="">
                    <div className="bg-[#3d4146] -mx-4 px-3 py-1 mb-2 text-[#c8cad0] text-[11px] font-courier">Light source</div>
                    <LightSwitcher source={newLight} setSource={handleLight} />
                </div>
                <div className="">
                    <div className="bg-[#3d4146] -mx-4 px-3 py-1 mb-2 text-[#c8cad0] text-[11px] font-courier">Shape</div>
                    <ShapeSwitcher shape={newShape} setShape={handleShape} />
                </div>
            </div>
            <div className="flex-1 flex items-center">
                <div className="relative w-96 h-96" style={type}>
                    <div className="bg-purple-600 threed box1 absolute top-0 left-0 threed"></div>
                    <div className="w-20 h-20 bg-purple-400 threed box1 absolute top-0 right-0" style={{}}></div>
                    <div className="bg-purple-500 threed box1 absolute bottom-0 right-0 threed" style={type}></div>
                </div>
            </div>
        </div>
    );
}

export default App;
