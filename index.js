const words = [
    'the',
    'a',
    'oxygen',
    'sponge',
    'fish',
    'strange',
    'animals',
    'and',
    'stuff',
    'sun',
    'deadly',
    'laser',
    'lazer',
    'hello',
    'hi',
    'how',
    'are',
    'you',
    'thing',
    'heck',
    'thanks',
    'hope',
    'mentioned',
    'blade',
    'soot',
    'racism',
    'racist',
    'race',
    'white',
    'black',
];
const len = +process.argv[2] || 1000;
require('fs').writeFileSync(
    'what.txt',
    Array
        .from(
            { length: ~~(Math.random() * len) },
            () => (x => console.log(x) || x)(words[~~(Math.random() * words.length)]),
        )
        .join(' '),
);