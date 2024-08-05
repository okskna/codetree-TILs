const [info, ...messages] = `${require('fs').readFileSync(0)}`.trim().split('\n').map(row => row.trim().split(' '))
const [n, m, p] = info.map(Number);

const q = new Set(Array(n).fill(0).map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i)));
for (let i = p - 1; i < messages.length; i++) {
    const [c, u] = messages[i];

    const a = q.delete(c);
}

console.log(Array.from(q.values()).join(' '));