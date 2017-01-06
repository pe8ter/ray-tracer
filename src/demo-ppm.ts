
// Build the demo PPM described in Chapter 1.

const nx = 200;
const ny = 100;

const output: Array<string> = [];

output.push('P3');
output.push(`${nx} ${ny}`);
output.push('255');

function denormalizeIntensity(c: number): number {
    return Math.floor(255.9*c);
}

for (let j = ny-1; j >=0; j--) {

    for (let i = 0; i < nx; i++) {

        const r = denormalizeIntensity(i/nx);
        const g = denormalizeIntensity(j/ny);
        const b = denormalizeIntensity(0.2);

        output.push(`${r} ${g} ${b}`);
    }
}

console.log(output.join('\n'));
