// Zone 1 - Epipelagic Zone  (down to 200 m)
// Zone 2 - Mesopelagic Zone (200 metres to 1000 metres)
// Zone 3 - Bathypelagic Zone (1 000 metres to 4 000 metres)
// Zone 4 - Abyssopelagic Zone  (4 000 metres to 6 000 metres)
// Zone 5 - Hadalpelagic Zone (The Trenches)

use trench_explorer
db.dropDatabase();
db.trench_elements.insertMany([
  // Zone 1 - Epipelagic Zone  (down to 200 m)
  {
    zone1: [
      {
        title: "Depth of the Eurotunnel",
        detailImg: "public/imgs/channel_tunnel.png",
        facts: 
          "The Channel Tunnel, also known as the Chunnel, is a 50.46-kilometre railway tunnel beneath the English Channel, linking Great Britain and the European mainland.  At its deepest, the tunnel is 75 metres (246 feet) below the sea level. That's the same as 107 baguettes balancing on top of each other.",
      },
      {
        title: "Zooplankton",
        detailImg: "public/imgs/zooplankton.jpeg",
        facts:
          "Zooplankton are floating or weakly swimming animals that rely on water currents to move any great distance. They are usually larger than phytoplankton, ranging from tiny copepods, less than a centimetre long, to jellyfishes and colonial salps that may be metres long. There are two major types of zooplankton: those that spend their entire lives as part of the plankton (called Holoplankton) and those that only spend a larval or reproductive stage as part of the plankton (called Meroplankton).",
      },
      {
        title: "Brain Coral",
        detailImg: "public/imgs/brainCoral.png",
        facts:
          "Brain corals are found in shallow warm water coral reefs in all the world's oceans. They are part of the phylum Cnidaria, in a class called Anthozoa or 'flower animals'. The lifespan of the largest brain corals is 900 years.",
      },
      {
        title: "The Portuguese man o’ war",
        detailImg: "public/imgs/ManOWar.jpg",
        facts:
          "The Portuguese man o’ war, is often called a jellyfish, but is actually a species of siphonophore, a group of animals that are closely related to jellyfish.The Portuguese man o’ war is recognized by its balloon-like float, which may be blue, violet, or pink and rises up to six inches above the waterline. Lurking below the float are long strands of tentacles and polyps that grow to an average of 10 meters and may extend by as much as 30 meters. The tentacles contain stinging nematocysts, microscopic capsules loaded with coiled, barbed tubes that deliver venom capable of paralyzing and killing small fish and crustaceans. While the man o’ war’s sting is rarely deadly to people, it packs a painful punch and causes welts on exposed skin.",
      },
      {
        title: "Great blue shark",
        detailImg: "public/imgs/blueShark.jpg",
        facts:
          "Most adult blue sharks measure 1.7 to 2.2 metres (5.6 to 7.2 feet) long; however, some may grow up to 4 metres (13.1 feet) in length and weigh nearly 206 kg (454 pounds). Reproducing females have litters of 25–50 pups after a 9–12-month gestation period. Blue sharks frequently live to age 15 or 16 in the wild but to about age 8 in captivity.",
      },
    ],
  },
  // Zone 2 - Mesopelagic Zone (200 metres to 1000 metres)
  {
    zone2: [
      {
        title: "Deepest Scuba Dive",
        detailImg: "public/imgs/scuba.png",
        facts:
          "The world's deepest dive was undertaken by Ahmed Gabr in Dahab in the Red Sea on 18/19 September 2014.  He made it all the way down to 332.35m (1,090ft). It took him nearly 10 years to prepare, but getting down to this depth only took less than 15 minutes! Getting back up took nearly 15 hours due to the various risks of the water pressure at such depths.",
      },
      {
        title: "Lancet fish",
        detailImg: "public/imgs/lancet.jpg",
        facts:
          "Lancet fish are elongated and slender, with a long, very tall dorsal fin and a large mouth that is equipped with formidable fanglike teeth. The fish grow to a large size, attaining a maximum length of about 1.8 m (6 feet). Voracious and carnivorous, they feed on a variety of fish and invertebrates. ",
      },
      {
        title: "Cuttlefish",
        detailImg: "public/imgs/cuttlefish.jpg",
        facts:
          "Cuttlefish are marine molluscs. They belong to the class Cephalopoda which also includes squid, octopuses, and nautiluses. Life expectancy 1-2 years. With its eight arms and two tentacles, the cuttlefish is ready to hunt. When a shrimp or fish is in range, the cuttlefish aims and shoots out its two tentacles to seize its prey. The tentacles move so fast that they're difficult to see with the naked eye.",
      },
      {
        title: "Wolf eels",
        detailImg: "public/imgs/wofEel.jpg",
        facts:
          "Wolf eels are scary-looking fish, with crab-crunching teeth, powerful jaws and speckled, grey bodies that look like they’ve been sculpted from a block of granite. They can live for at least 20 years and are enormous, up to 2.4 metres long, although mostly they hide their tapering bodies in caves and crevices in rocky reefs with just their heads sticking out. Wolf eels are not actually eels, but are members of a fish family known as wolf fish or sea wolves.",
      },
      {
        title: "Viperfish",
        detailImg: "public/imgs/viperfish.jpg",
        facts:
          "The viperfish is one of the most unusual-looking fish in the deep sea. It is also one of the most popular and well-known species. Known scientifically as Chauliodus sloani, it is one of the fiercest predators of the deep. This fish can be easily recognized by its large mouth and sharp, fang-like teeth. In fact, these fangs are so large that they will not fit inside the mouth. Instead, they curve back very close to the fish's eyes.",
      },
    ],
  },
  // Zone 3 - Bathypelagic Zone (1 000 metres to 4 000 metres)
  {
    zone3: [
      {
        title: "Deepest Submarine Cable",
        detailImg: "public/imgs/sapei.png",
        facts:
          "SAPEI, is a high-voltage d/c power transmission cable that connects Sardinia with the Italian mainland. The submarine cable runs at 1,600 metres (5,200 ft) below sea level in the Tyrrhenian Sea. It is the deepest submarine power cable in the world.[",
      },
      {
        title: "Black Seadevil Angler Fish",
        detailImg: "public/imgs/seadevil.jpg",
        facts:
          "SAPEI, is a high-voltage d/c power transmission cable that connects Sardinia with the Italian mainland. The submarine cable runs at 1,600 metres (5,200 ft) below sea level in the Tyrrhenian Sea. It is the deepest submarine power cable in the world.[",
      },
      {
        title: "Benthocodon Jellyfish",
        detailImg: "public/imgs/Benthocodon.jpeg",
        facts:
          "The benthocodon is a deep-water jellyfish with a spectacular alien-like appearance. They are small in size and have an intense red coloration, unlike most jellyfish that are clear. The jellyfish spend their lives swimming deep in the water column, using their thousands of tiny tentacles to move. It is believed that the red bell of their body hides the bioluminescent light from the creatures that the animal has eaten. This enables it to keep its camouflage in the dark and remain hidden from prey and predators.",
      },
      {
        title: "Great white shark",
        detailImg: "public/imgs/whiteShark.jpg",
        facts:
          "The great white shark, also known as the white shark, white pointer, or simply great white, is a species of large mackerel shark which can be found in the coastal surface waters of all the major oceans. It is notable for its size, with larger female individuals growing to 6.1 m in length and 1,905-2,268 kg in weight at maturity. According to a 2014 study, the lifespan of great white sharks is estimated to be as long as 70 years or more, well above previous estimates, making it one of the longest lived cartilaginous fishes currently known.Great white sharks can swim at speeds of 25 km/h.",
      },
      {
        title: "Zombie worm",
        detailImg: "public/imgs/zombieWorm.jpg",
        facts:
          "the zombie worm (Osedax) is a living creature, and it likes to eat the bones of deceased whales that have fallen to the ocean floor. Zombie worms drill into the bones using special root tissues which secrete acid and use symbiotic bacteria to digest the proteins and lipids they contain. They have feathery plumes that wave in the water and are used as gills to breathe through. These can be seen sticking out of the holes that the worms have made in the bones. The worms were first discovered in 2002, living on the remains of a gray whale found at a depth of 2,893 meters.",
      },
      {
        title: "Depth of Titanic Shipwreck",
        detailImg: "public/imgs/titanic.png",
        facts:
          "Titanic was a luxury british steamship that sank after striking an iceberg on April 15th 1912.  Over 1500 people lost their lives in the ship which was described as 'unsinkable' before it left port. The wreck lies 3800m down, in the middle of the North Atlantic. The sinking has inspired many films and books, including director James' Cameron's 1997 film 'Titanic' which won 11 oscars, and was the first film ever to earn over a billion dollars at the box office.  Cameron would later go onto explore the Mariana Trench himself, becoming the third person to reach the very bottom.",
      },
    ],
  },
  // Zone 4 - Abyssopelagic Zone  (4 000 metres to 6 000 metres)
  {
    zone4: [
      {
        title: "Tin of Spam",
        detailImg: "public/imgs/spam.png",
        facts:
          "Even in the remotest parts of the ocean, humanity's impact is observable. An almost completely intact can of luncheon meat from 2001 was spotted 4947m down in the Sirena Deep part of the Mariana Trench. ",
      },
      {
        title: "Giant squid",
        detailImg: "public/imgs/giantSquid.jpg",
        facts:
          "The giant squid remains largely a mystery to scientists despite being the biggest invertebrate on Earth. The largest of these elusive giants ever found measured 59 feet in length and weighed nearly a ton.Giant squid, along with their cousin, the colossal squid, have the largest eyes in the animal kingdom, measuring some 10 inches in diameter. These massive organs allow them to detect objects in the lightless depths where most other animals would see nothing.",
      },
      {
        title: "Sea spider",
        detailImg: "public/imgs/seaSpider.jpg",
        facts: 
          "Sea spiders have small bodies and long, segmented legs! Sea spiders have a long proboscis that they use to suck nutrients out of invertebrates. There are around 1,000 known species. Most species are 1-10 millimeters in length, although there are species with a legspan of 30 or more inches found in deep ocean environments. Sea spiders are found from the intertidal zone to depths of more than 20,000 feet! Sea spiders don't swim, they walk along the ocean floor.",
      },
      {
        title: "Sea pig",
        detailImg: "public/imgs/seaPig.jpg",
        facts:
          "Sea pigs are not actually pigs, but sea cucumbers. While physiologically nothing like pigs, their translucent, pink-tinged bodies, accompanied by several pairs of elongated tube feet (some located on their heads), do show some resemblance to their land-based namesake.Sea pigs live in some of the deepest, darkest parts of the ocean. They also have water-filled, fragile bodies that nearly disintegrate when brought up from these extreme depths.",
      },
      {
        title: "Echinoderms",
        detailImg: "public/imgs/Echioderms.jpg",
        facts:
          "Echinoderms live in every ocean, even off the coast of Antarctica. Well known as coastal dwellers, they can be found at depths over three miles deep (5,000 meters).echinoderms include sea stars, sea urchins, sea cucumbers, brittle stars, and feather stars (Fig. 3.83). Although they may appear very different, echinoderms all have two major defining characteristics that set them apart from all other animals: a water vascular system and five-sided radial symmetry.",
      },
    ],
  },
  // Zone 5 - Hadalpelagic Zone (The Trenches)
  {
    zone5: [
      {
        title: "Deepest Ever Shipwreck",
        detailImg: "public/imgs/sammy_roberts.png",
        facts:
          "The U.S.S Samuel B Roberts is the deepest shipwreck ever discovered, lying below the surface of the Philippine Sea at 6865m - that's the same as 20 Eiffel Towers stacked on top of each other!  The warship was sunk at the largest naval battle in history, the Battle of Leyte Gulf, fought between the US and Japanese Navies at the end of World War 2.  It was sunk by the Imperial Japanese Ship Yamato, the largest battleship ever built",
      },
      {
        title: "Plastic Waste and Pollution",
        detailImg: "public/imgs/plastic_waste.png",
        facts:
          "Expeditions have discovered pollution even at the very bottom of the trench.  Litter such as Plastic bags, sweet wrappers, a plastic bucket and even a helium balloon from the film 'Frozen' have been discovered below 10,000m, in the deepest part, of the deepest part of the world.  Toxic chemicals banned in the 1970s which will never break down in the environment, and even elements left over from Nuclear Bomb testing have been found in crustaceans and other wildlife at the bottom ",
      },
      {
        title: "Trieste",
        detailImg: "public/imgs/trieste.png",
        facts:
          "The Trieste was the first crewed vessel to reach the deepest point in the Mariana Trench - the Challenger Deep - at 10 994m down.  On 23rd Jan 1960, Jacques Piccard boarded the research submarine designed by his father, and with his fellow explorer  Don Walsh, they became the very first to reach the bottom.  It took nearly 5 hours to get to the bottom and it was a bumpy ride - at 9km down, one of the outer windows cracked and shook the entire submarine!",
      },
      {
        title: "Mariana snailfish",
        detailImg: "public/imgs/snailfish.jpg",
        facts:
          "This strange-looking fish is believed to exist in the Mariana Trench at depths ranging from 6,198 m to 8,076 m. The snailfish looks a little like a tadpole and has loose skin instead of scales. It uses its small teeth to feed on small crustaceans that it finds on the bottom. Fully grown, the fish reaches about 11 inches / 28 cm in length. Like many inhabitants of the deepest depths, the snailfish is thought to be completely blind and has developed its other senses to find food.",
      },
      {
        title: "Dumbo Octopus",
        detailImg: "public/imgs/DumboOctopus.jpg",
        facts:
          "Dumbo octopus are pelagic umbrella octopuses measuring about 25 centimetres. They have a gelatinous body that allows them to live at extreme water depths below 1,000 meters, and the deepest observed live specimen was found in 2020 in water 6,957 meters deep. The so-called Dumbo ears that give the octopus its name are, in fact, fins that the animal uses to swim. Its eight tiny tentacles are used to help the octopus manoeuvre or to walk along the bottom.",
      },
      {
        title: "Comb jellies",
        detailImg: "public/imgs/combjelly.jpeg",
        facts:
          "The benthic comb jelly is a gelatinous organism 5-8 cm wide and 10-20 cm long. It can attach itself to the sea floor using two long filaments and has two retractable tentacles at the opposite end. Its appearance has been said to resemble a two-tailed box kite. All comb jellies are predatory, taking plankton from the water column by swimming mouth first. They use an organ called a colloblast that squirts a glue like substance onto the prey. When food is plentiful, a comb jelly can eat up to ten times its own body weight in one day! For a long time it was thought that nothing ate comb jellies because of their low nutrient value. However, it has since been discovered that some fish species, turtles and jellyfish predate upon them.",
      },
      {
        title: "Grenadier",
        detailImg: "public/imgs/grenadier.jpeg",
        facts:
          "Grenadier, also called rat-tail or rattail, any of about 300 species of abundant deep-sea fishes of the family Macrouridae found along the ocean bottom in warm and temperate regions. The typical grenadier is a large-headed fish with a tapered body ending in a long, ratlike tail bordered above and below by the anal and second dorsal fins. The eyes are large, and the mouth is on the underside of the head. The often extended snout presumably aids in rooting about the bottom for food. Some species have light organs, and some can produce sounds by means of paired muscles attached to the swim bladder. The fish is usually about 30 to 60 cm long.",
      },
    ],
  },
]);

db.questions.insertMany([
      {
        question: "What is the name of the railway tunnel that links Britain and France?",
        answer: "The Channel Tunnel",
        options: ["The Channel Tunnel", "The Brexit Hole", "The Silk Road", "The Bucket and Shovel"]
        
      },
      
      {
        question: "In what sea was the deepest scuba dive ever completed",
        answer: "The Red Sea",
        options: ["The Red Sea", "The Irish Sea", "Loch Ness", "My Bath Tub"]
      }
]);








// Original Database Code
// db.questions.insertMany([
//   // Zone 1 - Epipelagic Zone  (down to 200 m)
//   {
//     zone1: [
//       {
//         question: "What is the name of the railway tunnel that links Britain and France?",
//         answer: "The Channel Tunnel",
//       },
//     ],
//   },
//   // Zone 2 - Mesopelagic Zone (200 metres to 1000 metres)
//   {
//     zone2: [
//       {
//         question: "In what sea was the deepest scuba dive ever completed",
//         answer: "The Red Sea",
//       },
//     ],
//   },
//   // Zone 3 - Bathypelagic Zone (1 000 metres to 4 000 metres)
//   {
//     zone3: [
//       {
//         question: "The deepest submarine power cable in the world connects Italy with which island?",
//         answer: "Sardinia",
//       },
//       {
//         question: "What year did the Titanic Sink?",
//         answer: "1912",
//       },
//     ],
//   },
//   // Zone 4 - Abyssopelagic Zone  (4 000 metres to 6 000 metres)
//   {
//     zone4: [
//       {
//         question: "A can of what was found almost 5km down in the Mariana Trench",
//         answer: "SPAM",
//       },
//     ],
//   },
//   // Zone 5 - Hadalpelagic Zone (The Trenches)
//   {
//     zone5: [
//       {
//         question: "What is the name of the deepest shipwreck ever discovered?",
//         answer: "U.S.S Samuel B Roberts",
//       },
//       {
//         question: "What is the name of the deepest point in the Mariana Trench?",
//         answer: "The Challenger Deep",
//       },
//     ],
//   },
// ]);
