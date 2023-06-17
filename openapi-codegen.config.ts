import { generateSchemaTypes, generateFetchers } from '@openapi-codegen/typescript';
import { defineConfig } from '@openapi-codegen/cli';
export default defineConfig({
	generated: {
		from: {
			relativePath: './petstore-expanded.yaml',
			source: 'file'
		},
		outputDir: 'src/lib/generated',
		to: async (context) => {
			const filenamePrefix = 'generated';
			const { schemasFiles } = await generateSchemaTypes(context, {
				filenamePrefix
			});
			await generateFetchers(context, {
				filenamePrefix,
				schemasFiles
			});
		}
	}
});
