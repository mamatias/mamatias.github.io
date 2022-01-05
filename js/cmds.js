export function testCmds(){
    console.log('Succefull test...');
}

// Comands procesing function
export function understandCommand(cmd){
    if(cmd == 'clear'){
        c_clear();
    }
    else if(cmd == 'ls'){
        newLine('<i>Ja! ...This is not a real terminal. <br><strong>help</strong> for more info</i><br>');
    }
    else if(cmd == 'echo'){
        newLine(cmd);
    }
    else if(cmd == 'blog'){
        newLine('<i>Loading blog...<br>');
        setTimeout(
            function(){
                window.open('/blog/', '_self');
            },
            3000
        );
    }
    else if(cmd == 'tictactoe'){
        newLine('<i>Loading tic tac toe game...<br>');
        setTimeout(
            function(){
                window.open('/tictactoe/', '_self');
            },
            3000
        );
    }
    else if(cmd == 'help'){
        newLine(' ');
        newLine('<strong>TRS help</strong>');
        newLine('<i>This are the commands available:</i>');
        newLine('<i>help ...............for help... ja!</i>');
        newLine('<i>clear ..............for clear te screen</i>');
        newLine('<i>echo ...............Echo ja...</i>');
        newLine('<i>blog ...............Memes.</i>');
        newLine('<i>tictactoe ..........A very sophisticate futuristic game</i>');
    }
    else {
        newLine('<i>Command [['+cmd+']] not found<br><strong>help</strong> for more info</i><br>');
    }
}

// CLEAR FUNCTION
function c_clear(){
    console.log('Comando clear...');
    var obj = document.getElementById('history');
    obj.innerText = '';
}

// Helper for new lines on the history side...
function newLine(text) {
    var line = document.createElement('div');
    line.className = 'console-line';
    line.innerHTML = text;
    document.getElementById('history').appendChild(line);
}