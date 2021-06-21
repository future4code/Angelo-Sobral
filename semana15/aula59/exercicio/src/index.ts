export const performPurchase = (
  user:USER, 
  value:number): USER | undefined => {
    if (user.balance >= value) {
      return {
      ...user,
      balance: user.balance - value
      }
    }
    return undefined
}