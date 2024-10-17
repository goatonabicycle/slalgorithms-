import { assertEquals } from "@std/assert";
import { factorial } from "./main.ts";

Deno.test(function factorialTest() {
	assertEquals(factorial(4), 24);
	assertEquals(factorial(6), 720);
});
