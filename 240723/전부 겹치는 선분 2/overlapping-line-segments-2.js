const [[n], ...lines] = `${require('fs').readFileSync(0)}`.trim().split('\n').map(row => row.trim().split(' ').map(Number))

const isIntersecting = (line1, line2) => {
    return line2[1] < line1[0] || line1[1] < line2[0] ? false : true;
};

const run = () => {
    const q = [];
    for (let i = 0; i < n; i++) {
        if (!isIntersecting(lines[i % n], lines[(i + 1) % n])) {
            q.push(i % n, (i + 1) % n);
        }
    }

    if (q.length > 4) {
        return false;
    }

    const t = q.reduce((acc, cur) => {
        acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
        return acc;
    }, {});
    return Object.values(t).filter(i => i === 2).length === 1
}

console.log(run() ? 'Yes' : 'No');