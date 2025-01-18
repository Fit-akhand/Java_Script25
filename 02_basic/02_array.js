let marval_hero=['ironman','captanAmerica','thor'];
let dc_heros=['flash','captainMarvel']

marval_hero.push(dc_heros);
// console.log(marval_hero)

// let all_heros=marval_hero.concat(dc_heros);
// console.log(all_heros)

// const all_heros=[...marval_hero,...dc_heros]

// console.log(all_heros)

const another=[1,[[[2]]],3,3,[1,3,4],3,[57,757,75,[77,7570]]];

const anotherarr=another.flat(Infinity);
// console.log(anotherarr)

console.log(Array.isArray("akhand"));
console.log(Array.from("akhand"));
console.log(Array.from({name:"akhand"})); //intresting case interview

const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3))