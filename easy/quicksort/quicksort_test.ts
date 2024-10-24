import { assertEquals } from "@std/assert";
import { quicksort } from "./quicksort.ts";

Deno.test(function quicksortTest() {
	assertEquals(quicksort([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
	assertEquals(quicksort([3, 2, 1, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
	assertEquals(quicksort([6, 2, 1, 4, 5, 3]), [1, 2, 3, 4, 5, 6]);
});
