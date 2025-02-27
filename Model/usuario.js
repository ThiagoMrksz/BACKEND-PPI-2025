import UsuarioDB from "../DataBase/usuarioDB.js";

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
    //formato JSON de um objeto
    toJSON(){
        return {
            "cpf": this.#cpf,
            "nome": this.#nome,
            "dataNasc": this.#dataNasc,
            "cidade": this.#cidade,
            "endereco": this.#endereco,
            "bairro": this.#bairro,
            "telefone": this.#telefone,
            "email": this.#email,
        }
    };

    async gravar(){
        const usuDB = new UsuarioDB
        usuDB.gravar(this);
    };

    async alterar(){ 
        usuDB = new UsuarioDB;
        usuDB.alterar(this);

    };

    async excluir(){
        const usuDB = new UsuarioDB();
        usuDB.excluir(this);

    };

    async consultar() {
        const usuDB = new UsuarioDB();
        return await usuDB.consultar(this);

    }
    

}