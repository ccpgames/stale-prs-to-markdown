const core = require('@actions/core');
const github = require('@actions/github');

try {
  const staleoutput = JSON.parse(core.getInput('staleoutput'));
  let anyMarked = false;
  let markdown = "Old PR in repo " + github.context.repo + ":\n" 
  
  for(var item of staleoutput) {
    if(!item.markedStaleThisRun) continue;
    anyMarked = true;
    markdown += "\n"
    markdown += "[PR " + item.number + "](" + item.pull_request.html_url + ") " + item.title
  }

  core.setOutput("markdown", markdown);
  core.setOutput("anymarked", anyMarked);
} catch (error) {
  core.setFailed(error.message);
}
