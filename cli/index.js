const { program } = require("commander")
const package = require("./package")

program
    .option('--init', 'helps init your app')
    .version(package.version)
    .parse();

