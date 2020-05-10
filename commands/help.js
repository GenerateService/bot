module.exports = {
    name: 'help', 
    description: 'Obtenir de l\'aide sur les commandes',
    aliases: ['halp'],
    category: 'bot',
    execute: (message, args) => {
        const helpembed = {
            title: `Aide de ${message.client.user.username}`,
            description: `Voici une liste de mes commandes (que vous pouvez utiliser avec \`${message.client.prefix}commande\`)`,
            color: 'GREEN',
            footer: {
                icon_url: `${message.client.user.avatarURL()}`,
                text: `Aide de ${message.client.user.username}`
            },
            fields: []
        }
        message.channel.send('', {
            embed: helpembed
        })
    }
}