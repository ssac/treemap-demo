import React from 'react';

import TreeNodeUI from './tree-node';
import * as TreeUtils from '../utils/tree';

import {
  TreeNode
} from '../types';

export default function TreeBranch({
	data,
	maxWeight
}: {
	data: TreeNode[]
	maxWeight: number
}) {
	const remainWeight = maxWeight - TreeUtils.sumBranchWeight(data);

	return (
		<div style={{
			flexDirection: 'row', 
			display: 'flex'
		}}>
			{data.map((node, index) => (
				<TreeNodeUI
					key={`${node.name}-${node.weight}-${node.value}`}
					data={node}
				/>
			))}

			{remainWeight > 0 ? <div style={{flex: remainWeight}}></div> : null}
		</div>
	)
}