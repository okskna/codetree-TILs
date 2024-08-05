const [[n], A, B] = `${require('fs').readFileSync(0)}`.trim().split('\n').map(row => row.trim().split(' ').map(Number))

let res = 0;
let p = 0;
for (let i = 0; i < n; i++) {
    p += A[i] - B[i];
    res += p;
}

console.log(res);