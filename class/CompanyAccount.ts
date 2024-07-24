import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (val: number): void => {
    if (this.validateStatus()) {
      this.balance += val
      console.log('Voce pegou um empréstimo')
    }
  }
}
