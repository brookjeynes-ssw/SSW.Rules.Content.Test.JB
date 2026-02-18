import { defineConfig } from "tinacms"
import { Rules } from "./collection/rule"

// Your hosting provider likely exposes this as an environment variable
const branch ="main"

export default defineConfig({
  // Required as per https://tina.io/docs/frameworks/gatsby/#workaround-for-graphql-mismatch-issue
  client: { skip: true },
  search: {
    tina: {
      indexerToken: '06aa5603888cfe4fa5f714d5c28d4da47506a4d3',
      stopwordLanguages: ['eng'],
    }
  },

  clientId: 'b699f93b-7c68-4c33-bce9-ddf7bfb0f276',
  token: 'fc1541c9b058d607a4c0580e9ac9f9db4bd187b1',
  localContentPath: "../../SSW.Rules.Content",

  branch: "tina/sample-content",

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [Rules],
  },
})
