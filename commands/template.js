#!/usr/bin/env node
const pathCurrent = process.cwd()

const fs = require('fs')

readFile = () => {
    const path = `${__dirname}/../templates/AoeRandom.vue`
    return fs.readFileSync(path)
}

writeTemplate = () => {
    const file = `${pathCurrent}/AoeRandom.vue`
    const content = readFile()
    fs.writeFileSync(file, content)
}

writeTemplate();

console.log('Component AoeRandom create successfully');
