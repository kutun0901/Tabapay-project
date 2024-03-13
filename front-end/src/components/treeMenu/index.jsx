import React from 'react'
import TreeNode from './TreeNode';

const treeSample = [
    {
        title: 'Root',
        children: [
            {
                title: 'Parent A',
                children: [
                    { title: 'Child A1', children: [] },
                    {
                        title: 'Child A2', children: [
                            {
                                title: 'Child A21', children: []
                            },
                            {
                                title: 'Child A22', children: []
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Parent B',
                children: [
                    {title: 'Child B1', children: []},
                    {title: 'Child B2', children: []},
                    {title: 'Child Parent B3', children: []}
                ]
            }

        ]
    }
]

const TreeMenu = () => {

    return (
        <div>
            {treeSample.map((node, index) => (
                <TreeNode key={index} node={node}/>
            ))}
        </div>
    )
}

export default TreeMenu;
