class InvalidCredentialsError extends Error {
  constructor () {
    super('Credenciais Inválidas')
    this.name = 'InvalidCredentialsError'
  }
}

export default InvalidCredentialsError
