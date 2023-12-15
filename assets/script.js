document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('randomColorBtn').addEventListener('click', generateRandomColor);
    document.getElementById('submitColorBtn').addEventListener('click', submitColor);
});

function generateRandomColor() {
    var col1 = Math.floor(Math.random() * 256);
    var col2 = Math.floor(Math.random() * 256);
    var col3 = Math.floor(Math.random() * 256);
    var col4 = Math.random().toFixed(2);

    var code = 'rgba(' + col1 + ', ' + col2 + ', ' + col3 + ', ' + col4 + ')';
    document.getElementById('show').innerHTML = code;
    document.getElementById('test').style.backgroundColor = code;
}

function submitColor() {
    var val = document.getElementById('area').value;
    document.getElementById('show').innerHTML = val;
    document.getElementById('test').style.backgroundColor = val;
}
