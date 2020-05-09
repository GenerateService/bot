const fs = require('fs')
module.exports = {
    name: 'load',
    description: 'Charger une commande',
    ownerOnly: true, 
    category: 'bot',
    execute: (message, args) => {
        if(args === 'all'){}
        if(message.client.aliases.has(args.join(' '))){
            return message.channel.send(`La commande \`\`${args.join(' ')}\`\` est déjà chargée!`)
        }
        if(fs.existsSync(`${__dirname}/${args.join(' ')}.js`)){
            let cmd = require(`./${args.join(' ')}`)
            message.client.aliases.set(cmd.name, cmd)
            message.channel.send(`La commande \`\`${args.join(' ')}\`\` a été chargée 🎉.`)
        }
        else{
            message.channel.send(`❌ La commande \`\`${args.join(' ')}\`\` n'existe pas dans le dossiers commandes.`)
        }
    }
}