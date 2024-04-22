const fs = require("fs")
module.exports = (client) => {
    client.handleCommands = async () => {
        const commonFolders = fs.readdirSync("./src/functions/commands")
        for (const folder of commonFolders) {
            const commonFiles = fs.readdirSync(`./src/functions/commands/${folder}`).filter(file => file.endsWith(".js"));
            for(const file of commonFiles){
                
            }
        }
    }
}