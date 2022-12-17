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
    ],
  },
]);

db.questions.insertMany([
  // Zone 1 - Epipelagic Zone  (down to 200 m)
  {
    zone1: [
      {
        question: "What is the name of the railway tunnel that links Britain and France?",
        answer: "The Channel Tunnel",
      },
    ],
  },
  // Zone 2 - Mesopelagic Zone (200 metres to 1000 metres)
  {
    zone2: [
      {
        question: "In what sea was the deepest scuba dive ever completed",
        answer: "The Red Sea",
      },
    ],
  },
  // Zone 3 - Bathypelagic Zone (1 000 metres to 4 000 metres)
  {
    zone3: [
      {
        question: "The deepest submarine power cable in the world connects Italy with which island?",
        answer: "Sardinia",
      },
      {
        question: "What year did the Titanic Sink?",
        answer: "1912",
      },
    ],
  },
  // Zone 4 - Abyssopelagic Zone  (4 000 metres to 6 000 metres)
  {
    zone4: [
      {
        question: "A can of what was found almost 5km down in the Mariana Trench",
        answer: "SPAM",
      },
    ],
  },
  // Zone 5 - Hadalpelagic Zone (The Trenches)
  {
    zone5: [
      {
        question: "What is the name of the deepest shipwreck ever discovered?",
        answer: "U.S.S Samuel B Roberts",
      },
      {
        question: "What is the name of the deepest point in the Mariana Trench?",
        answer: "The Challenger Deep",
      },
    ],
  },
]);
