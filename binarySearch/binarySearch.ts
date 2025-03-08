export function binarySearch(arrayOfThings: number[], target: number): number {
	const middleIndex = Math.floor(arrayOfThings.length / 2);
	console.log(arrayOfThings[middleIndex]);

	if (target === arrayOfThings[middleIndex]) return middleIndex;
	if (target > arrayOfThings[middleIndex]) {
		const right = [
			...arrayOfThings.filter((x) => x > arrayOfThings[middleIndex]),
		];

		console.log({ right });
		binarySearch(right, target);
	}

	if (target < arrayOfThings[middleIndex]) {
		const left = [
			...arrayOfThings.filter((x) => x < arrayOfThings[middleIndex]),
		];
		console.log({ left });
		binarySearch(left, target);
	}

	return -1;
}
