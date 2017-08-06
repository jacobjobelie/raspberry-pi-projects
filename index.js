const fs = require('fs')
const exec = require('child_process').exec
fs.chmodSync('repos.sh', '0775')
exec('./repos.sh')