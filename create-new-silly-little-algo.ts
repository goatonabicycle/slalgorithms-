#!/usr/bin/env -S deno run --allow-read --allow-write

console.log("Starting file creation process...");

if (Deno.args.length === 0) {
	console.error("Error: Please provide a filename as an argument");
	console.error(
		"Usage: deno run --allow-read --allow-write script.ts <filename>",
	);
	Deno.exit(1);
}

async function createTestFile(baseFilename: string, dirPath: string) {
	const testFilename = `${dirPath}/${baseFilename}_test.ts`;
	console.log(`Creating ${testFilename}...`);

	const testContent = `import { assertEquals } from "@std/assert";
import { sillyLittleAlgorithm } from "./${baseFilename}.ts";

Deno.test("sillyLittleAlgorithm should increment input by 1", () => {
    assertEquals(sillyLittleAlgorithm(1), 2);            
    assertEquals(sillyLittleAlgorithm(0), 1);
    assertEquals(sillyLittleAlgorithm(-1), 0);
});
`;

	try {
		await Deno.writeTextFile(testFilename, testContent);
		console.log(`✅ Created ${testFilename}`);
	} catch (error) {
		console.error(`❌ Error creating ${testFilename}:`, error);
		throw error;
	}
}

async function createImplementationFile(baseFilename: string, dirPath: string) {
	const implFilename = `${dirPath}/${baseFilename}.ts`;
	console.log(`Creating ${implFilename}...`);

	const implementationContent = `/**
 * A silly little algorithm that increments the input by 1
 * @param input - The number to increment
 * @returns The input number plus 1
 */
export function sillyLittleAlgorithm(input: number): number {
    return input + 1;
}
`;

	try {
		await Deno.writeTextFile(implFilename, implementationContent);
		console.log(`✅ Created ${implFilename}`);
	} catch (error) {
		console.error(`❌ Error creating ${implFilename}:`, error);
		throw error;
	}
}

async function ensureDirectoryExists(dirPath: string) {
	try {
		await Deno.mkdir(dirPath);
		console.log(`📁 Created directory ${dirPath}`);
	} catch (error) {
		if (!(error instanceof Deno.errors.AlreadyExists)) {
			throw error;
		}
		console.log(`⚠️  Directory ${dirPath} already exists`);
	}
}

try {
	const filename = Deno.args[0];
	const baseFilename = filename.replace(/\.ts$/, "");
	const dirPath = `./${baseFilename}`;

	await ensureDirectoryExists(dirPath);
	await createTestFile(baseFilename, dirPath);
	await createImplementationFile(baseFilename, dirPath);

	console.log("\n🎉 All files created! No code stuff!");
	console.log(
		`\nTo run tests, use:\ndeno test ${dirPath}/${baseFilename}_test.ts`,
	);
} catch (error) {
	console.error("\n❌ File creation failed\n", error);
	Deno.exit(1);
}
