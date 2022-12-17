// Zone 1 - Epipelagic Zone  (down to 200 m)
// Zone 2 - Mesopelagic Zone (200 metres to 1000 metres)
// Zone 3 - Bathypelagic Zone (1 000 metres to 4 000 metres)
// Zone 4 - Abyssopelagic Zone  (4 000 metres to 6 000 metres)
// Zone 5 - Hadalpelagic Zone (The Trenches)

// use trench_explorer
db.dropDatabase();
db.trench_elements.insertMany({
  // Zone 1 - Epipelagic Zone  (down to 200 m)
  zone1: [
    {
      title: "Depth of the Eurotunnel",
      detailImg: "public/imgs/channel_tunnel.jpeg",
      facts: "The Channel Tunnel, also known as the Chunnel, is a 50.46-kilometre railway tunnel beneath the English Channel, linking Great Britain and the European mainland.  At its deepest, the tunnel is 75 metres (246 feet) below the sea level. That's the same as 107 baguettes balancing on top of each other.",
    },
  ],
  // Zone 2 - Mesopelagic Zone (200 metres to 1000 metres)
  zone2: [
    {
      title: "Deepest Scuba Dive",
      detailImg: "public/imgs/scuba.jpeg",
      facts:
        "The world's deepest dive was undertaken by Ahmed Gabr in Dahab in the Red Sea on 18/19 September 2014.  He made it all the way down to 332.35m (1,090ft). It took him nearly 10 years to prepare, but getting down to this depth only took less than 15 minutes! Getting back up took nearly 15 hours due to the various risks of the water pressure at such depths.",
    },
  ],
  // Zone 3 - Bathypelagic Zone (1 000 metres to 4 000 metres)
  zone3: [
    {
      title: "Deepest Submarine Cable",
      detailImg: "public/imgs/sapei.png",
      facts: "SAPEI, is a high-voltage d/c power transmission cable that connects Sardinia with the Italian mainland. The submarine cable runs at 1,600 metres (5,200 ft) below sea level in the Tyrrhenian Sea. It is the deepest submarine power cable in the world.[",
    },
    {
      title: "Depth of Titanic Shipwreck",
      detailImg: "src",
      facts: "string",
    },
  ],
  // Zone 4 - Abyssopelagic Zone  (4 000 metres to 6 000 metres)
  zone4: [
    {
      title: "Container of Spam",
      detailImg: "src",
      facts: "string",
    },
  ],
  // Zone 5 - Hadalpelagic Zone (The Trenches)
  zone5: [
    {
      title: "Deepest Ever Shipwreck",
      detailImg: "src",
      facts: "string",
    },
    {
      title: "Plastic Waste",
      detailImg: "src",
      facts: "string",
    },
    {
      title: "Trieste",
      detailImg: "src",
      facts: "string",
    },
  ],
});
