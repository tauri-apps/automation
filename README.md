# tauri-actions
GitHub Actions available to the tauri-apps organization

## `update-typescript-docs`
1. Takes pass directory containing Typescript files
2. Run those docs through [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/typedoc-plugin-markdown#readme)
3. Generate artifacts of generated docs that will be passed to parent

# Notes
workflow:
- .yml file
- can use runs (tasks)
- Set the box here

actions:
- can be called in a workflow
- Also have composite action types

composite action if just calling typedoc
- look into inputs and outputs
- yarn && yarn build

Look into typedoc config file