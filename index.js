const {mokaClient} = require(`discordjs-moka`);
const client = new mokaClient({
    prefix: process.env.PREFIX,
    owners: []
});