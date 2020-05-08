require('dotenv').config()
const fs = require('fs')
const { Collection, Client } = require('discord.js')
const Websocket = require('./classes/Websocket')
const prefix = process.env.PREFIX
const client = new Client()
const path = require('path')
client.owners = new Collection()
client.owners.set('360010766876672000', 'Woomy4680-exe')
client.aliases = new Collection()
const commfiles = fs.readdirSync(`${path.join(`${__dirname}`, `./commands`)}`).filter(file => file.endsWith('.js')) //A refaire avec des sous-dossiers
commfiles.forEach(cmd => {
    let file = require(`${path.join(`${__dirname}`, `./commands/${cmd}`)}`)
    client.aliases.set(`${file.name}`, file)
    file.aliases.forEach(alias => {
        client.aliases.set(alias, file)
    })
})




client.on('ready', async () => {
    new Websocket(process.env.PORT, client)
    console.log('Pret!')
    client.user.setActivity('faire des vitrines en plexi.', { type: 'PLAYING' })
    client.channels.fetch(process.env.ERRCHAN)
        .then((erchan) => {
            erchan.send('', {
                embed: {
                    title: `Connecté !`,
                    description: `Mes erreurs seront envoyées ici`,
                    color: "GREEN",
                    timestamp: new Date()
                }
            })
        })
        .catch((e) => { console.log(e) })
})

process.on('unhandledRejection', (error) => {
    client.channels.fetch(process.env.ERRCHAN)
        .then((erchan) => {
            erchan.send('', {
                embed: {
                    title: `Une erreur s'est produite`,
                    description: `${error.name}`,
                    fields: [
                        {
                            value: `${error.message}`,
                            name: `Message:`
                        },
                        {
                            value: `${error.code ? error.code : 'Non défini'}`,
                            name: `Code:`
                        }
                    ],
                    color: "RED"
                }
            })
        })
        .catch((e) => { console.log(e) })
})
client.on('message', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
    if(!client.aliases.has(command)){return}
    let cmd = client.aliases.get(command)
    try{
        cmd.execute(message, args)
    } catch(e){
        console.log(e)
    }



})
client.login(process.env.TOKEN)