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
    else if(cmd == 'resume'){
        newLine('<br>');
        newLine('<strong color="red">MATIAS TORRES RISSO - ELECTRICAL ENGINEER</strong>');
        newLine('<br>');
        newLine('<i>hi, my name is Matías and here Im.</i>');
        newLine('<br>');
    }
    else if(cmd == 'ui'){
        newLine('<i>Loading UI...<br>');
        setTimeout(
            function(){
                window.open('/ui/', '_self');
            },
            3000
        );
    }
    else if(cmd == 'd3'){
        newLine('<i>Loading D3 playground...<br>');
        setTimeout(
            function(){
                window.open('/d3/', '_self');
            },
            3000
        );
    }
    else if(cmd == 'aws1'){
        newLine('<i>Loading AWS CONCEPT 01...<br>');
        setTimeout(
            function(){
                window.open('/aws_01/', '_self');
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
        newLine('<i>resume .............for my personal resume</i>');
        newLine('<i>ui .................for the nice looking version</i>');
        newLine('<i>d3 .................D3 (data driven documents) experiments</i>');
        newLine('<i>aws1 ...............Serverless lab 01</i>');
        newLine('<i>echo ...............Echo ja...</i>');
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