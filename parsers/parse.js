const txtToJson = require("txt-file-to-json");
const dataInJSON = txtToJson({ filePath: "./podStatus.txt" });
const dataInJSON1 = txtToJson({ filePath: "./ibmlogs.txt" });

console.log(dataInJSON)

var out = dataInJSON.filter(function (pilot) {
  return pilot.STATUS === 'Failed';
})

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});

// console.log(rebels)
console.log(out)