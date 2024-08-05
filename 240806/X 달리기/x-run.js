const [n] = `${require('fs').readFileSync(0)}`.trim().split('\n').map(row => row.trim().split(' ').map(Number))

let remain = Number(n);
let speed = 1;
let time = 0;
while(remain > 1) {
    time += 1;
    if (remain >= speed * 2) {
        remain -= speed * 2;
        speed += 1;
        time += 1;
    } else if (remain >= speed) {
        remain -= speed;
    } else {
        if (remain >= (speed - 1)) {
            remain -= (speed - 1);
        }
    }
}

console.log(time + remain);