import Navbar from "../components/Navbar";
import ProductList from "../components/ListProducts";

const Dashboard = () => {
    return (
        <div>
            <Navbar/>
            <h1>Dashboard</h1>
            <p>Inventory Management Application</p>
            <ProductList></ProductList>
        </div>
    );
}

export default Dashboard;
