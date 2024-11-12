//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.

var cus = {};

//2. Add the required properties to your object.

//3. Add your first method and test it. Remember, the methods will change the properties of the object.



cus = {lastName:"Smith",
    branchNumber:"123",
    accountBalance:500.25,
    interestRate:1.03,
    multipleAccounts: false,
    method1:function makeDeposit(add){
        this.accountBalance = this.accountBalance + add;
    
        return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2)},

    method2:function makeWithdrawal(withdraw){
   
        this.accountBalance = this.accountBalance - withdraw;
        return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2)},

    method3:function addInterest(){
        if(this.multipleAccounts == true){
             var nowinterestRate = this.interestRate + 0.005
             this.accountBalance = this.accountBalance * nowinterestRate
             return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);

        }else{
            this.accountBalance = this.accountBalance * this.interestRate;
            return "Thank you, your current balance is now $" + this.accountBalance.toFixed(2);
        } 
    }
}



//4. Add your second method and test it.



//5. Create the required output to complete steps 6-10 of the lab.

console.log(cus.accountBalance);

console.log(cus.method1(200));

console.log(cus.accountBalance);

console.log(cus.method2(75));

console.log(cus.accountBalance);

//6. Once everything is working, tackle the Stretch Goal!


console.log(cus.method3());


