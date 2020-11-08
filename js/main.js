// Helper for new lines on the history side...
function newLine(text) {
    var line = document.createElement('div');
    line.className = 'console-line';
    line.innerHTML = text;
    document.getElementById('history').appendChild(line);
}

// Helper for positioning caret at the end...
function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

// Structure creation
window.onload = function() {
    // First, the wrapper
    var console1 = document.createElement('div');
    console1.id = 'wrapper';
    document.body.appendChild(console1);

    // Historic cmds
    var console2 = document.createElement('div');
    console2.className = 'console';
    console2.id = 'history';
    document.getElementById('wrapper').appendChild(console2);

    // Input part
    var console2 = document.createElement('span');
    console2.className = 'console';
    console2.id = 'inputtxt';
    //console2.type = 'text';
    console2.contentEditable = true;
    //console2.size = 5;
    console2.spellcheck = false;
    console2.innerText = 'root@trs>';
    console2.addEventListener('input', inputListener);
    console2.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
            e.preventDefault();
            introListener();
        }
    });
    document.getElementById('wrapper').appendChild(console2);

    // Presentation
    newLine('<b>Terminal Resume System</b> (@trs)<br>');

    // Focus on the new line
    document.getElementById('inputtxt').focus();
};

// Input listener
function inputListener() {
    var len = 30;
    var c2 = document.getElementById('inputtxt');
    var rerender = false;
    itxt = c2.innerText;
    //chr1 = itxt.substring(itxt.length-2,itxt.length-1);
    //chr2 = itxt.substring(itxt.length-1,itxt.length);
    //console.log('['+chr1+'] -- <'+chr1.charCodeAt(0)+'>');
    //console.log('['+chr2+'] -- <'+chr2.charCodeAt(0)+'>');

    // Erasing the \n key
    if(itxt.search('\n') != -1){
        //itxt = 'root@trs>';
        rerender = false;
        console.log('bloqueado input...');
    } else if(itxt.length < 10){
        // A trick to avoid erasing initial part
        itxt = 'root@trs>';
        rerender = true;

    } else if( itxt.substring(0,9) != 'root@trs>'){
        // Second part of the trick
        itxt = 'root@trs>'+itxt;
        rerender = true;

    } else if(itxt.length>len){
        // Avoiding inputs longer than <len>
        itxt = itxt.substring(0,len);
        rerender = true;

    }
    // we need a 3rd part for avoid editing initial part.
    

    // Render again only if violated the pattern
    if(rerender){
        c2.innerText = itxt;
        placeCaretAtEnd(c2);
    }
}

// ENTER or INTRO key listener
function introListener(){
    var c2 = document.getElementById('inputtxt');
    var c3 = document.getElementById('wrapper');
    itxt = c2.innerText;
    c2.innerText = 'root@trs>';
    placeCaretAtEnd(c2);
    newLine('<i>'+itxt+'</i><br>');
    console.log('enter...');
    c3.scrollBy(0,100);
}