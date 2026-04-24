import { useState } from "react"
import { Link } from "react-router"

const TransactionsList = ({transactions, deleteTransaction}) => {

    const [category, setCategory] = useState("")
    const [type, setType] = useState("")

    const getFilteredTransactions = () => {
        if (category !== "") {
            return filterCategory(category)
        } else if (type !== "") {
            return filterType(type)
        } else {
            return transactions
        }
    }

    const filterType = (type) => {
        
        if ((type === "") || (type === "all")) {
            return transactions
        } else {
            const tempTransactions = transactions.filter((transaction) => {
                return transaction.type === type
                console.log()
            })
            return tempTransactions
        }
    }

    const filterCategory = (filterBy) => {
        
        if (filterBy === "") {
            return transactions
        } else {
            const tempTransactions = transactions.filter((transaction) => {
                return transaction.category === filterBy
            })
            return tempTransactions
        }
    }

    let filteredTransactions = getFilteredTransactions()

  return (
    <>
        <h2>Transaction List</h2>
        <hr/>
        <h3>Filter Transactions:</h3>
        <form>
            <div>
                <label>Enter Category to Filter By: </label>
                <input 
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
            </div>
            <h4>OR:</h4>
            <div>
                <label>Select Type to Filter By: </label>
                <select
                    name="type"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                    <option value="all">All</option>
                </select>
            </div>
        </form>
        <hr/>
        <ol>
            {filteredTransactions.map((transaction) => (
                <li key={transaction.id}>
                    <p><button onClick={() => deleteTransaction(transaction.id)}>Delete</button> {transaction.type} - {transaction.amount} - {transaction.category} - {transaction.note}</p>
                </li>
            ))}
        </ol>

        <Link to="/transactions/new">
            <button>Add New Transaction</button>
        </Link>
    </>
  )
}

export default TransactionsList