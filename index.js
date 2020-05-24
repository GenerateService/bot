require(`dotenv`).config();
const { mokaClient } = require(`discordjs-moka`);
const client = new mokaClient({
    prefix: process.env.PREFIX,
    owner: [`360010766876672000`],
    usedfautcommands: true,
    commandpath: [`${__dirname}/commands`],
    token: process.env.TOKEN,
    prefixdbpath: `${__dirname}/prefixes.sqlite`,
    invite: `https://discord.gg/xuft9sY`

});
client.on(`ready`, async () => {
    client.user.setActivity(`faire des vitrines`);
});