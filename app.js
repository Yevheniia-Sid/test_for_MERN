const fs = require("fs");

const fileContent = fs.readFileSync("input.txt", "utf8");
const fileContentArray = fileContent.split(/\s+/);

const length = fileContentArray[0];
const width = fileContentArray[1];
const height = fileContentArray[2];
const widthWallpaper = fileContentArray[3] / 1000;
const lengthWallpaper = fileContentArray[4] / 1000;

// walls square without doors and windows area
const wallsSquare = (length * width + 2 * length * height + 2 * width * height) * 0.85;

// wallpaper square with pieces of garbage 
const wallpaperSquare = (widthWallpaper * lengthWallpaper * 0.9);

const numberRolls = Math.ceil(wallsSquare / wallpaperSquare);

fs.writeFile("output.txt", numberRolls, function (err) {
    if (err) 
        return console.log(err);
    else
        return console.log("Success, check output.txt file");
});