import {
  TreeNode
} from '../types';

export function getTreeMaxWeight(tree: TreeNode[][]): number {
	return tree.reduce((prev, curBranch) => {
		const curWeight = sumBranchWeight(curBranch);
		return prev > curWeight ? prev : curWeight;
	}, 0);
}

export function sumBranchWeight(branch: TreeNode[]): number {
	return branch.reduce((prev, cur) => {
		return prev + cur.weight;
	}, 0);
}