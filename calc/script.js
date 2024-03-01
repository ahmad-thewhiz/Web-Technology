function add() {
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    var sum = x + y;
    alert('Sum = ' + sum);
}

function sub() {
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    var diff = x - y;
    alert('Difference = ' + diff);
}

function sum() {
    var sum=0;
    let arr = [1,2,3,[4,5,6,[7,8,9]]];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sum(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    console.log(sum);
}
