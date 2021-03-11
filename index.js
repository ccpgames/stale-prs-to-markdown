const core = require('@actions/core');
const github = require('@actions/github');
const showdown = require('showdown');

showdown.setFlavor('github');

try {
  const markdownText = core.getInput('text');
  let re = /<details>[\s\S]*?<\/details>/g;
  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdownText.replace(re, ""));

  core.setOutput("html", html);

} catch (error) {
  core.setFailed(error.message);
}
