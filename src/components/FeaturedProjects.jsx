import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/FeaturedProjects.css';
import { projectsData } from '../data/projects';

const FeaturedProjects = () => {
    // Only display featured projects here
    const featuredList = projectsData.filter(project => project.isFeatured);
    const [activeId, setActiveId] = useState(null);

    const handleCardClick = (id) => {
        // Toggle active state for mobile
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    };

    return (
        <section className="featured-projects-section">
            <div className="featured-header">
                <h2 className="featured-title">Featured Projects</h2>
                <Link to="/projects" className="view-all-btn">
                    View All Projects 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </Link>
            </div>

            <div className="carousel-container">
                {featuredList.map(project => (
                    <div 
                        key={project.id} 
                        className={`project-card ${activeId === project.id ? 'active' : ''}`}
                        onClick={() => handleCardClick(project.id)}
                    >
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        
                        <div className="project-title-layer">
                            <h3 className="project-title">{project.title}</h3>
                        </div>

                        <div className="project-overlay">
                            <div className="overlay-content">
                                <p className="overlay-description">{project.description}</p>
                                <a 
                                    href={project.liveLink} 
                                    className="view-project-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="mobile-hand-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProjects;
