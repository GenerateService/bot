module.exports = {
    name: 'ping',
    description: 'Vérifier le ping du bot.',
    category: 'bot',
    aliases: ['pong'],
    execute: (message, args) => {
        let oldate = Date.now()
        message.channel.send(`Mesuratatation du ping en cours...`)
            .then(async (m) => {
                await m.edit(`*Pong!* 🎉. Et tout ça en ${Date.now() - oldate} secondes.`)
            })
    }
}
