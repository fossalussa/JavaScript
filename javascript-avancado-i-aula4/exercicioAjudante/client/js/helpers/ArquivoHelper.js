class ArquivoHelper {

    constructor () {
        throw new Error('Não é permitido instanciar essa Classe!');
    }

    static cria(informacao) {
        return new Arquivo(...informacao.toUpperCase().split('/'));
    };
};
