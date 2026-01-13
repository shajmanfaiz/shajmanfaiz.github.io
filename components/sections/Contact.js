import React from 'react';
import { data } from '../../data';

const Contact = ({ locale }) => {
    const translatedData = data(locale);

    return (
        <section
            id="contact"
            className="section"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
            <div className="container text-center">
                {/* Section Title */}
                <h2 className="mb-4">{translatedData.contactTitle}</h2>
                <p
                    className="max-w-lg mx-auto mb-8"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    {translatedData.contactDescription}
                </p>

                {/* Contact Button */}
                <a
                    href={`mailto:${translatedData.email}`}
                    className="btn btn-primary hover:text-white text-lg px-8 py-4"
                >
                    {translatedData.sayHelloButton}
                </a>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-8">
                    {translatedData.socialMedia.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:opacity-70"
                            style={{ color: 'var(--text-secondary)' }}
                            aria-label={social.socialMedia}
                        >
                            <i className={`${social.icon} text-2xl`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;