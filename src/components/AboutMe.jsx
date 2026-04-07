import React, { useState } from 'react';
import { stackCategories, categoryLabels } from '../data/categorizedStacks';
import '../styles/AboutMe.css';

const AboutMe = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const stacks = stackCategories[activeCategory];

    return (
        <section className="about-me-section">
            <div className="about-me-container">

                {/* Left Column — Title & Description */}
                <div className="about-me-left">
                    <h2 className="about-me-title">About Me</h2>
                    <div className="about-me-description">
                        <p>
                            I'm a self-taught developer and designer who loves building things
                            that are both functional and beautiful. I care deeply about the
                            details — from how a button feels on hover to how a codebase is
                            organized.
                        </p>
                        <p>
                            My work spans the full spectrum: from designing clean UI in Figma,
                            to shipping production-ready React apps, to spinning up WordPress
                            and Shopify storefronts for real clients.
                        </p>
                        <p>
                            When I'm not building, I'm learning — currently diving deeper into
                            cloud infrastructure (AWS, Azure) and expanding my backend skills
                            with Python and Node.js.
                        </p>
                    </div>
                </div>

                {/* Right Column — Stack Nav & Grid */}
                <div className="about-me-right">
                    {/* Category Nav */}
                    <nav className="stacks-nav">
                        <div className="stacks-nav-pill">
                            {categoryLabels.map((label) => (
                                <button
                                    key={label}
                                    className={`stacks-nav-btn ${activeCategory === label ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(label)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* Stacks Grid */}
                    <div className="stacks-grid">
                        {stacks.filter(Boolean).map((stack) => {
                            const Icon = stack.icon;
                            return (
                                <div key={stack.name} className="stack-pill">
                                    <span className="stack-pill-icon">
                                        <Icon width={20} height={20} />
                                    </span>
                                    <span className="stack-pill-name">{stack.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
