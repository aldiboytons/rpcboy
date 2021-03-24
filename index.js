var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "grep sudo /var/log/auth.log | grep less | tail -1",
assets : {
large_image : "large",
large_text : " sudo vi /var/spool/anacron/cron.daily" // THIS WILL SHOW AS "Streaming <Status>" from the outisde
},
buttons : [{label : "Support Server" , url : "https://discord.gg/s5qEhAPbDz"},{label : "Instagram",url : "https://instagram.com/ttax.id"}]
}
})
})
client.login({ clientId : "822491161985810442" }).catch(console.error);