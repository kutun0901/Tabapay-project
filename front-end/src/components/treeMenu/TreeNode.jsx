import React, { useState } from 'react';
import './treeNode.css';
import Modal from '../Modal';

const TreeNode = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [nodeContent, setNodeContent] = useState('');

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleClick = () => {
        if (node.children.length === 0) {
            setNodeContent(node.title);
            setShowModal(true);
        }
    };

    return (
        <>
            <div className="root" onClick={handleClick}>
                {node.children.length > 0 ? (
                    <span onClick={handleToggle}>
                        {isExpanded ? '▼ ' : '► '}
                    </span>
                ) : (
                    <span>◉ </span>
                )}
                {node.title}
            </div>
            {isExpanded && (
                <div className="tree-nodes">
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} />
                    ))}
                </div>
            )}
            {showModal && (
                <Modal content={nodeContent} onClose={() => setShowModal(false)} />
            )}
        </>

    );
};

export default TreeNode;
