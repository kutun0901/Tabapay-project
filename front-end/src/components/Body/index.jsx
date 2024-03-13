import React from 'react'

const Body = ({ content }) => {
    return (
        <div className="body-container">
            {content ? (
                <h1>{content}</h1>
            ) : (
                <p>Please select a tree node.</p>
            )}
        </div>
    );
};

export default Body
