function addvalue(valor) {
    let displayCal= document.getElementById('input').value += valor;
    print;
    return displayCal;
}

function compute() {
    let operation = document.getElementById('input').value;

    document.getElementById('input').value = eval(operation);
    if (operation === '') {
        document.getElementById('input').value = '';
    }
}

function root(){
    let root = document.getElementById('input').value;
    document.getElementById('input').value = Math.sqrt(root);
}

function clear() {
    document.getElementById('input').value = '';
}
