class contato {
  nome: string
  numero?: number | undefined
  email: string
  id: number

  constructor(
    nome: string,
    numero: number | undefined,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default contato
