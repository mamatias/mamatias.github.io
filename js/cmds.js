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
    else if(cmd == 'resume'){
        newLine('<br>');
        newLine('<strong color="red">MATIAS TORRES RISSO - ELECTRICAL ENGINEER</strong>');
        newLine('<br>');
        newLine('<i>hi, my name is Matías and here Im.</i>');
        newLine('<br>');
    }
    else if(cmd == 'ui'){
        newLine('<i>The UI is not ready, but it will... <br><strong>help</strong> for more info</i><br>');
    }
    else if(cmd == 'help'){
        newLine(' ');
        newLine('<strong>TRS help</strong>');
        newLine('<i>This are the commands available:</i>');
        newLine('<i>help</i>');
        newLine('<i>clear</i>');
        newLine('<i>resume</i>');
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