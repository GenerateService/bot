module.exports = {
    name: 'foo',
    execute(message, args){
        message.channel.send('Bar!')
    }
}