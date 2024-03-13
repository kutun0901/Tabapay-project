import React, { useState } from 'react'
import TreeMenu from '../../components/TreeMenu'
import Body from '../../components/Body'
import './HomePage.css'

const HomePage = () => {
    const [content, setContent] = useState('');

    const handleContentPicker = (content) => {
        setContent(content);
    };

    return (
        <div className='homePage-container'>
            <div className='menu-container'>
                <TreeMenu onItemClick={handleContentPicker} />
            </div>
            <div className='divider'></div> {/* Divider element */}
            <div className='content-container'>
                <Body content={content} />
            </div>
        </div>
    );
};

export default HomePage;
