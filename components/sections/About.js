import React from 'react';
import { data } from '../../data';

const About = ({ locale }) => {
    const translatedData = data(locale);

    return (
        <section
            id="about"
            className="section"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
            <div className="container">
                {/* Section Title */}
                <h2 className="text-center mb-12">
                    {translatedData.aboutTitle}
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Bio */}
                    <div>
                        <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                            {translatedData.summary}
                        </p>
                        <blockquote
                            className="text-xl italic border-l-4 pl-4 my-6"
                            style={{
                                borderColor: 'var(--accent)',
                                color: 'var(--text-primary)'
                            }}
                        >
                            &quot;{translatedData.quote}&quot;
                        </blockquote>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="mb-6">{translatedData.technicalSkillsTitle}</h3>
                        <div className="space-y-6">
                            {translatedData.skills.slice(0, 2).map((category, idx) => (
                                <div key={idx}>
                                    <h4
                                        className="text-sm font-semibold uppercase tracking-wider mb-3"
                                        style={{ color: 'var(--accent)' }}
                                    >
                                        {category.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 text-sm rounded-full"
                                                style={{
                                                    backgroundColor: 'var(--bg-primary)',
                                                    color: 'var(--text-secondary)',
                                                    border: '1px solid var(--border)'
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;