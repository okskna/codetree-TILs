const [info, ...messages] = `${require('fs').readFileSync(0)}`.trim().split('\n').map(row => row.trim().split(' '))
const [n, m, p] = info.map(Number);

const q = new Set(Array(n).fill(0).map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i)));

function tracking(prevUStr, messages, index) {
    let i = index;
    let [c, uStr] = messages[i];
    while(uStr === prevUStr && i >= 0) {
        q.delete(c);
        i -= 1;
        [c, uStr] = messages[i];
    }   
}

for (let i = p - 1; i < messages.length; i++) {
    const [c, uStr] = messages[i];
    const u = Number(uStr);
    if (u === 0) { q.clear(); break; }

    q.delete(c);

    if (i !== 0 && messages[i - 1][1] === uStr) {
        tracking(uStr, messages, i - 1);
    }
}

console.log(Array.from(q.values()).join(' '));