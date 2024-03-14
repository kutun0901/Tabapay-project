import React, { useState } from 'react';
import './treeNode.css';
import Modal from '../Modal';

const TreeNode = ({ node, onItemClick }) => {
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

        onItemClick(node.title);

    };

    return (
        <>
            <div className="tree-nodes" onClick={handleClick}>
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
                <div className="tree-children">
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} onItemClick={onItemClick} />
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
