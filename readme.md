# AOE RANDOM
The random countries for team in Age Of Empires game
## Install
```$xslt
npm i aoerandom
```

## Use 
### Command 
Run command with parameter to random from 1 to 8
```$xslt
aoerandom <number>
```
Example Result
```$xslt
1 'Minoan'
2 'Macedonia'
3 'Carthaginian'
4 'Babylonian'
5 'Palmyran'
6 'Hittite'
7 'Egyptian'
8 'Shang'
```
### Develop
Require package
```$xslt
const aoe = require('../index.js')
```
Get a country random
```$xslt
aoe.getCountryRandom()
```
Get team random
```$xslt
aoe.getTeamRandom()
```
