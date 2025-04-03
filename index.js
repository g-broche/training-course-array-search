// Contexte du projet
// 📋 Énoncé global : Dans une galaxy lointaine

// Tu as le tableau suivant à copier/coller dans ton fichier :

const heroes = [
    { name: "Luke Skywalker", side: "Lumineux", planet: "Tatooine", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Avancé" },
    { name: "Darth Vader", side: "Obscur", planet: "Tatooine", species: "Humain", lightsaberColor: "Rouge", masteryOfForce: "Maîtrise totale" },
    { name: "Yoda", side: "Lumineux", planet: "Dagobah", species: "Yoda's Species", lightsaberColor: "Vert", masteryOfForce: "Légendaire" },
    { name: "Han Solo", side: "Lumineux", planet: "Corellia", species: "Humain", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "Leia Organa", side: "Lumineux", planet: "Alderaan", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Débutante" },
    { name: "Emperor Palpatine", side: "Obscur", planet: "Naboo", species: "Humain", lightsaberColor: "Rouge", masteryOfForce: "Maîtrise totale" },
    { name: "Chewbacca", side: "Lumineux", planet: "Kashyyyk", species: "Wookiee", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "Obi-Wan Kenobi", side: "Lumineux", planet: "Stewjon", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Avancé" },
    { name: "R2-D2", side: "Lumineux", planet: "Naboo", species: "Droid", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "C-3PO", side: "Lumineux", planet: "Tatooine", species: "Droid", lightsaberColor: "Aucun", masteryOfForce: "Aucun" }
];

// 🧠 Objectif : Maîtriser les méthodes de recherche dans un tableau d'objets, en utilisant des critères spécifiques issus de l'univers Star Wars.

// 🔥 Challenge 1 :
// 👉 Trouve le premier héros lumineux ayant un sabre laser bleu.
const lightSideHeroWithBlueSaber = heroes.find((it) => it.side === "Lumineux" && it.lightsaberColor == "Bleu");
console.log("first light side hero with a blue saber", lightSideHeroWithBlueSaber)

// ⚡ Challenge 2 :
// 👉 Trouve le dernier héros dont le nom contient "Kenobi".
const lastHeroWithKenobiInName = heroes.findLast((it) => it.name.includes("Kenobi"));
console.log("last hero with Kenobi in name", lastHeroWithKenobiInName)

// 🧬 Challenge 3 :
// 👉 Trouve l'index du premier héros ayant la maîtrise de la Force "Légendaire" et la planète d'origine "Dagobah".
const heroWithLegendaryMasteryAndFromDagobah = heroes.find((it) => it.masteryOfForce === "Légendaire" && it.planet === "Dagobah");
console.log("first hero with legendary mastery and from Dagobah", heroWithLegendaryMasteryAndFromDagobah)

// 🥊 Challenge 4 :
// 👉 Trouve l'index du dernier héros dont la planète d'origine est "Tatooine" et qui a un sabre laser rouge.
const indexOfLastHeroFromTatooineWithRedSaber = heroes.findLastIndex((it) => it.planet == "Tatooine" && it.lightsaberColor === "Rouge")
console.log("index of last hero from Tatooine with red saber", indexOfLastHeroFromTatooineWithRedSaber)

// 🎭 Challenge 5 :
// 👉 Trouve l'index du premier héros dont le nom est "Yoda".
const firstHeroNamedYoda = heroes.findIndex((it) => it.name === "Yoda");
console.log("index of first hero named Yoda", firstHeroNamedYoda)

// 🌌 Challenge 6 :
// 👉 Trouve l'index du dernier héros ayant un sabre laser vert.
const indexOfLastHeroWithGreenSaber = heroes.findLastIndex((it) => it.lightsaberColor === "Vert");
console.log("index of last hero with green saber", indexOfLastHeroWithGreenSaber)

// 💣 Challenge 7 :
// 👉 Trouve le premier héros non lumineux et de l'espèce "Wookiee".
const firstWookieeNonLuminousHero = heroes.find((it) => it.species === "Wookiee" && it.side !== "Lumineux");
console.log("first non light side wookiee hero", firstWookieeNonLuminousHero) // no matches

// 🧠 Challenge 8 :
// 👉 Trouve le dernier héros dont le nom contient "Solo" (insensible à la casse).
const lastHeroWithSoloInName = heroes.findLast((it) => it.name.toLowerCase().includes("solo"));
console.log("Last hero with 'solo' in name", lastHeroWithSoloInName)

// 🧪 Challenge 9 :
// 👉 Trouve le premier héros dont la maîtrise de la Force est "Aucun".
const firstHeroWithNoForceMastey = heroes.find((it) => it.masteryOfForce === "Aucun");
console.log("first hero with no force mastey", firstHeroWithNoForceMastey)

// 🧞‍♂️ Challenge 10 :
// 👉 Trouve le premier héros dont le nom fait plus de 10 caractères.
const firstHeroWithNameLongerThan10 = heroes.find((it) => it.name.length > 10);
console.log("first hero whose name is longer than 10 characters", firstHeroWithNameLongerThan10)