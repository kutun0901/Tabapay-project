import React, { useState } from 'react'
import TreeMenu from '../../components/TreeMenu'
import Body from '../../components/Body'
import './HomePage.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Category from '../../components/Category';

const HomePage = () => {
    const [content, setContent] = useState('');

    const handleContentPicker = (content) => {
        setContent(content);
    };

    return (
        <div className='homePage-container'>
            <Header />
            <div className='menu-and-content'>
                <div className='menu-container'>
                    <TreeMenu onItemClick={handleContentPicker} />
                </div>
                <div className='divider'></div>
                <div className='content-container'>
                    <Body content={content} />
                    <Category />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
