import React from 'react';
import RenderImage from './RenderImage';
import Main from './Main';
import './MainSection.css'
import Image from './images/apes1.jpeg'

class MainSection extends React.Component {
    render() {
        return (
            <div className='upper-div'>
                <div className='main-section'>
                    <RenderImage Image={Image} />
                    <div className='placeholder'></div>
                    <Main />
                    <div className='placeholder'></div>
                    <RenderImage Image={Image} />
                </div>
            </div>
        );
    }
}

export default MainSection;