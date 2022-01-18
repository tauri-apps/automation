const core = require("@actions/core");
const github = require("@actions/github");
const io = require("@actions/io");
const TypeDoc = require("typedoc");

async function run() {
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
      await app.generateDocs(project, outputDir);
    }

    core.setOutput("output", outputDir);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()