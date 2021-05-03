import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App bg-red-600">
            <div className="bg-yellow-600">{count}</div>
            <button className="text-red-500 bg-yellow-600">a11a</button>
        </div>
    );
}

export default App;
