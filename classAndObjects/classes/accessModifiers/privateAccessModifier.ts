class BankAccount {
    private balance: number; 
    constructor(initialBalance: number) {
       this.balance = initialBalance;
    } 
    private calculateInterest(): number {
       const interestRate = 0.05;
       return this.balance * interestRate;
    } 
 }  
 // Creating an instance of the BankAccount class
 const account = new BankAccount(1000); 
 
 // Attempting to access private members
//  console.log(account.balance); 
//  console.log(account.calculateInterest());