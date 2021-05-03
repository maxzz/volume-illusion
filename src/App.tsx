import React from 'react';
import './App.css';

function App() {

    return (
        <div className="App bg-green-50 h-screen flex place-items-center justify-center">
            <div className="relative">
                <div className="w-20 h-20 bg-purple-400 threed" style={{borderRadius: '35% 65% 67% 33% / 21% 30% 70% 79%'}}></div>
                <div className="w-20 h-20 bg-purple-500 threed" style={{borderRadius: '35% 65% 67% 33% / 21% 30% 70% 79%'}}></div>
                <div className="w-20 h-20 bg-purple-600 threed" style={{borderRadius: '35% 65% 67% 33% / 21% 30% 70% 79%'}}></div>
            </div>
        </div>
    );
}

export default App;
