pm2 stop gsbot
rm trs.log 
pm2 start --name gsbot --log trs.log index.js