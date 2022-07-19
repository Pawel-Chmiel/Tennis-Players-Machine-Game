class Wallet {
    constructor(money) {
     let _money = money;
     
     //getting the new wallet value
     
     this.getWalletValue = () => _money;
   
     //Check if user has enough money to make it bid   
   
     this.checkCanPlay = value => {
      if (_money >= value) return true;
      return false;
     }
   
     this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
       if (type === "+") {
        return _money += value;
       } else if (type === "-") {
        return _money -= value;
       } else {
        throw new Error("nieprawidłowy typ działania")
       }
      } else {
       throw new Error("nieprawdidłowa liczba")
      }
     }   
    }   
   }
   
