require('dotenv').config()
import {
    Client, 
    Collection
} from "discord.js"
const prefix = process.env.PREFIX
const client = new Client()
client.on('ready', async () => {
    console.log('Pret!')
    client.user.setActivity('faire des vitrines en plexi.', {type: 'PLAYING'})
})
client.on('message', async (message) => {
   
})
client.login(process.env.TOKEN)