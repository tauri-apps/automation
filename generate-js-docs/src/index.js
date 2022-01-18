const core = require("@actions/core");
const TypeDoc = require("typedoc");

function run() {
  try {
    const tsconfigFilepath = core.getInput("tsconfig-filepath");
    const entryPoints = core.getInput("entry-points");
    const outputDir = "."

    const app = new TypeDoc.Application();

    app.bootstrap({
      entryPoints: [entryPoints],
      tsconfig: tsconfigFilepath,
    });

    const project = app.convert();

    if (project) {
      app.generateDocs(project, outputDir);
    } else {
      core.setFailed("Files weren't able to be converted")
    }

    // core.setOutput("output", outputDir);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()