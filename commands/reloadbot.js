module.exports = {
    name: 'reloadbot',
    description: 'Recharger le bot.',
    ownerOnly: true, 
    aliases: ['botreload'],
    async execute(message, args)  {
        await message.channel.send('Rechargement du bot...')
        await process.exit(0)
    }
}