// Programação orientada a objetos
export default class Usuario {

    // Atributos do usuario
    // Definição de atributos privados e seus respectivos métodos de acesso públicos
    // # é utilizado pelo javascript para definir que um atributo é privado
    #cpf;
    #nome;
    #dataNasc;
    #cidade;
    #endereco;
    #bairro;
    #telefone;
    #email;

    constructor(cpf, nome, dataNasc, cidade, endereco, bairro, telefone, email) {
        this.#cpf = cpf
        this.#nome = nome
        this.#dataNasc = dataNasc
        this.#cidade = cidade
        this.#endereco = endereco
        this.#bairro = bairro
        this.#telefone = telefone
        this.#email = email
        

    };

    // sets e gets

    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    };

    get cpf() {
        return this.#cpf; // this se refere ao próprio objeto
    };

    set nome(novoNome) {
        this.#nome = novoNome;
    };

    get nome() {
        return this.#nome;
    };

    set dataNasc(novaDataNasc) {
        this.#dataNasc = novaDataNasc;
    };

    get dataNasc() {
        return this.#dataNasc;
    };

    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    };

    get cidade() {
        return this.#cidade;
    };

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    };

    get endereco() {
        return this.#endereco;
    };

    set bairro(novoBairro) {
        this.#bairro = novoBairro;
    };

    get bairro() {
        return this.#bairro;
    };

    set telefone(novoTelefone) {
        this.#telefone = novoTelefone;
    };

    get telefone() {
        return this.#telefone;
    };

    set email(novoEmail) {
        this.#email = novoEmail;
    };

    get email() {
        return this.#email;
    };
}