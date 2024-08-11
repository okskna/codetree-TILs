const [n] = `${require('fs').readFileSync(0)}`.trim().split('\n').map(row => row.trim().split(' ').map(Number))

let remain = Number(n);
let speed = 1;
let time = 0;
while(remain > 1) {
    time += 1;

    if (remain >= speed * 2) {
        // console.log('twice', time, remain, speed);
        remain -= speed * 2;
        speed += 1;
        time += 1;
    } else if (remain >= speed) {
        // console.log('keep', time, remain, speed);
        remain -= speed;
    } else {
        // console.log('reduce', time, remain, speed);
        if (remain >= (speed - 1)) {
            remain -= (speed - 1);
            speed -= 1;
        } else if (remain >= (speed - 2)) {
            remain -= (speed - 2);
            speed -= 2;
        } else  {
            break;
            // console.log('loop', remain, speed);
        }
    }
}

console.log(time + remain);