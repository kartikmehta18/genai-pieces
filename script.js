document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Earth is about 4.5 billion years old. It formed from the dust and gas surrounding the young Sun.",
        "Approximately 71% of Earth's surface is covered by water, with the vast majority being saltwater in the oceans.",
        "Earth's atmosphere is composed of 78% nitrogen, 21% oxygen, and trace amounts of other gases, which is crucial for supporting life.",
        "Earth's crust is divided into several large and small tectonic plates that float on the semi-fluid mantle. Their movement causes earthquakes and volcanic activity.",
        "Earth has a strong magnetic field generated by the movement of molten iron in its outer core. This magnetic field protects the planet from harmful solar radiation.",
        "Earth experiences seasons due to its axial tilt of about 23.5 degrees. This tilt causes different parts of the planet to receive varying amounts of sunlight throughout the year.",
        "Earth has one natural satellite, the Moon, which is the fifth largest moon in the solar system. It plays a crucial role in stabilizing Earth's axial tilt and affecting tides.",
        "Earth is home to millions of species of plants, animals, and microorganisms, making it the most biodiverse planet known.",
        "Earth is the only known planet with an atmosphere that can support life as we know it, thanks to its balance of gases and presence of liquid water.",
        "Earth rotates on its axis once every 24 hours, which gives us day and night, and it orbits the Sun once every 365.25 days, which defines our year."
    ];

    const factsList = document.getElementById('facts-list');

    facts.forEach((fact, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Fact ${index + 1}`;
        listItem.addEventListener('click', () => {
            const detail = listItem.querySelector('.detail');
            if (detail) {
                detail.classList.toggle('hidden');
            } else {
                const detail = document.createElement('div');
                detail.textContent = fact;
                detail.classList.add('detail');
                listItem.appendChild(detail);
            }
        });
        factsList.appendChild(listItem);
    });
});
