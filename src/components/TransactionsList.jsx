import { useState } from "react"
import { Link } from "react-router"

const TransactionsList = ({transactions, deleteTransaction}) => {

    const [filteredTransactions, setFilteredTransactions] = useState(transactions)

    const [category, setCategory] = useState("")

    const filterType = (filterBy) => {
        if (filterBy === "all") {
            setFilteredTransactions(transactions)
        } else {
            const tempTransactions = transactions.filter((transaction) => {
                return transaction.type === filterBy
            })
            setFilteredTransactions(tempTransactions)
        }
    }

    const filterCategory = (filterBy) => {
        if (filterBy === "") {
            setFilteredTransactions(transactions)
        } else {
            const tempTransactions = transactions.filter((transaction) => {
                return transaction.category === filterBy
            })
            setFilteredTransactions(tempTransactions)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setCategory(category)
        filterCategory(category)
    }

  return (
    <>
        <h2>Transaction List</h2>

        <h3>Filter By Type: </h3>
        <button onClick={() => filterType("expense")}>Expenses</button>
        <button onClick={() => filterType("income")}>Income</button>
        <button onClick={() => filterType("all")}>All</button>

        <h3>Filter by Category: </h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Category: </label>
                <input 
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                /> 
            <button>Filter</button>
            </div>
        </form>
        
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