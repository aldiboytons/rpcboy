var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Gaskann",
assets : {
large_image : "large",
large_text : "SATU ATAP" // THIS WILL SHOW AS "Streaming <Status>" from the outisde
},
buttons : [{label : "Support Server" , url : "https://discord.gg/74kHyRUxmC"},{label : "Instagram",url : "https://instagram.com/satuatap_dc"}]
}
})
})
client.login({ clientId : "823937642059399170" }).catch(console.error);
