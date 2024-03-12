import React, { useState } from 'react'
import './treeNode.css'


const TreeNode = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);


    const handleToggle = () => {
        setIsExpanded(!isExpanded);
      };

    return (
        <>
            <div className="root">
                {node.children.length > 0 && (
                    <span onClick={handleToggle}>
                        {isExpanded ? '▼ ' : '► '}
                    </span>
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
        </>
    )
}

export default TreeNode;
