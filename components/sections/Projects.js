import React from 'react';
import Card from '../core/Card';
import Carousel from 'react-elastic-carousel';
import useWindowSize from '../useWindowSize';
import { data } from '../../data';

export default function Projects({ locale }) {
    const translatedData = data(locale); // Call data as a function
    const { width } = useWindowSize();
    const isWide = width > 750 ? true : false;
    return (
        <section id="projects" className='section'>
            <div className="font-sec min-h-[calc(100vh-70px)] w-full flex flex-col justify-center items-center bg-container overflow-hidden md:overflow-visible">
                <div className="w-1/2 text-center mt-3 mb-0 z-10">
                    {/* <h1 className="text-[2em] md:text-[5em] font-main" style={{ color: 'var(--text-primary)' }}>
                        {translatedData.projectsTitle.split(' ')[0]}{' '}
                        <span className="text-lightroyalblue">{translatedData.projectsTitle.split(' ').slice(1).join(' ')}</span>
                    </h1> */}
    
                    {/* Section Title */}
                    <h2 className="mb-4">{translatedData.projectsTitle}</h2>
                    {/* <p style={{ color: 'var(--text-primary)' }}>{translatedData.projectsSubtitle}</p> */}
                </div>
                <div className="w-full flex justify-center py-10">
                    <Carousel
                        itemsToShow={isWide ? 3 : 1}
                        itemPadding={[20, 20, 20, 20]}
                        style={{ padding: '0px 50px 0px 0px', maxWidth: '100%' }}
                        showArrows={isWide}
                        // --- Rolling (Auto-play) Props ---
                        enableAutoPlay={true}
                        autoPlaySpeed={2000} // Slides every 2 seconds
                        infinite={true}      // Loops back to the start
                        stopOnHover={true}
                        // infiniteLoop={true}   // Note: try 'infiniteLoop' if 'infinite' fails
                    // 
                        // ---------------------------------
                    >
                        {translatedData.projects.map((project, index) => {
                            const { title, imgSrc, description, link, hostedUrl } = project;
                            return (
                                <Card
                                    key={index}
                                    title={title}
                                    imgSrc={imgSrc}
                                    desc={description}
                                    link={link}
                                    hostedUrl={hostedUrl}
                                />
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}