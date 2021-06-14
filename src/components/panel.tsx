import React from 'react';
import { Button, Table } from "react-bootstrap";

import TreeNodeInput from './tree-node-input';
import {
	DEFAULT_NEW_NODE,
	LIST_MAX_LENGTH
} from '../configs/tree';

import {
  TreeNode
} from '../types';

export default function Panel({
	list,
	onChangeList
}: {
	list: TreeNode[]
	onChangeList: (newList: TreeNode[]) => void
}) {
	return (
		<div style={{marginTop: 20}}>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Name</th>
						<th>Weight</th>
						<th>Value</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{list.map((node, index) => (
						<TreeNodeInput
							index={index}
							data={node}
							key={index}
							onChange={(newNode: TreeNode) => onChangeList(updateList(list, newNode, index))}
							onRemove={() => onChangeList(removeList(list, index))}
						/>
					))}
				</tbody>
			</Table>

			<Button variant="primary" block onClick={() => {
				if (list.length < LIST_MAX_LENGTH) {
					onChangeList([...list, DEFAULT_NEW_NODE])
				}
			}}>
				Add
			</Button>
		</div>
	)
}

function updateList(list: TreeNode[], newNode: TreeNode, index: number): TreeNode[] {
	return list.map((node, i) => i === index ? newNode : node);
}

function removeList(list: TreeNode[], index: number): TreeNode[] {
	return list.filter((node, i) => i !== index);
}