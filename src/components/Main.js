import React from 'react';
import { lazy, Suspense } from 'react';
// import { Suspense } from 'react';
const EducationExperience = lazy(() => import('./main/EducationExperience/EducationExperience'));
const WorkExperience = lazy(() => import('./main/WorkExperience/WorkExperience'));
const TechSkills = lazy(() => import('./main/WorkExperience/TechSkills'));
const Projects = lazy(() => import('./main/Projects'));
const ProjectTopics = lazy(() => import('./main/ProjectTopics'));
const AboutMe = lazy(() => import('./main/AboutMe'));
const SelectedImpact = lazy(() => import('./main/SelectedImpact'));
const ContactForm = lazy(() => import('./main/ContactForm'));
const ResearchInterests = lazy(() => import('./main/ResearchInterests'));


function Main() {
    return (
        <main className="container-fluid">
            <Suspense fallback={<div>Loading...</div>}>
                <AboutMe />
                <SelectedImpact />
                <WorkExperience />
                <TechSkills />
                <Projects />
                <ProjectTopics />
                <ResearchInterests />
                <EducationExperience />
                <ContactForm />
            </Suspense>
        </main>
    );
}

export default Main;
