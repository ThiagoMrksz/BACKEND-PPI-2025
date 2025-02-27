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

// gravar o usuario no banco de dados
// resolvendo os métodos assíncronos
/*  usuario.gravar().then(() => {
    console.log("Usuario gravado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao gravar o usuario: " + erro);
}); 
  */
usuario.excluir().then(() => {
    console.log("Cliente excluido com sucesso!");
}).catch((erro) => {
    console.log("Erro ao excluir o cliente: " + erro);
}) 

//recuperação da informação a partir do banco de dados
/* usuario.consultar().then((listaUsuarios) => {
    for (const usuario of listaUsuarios) {
        console.log(usuario.toJSON());
    }
}); */