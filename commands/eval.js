module.exports = {
    name: 'eval', 
    description: 'Evaluer du code JavaScript',
    aliases: ['evaluate'],
    category: 'bot',
    hidden: true, 
    userPermissions: [], 
    execute: (message, args) => {
        const client = message.client
        if(!message.client.owners.has(message.author.id)){
            message.channel.send('Seul un owner peut utiliser cette commande.')
        }
        eval(args.join(' '))
    }
}