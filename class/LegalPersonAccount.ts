import { DioAccount } from "./DioAccount"

export class LegalPersonAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (bal: number): void => {
    if (this.validateStatus()) {
      this.balance += bal + 10
      console.log('Voce depositou')
    }
  }
}