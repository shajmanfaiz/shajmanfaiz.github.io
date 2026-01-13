import React from 'react';

export default function Card({ title, imgSrc, desc, link }) {
    return (
        <div
            className="shadow-[10px_-10px_#397ca4] overflow-hidden flex flex-col rounded w-full max-w-[450px]"
            style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-primary)' }}
        >
            <div className="h-[250px] w-full overflow-hidden mx-auto relative group">
                <div
                    className="w-full h-full bg-no-repeat bg-top bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                        userSelect: 'none'
                    }}
                ></div>
            </div>
            <div className="p-5 flex flex-col items-start gap-3 flex-grow">
                <h5 className="text-[1.25rem] font-medium leading-tight md:text-base">{title}</h5>
                <p className="text-base md:text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
                <a href={link} className="inline-block px-4 py-2 bg-[#0d6efd] text-white font-medium text-center align-middle cursor-pointer select-none border border-transparent rounded transition-colors hover:bg-[#0b5ed7] focus:shadow-[0_0_0_0.25rem_rgba(49,132,253,0.5)]">
                    View Project
                </a>
            </div>
        </div>
    );
}