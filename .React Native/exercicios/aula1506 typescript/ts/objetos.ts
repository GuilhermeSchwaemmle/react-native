interface IFornecedor {
    id: number
    nome: string
    email: string
    fone: string
    cpf: (string | number)
}

var fornecedor: IFornecedor = {id:0,nome:'',email:'',fone:'',cpf:''}

fornecedor.id = 10
fornecedor.nome = 'Antartica'
fornecedor.email = 'pinguim@gmail.com'
fornecedor.fone = '(047) 99699-4643'
fornecedor.cpf = '105.598.719-37'

console.log(fornecedor);
