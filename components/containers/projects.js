import React from 'react';
import Card from '../core/Card';
import Carousel from 'react-elastic-carousel';
import useWindowSize from '../useWindowSize';
import { projects } from '../../data';

export default function Projects() {
    const { width } = useWindowSize();
    const isWide = width > 750 ? true : false;
    return (
        <div className="projects row bg-container">
            <div className="container w-50 text-center mt-3 mb-0">
                <h1 className="text-white text-xxl-center">
                    My Recent <span>Works</span>
                </h1>
                <p className="text-white">
                    Here are a few projects I've worked on recently...
                </p>
            </div>
            <Carousel
                itemsToShow={isWide ? 3 : 1}
                itemPadding={[20, 20, 20, 20]}
                style={{ padding: '0px 50px 0px 0px' }}
                showArrows={isWide}
            >
                {projects.map((project) => {
                    const { title, imgSrc, desc, link ,hostedUrl} = project;
                    return (
                        <Card
                            title={title}
                            imgSrc={imgSrc}
                            desc={desc}
                            link={link}
                            hostedUrl={hostedUrl}
                        />
                    );
                })}
            </Carousel>
        </div>
    );
}
