// Calculate the factorial of a number!

export function factorial(n: number): number {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}
