import { Link } from "react-router"

const Navbar = () => {
  return (
    <>
        <nav className="navbar">

            <div className="nav-links">

                <Link to="/">Dashboard</Link>
                <Link to="/transactions">Transactions List</Link>
                <Link to="/transactions/new">New Transaction</Link>

            </div>

        </nav>
    </>
  )
}

export default Navbar