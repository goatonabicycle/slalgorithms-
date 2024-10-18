import { assertEquals } from "@std/assert";
import { factorial } from "./factorial.ts";

Deno.test(function factorialTest() {
	assertEquals(factorial(4), 24);
	assertEquals(factorial(6), 720);
});
