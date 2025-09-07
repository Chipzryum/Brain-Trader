export interface BrainRot {
  id: string;
  name: string;
  displayName: string;
  rarity: string;
  imagePath: string;
}

export interface Trait {
  name: string;
  img: string;
}

export const availableTraits: Trait[] = [
  { name: "Rain", img: "/traits/Wet.png" },
  { name: "Snowy", img: "/traits/Snowy.png" },
  { name: "Starfall", img: "/traits/Starfall.png" },
  { name: "Galactic", img: "/traits/Galactic.png" },
  { name: "Bombardiro Raid", img: "/traits/Bombardiro.png" },
  { name: "Matteo's Hat", img: "/traits/MatteoHat.png" },
  { name: "Spider", img: "/traits/Spider.png" },
  { name: "Strawberry", img: "/traits/Strawberry.png" },
  { name: "Taco", img: "/traits/Taco.png" },
  { name: "Tung Tung", img: "/traits/EvilTungTungSahur.png" },
  { name: "Glitch", img: "/traits/Glitch.png" },
  { name: "Crab Rave", img: "/traits/Crab.png" },
  { name: "Solar Flare", img: "/traits/SolarFlare.png" },
  { name: "Fire", img: "/traits/Fire.png" },
  { name: "Fireworks", img: "/traits/Fireworks.png" },
  { name: "Nyan Cats", img: "/traits/Nyan.png" },
  { name: "Disco", img: "/traits/Disco.png" },
  { name: "10B", img: "/traits/10b.png" },
  { name: "Bloodmoon", img: "/traits/Bloodmoon.png" },
  { name: "Brazil", img: "/traits/Brazil.png" },
  { name: "Bubblegum", img: "/traits/Bubblegum.png" },
  { name: "Rainbow", img: "/traits/Rainbowmachine.png" },
  { name: "Candy Aurora", img: "/traits/CandyAurora.png" },
  { name: "Matteo", img: "/traits/MatteoHat.png" },
  { name: "UFO", img: "/traits/Alienevent.png" },
  { name: "Sleepy", img: "/traits/Sleepy.png" },
  { name: "Mygame43", img: "/traits/MyGame43.png" }
];

// Get all rarities from the BrainRot_DataBase folder structure
export const getRarities = (): string[] => {
  return ["Common", "Rare", "Epic", "Legendary"];
};

// Get all brain rots for a specific rarity
export const getBrainRotsByRarity = (rarity: string): BrainRot[] => {
  const brainRotData: Record<string, string[]> = {
    Common: [
      "Fluriflura",
      "Liliri_Lalira", 
      "Noobini_Pizzanini",
      "Pipi_Corni",
      "Pipi_Kiwi",
      "Svinina_Bombardino",
      "Talpa_Di_Fero",
      "Tim_Cheese"
    ],
    Rare: [
      "Bandito_Bobritto",
      "Boneca_Ambalabu",
      "Cacto_Hipopotamo",
      "Gangster_Footera",
      "Pipi_Avocado",
      "Ta_Ta_Ta_Ta_Sahur",
      "Tric_Trac_Baraboom",
      "Trippi_Troppi",
      "Tung_Tung_Tung_Sahur"
    ],
    Epic: [
      "Avocadini_Antilopini",
      "Avocadini_Guffo",
      "Bambini_Crostini",
      "Bananita_Dolphinita",
      "Brr_Brr_Patapim",
      "Brri_Brri_Bicus_Dicus_Bombicus",
      "Cappuccino_Assassino",
      "Penguino_Cocosino",
      "Perochello_Lemonchello",
      "Salamino_Penguino",
      "Ti_ti_ti_sahur",
      "Trulimero_Trulicina"
    ],
    Legendary: [
      "Ballerina_Cappuccina",
      "Blueberrinni_Octopusini",
      "Burbaloni_Loliloli",
      "Chef_Crabracadabra",
      "Chimpanzini_Bananini",
      "Cocosini_Mama",
      "Glorbo_Fruttodrillo",
      "Lionel_Cactuseli",
      "Pandaccini_Bananini",
      "Pi_Pi_Watermelon",
      "Pipi_Potato",
      "Quivioli_Ameleonni",
      "Sigma_Boy",
      "Strawberelli_Flamingelli"
    ]
  };

  const names = brainRotData[rarity] || [];
  return names.map(name => ({
    id: `${rarity.toLowerCase()}-${name.toLowerCase()}`,
    name: name,
    displayName: name.replace(/_/g, ' '),
    rarity,
    imagePath: `/BrainRot_DataBase/${rarity}/${name}.png`
  }));
};

// Get all brain rots across all rarities
export const getAllBrainRots = (): BrainRot[] => {
  const rarities = getRarities();
  return rarities.flatMap(rarity => getBrainRotsByRarity(rarity));
};

// Search brain rots by name
export const searchBrainRots = (query: string, rarityFilter?: string): BrainRot[] => {
  let brainRots = rarityFilter ? getBrainRotsByRarity(rarityFilter) : getAllBrainRots();
  
  if (!query.trim()) {
    return brainRots;
  }

  const searchTerm = query.toLowerCase();
  return brainRots.filter(brainRot => 
    brainRot.displayName.toLowerCase().includes(searchTerm) ||
    brainRot.name.toLowerCase().includes(searchTerm)
  );
};