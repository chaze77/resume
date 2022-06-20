import React from 'react';

const AdditionalSkill = () => {
    return (
        <div className='additonal-skills'>
            <div className='additional-skills-title'>ADDITIONAL SKILLS</div>
            <div className='prof-skill-square-right'>


                <div className='circle'>
                
                <div className='circle-content'>
                <div className= "english">90%</div>           
                <span>English</span>
                </div>
               
                <div className='circle-content'>
                <div className= "creativity">80%</div>           
                <span>Creativity</span>
                </div>
                
                <div className='circle-content'>
                <div className= "teamwork">65%</div>            
                <span>Team work</span>
                </div>
                
            
                </div>         
                           

            <div className='additional-skills-content'>
            <div className='additional-skills-content-1'>
                <p>Photography</p>
                <p>Mobile App Design</p>
                <p>Logo Design</p>
            </div >
            <div className='additional-skills-content-2'>
                <p>3D Animation</p>
                <p>Audio Video Editing</p>
                <p>UX and UI Design</p>
                 </div>
                 
                 </div>

            </div>
           


           

            
        </div>
    );
};

export default AdditionalSkill;