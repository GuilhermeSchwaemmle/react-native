class Person{
    name: string = ''
    constructor(name:string){
        this.name = name
    }
}

class Empregado extends Person{
    matricula: string = ''
    constructor(name:string, matricula:string){
        super(name)
        this.matricula = matricula
    }
}

let emp: Empregado
emp = new Empregado('jose', '123')
emp.matricula = '123'
console.log(emp);

emp.name = 'maria'
console.log(emp);
