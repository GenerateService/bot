module.exports = {
    name: 'eval', 
    description: 'Evaluer du code JavaScript',
    aliases: ['evaluate'],
    category: 'bot',
    hidden: true, 
    ownerOnly: true,
    userPermissions: [], 
    execute: (message, args) => {
        const client = message.client
        eval(args.join(' '))
    }
}