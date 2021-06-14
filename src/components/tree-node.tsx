import React from 'react';

import {
	TREE_NODE_HEIGHT
} from '../configs/tree';

import {
  TreeNode
} from '../types';

export default function TreeNodeUI({
	data
}: {
	data: TreeNode
}) {
	return (
		<div style={{
			height: TREE_NODE_HEIGHT, 
			flex: data.weight, 
			backgroundColor: data.value >= 0 ? 'green' : 'red',
			alignItems: 'center',
			justifyContent: 'center',
			display: 'flex',
			overflow: 'hidden',
			borderWidth: 1,
			borderColor: '#ccc',
			borderStyle: 'solid'
		}}>
			<div style={{textAlign: 'center'}}>
				<div>{data.name}</div>
				<div>{data.value}</div>
			</div>
		</div>
	);
}