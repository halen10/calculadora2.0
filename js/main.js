const result = document.getElementById('display-result');
const operaction = document.getElementById('display-operaction');
const num0 = document.getElementById('num0');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const sumar = document.getElementById('suma');
const restar = document.getElementById('rest');
const multiplicar = document.getElementById('mult');
const dividir = document.getElementById('divi');
const eliminar = document.getElementById('clea');
const borrar = document.getElementById('dele');
const porciento = document.getElementById('porc');
const igual = document.getElementById('igua');
let operador = '';
let n1 = 0;
let n2 = 0;

num0.addEventListener('click',()=>{
    result.textContent += "0";
})
num1.addEventListener('click',()=>{
    result.textContent += "1";
})
num2.addEventListener('click',()=>{
    result.textContent += "2";
})
num3.addEventListener('click',()=>{
    result.textContent += "3";
})
num4.addEventListener('click',()=>{
    result.textContent += "4";
})
num5.addEventListener('click',()=>{
    result.textContent += "5";
})
num6.addEventListener('click',()=>{
    result.textContent += "6";
})
num7.addEventListener('click',()=>{
    result.textContent += "7";
})
num8.addEventListener('click',()=>{
    result.textContent += "8";
})
num9.addEventListener('click',()=>{
    result.textContent += "9";
})
eliminar.addEventListener('click',()=>{
    result.textContent = "";
    operaction.textContent = "";
})
borrar.addEventListener('click',()=>{
    result.textContent = result.textContent.toString().slice(0,-1);
})
sumar.addEventListener('click',()=>{
    n1 = result.textContent;
    operador = '+';
    result.textContent = '';
})
restar.addEventListener('click',()=>{
    n1 = result.textContent;
    operador = '-';
    result.textContent = '';
})
multiplicar.addEventListener('click',()=>{
    n1 = result.textContent;
    operador = '*';
    result.textContent = '';
})
dividir.addEventListener('click',()=>{
    n1 = result.textContent;
    operador = '/';
    result.textContent = '';
})
porciento.addEventListener('click',()=>{
    n1 = result.textContent;
    operador = '%';
    result.textContent = '';
});
igual.addEventListener('click',()=>{
    n2 = result.textContent;
    n1 = parseFloat(n1); 
    n2 = parseFloat(n2);

    switch(operador){
        case '+': suma(n1, n2, result); break;

        case '-': resta(n1, n2, result); break;

        case '*': multiplicacion(n1, n2, result); break;
        
        case '/': division(n1, n2, result); break;
        
        case '%': porcientaje(n1, n2, result); break;
    };
});

function suma(n1, n2, result){
    let resultado;
    resultado = n1 + n2;
    result.textContent = resultado;
    operaction.textContent = n1 + "+" + n2;
}

function resta(n1, n2, result){
    let resultado;
    resultado = n1 - n2;
    result.textContent = resultado;
    operaction.textContent = n1 + "-" + n2;
}

function multiplicacion(n1, n2, result){
    let resultado;
    resultado = n1 * n2;
    result.textContent = resultado;
    operaction.textContent = n1 + "*" + n2;
}

function division(n1, n2, result){
    let resultado;
    if(n1 == 0 && n2 != 0){
        resultado = result.textContent = '0';
    }
    if(n2 == 0){
        resultado = result.textContent = 'Error';
    }
    else{
        resultado = n1 / n2;
        result.textContent = resultado;
    }
    operaction.textContent = n1 + "/" + n2;
}

function porcientaje(n1, n2, result){
    let resultado;
    resultado = n1 * (n2/100);
    resultado = Math.round(resultado * 10) / 10;
    result.textContent = resultado;
    operaction.textContent = n1 + "%" + n2;
}