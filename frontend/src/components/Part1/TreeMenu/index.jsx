import React, { useEffect, useState } from 'react'
import TreeNode from './TreeNode';


// Part 1

// const treeSample = [
//     {
//         title: 'Root',
//         children: [
//             {
//                 title: 'Parent A',
//                 children: [
//                     { title: 'Child A1', children: [] },
//                     {
//                         title: 'Child A2', children: [
//                             {
//                                 title: 'Child A21', children: []
//                             },
//                             {
//                                 title: 'Child A22', children: []
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 title: 'Parent B',
//                 children: [
//                     {title: 'Child B1', children: []},
//                     {title: 'Child B2', children: []},
//                     {title: 'Child Parent B3', children: []}
//                 ]
//             }

//         ]
//     }
// ]

const TreeMenu = ({ onItemClick }) => {

    const [treeData, setTreeData] = useState([]);

    useEffect(() => {
        fetchTreeData();
    }, []);

    const fetchTreeData = async () => {
        try {
            const response = await fetch('/api/tree');
            if (!response.ok) {
                throw new Error('Failed to fetch tree data');
            }
            const data = await response.json();

            // console.log(data)

            setTreeData(data);
        } catch (error) {
            console.error('Error fetching tree data:', error);
        }
    };

    return (
        <div>
            {treeData.map((node, index) => (
                <TreeNode key={index} node={node} onItemClick={onItemClick} />
            ))}
        </div>
    );
};

export default TreeMenu;
