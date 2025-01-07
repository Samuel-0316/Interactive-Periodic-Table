// Define the periodic table data
const elements = [
    {
        atomicNumber: 1,
        symbol: 'H',
        name: 'Hydrogen',
        atomicMass: 1.008,
        category: 'nonmetal',
        block: 's',
        period: 1,
        group: 1,
        state: 'gas',
        description: 'Hydrogen is the lightest element and the most abundant chemical substance in the Universe.'
    },
    {
        atomicNumber: 2,
        symbol: 'He',
        name: 'Helium',
        atomicMass: 4.003,
        category: 'noble-gas',
        block: 's',
        period: 1,
        group: 18,
        state: 'gas',
        description: 'Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas.'
    },
    {
        atomicNumber: 3,
        symbol: 'Li',
        name: 'Lithium',
        atomicMass: 6.94,
        category: 'alkali-metal',
        block: 's',
        period: 2,
        group: 1,
        state: 'solid',
        description: 'Lithium is a soft, silvery-white metal, and the lightest of all the metals.'
    },
    {
        atomicNumber: 4,
        symbol: 'Be',
        name: 'Beryllium',
        atomicMass: 9.0122,
        category: 'alkaline-earth',
        block: 's',
        period: 2,
        group: 2,
        state: 'solid',
        description: 'Beryllium is a relatively rare element in the universe, usually occurring as a product of the spallation of larger atomic nuclei.'
    },
    {
        atomicNumber: 5,
        symbol: 'B',
        name: 'Boron',
        atomicMass: 10.81,
        category: 'metalloid',
        block: 'p',
        period: 2,
        group: 13,
        state: 'solid',
        description: 'Boron is a metalloid that is essential for plant growth but can be toxic in high concentrations.'
    },
    {
        atomicNumber: 6,
        symbol: 'C',
        name: 'Carbon',
        atomicMass: 12.011,
        category: 'nonmetal',
        block: 'p',
        period: 2,
        group: 14,
        state: 'solid',
        description: 'Carbon is the basis of all known life on Earth and exists in various forms such as diamond and graphite.'
    },
    {
        atomicNumber: 7,
        symbol: 'N',
        name: 'Nitrogen',
        atomicMass: 14.007,
        category: 'nonmetal',
        block: 'p',
        period: 2,
        group: 15,
        state: 'gas',
        description: 'Nitrogen is a colorless, odorless gas that makes up about 78% of the Earth\'s atmosphere.'
    },
    {
        atomicNumber: 8,
        symbol: 'O',
        name: 'Oxygen',
        atomicMass: 15.999,
        category: 'nonmetal',
        block: 'p',
        period: 2,
        group: 16,
        state: 'gas',
        description: 'Oxygen is essential for respiration and is the third most abundant element in the universe.'
    },
    {
        atomicNumber: 9,
        symbol: 'F',
        name: 'Fluorine',
        atomicMass: 18.998,
        category: 'halogen',
        block: 'p',
        period: 2,
        group: 17,
        state: 'gas',
        description: 'Fluorine is the most electronegative element and highly reactive, often forming compounds with almost all other elements.'
    },
    {
        atomicNumber: 10,
        symbol: 'Ne',
        name: 'Neon',
        atomicMass: 20.180,
        category: 'noble-gas',
        block: 'p',
        period: 2,
        group: 18,
        state: 'gas',
        description: 'Neon is a noble gas best known for its use in neon signs.'
    },
    {
        atomicNumber: 11,
        symbol: 'Na',
        name: 'Sodium',
        atomicMass: 22.990,
        category: 'alkali-metal',
        block: 's',
        period: 3,
        group: 1,
        state: 'solid',
        description: 'Sodium is a highly reactive metal and is essential for living organisms.'
    },
    {
        atomicNumber: 12,
        symbol: 'Mg',
        name: 'Magnesium',
        atomicMass: 24.305,
        category: 'alkaline-earth',
        block: 's',
        period: 3,
        group: 2,
        state: 'solid',
        description: 'Magnesium is a lightweight metal that plays a vital role in biological systems.'
    },
    {
        atomicNumber: 13,
        symbol: 'Al',
        name: 'Aluminum',
        atomicMass: 26.982,
        category: 'transition-metal',
        block: 'p',
        period: 3,
        group: 13,
        state: 'solid',
        description: 'Aluminum is the most abundant metal in the Earth’s crust and is widely used in industries.'
    },
    {
        atomicNumber: 14,
        symbol: 'Si',
        name: 'Silicon',
        atomicMass: 28.085,
        category: 'metalloid',
        block: 'p',
        period: 3,
        group: 14,
        state: 'solid',
        description: 'Silicon is a key component in electronics and is found in sand as silicon dioxide.'
    },
    {
        atomicNumber: 15,
        symbol: 'P',
        name: 'Phosphorus',
        atomicMass: 30.974,
        category: 'nonmetal',
        block: 'p',
        period: 3,
        group: 15,
        state: 'solid',
        description: 'Phosphorus is essential for life, forming part of DNA, RNA, and ATP molecules.'
    },
    {
        atomicNumber: 16,
        symbol: 'S',
        name: 'Sulfur',
        atomicMass: 32.06,
        category: 'nonmetal',
        block: 'p',
        period: 3,
        group: 16,
        state: 'solid',
        description: 'Sulfur is known for its distinctive smell and is used in fertilizers and industrial processes.'
    },
    {
        atomicNumber: 17,
        symbol: 'Cl',
        name: 'Chlorine',
        atomicMass: 35.45,
        category: 'halogen',
        block: 'p',
        period: 3,
        group: 17,
        state: 'gas',
        description: 'Chlorine is a highly reactive element used in disinfectants and water treatment.'
    },
    {
        atomicNumber: 18,
        symbol: 'Ar',
        name: 'Argon',
        atomicMass: 39.948,
        category: 'noble-gas',
        block: 'p',
        period: 3,
        group: 18,
        state: 'gas',
        description: 'Argon is an inert gas used in welding and as an insulating gas in double-pane windows.'
    },
    {
        atomicNumber: 19,
        symbol: 'K',
        name: 'Potassium',
        atomicMass: 39.098,
        category: 'alkali-metal',
        block: 's',
        period: 4,
        group: 1,
        state: 'solid',
        description: 'Potassium is essential for nerve function and is abundant in fruits like bananas.'
    },
    {
        atomicNumber: 20,
        symbol: 'Ca',
        name: 'Calcium',
        atomicMass: 40.078,
        category: 'alkaline-earth',
        block: 's',
        period: 4,
        group: 2,
        state: 'solid',
        description: 'Calcium is critical for bone health and plays a role in many biological processes.'
    },
    {
        atomicNumber: 21,
        symbol: 'Sc',
        name: 'Scandium',
        atomicMass: 44.956,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 3,
        state: 'solid',
        description: 'Scandium is a rare-earth element used in aerospace components and as an additive in aluminum alloys.'
    },
    {
        atomicNumber: 22,
        symbol: 'Ti',
        name: 'Titanium',
        atomicMass: 47.867,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 4,
        state: 'solid',
        description: 'Titanium is a strong, lightweight, and corrosion-resistant metal used in aerospace and medical implants.'
    },
    {
        atomicNumber: 23,
        symbol: 'V',
        name: 'Vanadium',
        atomicMass: 50.942,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 5,
        state: 'solid',
        description: 'Vanadium is used in steel alloys to improve strength and in chemical catalysts.'
    },
    {
        atomicNumber: 24,
        symbol: 'Cr',
        name: 'Chromium',
        atomicMass: 51.996,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 6,
        state: 'solid',
        description: 'Chromium is known for its shiny surface and is used in stainless steel and chrome plating.'
    },
    {
        atomicNumber: 25,
        symbol: 'Mn',
        name: 'Manganese',
        atomicMass: 54.938,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 7,
        state: 'solid',
        description: 'Manganese is used in steel production and is an essential nutrient in small amounts.'
    },
    {
        atomicNumber: 26,
        symbol: 'Fe',
        name: 'Iron',
        atomicMass: 55.845,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 8,
        state: 'solid',
        description: 'Iron is one of the most abundant metals on Earth and is used in construction and manufacturing.'
    },
    {
        atomicNumber: 27,
        symbol: 'Co',
        name: 'Cobalt',
        atomicMass: 58.933,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 9,
        state: 'solid',
        description: 'Cobalt is used in superalloys for jet engines, batteries, and pigments.'
    },
    {
        atomicNumber: 28,
        symbol: 'Ni',
        name: 'Nickel',
        atomicMass: 58.693,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 10,
        state: 'solid',
        description: 'Nickel is a corrosion-resistant metal used in coins, batteries, and alloys.'
    },
    {
        atomicNumber: 29,
        symbol: 'Cu',
        name: 'Copper',
        atomicMass: 63.546,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 11,
        state: 'solid',
        description: 'Copper is an excellent conductor of electricity and is widely used in electrical wiring and plumbing.'
    },
    {
        atomicNumber: 30,
        symbol: 'Zn',
        name: 'Zinc',
        atomicMass: 65.38,
        category: 'transition-metal',
        block: 'd',
        period: 4,
        group: 12,
        state: 'solid',
        description: 'Zinc is used in galvanizing to prevent rust and in alloys like brass.'
    },
    {
        atomicNumber: 31,
        symbol: 'Ga',
        name: 'Gallium',
        atomicMass: 69.723,
        category: 'transition-metal',
        block: 'p',
        period: 4,
        group: 13,
        state: 'solid',
        description: 'Gallium is a soft metal that melts near room temperature and is used in semiconductors and LEDs.'
    },
    {
        atomicNumber: 32,
        symbol: 'Ge',
        name: 'Germanium',
        atomicMass: 72.630,
        category: 'metalloid',
        block: 'p',
        period: 4,
        group: 14,
        state: 'solid',
        description: 'Germanium is a semiconductor material used in transistors and fiber optics.'
    },
    {
        atomicNumber: 33,
        symbol: 'As',
        name: 'Arsenic',
        atomicMass: 74.922,
        category: 'metalloid',
        block: 'p',
        period: 4,
        group: 15,
        state: 'solid',
        description: 'Arsenic is a toxic metalloid used in pesticides and semiconductors.'
    },
    {
        atomicNumber: 34,
        symbol: 'Se',
        name: 'Selenium',
        atomicMass: 78.971,
        category: 'nonmetal',
        block: 'p',
        period: 4,
        group: 16,
        state: 'solid',
        description: 'Selenium is used in photocopiers, glassmaking, and as a dietary supplement.'
    },
    {
        atomicNumber: 35,
        symbol: 'Br',
        name: 'Bromine',
        atomicMass: 79.904,
        category: 'halogen',
        block: 'p',
        period: 4,
        group: 17,
        state: 'liquid',
        description: 'Bromine is a reddish-brown liquid at room temperature and is used in flame retardants.'
    },
    {
        atomicNumber: 36,
        symbol: 'Kr',
        name: 'Krypton',
        atomicMass: 83.798,
        category: 'noble-gas',
        block: 'p',
        period: 4,
        group: 18,
        state: 'gas',
        description: 'Krypton is a noble gas used in lighting and photography.'
    },
    {
        atomicNumber: 37,
        symbol: 'Rb',
        name: 'Rubidium',
        atomicMass: 85.468,
        category: 'alkali-metal',
        block: 's',
        period: 5,
        group: 1,
        state: 'solid',
        description: 'Rubidium is a soft, highly reactive metal used in research and specialized electronics.'
    },
    {
        atomicNumber: 38,
        symbol: 'Sr',
        name: 'Strontium',
        atomicMass: 87.62,
        category: 'alkaline-earth',
        block: 's',
        period: 5,
        group: 2,
        state: 'solid',
        description: 'Strontium is used in fireworks for its bright red flame and in medical applications.'
    },
    {
        atomicNumber: 39,
        symbol: 'Y',
        name: 'Yttrium',
        atomicMass: 88.906,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 3,
        state: 'solid',
        description: 'Yttrium is used in superconductors, LEDs, and phosphors for TV screens.'
    },
    {
        atomicNumber: 40,
        symbol: 'Zr',
        name: 'Zirconium',
        atomicMass: 91.224,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 4,
        state: 'solid',
        description: 'Zirconium is corrosion-resistant and is used in nuclear reactors and surgical instruments.'
    },
    {
        atomicNumber: 41,
        symbol: 'Nb',
        name: 'Niobium',
        atomicMass: 92.906,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 5,
        state: 'solid',
        description: 'Niobium is used in steel alloys to improve strength and in superconducting magnets.'
    },
    {
        atomicNumber: 42,
        symbol: 'Mo',
        name: 'Molybdenum',
        atomicMass: 95.95,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 6,
        state: 'solid',
        description: 'Molybdenum is used in alloys, electrical contacts, and as a catalyst in the petroleum industry.'
    },
    {
        atomicNumber: 43,
        symbol: 'Tc',
        name: 'Technetium',
        atomicMass: 98.0,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 7,
        state: 'solid',
        description: 'Technetium is a radioactive metal used in medical imaging and research.'
    },
    {
        atomicNumber: 44,
        symbol: 'Ru',
        name: 'Ruthenium',
        atomicMass: 101.07,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 8,
        state: 'solid',
        description: 'Ruthenium is used in electrical contacts, catalysts, and jewelry.'
    },
    {
        atomicNumber: 45,
        symbol: 'Rh',
        name: 'Rhodium',
        atomicMass: 102.91,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 9,
        state: 'solid',
        description: 'Rhodium is a rare and valuable metal used in catalytic converters and jewelry plating.'
    },
    {
        atomicNumber: 46,
        symbol: 'Pd',
        name: 'Palladium',
        atomicMass: 106.42,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 10,
        state: 'solid',
        description: 'Palladium is used in catalytic converters, electronics, and jewelry.'
    },
    {
        atomicNumber: 47,
        symbol: 'Ag',
        name: 'Silver',
        atomicMass: 107.87,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 11,
        state: 'solid',
        description: 'Silver is a precious metal used in jewelry, electronics, and photography.'
    },
    {
        atomicNumber: 48,
        symbol: 'Cd',
        name: 'Cadmium',
        atomicMass: 112.41,
        category: 'transition-metal',
        block: 'd',
        period: 5,
        group: 12,
        state: 'solid',
        description: 'Cadmium is used in batteries, pigments, and coatings but is highly toxic.'
    },
    {
        atomicNumber: 49,
        symbol: 'In',
        name: 'Indium',
        atomicMass: 114.82,
        category: 'transition-metal',
        block: 'p',
        period: 5,
        group: 13,
        state: 'solid',
        description: 'Indium is a soft metal used in touchscreens, LCDs, and semiconductors.'
    },
    {
        atomicNumber: 50,
        symbol: 'Sn',
        name: 'Tin',
        atomicMass: 118.71,
        category: 'transition-metal',
        block: 'p',
        period: 5,
        group: 14,
        state: 'solid',
        description: 'Tin is used in solder, coatings, and alloys like bronze and pewter.'
    },
    {
        atomicNumber: 51,
        symbol: 'Sb',
        name: 'Antimony',
        atomicMass: 121.76,
        category: 'metalloid',
        block: 'p',
        period: 5,
        group: 15,
        state: 'solid',
        description: 'Antimony is used in flame retardants, alloys, and semiconductors.'
    },
    {
        atomicNumber: 52,
        symbol: 'Te',
        name: 'Tellurium',
        atomicMass: 127.60,
        category: 'metalloid',
        block: 'p',
        period: 5,
        group: 16,
        state: 'solid',
        description: 'Tellurium is used in alloys, thermoelectric devices, and solar panels.'
    },
    {
        atomicNumber: 53,
        symbol: 'I',
        name: 'Iodine',
        atomicMass: 126.90,
        category: 'halogen',
        block: 'p',
        period: 5,
        group: 17,
        state: 'solid',
        description: 'Iodine is essential for thyroid health and is used in antiseptics and imaging.'
    },
    {
        atomicNumber: 54,
        symbol: 'Xe',
        name: 'Xenon',
        atomicMass: 131.29,
        category: 'noble-gas',
        block: 'p',
        period: 5,
        group: 18,
        state: 'gas',
        description: 'Xenon is a noble gas used in lighting, lasers, and medical imaging.'
    },
    {
        atomicNumber: 55,
        symbol: 'Cs',
        name: 'Cesium',
        atomicMass: 132.91,
        category: 'alkali-metal',
        block: 's',
        period: 6,
        group: 1,
        state: 'solid',
        description: 'Cesium is a highly reactive metal used in atomic clocks and various electronics.'
    },
    {
        atomicNumber: 56,
        symbol: 'Ba',
        name: 'Barium',
        atomicMass: 137.33,
        category: 'alkaline-earth',
        block: 's',
        period: 6,
        group: 2,
        state: 'solid',
        description: 'Barium is used in radiology for imaging and in fireworks for green colors.'
    },

    // Lanthanides (57-71)
    {
        atomicNumber: 57,
        symbol: 'La',
        name: 'Lanthanum',
        atomicMass: 138.91,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Lanthanum is a soft, ductile, silvery-white rare earth metal.'
    },
    {
        atomicNumber: 58,
        symbol: 'Ce',
        name: 'Cerium',
        atomicMass: 140.12,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Cerium is a soft, silvery-white, highly reactive metallic element.'
    },
    {
        atomicNumber: 59,
        symbol: 'Pr',
        name: 'Praseodymium',
        atomicMass: 140.91,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Praseodymium is a soft, silvery-white, malleable and ductile metal.'
    },
    {
        atomicNumber: 60,
        symbol: 'Nd',
        name: 'Neodymium',
        atomicMass: 144.24,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Neodymium is a rare earth metal that is used to make powerful magnets.'
    },
    {
        atomicNumber: 61,
        symbol: 'Pm',
        name: 'Promethium',
        atomicMass: 145,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Promethium is a radioactive metallic element, all isotopes of promethium are radioactive.'
    },
    {
        atomicNumber: 62,
        symbol: 'Sm',
        name: 'Samarium',
        atomicMass: 150.36,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Samarium is a rare earth metal that is used in magnets and in nuclear reactors.'
    },
    {
        atomicNumber: 63,
        symbol: 'Eu',
        name: 'Europium',
        atomicMass: 151.96,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Europium is the most reactive rare earth element and is used in TV screens.'
    },
    {
        atomicNumber: 64,
        symbol: 'Gd',
        name: 'Gadolinium',
        atomicMass: 157.25,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Gadolinium is a silvery-white, malleable and ductile rare earth metal.'
    },
    {
        atomicNumber: 65,
        symbol: 'Tb',
        name: 'Terbium',
        atomicMass: 158.93,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Terbium is a silvery-white, rare earth metal that is malleable and ductile.'
    },
    {
        atomicNumber: 66,
        symbol: 'Dy',
        name: 'Dysprosium',
        atomicMass: 162.50,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Dysprosium is used in neodymium-based magnets to help them operate at high temperatures.'
    },
    {
        atomicNumber: 67,
        symbol: 'Ho',
        name: 'Holmium',
        atomicMass: 164.93,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Holmium is a relatively soft and malleable element that is relatively stable in dry air.'
    },
    {
        atomicNumber: 68,
        symbol: 'Er',
        name: 'Erbium',
        atomicMass: 167.26,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Erbium is a silvery-white, metallic rare earth element that is fairly stable in air.'
    },
    {
        atomicNumber: 69,
        symbol: 'Tm',
        name: 'Thulium',
        atomicMass: 168.93,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Thulium is the least abundant of the naturally occurring rare earth elements.'
    },
    {
        atomicNumber: 70,
        symbol: 'Yb',
        name: 'Ytterbium',
        atomicMass: 173.05,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Ytterbium is a soft, malleable and ductile rare earth metal.'
    },
    {
        atomicNumber: 71,
        symbol: 'Lu',
        name: 'Lutetium',
        atomicMass: 174.97,
        category: 'lanthanide',
        block: 'f',
        period: 6,
        group: 3,
        state: 'solid',
        description: 'Lutetium is a silvery white rare earth metal that is relatively stable in air.'
    },
    {
    atomicNumber: 72,
    symbol: 'Hf',
    name: 'Hafnium',
    atomicMass: 178.49,
    category: 'transition-metal',
    block: 'd',
    period: 6,
    group: 4,
    state: 'solid',
    description: 'Hafnium is used in control rods for nuclear reactors and in high-temperature alloys.'
    },
    {
        atomicNumber: 73,
        symbol: 'Ta',
        name: 'Tantalum',
        atomicMass: 180.95,
        category: 'transition-metal',
        block: 'd',
        period: 6,
        group: 5,
        state: 'solid',
        description: 'Tantalum is highly corrosion-resistant and is used in electronics, especially in capacitors.'
    },
    {
        atomicNumber: 74,
        symbol: 'W',
        name: 'Tungsten',
        atomicMass: 183.84,
        category: 'transition-metal',
        block: 'd',
        period: 6,
        group: 6,
        state: 'solid',
        description: 'Tungsten has the highest melting point of any element and is used in light bulb filaments and cutting tools.'
    },
    {
        atomicNumber: 75,
        symbol: 'Re',
        name: 'Rhenium',
        atomicMass: 186.21,
        category: 'transition-metal',
        block: 'd',
        period: 6,
        group: 7,
        state: 'solid',
        description: 'Rhenium is used in high-temperature superalloys and in catalysts for petroleum refining.'
    },
    {
        atomicNumber: 76,
        symbol: 'Os',
        name: 'Osmium',
        atomicMass: 190.23,
        category: 'transition-metal',
        block: 'd',
        period: 6,
        group: 8,
        state: 'solid',
        description: 'Osmium is one of the densest elements and is used in electrical contacts and in fountain pen nibs.'
    },
    {
        atomicNumber: 77,
        symbol: 'Ir',
        name: 'Iridium',
        atomicMass: 192.22,
        category: 'transition-metal',
        block: 'd',
        period: 6,
        group: 9,
        state: 'solid',
        description: 'Iridium is highly corrosion-resistant and is used in spark plugs, electronics, and aircraft engines.'
    },
    {
        atomicNumber: 78,
        symbol: 'Pt',
        name: 'Platinum',
        atomicMass: 195.08,
        category: 'transition-metal',
        block: 'd',
        period: 6,
        group: 10,
        state: 'solid',
        description: 'Platinum is used in catalytic converters, jewelry, and medical devices due to its resistance to corrosion.'
    },
    {
        atomicNumber: 79,
        symbol: 'Au',
        name: 'Gold',
        atomicMass: 196.97,
        category: 'transition-metal',
        block: 'd',
        period: 6,
        group: 11,
        state: 'solid',
        description: 'Gold is a highly valued precious metal used in coins, jewelry, and electronics due to its conductivity and malleability.'
    },
    {
        atomicNumber: 80,
        symbol: 'Hg',
        name: 'Mercury',
        atomicMass: 200.59,
        category: 'transition-metal',
        block: 'd',
        period: 6,
        group: 12,
        state: 'liquid',
        description: 'Mercury is the only metal that is liquid at room temperature and is used in thermometers and electrical switches.'
    },
    {
        atomicNumber: 81,
        symbol: 'Tl',
        name: 'Thallium',
        atomicMass: 204.38,
        category: 'transition-metal',
        block: 'p',
        period: 6,
        group: 13,
        state: 'solid',
        description: 'Thallium is used in electronics, optical lenses, and in the production of semiconductors.'
    },
    {
        atomicNumber: 82,
        symbol: 'Pb',
        name: 'Lead',
        atomicMass: 207.2,
        category: 'transition-metal',
        block: 'p',
        period: 6,
        group: 14,
        state: 'solid',
        description: 'Lead is a toxic metal historically used in pipes, paints, and batteries, but is now largely phased out due to its health risks.'
    },
    {
        atomicNumber: 83,
        symbol: 'Bi',
        name: 'Bismuth',
        atomicMass: 208.98,
        category: 'transition-metal',
        block: 'p',
        period: 6,
        group: 15,
        state: 'solid',
        description: 'Bismuth is used in cosmetics, pharmaceuticals, and in the creation of low-melting alloys.'
    },
    {
        atomicNumber: 84,
        symbol: 'Po',
        name: 'Polonium',
        atomicMass: 209.98,
        category: 'metalloid',
        block: 'p',
        period: 6,
        group: 16,
        state: 'solid',
        description: 'Polonium is a radioactive element that was discovered by Marie Curie and used as a heat source for spacecraft.'
    },
    {
        atomicNumber: 85,
        symbol: 'At',
        name: 'Astatine',
        atomicMass: 210,
        category: 'metalloid',
        block: 'p',
        period: 6,
        group: 17,
        state: 'solid',
        description: 'Astatine is a highly radioactive element with limited practical applications due to its rarity and radioactivity.'
    },
    {
        atomicNumber: 86,
        symbol: 'Rn',
        name: 'Radon',
        atomicMass: 222,
        category: 'noble-gas',
        block: 'p',
        period: 6,
        group: 18,
        state: 'gas',
        description: 'Radon is a radioactive noble gas that is produced by the decay of radium and can accumulate in homes.'
    },
    {
        atomicNumber: 87,
        symbol: 'Fr',
        name: 'Francium',
        atomicMass: 223,
        category: 'alkali-metal',
        block: 's',
        period: 7,
        group: 1,
        state: 'solid',
        description: 'Francium is a highly radioactive element with limited occurrence and applications.'
    },
    {
        atomicNumber: 88,
        symbol: 'Ra',
        name: 'Radium',
        atomicMass: 226,
        category: 'alkaline-earth',
        block: 's',
        period: 7,
        group: 2,
        state: 'solid',
        description: 'Radium is a radioactive element that was historically used in luminous paints and medical treatments.'
    },

    // Actinides (89-103)
    {
        atomicNumber: 89,
        symbol: 'Ac',
        name: 'Actinium',
        atomicMass: 227,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Actinium is a highly radioactive, silvery-white metallic element.'
    },
    {
        atomicNumber: 90,
        symbol: 'Th',
        name: 'Thorium',
        atomicMass: 232.04,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Thorium is a naturally occurring radioactive metal that can be used as a nuclear fuel.'
    },
    {
        atomicNumber: 91,
        symbol: 'Pa',
        name: 'Protactinium',
        atomicMass: 231.04,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Protactinium is a radioactive actinide metal that occurs naturally in uranium ores.'
    },
    {
        atomicNumber: 92,
        symbol: 'U',
        name: 'Uranium',
        atomicMass: 238.03,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Uranium is a silvery-white metallic element that is commonly used in nuclear power plants.'
    },
    {
        atomicNumber: 93,
        symbol: 'Np',
        name: 'Neptunium',
        atomicMass: 237,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Neptunium is a radioactive metallic element, first artificially produced in 1940.'
    },
    {
        atomicNumber: 94,
        symbol: 'Pu',
        name: 'Plutonium',
        atomicMass: 244,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Plutonium is a radioactive metallic element used in nuclear weapons and reactors.'
    },
    {
        atomicNumber: 95,
        symbol: 'Am',
        name: 'Americium',
        atomicMass: 243,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Americium is a synthetic radioactive metallic element commonly used in smoke detectors.'
    },
    {
        atomicNumber: 96,
        symbol: 'Cm',
        name: 'Curium',
        atomicMass: 247,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Curium is a synthetic radioactive element named after Marie and Pierre Curie.'
    },
    {
        atomicNumber: 97,
        symbol: 'Bk',
        name: 'Berkelium',
        atomicMass: 247,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Berkelium is a synthetic radioactive element named after Berkeley, California.'
    },
    {
        atomicNumber: 98,
        symbol: 'Cf',
        name: 'Californium',
        atomicMass: 251,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Californium is a radioactive element used in nuclear synthesis and as a neutron source.'
    },
    {
        atomicNumber: 99,
        symbol: 'Es',
        name: 'Einsteinium',
        atomicMass: 252,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Einsteinium is a synthetic element named after Albert Einstein.'
    },
    {
        atomicNumber: 100,
        symbol: 'Fm',
        name: 'Fermium',
        atomicMass: 257,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Fermium is a synthetic element named after Enrico Fermi.'
    },
    {
        atomicNumber: 101,
        symbol: 'Md',
        name: 'Mendelevium',
        atomicMass: 258,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Mendelevium is a synthetic element named after Dmitri Mendeleev.'
    },
    {
        atomicNumber: 102,
        symbol: 'No',
        name: 'Nobelium',
        atomicMass: 259,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Nobelium is a synthetic element named after Alfred Nobel.'
    },
    {
        atomicNumber: 103,
        symbol: 'Lr',
        name: 'Lawrencium',
        atomicMass: 266,
        category: 'actinide',
        block: 'f',
        period: 7,
        group: 3,
        state: 'solid',
        description: 'Lawrencium is a synthetic element named after Ernest Lawrence.'
    },
    {
        atomicNumber: 104,
        symbol: 'Rf',
        name: 'Rutherfordium',
        atomicMass: 267,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 4,
        state: 'solid',
        description: 'Rutherfordium is a synthetic element used in research, named after physicist Ernest Rutherford.'
    },
    {
        atomicNumber: 105,
        symbol: 'Db',
        name: 'Dubnium',
        atomicMass: 270,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 5,
        state: 'solid',
        description: 'Dubnium is used in scientific research and was named after Dubna, Russia, where it was discovered.'
    },
    {
        atomicNumber: 106,
        symbol: 'Sg',
        name: 'Seaborgium',
        atomicMass: 271,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 6,
        state: 'solid',
        description: 'Seaborgium is named after Glenn T. Seaborg, a famous chemist, and is used mainly for scientific research.'
    },
    {
        atomicNumber: 107,
        symbol: 'Bh',
        name: 'Bohrium',
        atomicMass: 270,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 7,
        state: 'solid',
        description: 'Bohrium is a synthetic element used in scientific research and was named after Niels Bohr.'
    },
    {
        atomicNumber: 108,
        symbol: 'Hs',
        name: 'Hassium',
        atomicMass: 277,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 8,
        state: 'solid',
        description: 'Hassium is a synthetic element used primarily in research and is named after the German state of Hesse.'
    },
    {
        atomicNumber: 109,
        symbol: 'Mt',
        name: 'Meitnerium',
        atomicMass: 278,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 9,
        state: 'solid',
        description: 'Meitnerium is named after physicist Lise Meitner and is primarily used in scientific research.'
    },
    {
        atomicNumber: 110,
        symbol: 'Ds',
        name: 'Darmstadtium',
        atomicMass: 281,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 10,
        state: 'solid',
        description: 'Darmstadtium is used in research and was named after the German city of Darmstadt.'
    },
    {
        atomicNumber: 111,
        symbol: 'Rg',
        name: 'Roentgenium',
        atomicMass: 280,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 11,
        state: 'solid',
        description: 'Roentgenium is a synthetic element named after Wilhelm Roentgen, known for his discovery of X-rays.'
    },
    {
        atomicNumber: 112,
        symbol: 'Cn',
        name: 'Copernicium',
        atomicMass: 285,
        category: 'transition-metal',
        block: 'd',
        period: 7,
        group: 12,
        state: 'solid',
        description: 'Copernicium is a synthetic element named after astronomer Nicolaus Copernicus.'
    },
    {
        atomicNumber: 113,
        symbol: 'Nh',
        name: 'Nihonium',
        atomicMass: 284,
        category: 'transition-metal',
        block: 'p',
        period: 7,
        group: 13,
        state: 'solid',
        description: 'Nihonium is a synthetic element named after Japan (Nihon), and is primarily used in scientific research.'
    },
    {
        atomicNumber: 114,
        symbol: 'Fl',
        name: 'Flerovium',
        atomicMass: 289,
        category: 'transition-metal',
        block: 'p',
        period: 7,
        group: 14,
        state: 'solid',
        description: 'Flerovium is named after the Flerov Laboratory of Nuclear Reactions in Russia and is used in research.'
    },
    {
        atomicNumber: 115,
        symbol: 'Mc',
        name: 'Moscovium',
        atomicMass: 288,
        category: 'transition-metal',
        block: 'p',
        period: 7,
        group: 15,
        state: 'solid',
        description: 'Moscovium is named after Moscow, Russia, and is a synthetic element created for scientific studies.'
    },
    {
        atomicNumber: 116,
        symbol: 'Lv',
        name: 'Livermorium',
        atomicMass: 293,
        category: 'transition-metal',
        block: 'p',
        period: 7,
        group: 16,
        state: 'solid',
        description: 'Livermorium is named after Lawrence Livermore National Laboratory and is used for experimental purposes.'
    },
    {
        atomicNumber: 117,
        symbol: 'Ts',
        name: 'Tennessine',
        atomicMass: 294,
        category: 'halogen',
        block: 'p',
        period: 7,
        group: 17,
        state: 'solid',
        description: 'Tennessine is named after the state of Tennessee and is primarily studied in research laboratories.'
    },
    {
        atomicNumber: 118,
        symbol: 'Og',
        name: 'Oganesson',
        atomicMass: 294,
        category: 'noble-gas',
        block: 'p',
        period: 7,
        group: 18,
        state: 'gas',
        description: 'Oganesson is a synthetic noble gas named after Yuri Oganessian, a physicist who contributed to the discovery of superheavy elements.'
    }
];

// Function to create the periodic table grid
function createPeriodicTable() {
    const container = document.getElementById('periodicTable');
    
    // Create a placeholder array for all positions
    const grid = Array(7).fill().map(() => Array(18).fill(null));
    
    // Place elements in their correct positions, excluding lanthanides and actinides
    elements.forEach(element => {
        if (!['lanthanide', 'actinide'].includes(element.category)) {
            const period = element.period - 1;
            const group = element.group - 1;
            grid[period][group] = element;
        }
    });
    
    // Create main table HTML
    grid.forEach((row, rowIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row g-1 mb-1';
        
        row.forEach((element, colIndex) => {
            const col = document.createElement('div');
            col.className = 'col';
            
            if (element) {
                col.innerHTML = `
                    <div class="element ${element.category} p-1 rounded text-center" 
                         data-element-number="${element.atomicNumber}">
                        <small class="d-block">${element.atomicNumber}</small>
                        <strong>${element.symbol}</strong>
                        <small class="d-block">${element.name}</small>
                    </div>
                `;
            }
            
            rowDiv.appendChild(col);
        });
        
        container.appendChild(rowDiv);
    });
    
    // Create lanthanide and actinide series
    createFBlock();
}

// Function to create the f-block elements display
function createFBlock() {
    const container = document.getElementById('fBlock');
    const series = ['lanthanide', 'actinide'];
    
    series.forEach(seriesName => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row g-1 mb-1';
        
        // Add series label
        const labelCol = document.createElement('div');
        labelCol.className = 'col-auto';
        labelCol.innerHTML = `
            <div class="series-label">
                ${seriesName.charAt(0).toUpperCase() + seriesName.slice(1)}s
            </div>
        `;
        rowDiv.appendChild(labelCol);
        
        // Filter and sort elements by atomic number
        const seriesElements = elements
            .filter(element => element.category === seriesName)
            .sort((a, b) => a.atomicNumber - b.atomicNumber);
        
        // Add placeholder column for alignment with main table
        const placeholderCol = document.createElement('div');
        placeholderCol.className = 'col';
        rowDiv.appendChild(placeholderCol);
        
        // Add elements
        seriesElements.forEach(element => {
            const col = document.createElement('div');
            col.className = 'col';
            col.innerHTML = `
                <div class="element ${element.category} p-1 rounded text-center" 
                     data-element-number="${element.atomicNumber}">
                    <small class="d-block">${element.atomicNumber}</small>
                    <strong>${element.symbol}</strong>
                    <small class="d-block">${element.name}</small>
                </div>
            `;
            rowDiv.appendChild(col);
        });
        
        container.appendChild(rowDiv);
    });
}

// Function to show element details in modal
function showElementDetails(elementNumber) {
    const element = elements.find(e => e.atomicNumber === parseInt(elementNumber));
    if (!element) return;
    
    const modal = new bootstrap.Modal(document.getElementById('elementModal'));
    
    document.querySelector('.modal-title').textContent = element.name;
    document.getElementById('atomicNumber').textContent = element.atomicNumber;
    document.getElementById('symbol').textContent = element.symbol;
    document.getElementById('atomicMass').textContent = element.atomicMass;
    document.getElementById('category').textContent = element.category.replace('-', ' ');
    document.getElementById('block').textContent = element.block;
    document.getElementById('period').textContent = element.period;
    document.getElementById('group').textContent = element.group;
    document.getElementById('state').textContent = element.state;
    document.getElementById('description').textContent = element.description;
    
    modal.show();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    createPeriodicTable();
    
    // Add click event listener for element details
    document.addEventListener('click', (e) => {
        const element = e.target.closest('.element');
        if (element) {
            showElementDetails(element.dataset.elementNumber);
        }
    });
});

// Helper function to get color based on element category (optional, for future use)
function getCategoryColor(category) {
    const colors = {
        'nonmetal': '#A8D08D',
        'noble-gas': '#C7A0E4',
        'alkali-metal': '#FF9999',
        'alkaline-earth': '#FFB366',
        'metalloid': '#80CC99',
        'halogen': '#99CCFF',
        'metal': '#99CCCC',
        'transition-metal': '#FFB3B3',
        'lanthanide': '#FFCCFF',
        'actinide': '#FF99CC'
    };
    return colors[category] || '#CCCCCC';
}