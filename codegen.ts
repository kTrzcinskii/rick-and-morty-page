import { CodegenConfig } from "@graphql-codegen/cli";
import { API_ENDPOINT } from "./src/utils/constants";

const config: CodegenConfig = {
  schema: API_ENDPOINT,
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
