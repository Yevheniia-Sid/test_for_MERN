"use strict";
let length = 3;
let width = 5;
let height = 3;
let widthWallpaper = 400/1000;
let lengthWallpaper = 5000/1000;
let numberRolls = Math.ceil( ((length * width + 2 * length * height + 2 * width * height) * 0.85)/(widthWallpaper  * lengthWallpaper  * 0.9));
alert(numberRolls);

