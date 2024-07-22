const fs = require('fs')
const [nStr, ...rest] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(nStr);
const lines = rest.map((l) => l.trim()).map((line) => line.split(' ').map(Number));

let [min, max] = lines[0];
for (let i = 1; i < lines.length; i++) {
    const [curMin, curMax] = lines[i];

    if (min < curMin) {
        min = curMin;
    }

    if (curMax < max) {
        max = curMax;
    }

    if (min > max) {
        console.log('No');
        return;
    }
}

console.log('Yes');