import { useState } from "react"
import { useNavigate } from "react-router"

const NewTransaction = ({addTransaction}) => {

    const [formData, setFormData] = useState({
        id: "",
        type: "",
        amount: 0,
        category: "",
        note: ""
    })



    // custom hook that lets us programatically navigate through our routes
    const navigate = useNavigate()



    // function to track the changes to the fields
    const handleChange = (event) => {

        // destructure name and value from target to get the data so we can refer to them as name and value
        const {name, value} = event.target

        // create an updatedFormData variable to hold the existing form data as well as the change
        const updatedFormData = {
            ...formData,
            [name]: value
        }

        // set formData to the updatedFormData
        setFormData(updatedFormData)
    }


    // function to handle data submission
    const handleSubmit = (event) => {

        // prevent the page refresh
        event.preventDefault()

        // create a new transaction and populate it with the data from formData we get from the form
        const newTransaction = {
            // use the date as a unique ID
            id: Date.now(),
            type: formData.type,
            amount: formData.amount,
            category: formData.category,
            note: formData.note
        }

        // add new transaction to the transaction list
        addTransaction(newTransaction)

        // call navigate with /transactions to bring us to the transactions list page
        navigate("/transactions")
    }



    return (
        <>
            <h2>Add A New Transaction</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Select Transaction Type </label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="">Select an option</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div>
                    <label>Enter An Amount: </label>
                    <input 
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Enter A Category: </label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Enter A Note: </label>
                    <input
                        type="text"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                    />
                </div>
                <button>Add Transaction</button>
            </form>
        </>
    )
}

export default NewTransaction