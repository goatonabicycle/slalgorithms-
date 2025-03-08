import { assertEquals } from "@std/assert";
import { binarySearch } from "./binarySearch.ts";

Deno.test(function binarySearchTest() {
	assertEquals(binarySearch([1, 2, 3, 4, 5, 6], 5), 4);
	assertEquals(binarySearch([1, 2, 3, 4, 5, 6], 6), 5);
	assertEquals(binarySearch([1, 2, 3, 4, 5, 6], 7), -1);
	assertEquals(binarySearch([-1, 0, 3, 5, 9, 12], 7), -1);
});
