import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Tweakpane from 'tweakpane';

function App() {
    const pane = useRef<Tweakpane>();

    const [PARAMS, setPARAMS] = useState({
        color: '',
        tint: '#22aaeeff',
    })

    useEffect(() => {
        let panels = new Tweakpane({
            title: 'Controls'
        });
        panels.addInput(PARAMS, 'color');
        panels.addInput(PARAMS, 'tint').on('change', (e) => {
            setPARAMS((v) => ({...v, tint: e.value}));
        });

        panels.on('change', (ev) => {
            console.log(`changed: ${ev.presetKey} = ${ev.value}`);
        });

        pane.current = panels;
        return () => {
            pane.current = undefined;
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log('-----------');
            
            setPARAMS((v) => ({...v, tint: '#000'}));
            //pane.current?.refresh();
        }, 2000);
    }, []);

    useEffect(() => {
        console.log('===========', {PARAMS}, {pane: pane.current });
        pane.current?.refresh();
    }, [PARAMS]);

    return (
        <div className="App bg-green-50 h-screen flex place-items-center justify-center">
            <div className="relative w-96 h-96">
                <div className="w-20 h-20 bg-purple-600 threed box1 absolute top-0 left-0" style={{backgroundColor: `${PARAMS.tint}`}}></div>
                <div className="w-20 h-20 bg-purple-400 threed box1 absolute top-0 right-0" style={{}}></div>
                <div className="w-20 h-20 bg-purple-500 threed box1 absolute bottom-0 right-0" style={{}}></div>
            </div>
        </div>
    );
}

export default App;
