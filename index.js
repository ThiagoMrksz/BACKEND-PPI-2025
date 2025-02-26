import Usuario from "./Model/usuario.js";

var usuario = new Usuario("999.999.999.99",
    "Nome Exemplo Silva",
    "10/10/1000",
    "Cidade1",
    "Endereço1",
    "Bairro1",
    "(18)9999-9999",
    "1@email.com",
);

usuario.telefone="(18)8888-8888"

console.log(usuario);
console.log("O telefone desse usuario é: " + usuario.telefone);