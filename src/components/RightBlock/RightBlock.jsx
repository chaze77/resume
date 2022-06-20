import React from 'react';

const RightBlock = () => {
    return (
        <div className='main-right'>

            <div className='main-title'>
            <h1>HI I'M <span style={{color: 'blue'}}>SANDY SMITH</span> </h1>
            <p style = {{color: 'gray'}}>web developer & web designer</p>
            </div>


            <div className='main-right-text'>
            <p >Hello! I’m Sandy Smith. Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, HTML, CSS, React. Background in project management and customer relations.</p>
            </div>

            

            <div className='main-info'>
            <div className='main-info-1'>
            <p>Age:    26</p>
            <p>Phone:  +123 456 789</p>
            <p>Adress:  Bishkek, str Toktogula 77, 7</p>
            </div>
            
            <div className='main-info-2'>
            <p>Website: www.fastcup.com</p>
            <p>Email:   sandysmith@gmail.com</p>
            <p>Nationality:   russian</p>
            </div>
            
            
            </div>
            
        </div>
    );
};

export default RightBlock;