import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Tweakpane from 'tweakpane';

function App() {
    const pane = useRef<Tweakpane>();

    const [PARAMS, setPARAMS] = useState({
        color: '',
        tint: {r: 255, g: 255, b: 0, a: 0.5},
    })

    useEffect(() => {
        let panels = new Tweakpane({
            
        });
        panels.addInput(PARAMS, 'color');
        panels.addInput(PARAMS, 'tint');
        pane.current = panels;
        return () => {
            pane.current = undefined;
        }
    }, []);

    return (
        <div className="App bg-green-50 h-screen flex place-items-center justify-center">
            <div className="relative">
                <div className="w-20 h-20 bg-purple-400 threed box1" style={{}}></div>
                <div className="w-20 h-20 bg-purple-500 threed" style={{borderRadius: '35% 65% 67% 33% / 21% 30% 70% 79%'}}></div>
                <div className="w-20 h-20 bg-purple-600 threed" style={{borderRadius: '35% 65% 67% 33% / 21% 30% 70% 79%'}}></div>
            </div>
        </div>
    );
}

export default App;
