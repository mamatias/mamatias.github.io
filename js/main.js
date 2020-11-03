// Structure creation
window.onload = function() {
    // First, the wrapper
    var console1 = document.createElement('div');
    console1.className = 'console';
    console1.id = 'wrapper';
    document.body.appendChild(console1);

    var console2 = document.createElement('div');
    console2.className = 'console';
    console2.id = 'history';
    document.getElementById('wrapper').appendChild(console2);

    var console3 = document.createElement('div');
    console3.className = 'console line';
    console3.id = 'live';
    document.getElementById('wrapper').appendChild(console3);

    var console4 = document.createElement('div');
    console4.className = 'console';
    console4.id = 'user';
    console4.innerText = '>';
    document.getElementById('live').appendChild(console4);

    var console5 = document.createElement('input');
    console5.className = 'console';
    console5.id = 'inputtxt';
    console5.type = 'text';
    document.getElementById('live').appendChild(console5);
};