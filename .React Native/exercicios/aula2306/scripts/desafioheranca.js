"use strict";
class Reino {
    constructor(reino) {
        this.reino = '';
        this.reino = reino;
    }
}
class Classe extends Reino {
    constructor(reino, classe) {
        super(reino);
        this.classe = '';
        this.classe = classe;
    }
}
class Ordem extends Classe {
    constructor(reino, classe, ordem) {
        super(reino, classe);
        this.ordem = '';
        this.ordem = ordem;
    }
}
class Especie extends Ordem {
    constructor(reino, classe, ordem, especie) {
        super(reino, classe, ordem);
        this.especie = '';
        this.especie = especie;
    }
}
let gato;
gato = new Especie('Animalia', 'Mammalia (Mamífero)', 'Carnívoro', 'Felis catus (Gato)');
console.log(gato);
