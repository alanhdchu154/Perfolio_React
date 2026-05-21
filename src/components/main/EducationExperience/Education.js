import React from 'react';
import PropTypes from 'prop-types';

// EducationTableRow component
const EducationTableRow = ({ degree, institution, date }) => (
    <tr>
        <td>{degree}</td>
        <td>{institution}</td>
        <td>{date}</td>
    </tr>
);

EducationTableRow.propTypes = {
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

// EducationTable component
const EducationTable = ({ educationRecords }) => (
    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {educationRecords.map((item, index) => (
                <EducationTableRow
                    key={index}
                    degree={item.degree}
                    institution={item.institution}
                    date={item.date}
                />
            ))}
        </tbody>
    </table>
);

EducationTable.propTypes = {
    educationRecords: PropTypes.arrayOf(
        PropTypes.shape({
            degree: PropTypes.string.isRequired,
            institution: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
};

// Education data
const educationRecords = [
    { degree: "M.S. in Artificial Intelligence", institution: "The University of Texas at Austin", date: "2024 - Present" },
    { degree: "Full Stack Web Development, Walmart Sponsored", institution: "Hackbright Academy", date: "2023" },
    { degree: "Software Engineering Immersive", institution: "General Assembly", date: "2022 - 2023" },
    { degree: "M.S. in Materials Engineering", institution: "Purdue University", date: "2020" },
    { degree: "M.S. & B.S. in Chemical Engineering", institution: "National Tsing Hua University", date: "2016" },
];

// Education component
function Education() {
    if (!educationRecords || educationRecords.length === 0) {
        return <p>No education data available.</p>;
    }

    return (
        <div className="education-block">
            <div className="section__intro">
                <span className="section__eyebrow">Education</span>
                <h2>Academic background</h2>
            </div>
            <EducationTable educationRecords={educationRecords} />
        </div>
    );
}

export default Education;
