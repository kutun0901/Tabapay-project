import React, { useState } from 'react'
import Body from '../../components/Part3/Body'
import './HomePage.css'
import Header from '../../components/Part4/Header';
import Footer from '../../components/Part4/Footer'
import Category from '../../components/Part5/Category';
import TreeMenu from '../../components/Part1/TreeMenu'

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
