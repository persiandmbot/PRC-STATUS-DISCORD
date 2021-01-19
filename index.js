var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
const id =  ('Your id bot')

client.on('ready', () => {
console.log(`RPC ID : ${id} Started`);
        client.request('SET_ACTIVITY', {
            pid: process.pid,
                activity : {
                    details : "",
                    state : "",
                    assets : {
                    large_image : "",
                    large_text : "" ,
                    small_image : "",
                    small_text : ""                    
                },
            buttons : [{label : "Made By dm Team bot",url : "link1"} , {label : "dokme 2" , url : "link2"}]
        }
    })
})

client.login({ clientId : `${id}` }).catch(console.error);
