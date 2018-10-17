class BinaryCalculator {
    constructor() {}

    zero() {
        let currentValue = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = currentValue + '0';
    }

    one() {
        let currentValue = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = currentValue + '1';
    }

    add(){ document.getElementById('display').innerHTML += "+"; }

    minus() { document.getElementById('display').innerHTML += '-'; }

    multiply() { document.getElementById('display').innerHTML += '*'; }

    divide() { document.getElementById('display').innerHTML += '/'; }

    calculate(){
      const ops = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => Math.floor(a / b),
      }
      const [op1, operator, op2] = document.getElementById('display').innerHTML.split(/\b/);
      const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];
      document.getElementById('display').innerHTML = Number(ops[operator](n1,n2)).toString(2);
    }

    clear(){
       document.getElementById('display').innerHTML = "";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new BinaryCalculator();
    document.getElementById('zero').addEventListener('click', () => { calculator.zero(); });
    document.getElementById('one').addEventListener('click', () => { calculator.one(); });
    document.getElementById('add').addEventListener('click', () => { calculator.add(); });
    document.getElementById('minus').addEventListener('click', () => { calculator.minus(); });
    document.getElementById('multiply').addEventListener('click', () => { calculator.multiply(); });
    document.getElementById('divide').addEventListener('click', () => { calculator.divide(); });
    document.getElementById('clear').addEventListener('click', () => { calculator.clear(); });
    document.getElementById('calculate').addEventListener('click', () => { calculator.calculate(); });
});
