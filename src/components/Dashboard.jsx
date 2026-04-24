
const Dashboard = ({transactions}) => {

    const total = (array) => {
        let sum = 0
        for(let i = 0; i < array.length; i++) {
            sum += Number(array[i].amount)
            console.log(sum)
        }
        return sum
    }

    const expenses = transactions.filter((transaction) => {
        return transaction.type === "expense"
    })
    // console.log(expenses)

    const totalExpenses = total(expenses)

    const income = transactions.filter((transaction) => {
        return transaction.type === "income"
    })

    const totalIncome = total(income)
    
    let balance = 0
    balance = totalIncome - totalExpenses

  return (
    <>
        <h2>Dashboard</h2>
        <h3>Summary</h3>
        <p><b>Total Income:</b> {totalIncome}</p>
        <p><b>Total Expenses:</b> {totalExpenses}</p>
        <p><b>Balance:</b> {balance}</p>
    </>
  )
}

export default Dashboard