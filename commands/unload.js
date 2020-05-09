const fs = require('fs')
module.exports = {
    name: 'unload',
    description: 'Décharger une commande',
    aliases: ['unld'],
    ownerOnly: true,
    execute: (message, args) => {
        if(!args[0]){
            return message.channel.send(`Veuillez préciser quelle commande décharger!`)
        }
        if(!fs.existsSync(`${__dirname}/${args.join(' ')}.js`)){
            return message.channel.send(`La commande \`${args.join(' ')}\` n'existe pas dans le dossier commandes. Son fichier a peut-être été supprimé ?`)
        }
        if(!message.client.aliases.has(args.join(' '))){
            return message.channel.send(`La commande \`${args.join(' ')}\` n'est pas chargée !`)
        }
        message.client.aliases.delete(`${args.join(' ')}`)
        delete require.cache[require.resolve(`./${args.join(' ')}.js`)]
        message.channel.send(`La commande \`${args.join(' ')}\` a été déchargée 🎉.`)

    }
}