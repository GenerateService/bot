const keyv = require(`keyv`);
const { Command } = require(`discordjs-moka`);
module.exports = class vtrcmd extends Command {
    constructor(client) {
        super(client, {
            name: `vitrine`,
            description: `Voir une vitrine vitrine`,
            guildOnly: true
        });
    }
    run(message, args) {
        const vitrines = new keyv(`sqlite://${__dirname}/../vitrines.sqlite`);
        if (!args.length) {
            vitrines.get(message.author.username.toLowerCase()).then(uservtr => {
                message.channel.send(``, {
                    embed: {
                        title: `Votre vitrine`,
                        description: uservtr,
                        color: `RANDOM`
                    }
                });
            });
        }
        else {
            vitrines.get(args.join(` `).toLowerCase()).then(uservtr => {
                message.channel.send(``, {
                    embed: {
                        title: `Vitrine de ${args.join(` `)}`,
                        description: uservtr,
                        color: `RANDOM`
                    }
                });
            }).catch(() => {
                message.channel.send(`La vitrine de \`${args.join(` `)}\` est introuvable.`);
            });

        }
    }
};
