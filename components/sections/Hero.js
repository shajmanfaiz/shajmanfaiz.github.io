import React from 'react';
import { data } from '../../data';

const Hero = () => {
    const translatedData = data();

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-16"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <div className="container text-center py-20">
                {/* Greeting */}
                <p
                    className="text-lg mb-4 fade-in"
                    style={{ color: 'var(--text-secondary)', animationDelay: '0.1s' }}
                >
                    {translatedData.greeting} 👋
                </p>

                {/* Name */}
                <h1
                    className="mb-6 fade-in"
                    style={{ animationDelay: '0.2s' }}
                >
                    {translatedData.name}
                </h1>

                {/* Title */}
                <p
                    className="text-xl mx-auto md:text-2xl mb-8 fade-in"
                    style={{
                        color: 'var(--accent)',
                        animationDelay: '0.3s'
                    }}
                >
                    {translatedData.position}
                </p>

                {/* Summary */}
                {/* <p
                    className="max-w-2xl mx-auto mb-10 fade-in"
                    style={{ animationDelay: '0.4s' }}
                >
                    {translatedData.summary}
                </p> */}

                {/* CTA Buttons */}
                <div
                    className="flex flex-wrap justify-center gap-4 fade-in"
                    style={{ animationDelay: '0.5s' }}
                >
                    <a
                        href={`mailto:${translatedData.email}`}
                        className="btn btn-primary hover:text-white"
                    >
                        {translatedData.contactButtonText}
                    </a>
                    <a
                        href={translatedData.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        {translatedData.resumeButtonText}
                    </a>
                </div>

                {/* Social Links */}
                <div
                    className="flex justify-center gap-6 mt-12 fade-in p-4"
                    style={{ animationDelay: '0.6s' }}
                >
                    {translatedData.socialMedia.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                color: 'var(--text-primary)'
                            }}
                            aria-label={social.socialMedia}
                        >
                            <i className={`${social.icon} text-lg`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
