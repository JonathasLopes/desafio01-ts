import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'
import { LegalPersonAccount } from './class/LegalPersonAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
console.log(companyAccount)
const legalPersonAccount: LegalPersonAccount = new LegalPersonAccount("Jonathas", 8)
legalPersonAccount.deposit(100)
console.log(legalPersonAccount)