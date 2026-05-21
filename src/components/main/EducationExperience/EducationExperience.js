import React from "react";
import Education from './Education';
import Achievements from './Achievements';
import Publications from './Publications';

function EducationExperience() {
    return (
        <section className="section education-section" id="education">
            <Education />
            <Achievements />
            <Publications />
        </section>
    );
}

export default EducationExperience;
