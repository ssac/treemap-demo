import React from 'react';
import {
	InputGroup,
	Button
} from 'react-bootstrap';

import Branch from './tree-branch';
import * as TreeUtils from '../utils/tree';
import * as ListUtils from '../utils/list';

import {
  TreeNode
} from '../types';

export default function Tree({
	list,
	rowNum,
	onChangeRowNum
}: {
	list: TreeNode[]
	rowNum: number
	onChangeRowNum: (newRowNum: number) => void
}) {
	const tree = ListUtils.balanceChunk(list, rowNum);

	if (tree.length === 0) {
		return null;
	}

	const maxWeight = TreeUtils.getTreeMaxWeight(tree);

	return (
		<div data-testid="tree-map" style={{marginTop: 20}}>
			<InputGroup>
				<InputGroup.Prepend>
					<InputGroup.Text id="btnGroupAddon">
						Rows: {rowNum}
					</InputGroup.Text>
				</InputGroup.Prepend>
				<InputGroup.Append>
					<Button variant="outline-secondary" onClick={() => {
						onChangeRowNum(Math.max(--rowNum, 1))
					}}>
						-
					</Button>
					<Button variant="outline-secondary" onClick={() => {
						onChangeRowNum(Math.min(++rowNum, list.length))
					}}>
						+
					</Button>
				</InputGroup.Append>
			</InputGroup>

			<div style={{
				borderWidth: 1, 
				borderColor: '#ccc', 
				borderStyle: 'solid',
				padding: 10,
				marginTop: 10
			}}>
				{tree.map((branch, branchIndex) => (
					<Branch 
						key={branchIndex}
						data={branch}
						maxWeight={maxWeight}
					/>
				))}
			</div>
		</div>
	)
}