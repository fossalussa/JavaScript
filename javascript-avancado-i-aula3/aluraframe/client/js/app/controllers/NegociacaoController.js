class NegociacaoController {
    
    constructor () {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    };

    adiciona (event) {
        event.preventDefault();

        // let data = new Date(...this._inputData
        //     .value.split('-')
        //     .map(function(item, indice) {
        //         return item - indice % 2;
        //     }));

        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

        // let dataString = '17-05-2016';
        // let data = new Date(dataString.split('-').reverse().join('/'));
        // console.log(data);

        // let dataString = '17-05-2016';
        // dataString = dataString.split('-').reverse().join('/');
        // let data = new Date(dataString);
        // console.log(data);

        // console.log(typeof(this._inputData.value));
        // console.log(this._inputData.value);

        // let data = new Date(this._inputData.value.split('-'));
        // console.log(data);

        // let data = new Date(this._inputData.value.split('-'));
        // console.log(data);

        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );
        // console.log(negociacao);
    

        // console.log(this._inputData.value);
        // console.log(this._inputQuantidade.value);
        // console.log(this._inputValor.value);
        
    };
};