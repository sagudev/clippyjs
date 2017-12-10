
var commands_list = {
// write aliases for commands here
    "?":"help",

}

var gen_list_1 = Object.keys(commands_list);
var gen_list_2 = Object.values(commands_list);
var gen_list = gen_list_1.concat(gen_list_2);
function cmd(command) {
    console.log('command to run: ' + command)
    if (command === 'help') {
        console.log("help");
    } else if (false){
        null
    } else {
        var hi
        // try {
        //     hi = commands_list[command];
        //     cmd(hi);
        // }
        // catch(err) {
        //     console.log('error');
        // }
        // finally {
        //     null
        // }
        
        if (commands_list[command] === null || commands_list[command] === undefined) {
            console.log('no aliases');
            console.log(gen_list);

        } else {
            cmd(commands_list[command]);
        }
        //cmd('help');
    }


};
