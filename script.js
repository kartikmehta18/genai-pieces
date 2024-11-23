const facts = {
    animal: [
        "Dolphins sleep with one eye open.",
        "A group of flamingos is called a 'flamboyance'.",
        "Octopuses have three hearts."
    ],
    food: [
        "Honey never spoils.",
        "Apples float because they are 25% air.",
        "Bananas are berries, but strawberries aren't."
    ],
    record: [
        "The longest recorded flight of a chicken is 13 seconds.",
        "The world's largest pizza was 13,580 square feet.",
        "The fastest time to eat a bowl of pasta is 26.69 seconds."
    ]
};

function showFact(category) {
    const factArray = facts[category];
    const randomIndex = Math.floor(Math.random() * factArray.length);
    const fact = factArray[randomIndex];
    document.getElementById('fact-display').textContent = fact;
}
