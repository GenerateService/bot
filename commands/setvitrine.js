const keyv = require(`keyv`);
const { Command } = require(`discordjs-moka`);
module.exports = class setvtrcmd extends Command {
    constructor(client) {
        super(client, {
            name: `setvitrine`,
            description: `Changer sa vitrine`,
            guildOnly: true
        });
    }
    run(message, args) {
        if (!args.length) return message.channel.send(`Veuillez préciser le contenu de votre vitrine!`);
        const vitrines = new keyv(`sqlite://${__dirname}/../vitrines.sqlite`);
        vitrines.get(message.author.username).then(uservtr => {
            if (uservtr) message.channel.send(``, {
                embed: {
                    title: `Votre ancienne vitrine:`,
                    description: uservtr,
                    color: `RANDOM`
                }
            });
            vitrines.set(message.author.username.toLowerCase(), args.join(` `));
            message.channel.send(``, {
                embed: {
                    title: `Vitrine changée!`,
                    color: `GREEN`
                }
            });
        });
    }
};