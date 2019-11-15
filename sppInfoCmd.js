
registerPlugin({
    name: '[Support++ Plugin] SppInfoCommands',
    version: '0',
    description: '0',
    author: 'KlexHub UG (haftungsbeschränkt)',
    autorun: true,
    hidden: true,
    vars: []
}, function(_, config, k_) {
   const engine = require("engine");
   const event = require("event");

    const meta = {
        url: "https://raw.githubusercontent.com/Support-pp/Support-pp/master/support-pp.js",
        name: "InfoCommands",
        description: "Register commands for the support++ core script.",
        version: "1.0.0",
        author: "KlexHub UG (haftungsbeschränkt)"    
    }

    module.exports = {
        getMeta(){
            return meta;
        },

        initPlugin(){
            event.on('load', function(ev: any) {
                
                const command = require("command")
                if (!command) throw new Error("command.js library not found! Please download command.js and enable it to be able use this script!")
                
                command.createCommand("info")
                .help("Infocommand Support++")
                .manual("send info about the installed support++ script")
                .exec((client, reply, raw) => {
                        client.chat("Test info cmd")
                })

            })
        }
    };
    
});

