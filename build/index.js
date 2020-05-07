"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const discord_js_1 = require("discord.js");
const prefix = process.env.PREFIX;
const client = new discord_js_1.Client();
client.on('ready', async () => {
    console.log('Pret!');
    client.user.setActivity('faire des vitrines en plexi.', { type: 'PLAYING' });
});
client.on('message', async (message) => {
});
client.login(process.env.TOKEN);
