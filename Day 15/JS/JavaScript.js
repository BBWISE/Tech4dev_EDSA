

function calculate() {
    let a = document.getElementById('num1').value, b = document.getElementById('num2').value, c = document.getElementById('Operator').value;
    document.getElementById('result').innerHTML = eval(`${a}${c}${b}`);
}
