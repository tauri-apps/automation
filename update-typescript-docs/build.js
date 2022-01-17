const { exec } = require('child_process');

exec("yarn typedoc docs --out output --plugin typedoc-plugin-markdown --tsconfig 'docs/tsconfig.json' --hideInPageTOC true --hideBreadcrumbs true --githubPages false")