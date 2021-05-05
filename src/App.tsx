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

const lightPositions: { x: number, y: number, angle: number; }[] = [
    {
        x: 1,
        y: 1,
        angle: 145,
    },
    {
        x: -1,
        y: 1,
        angle: 225,
    },
    {
        x: 1,
        y: -1,
        angle: 45,
    },
    {
        x: -1,
        y: -1,
        angle: 315,
    },
];

function App() {
    const PARAMS: ShapeParams = useTweaks('Controls', {
        color: '#4f8df3',
        size: { value: 150, min: 10, max: 900 },
        radius: { value: 20, min: 0, max: 100 },
        distance: { value: 15, min: 0, max: 50 },
        intensity: { value: 0.2, min: 0.01, max: 0.6 },
        blur: { value: 19, min: 0, max: 100 },
    });

    const [shape, setShape] = useState(0);
    const [sun, setSun] = useState(0);

    const shapeClass = shape === 1 ? 'threed-down' : 'threed';

    const darkColor = colorLuminance(PARAMS.color, PARAMS.intensity * -1);
    const lightColor = colorLuminance(PARAMS.color, PARAMS.intensity);

    const gradient = shape === 2 || shape === 3;
    const firstGradientColor = gradient ? colorLuminance(PARAMS.color, shape === 3 ? 0.07 : -0.1) : PARAMS.color;
    const secondGradientColor = gradient ? colorLuminance(PARAMS.color, shape === 2 ? 0.07 : -0.1) : PARAMS.color;

    let lightPosition = lightPositions[sun % 4];
    let positionX = PARAMS.distance * lightPosition.x;
    let positionY = PARAMS.distance * lightPosition.y;

    const type = {
        '--positionX': `${positionX}px`,
        '--positionXOpposite': `${positionX * -1}px`,
        '--positionY': `${positionY}px`,
        '--positionYOpposite': `${positionY * -1}px`,

        '--angle': `${lightPosition.angle}deg`,
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

    function handleLight(id: number) {
        setSun(id);
    }

    function handleShape(id: number) {
        setShape(id);
    }

    return (
        <div className="h-screen flex flex-col place-items-center justify-between" style={{ backgroundColor: PARAMS.color }}>
            <div className="self-start mx-2 mt-2 p-4 pt-0 overflow-hidden rounded-lg w-44 bg-[#2f3137] space-y-2 border-l-[3px] border-[#3d4146] shadow-md">
                <div className="">
                    <div className="bg-[#3d4146] -mx-4 px-3 py-1 mb-2 text-[#c8cad0] text-[11px] font-courier">Light source</div>
                    <LightSwitcher source={sun} setSource={handleLight} />
                </div>
                <div className="">
                    <div className="bg-[#3d4146] -mx-4 px-3 py-1 mb-2 text-[#c8cad0] text-[11px] font-courier">Shape</div>
                    <ShapeSwitcher shape={shape} setShape={handleShape} />
                </div>
            </div>
            <div className="flex-1 flex items-center">
                <div className="relative w-96 h-96" style={type}>
                    <div className={`${shapeClass} box1 absolute top-0 left-0`}></div>
                    <div className={`${shapeClass} box1 absolute top-0 right-0`}></div>
                    <div className={`${shapeClass} box1 absolute bottom-0 left-0`}></div>
                    <div className={`${shapeClass} box1 absolute bottom-0 right-0`}></div>
                </div>
            </div>
        </div>
    );
}

export default App;
