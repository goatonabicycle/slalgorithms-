export function binarySearch(arrayOfThings: number[], target: number): number {
	if (arrayOfThings.length === 0) return -1;

	const middleIndex = Math.floor(arrayOfThings.length / 2);
	const middleValue = arrayOfThings[middleIndex];

	if (target === middleValue) return middleIndex;

	if (target > middleValue) {
		const rightHalf = arrayOfThings.slice(middleIndex + 1);
		const rightResult = binarySearch(rightHalf, target);
		return rightResult === -1 ? -1 : middleIndex + 1 + rightResult;
	}

	const leftHalf = arrayOfThings.slice(0, middleIndex);
	return binarySearch(leftHalf, target);
}
