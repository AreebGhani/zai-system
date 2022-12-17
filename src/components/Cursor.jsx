import React from 'react'

export default function Cursor() {
    return (
        <>
            <div className="cursor">
                <div className="cursor-helper">
                    <span className="cursor-drag">Drag</span>
                    <span className="cursor-view">View</span>
                    <span className="cursor-open"><i className="fas fa-plus"></i></span>
                    <span className="cursor-close">Close</span>
                    <span className="cursor-play">play</span>
                    <span className="cursor-next"><i className="fas fa-chevron-right"></i></span>
                    <span className="cursor-prev"><i className="fas fa-chevron-left"></i></span>
                </div>
            </div>
        </>
    )
}
