document.addEventListener('DOMContentLoaded', function() {
    const resultado = document.querySelector('p');
    const botao = document.querySelector('button');

    botao.addEventListener('click', function () {
        const s1 = parseFloat(document.getElementById('soma1').value);
        const s2 = parseFloat(document.getElementById('soma2').value);
        const soma = sum(s1, s2);
        resultado.innerText = `O resultado é ${soma}`
    });

    function sum(a, b) {
        return a + b;
    }
});
