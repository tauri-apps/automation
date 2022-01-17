const core = require('@actions/core')

try {
    console.log("Testing...")
} catch (error) {
    core.setFailed(error.message)
}