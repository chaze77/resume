import React from 'react';

const ProfessionalSkills = () => {
    return (
        <div className='prof-skills'>
           
            <div className='prof-skills-title'>PROFESSIONAL SKILLS</div>
            <div className='prof-skill-square-left'>
                <div className='prof-skill-content'>
                <p>HTML & CSS</p> 
                <p>90%</p>                
                </div>
                <div className = 'prof-skill-gradient-1'></div>

                <div className='prof-skill-content'>
                <p>Wordpress</p>
                <p>75%</p>
                </div>                
                <div className = 'prof-skill-gradient-2'></div>

                <div className='prof-skill-content'>
                <p>JavaScript</p>
                <p>85%</p>
                </div>               
                <div className = 'prof-skill-gradient-3'></div>
                <div className='prof-skill-content'>
                <p>React</p>
                <p>70%</p>
                </div>                
                <div className = 'prof-skill-gradient-4'></div>

                <div className='prof-skill-content'>
                <p>Figma</p>
                <p>65%</p>
                </div>
                <div className = 'prof-skill-gradient-5'></div>
            </div>
            
        </div>
    );
};

export default ProfessionalSkills;