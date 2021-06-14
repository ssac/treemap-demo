import React, {
	useEffect,
	useState
} from 'react';
import { Button, Form } from "react-bootstrap";

import {
	NODE_NAME_MAX_LENGTH
} from '../configs/tree';

import {
  TreeNode
} from '../types';

export default function TreeNodeInput({
	data,
	index,
	onChange,
	onRemove
}: {
	data: TreeNode
	index: number
	onChange: (newNode: TreeNode) => void
	onRemove: () => void
}) {
	const [ isWeightValid, setWeightValid ] = useState<boolean>(true);
	const [ isValueValid, setValueValid ] = useState<boolean>(true);

	const {
		name,
		weight,
		value
	} = data;

	const weightRef = React.createRef<HTMLInputElement>();
	const valueRef = React.createRef<HTMLInputElement>();

	// Initial the latest weight and value once
	useEffect(() => {
		function initWeight() {
			if (!!weightRef && !!weightRef.current) {
				weightRef.current.value = weight + '';
			}
		}
	
		function initValue() {
			if (!!valueRef && !!valueRef.current) {
				valueRef.current.value = value + '';
			}
		}

		initWeight();
		initValue()
	}, []);

	return (
		<tr>
			<td>
				<Form.Control
					value={name}
					size="sm"
					onChange={(el) => {
						const name = el.target.value;

						if (name.length <= NODE_NAME_MAX_LENGTH) {
							onChange({...data, name})
						}
					}}
				/>
			</td>
			<td>
				<Form.Control
					ref={weightRef}
					// value={weight}
					size="sm"
					onChange={(el) => {
						const value = Number(el.target.value);

						if (Number.isInteger(value) && value > 0) {
							setWeightValid(true)

							onChange({
								...data,
								weight: value
							})
						} else {
							setWeightValid(false)
						}
					}}
					isInvalid={!isWeightValid}
				/>
			</td>
			<td>
				<Form.Control
					ref={valueRef}
					// value={value}
					size="sm"
					onChange={(el) => {
						const value = Number(el.target.value);

						if (!Number.isNaN(value)) {
							setValueValid(true);

							onChange({
								...data,
								value
							});
						} else {
							setValueValid(false)
						}
					}}
					isInvalid={!isValueValid}
				/>
			</td>
			<td>
				<Button block variant="danger" size="sm" onClick={onRemove}>
					X
				</Button>
			</td>
		</tr>
	)
}