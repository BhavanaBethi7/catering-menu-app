import csv from "csvtojson";
import fs from "fs";

const csvFilePath = "./src/data/menuItems.csv";
const jsonOutputPath = "./src/data/menuItems.json";

csv()
  .fromFile(csvFilePath)
  .then((jsonArray) => {
    fs.writeFileSync(
      jsonOutputPath,
      JSON.stringify(jsonArray, null, 2)
    );
    console.log(`Converted ${jsonArray.length} items to JSON`);
  });
