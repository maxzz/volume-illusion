import React from "react";

const ShapeSwitcher = ({ shape, setShape }: { shape: number, setShape: () => void; }) => {
    return (
        <>
            <div className="">
                <label>Shape: </label>
            </div>
            <div className="text-red-50">
                <div className="flex w-32 h-4">
                    <button className={shape === 0 ? "active" : ""} onClick={setShape} name="flat" title="Flat" data-shape="0">
                        <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                            <path d="M50 50h-2c-4 0-8-4-8-9V1H11v40c0 5-4 9-8 9H0" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button className={shape === 2 ? "active" : ""} onClick={setShape} name="concave" title="Concave" data-shape="2">
                        <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                            <path d="M50 50H40V1C30 17 21 18 11 1v49H0" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button className={shape === 3 ? "active" : ""} onClick={setShape} name="convex" title="Convex" data-shape="3">
                        <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                            <path d="M50 50H40V10C30-2 21-3 11 10v40H0" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button className={shape === 1 ? "active" : ""} onClick={setShape} name="pressed" title="Pressed" data-shape="1">
                        <svg width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                            <path d="M0 1h11v39c0 5 4 10 9 10h9c6 0 10-5 10-10V1h11" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ShapeSwitcher;
