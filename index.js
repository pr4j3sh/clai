#!/usr/bin/env node

const { argv, exit } = require("node:process");
const { ai } = require("@pr4j3sh/ai");

const args = argv.slice(2);
const prompt = args[0];

if (!prompt) {
  console.error("please provide a prompt");
  exit(1);
}

if (prompt === "help" || prompt === "-h") {
  console.log('usage: clai ["prompt"] [help | -h]\n');
  console.log('\t"prompt"\tprompt for clai, must be enclosed in quotes');
  console.log("\thelp | -h\tdisplays help message");
} else {
  ai(prompt)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}
