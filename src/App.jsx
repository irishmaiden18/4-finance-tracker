import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import TransactionsList from './components/TransactionsList'
import NewTransaction from './components/NewTransaction'
import { useState } from 'react'

function App() {
  
  const [transactions, setTransactions] = useState([])

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction])
  }

  const deleteTransaction = (id) => {
    console.log(id)
    console.log(`transactions: ${transactions}`)
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id)
    console.log(updatedTransactions)

    setTransactions(updatedTransactions)
  }

  return (
    <>
      <h1>Finance Tracker</h1>

      <Navbar/>

      {/* Routes allow us to add different individual Route elements so we can create different pages in our React app */}
      {/* each Route takes in a url string path and the element we want to display when our url matches the path */}
      <Routes>
        <Route path="/" element={<Dashboard transactions={transactions}/>}/>
        <Route path="/transactions" element={<TransactionsList transactions={transactions} deleteTransaction={deleteTransaction}/>}/>
        <Route path="/transactions/new" element={<NewTransaction addTransaction={addTransaction}/>}/>
        {/* use * for your catch all route */}
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>


    </>
  )
}

export default App
