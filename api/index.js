const express = require("express");
const app = express();

const planets = [
  {
    id: 1,
    name: "Mercury",
    type: "Rocky",
    diameter: 4879,
    distanceFromSun: 57910000,
    moons: 0,
    description: "The smallest planet in our solar system, closest to the Sun.",
  },
  {
    id: 2,
    name: "Venus",
    type: "Rocky",
    diameter: 12104,
    distanceFromSun: 108200000,
    moons: 0,
    description:
      "Similar in size to Earth but with a toxic atmosphere and extreme heat.",
  },
  {
    id: 3,
    name: "Earth",
    type: "Rocky",
    diameter: 12742,
    distanceFromSun: 149600000,
    moons: 1,
    description:
      "The only known planet to support life, with a breathable atmosphere.",
  },
  {
    id: 4,
    name: "Mars",
    type: "Rocky",
    diameter: 6779,
    distanceFromSun: 227900000,
    moons: 2,
    description:
      "The Red Planet, known for its reddish appearance due to iron oxide.",
  },
  {
    id: 5,
    name: "Jupiter",
    type: "Gas Giant",
    diameter: 139820,
    distanceFromSun: 778500000,
    moons: 79,
    description:
      "The largest planet in the solar system, known for its Great Red Spot.",
  },
  {
    id: 6,
    name: "Saturn",
    type: "Gas Giant",
    diameter: 116460,
    distanceFromSun: 1433500000,
    moons: 82,
    description: "Famous for its stunning ring system.",
  },
  {
    id: 7,
    name: "Uranus",
    type: "Ice Giant",
    diameter: 50724,
    distanceFromSun: 2872500000,
    moons: 27,
    description:
      "A unique planet with a tilted axis, often called the 'sideways planet.'",
  },
  {
    id: 8,
    name: "Neptune",
    type: "Ice Giant",
    diameter: 49244,
    distanceFromSun: 4495100000,
    moons: 14,
    description:
      "The farthest planet from the Sun, known for its deep blue color.",
  },
  {
    id: 9,
    name: "Ceres",
    type: "Dwarf Planet",
    diameter: 940,
    distanceFromSun: 413700000,
    moons: 0,
    description:
      "The largest object in the asteroid belt between Mars and Jupiter.",
  },
  {
    id: 10,
    name: "Pluto",
    type: "Dwarf Planet",
    diameter: 2376,
    distanceFromSun: 5906400000,
    moons: 5,
    description:
      "Once considered the ninth planet, now classified as a dwarf planet.",
  },
  {
    id: 11,
    name: "Haumea",
    type: "Dwarf Planet",
    diameter: 1632,
    distanceFromSun: 6171000000,
    moons: 2,
    description:
      "An elongated, football-shaped dwarf planet with a ring system.",
  },
  {
    id: 12,
    name: "Makemake",
    type: "Dwarf Planet",
    diameter: 1430,
    distanceFromSun: 6130000000,
    moons: 1,
    description: "A dwarf planet located in the Kuiper Belt.",
  },
  {
    id: 13,
    name: "Eris",
    type: "Dwarf Planet",
    diameter: 2326,
    distanceFromSun: 10120000000,
    moons: 1,
    description: "A dwarf planet located in the scattered disk, beyond Pluto.",
  },
  {
    id: 14,
    name: "Vesta",
    type: "Asteroid",
    diameter: 525,
    distanceFromSun: 353000000,
    moons: 0,
    description: "One of the largest asteroids in the asteroid belt.",
  },
  {
    id: 15,
    name: "Io",
    type: "Moon of Jupiter",
    diameter: 3643,
    distanceFromSun: 421700000,
    moons: 0,
    description: "Jupiter's most volcanically active moon.",
  },
  {
    id: 16,
    name: "Europa",
    type: "Moon of Jupiter",
    diameter: 3121,
    distanceFromSun: 670900000,
    moons: 0,
    description: "A moon of Jupiter believed to have a subsurface ocean.",
  },
  {
    id: 17,
    name: "Ganymede",
    type: "Moon of Jupiter",
    diameter: 5268,
    distanceFromSun: 1070400000,
    moons: 0,
    description: "The largest moon in the solar system, bigger than Mercury.",
  },
  {
    id: 18,
    name: "Titan",
    type: "Moon of Saturn",
    diameter: 5150,
    distanceFromSun: 1429400000,
    moons: 0,
    description:
      "Saturn's largest moon, with a thick nitrogen-rich atmosphere.",
  },
  {
    id: 19,
    name: "Enceladus",
    type: "Moon of Saturn",
    diameter: 504,
    distanceFromSun: 1471000000,
    moons: 0,
    description: "Known for its cryovolcanoes and potential subsurface ocean.",
  },
  {
    id: 20,
    name: "Triton",
    type: "Moon of Neptune",
    diameter: 2706,
    distanceFromSun: 4504000000,
    moons: 0,
    description: "Neptune's largest moon, with geysers that erupt nitrogen.",
  },
];

app.get("/", (req, res) => {
  res.redirect("/api/planets");
});

app.get("/api/planets", (req, res) => {
  res.json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === parseInt(id));

  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ message: "Planet not found" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
