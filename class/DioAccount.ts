export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (bal: number): void => {
    if (this.validateStatus()) {
      this.balance += bal
      console.log('Voce depositou')
    }
  }

  withdraw = (bal: number): void => {
    if (this.validateStatus()) {
      let result = this.balance - bal
      if(result >= 0) {
        this.balance -= bal
        console.log('Voce sacou')
      } else {
        console.log('Saldo insuficiente')
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
