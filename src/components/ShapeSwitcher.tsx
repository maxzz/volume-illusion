import React from "react";

const ShapeSwitcher = ({ shape, setShape }: { shape: number, setShape: () => void; }) => {
    return (
        <>
            <div className="">
                <label>Shape: </label>
            </div>
            <div className="text-red-400">
                <div className="shape-switch">
                    <button className={shape === 0 ? "active" : ""} onClick={setShape} name="flat" title="Flat" data-shape="0">
                        <svg width="100" height="23.9" viewBox="0 0 100 24" overflow="visible">
                            <path d="M100 24h-3c-7 0-12-6-12-13V1H16v10c0 7-6 13-13 13H0" fill="none" stroke="currentColor" stroke-width=".9" />
                        </svg>
                    </button>
                    <button className={shape === 2 ? "active" : ""} onClick={setShape} name="concave" title="Concave" data-shape="2">
                        <svg width="100" height="25.1" viewBox="0 0 100 25" overflow="visible">
                            <path d="M100 25h-3c-7 0-12-6-12-14V1C62 18 39 18 16 1v10c0 8-6 14-13 14H0" fill="none" stroke="currentColor" stroke-width=".9" />
                        </svg>
                    </button>
                    <button className={shape === 3 ? "active" : ""} onClick={setShape} name="convex" title="Convex" data-shape="3">
                        <svg width="100" height="24.8" viewBox="0 0 100 25" overflow="visible">
                            <path d="M100 24h-3c-7 0-12-5-12-11v-2a60 60 0 00-69 0v2c0 6-6 11-13 11H0" fill="none" stroke="currentColor" stroke-width=".9" />
                        </svg>
                    </button>
                    <button className={shape === 1 ? "active" : ""} onClick={setShape} name="pressed" title="Pressed" data-shape="1">
                        <svg width="100" height="24" overflow="visible">
                            <path d="M0 1h15v7c0 9 7 16 15 16h39c8 0 15-7 15-16V1h16" fill="none" stroke="currentColor" stroke-width=".9" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ShapeSwitcher;
