import React from "react";

const ShapeSwitcher = ({ shape, setShape }: { shape: number, setShape: () => void; }) => {
    return (
        <>
            <div className="text-red-50">
                <div className="flex w-40 h-8 space-x-1">
                    <button className={`${shape === 0 ? "active" : ""} py-2 border rounded`} onClick={setShape} title="Flat" data-shape-id="0">
                        <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                            <path d="M50 50h-2c-4 0-8-4-8-9V1H11v40c0 5-4 9-8 9H0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className={`${shape === 1 ? "active" : ""} py-2 border rounded`} onClick={setShape} title="Pressed" data-shape-id="1">
                        <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                            <path d="M0 1h11v39c0 5 4 10 9 10h9c6 0 10-5 10-10V1h11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className={`${shape === 2 ? "active" : ""} py-2 border rounded`} onClick={setShape} title="Concave" data-shape-id="2">
                        <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                            <path d="M50 50H40V1C30 17 21 18 11 1v49H0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className={`${shape === 3 ? "active" : ""} py-2 border rounded`} onClick={setShape} title="Convex" data-shape-id="3">
                        <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                            <path d="M50 50H40V10C30-2 21-3 11 10v40H0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ShapeSwitcher;
