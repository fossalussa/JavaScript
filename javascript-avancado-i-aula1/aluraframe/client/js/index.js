var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit',function(event){

    event.preventDefault();

    var trTabela = document.createElement('tr');

    campos.forEach(function(campo) {
        var tdTabela = document.createElement('td');
        tdTabela.textContent = campo.value;
        trTabela.appendChild(tdTabela);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    trTabela.appendChild(tdVolume);

    tbody.appendChild(trTabela);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0.0;

    campos[0].focus();

});