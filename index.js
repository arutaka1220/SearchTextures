const fs = require("fs");

/* Colors */
const black   = '\u001b[30m';
const red     = '\u001b[31m';
const green   = '\u001b[32m';
const yellow  = '\u001b[33m';
const blue    = '\u001b[34m';
const magenta = '\u001b[35m';
const cyan    = '\u001b[36m';
const white   = '\u001b[37m';
const reset   = '\u001b[0m';

let path = "./minecraft/RP/textures/blocks/";
console.log(`${cyan}DefaultPath: ${path}${reset}`)

const readline = require('readline').createInterface({
    input: process.stdin,
  });
console.log(`${magenta}ReadLineReady${reset}`)

readline.on("line", (line) => {
    if(!line) return console.log(`${red}空白や め ろ${reset}`);
    if(line.startsWith("!")) {
        let p = line.replace("!", "");
        path = `./minecraft/RP/textures/${p}`;
        console.log(`${cyan}SetPath: ${path}${reset}`);
    } else {
        let leng = [];
        fs.readdir(path, (err,files) => {
            for(let file of files) {
            reg = new RegExp(line, "g");
            if(file.match(reg)) {
                console.log(`${green}${file}${reset}`)
                leng.push("a");
            }
        };
        if(leng.length == 0) {
            console.log(`${yellow}検出できませんでした: ${line}${reset}`)        
        } else {
        console.log(`${yellow}SearchEnd: ${leng.length}個を検出しました${reset}`);
        }
        });
    }
});
  
readline.on("close", () => {
});