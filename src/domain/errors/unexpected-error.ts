class UnexpectedError extends Error {
  constructor () {
    super('Algo de Errado, tente de novo')
    this.name = 'UnexpectedError'
  }
}

export default UnexpectedError
