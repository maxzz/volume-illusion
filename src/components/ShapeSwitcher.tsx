import React from "react";

const ShapeSwitcher = ({ shape, setShape }: { shape: number, setShape: (id: number) => void }) => {
    return (
        <div className="flex w-36 h-8 space-x-1 text-gray-100">
            <button className={`${shape === 0 ? "bg-gray-500" : "opacity-40"} py-2 border rounded`} onClick={() => setShape(0)} title="Flat">
                <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                    <path d="M50 50h-2c-4 0-8-4-8-9V1H11v40c0 5-4 9-8 9H0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
            <button className={`${shape === 1 ? "bg-gray-500" : "opacity-40"} py-2 border rounded`} onClick={() => setShape(1)} title="Pressed">
                <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                    <path d="M0 1h11v39c0 5 4 10 9 10h9c6 0 10-5 10-10V1h11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
            <button className={`${shape === 2 ? "bg-gray-500" : "opacity-40"} py-2 border rounded`} onClick={() => setShape(2)} title="Concave">
                <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                    <path d="M50 50H40V1C30 17 21 18 11 1v49H0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
            <button className={`${shape === 3 ? "bg-gray-500" : "opacity-40"} py-2 border rounded`} onClick={() => setShape(3)} title="Convex">
                <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                    <path d="M50 50H40V10C30-2 21-3 11 10v40H0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
};

export default ShapeSwitcher;
