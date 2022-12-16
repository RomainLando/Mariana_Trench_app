// Zone 1 - Epipelagic Zone  (down to 200 m)
// Zone 2 - Mesopelagic Zone (200 metres to 1000 metres)
// Zone 3 - Bathypelagic Zone (1 000 metres to 4 000 metres)
// Zone 4 - Abyssopelagic Zone  (4 000 metres to 6 000 metres)
// Zone 5 - Hadalpelagic Zone (The Trenches)

use trench_explorer
db.dropDatabase()
db.trench_elements.insertMany(
{
  zone1: 
    [
      {
        title: "",
        detailImg: "src",
        facts: "string",
      },
    ],
    zone2: 
    [
      {
        title: "",
        detailImg: "src",
        facts: "string",
      },
    ],
    zone3: 
    [
      {
        title: "",
        detailImg: "src",
        facts: "string",
      },
    ],
    zone4: 
    [
      {
        title: "",
        detailImg: "src",
        facts: "string",
      },
    ],
    zone5: 
    [
      {
        title: "",
        detailImg: "src",
        facts: "string",
      },
    ]
}
)
