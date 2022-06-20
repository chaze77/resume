import React from 'react';
import AdditionalSkill from './AdditionalSkill/AdditionalSkill';
import ProfessionalSkills from './ProfessionalSkills/ProfessionalSkills';
import TitleSkills from './TitleSkills/TitleSkills';

const Skilss = () => {
    return (
        <div className='container-skills'>
            <TitleSkills />
            <div className='skills-main-block'>
            <ProfessionalSkills />
            <AdditionalSkill />
            </div>
        </div>
    );
};

export default Skilss;