import Usuario from "../Model/usuario.js";
import conectar from "./conexao.js";
export default class UsuarioDB{

    constructor(){
        this.init();
    }
    //Nós estaremos nos comunicando com uma aplicação
    //externa (banco de dados)
    //Portanto nossos metodos serão assícronos
    //Significando que a resposta não tem previsão de quando vai chegar
    //A resposta depende do banco de dados
    async init(){
       try {
        const conexao = await conectar();
        const sql = `CREATE TABLE IF NOT EXISTS usuario (
        cpf VARCHAR(14) NOT NULL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        dataNasc VARCHAR(10) NOT NULL,
        cidade VARCHAR(100) NOT NULL,
        endereco VARCHAR(150) NOT NULL,
        bairro VARCHAR(100) NOT NULL,
        telefone VARCHAR(15) NOT NULL,
        email VARCHAR(100) NOT NULL
        )`;

        await conexao.execute(sql);
    } catch ( erro ){
        console.log("Erro ao iniciar a tabela cliente:" + erro);
    }

    
    }

    async gravar(usuario){
        if (usuario instanceof Usuario) {
            const conexao = await conectar();
            const sql = `INSERT INTO usuario (cpf, nome, dataNasc, cidade, endereco, bairro, telefone, email)
                        VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
            const parametros = [
                usuario.cpf,
                usuario.nome,
                usuario.dataNasc,
                usuario.cidade,
                usuario.endereco,
                usuario.bairro,
                usuario.telefone,
                usuario.email
            ];

            await conexao.execute(sql, parametros);
            await conexao.release(); //liberar a conexão de volta para o pool

        }
    }
    async alterar(usuario){
        if (usuario instanceof Usuario){
            const conexao = await conectar();
            const sql = `UPDATE usuario SET WHERE cpf = ?, nome = ?, dataNasc = ?, cidade = ?, endereco = ?, bairro = ?, telefone = ?, email = ?, `;
            const parametros = [
                usuario.cpf,
                usuario.nome,
                usuario.dataNasc,
                usuario.cidade,
                usuario.endereco,
                usuario.bairro,
                usuario.telefone,
                usuario.email
            ];
            await conexao.execute(sql, parametros)
            await conexao.release()
        }
    }
    async excluir(usuario){
        if (usuario instanceof Usuario){
            const conexao = await conectar();
            const sql = `DELETE FROM usuario WHERE cpf = ?`;
            const parametros = [usuario.cpf]
            await conexao.execute(sql, parametros)
            await conexao.release()
        }
    }
    async consultar(){
        const conexao = await conectar();
        const sql = `SELECT * FROM usuario ORDER BY nome`;
        const [registros, campos] = await conexao.execute(sql);
        await conexao.release();
        let listaUsuarios = [];
        for (const registro of registros){
            const usuario = new Usuario(registro.cpf,
                registro.nome,
                registro.dataNasc,
                registro.cidade,
                registro.endereco,
                registro.bairro,
                registro.telefone,
                registro.email
            );
        listaUsuarios.push(usuario);
        }
        return listaUsuarios;

    }
}