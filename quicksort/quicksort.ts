export function quicksort(arrayOfThings: number[]): number[] {	
	if(arrayOfThings.length <= 1)
		return arrayOfThings;	
	
	const pivot = arrayOfThings[Math.floor(arrayOfThings.length / 2)];
	const left = arrayOfThings.filter(thing => thing < pivot);
	const right = arrayOfThings.filter(thing => thing > pivot);

	return [...quicksort(left), pivot, ...quicksort(right)];	
}