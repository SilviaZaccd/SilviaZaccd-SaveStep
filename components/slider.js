import React, { useState, useRef, useEffect } from 'react';
function Slider({ initialValue = 0, max = 100, onChange }) {
    const [progress, setProgress] = useState(initialValue);
    const progressBarRef = useRef(null);
    const draggerRef = useRef(null);
    let isDragging = false;
    let startX, draggerWidth;

    const updateProgress = (clientX) => {
        if (!progressBarRef.current || !isDragging) return;

        const rect = progressBarRef.current.getBoundingClientRect();
        const draggerRect = draggerRef.current.getBoundingClientRect();

        // Calculate new progress based on mouse position  
        const x = clientX - rect.left;
        const progressWidth = rect.width - draggerWidth;
        let newProgress = Math.min(Math.max(0, (x - draggerRect.width / 2) / progressWidth * max), max);
        setProgress(newProgress);
    };

    const handleMouseDown = (e) => {
        isDragging = true;
        startX = e.clientX;
        draggerWidth = draggerRef.current.offsetWidth;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (e.clientX <= 760) {
            updateProgress(e.clientX);
        } else {
            onChange?.('over')
        }
    };

    const handleMouseUp = () => {
        isDragging = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);

        // Optionally call onChange here if you want to debounce or throttle  
        onChange?.(progress);
    };

    useEffect(() => {
        if (progressBarRef.current && draggerRef.current) {
            const newLeft = `${(progress / max) * 100}%`;
            draggerRef.current.style.left = newLeft;
        }
    }, [progress, max]);

    let slider_btn = 'absolute w-[25%]  left-0 bg-bright-read h-full rounded-[15px] cursor-move'
    return (<div ref={progressBarRef} style={{ userSelect: 'none', }} className="w-[266px] overflow-hidden h-[46px] bg-[#d9d9d9] rounded-[15px] text-[16px] font-bold box-shadow-custom flex items-center justify-center relative">
        <div className={slider_btn} ref={draggerRef} style={{ left: `${(progress / max) * 100}%`, }} onMouseDown={handleMouseDown} >
        </div>
        Cancel
    </div >)
}

export default Slider