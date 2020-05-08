require('dotenv').config()
const { Collection, Client } = require('discord.js')
const Websocket = require('./classes/Websocket')
const prefix = process.env.PREFIX
const client = new Client()
client.commands = new Collection()
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
                    color: "GREEN"
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
                            value: `${error.code? error.code : 'Non défini'}`,
                            name: `Code:`
                        }
                    ],
                    color: "RED"
                }
            })
        })
        .catch((e) => { console.log(e) })
})

client.login(process.env.TOKEN)