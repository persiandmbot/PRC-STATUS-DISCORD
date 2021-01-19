var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
const id =  ('791338147149512734')

client.on('ready', () => {
console.log(`RPC ID : ${id} Started`);
        client.request('SET_ACTIVITY', {
            pid: process.pid,
                activity : {
                    details : "",
                    state : "",
                    assets : {
                    large_image : "add",
                    large_text : "logo" ,
                    small_image : "",
                    small_text : ""                    
                },
            buttons : [{label : "Discord",url : " https://discord.gg/zVF4ucBe3G"} , {label : "Website" , url : ""}]
        }
    })
})

client.login({ clientId : `${id}` }).catch(console.error);