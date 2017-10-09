var listenScript = __dirname+"/listen.py";
var theScript;
var spiFile = __dirname+"/spi.txt"
var childProcess = require('child_process');

    theScript = listenScript;
    

    var spawn = childProcess.spawn('python3',[theScript]);

    fs = require('fs');

    fs.watchFile(spiFile, (curr, prev) => {
    fs.readFile(spiFile, 'utf8', function(err, data) {  
            if (err) throw err;
            if(!data || data.trim().length == 0){
                data = " no one";
            }
            //data what you want with the data writen by the python script
        });
    });

    require('electron').remote.getCurrentWindow().on('close',
    function(){
        spawn.kill('SIGHUP');
    })


