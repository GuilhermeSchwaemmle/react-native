interface ICRUD {
    salvar(): boolean
    update(id: number): boolean
    delete(id: number): void
    consultar():string[]
    consultar(id:number):string
}
