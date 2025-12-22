import Header from "../components/header";
import Logout from "../components/Logout";
import Todolist from "../components/Todolist";
import "../styles/dashboard.scss";

function Dashboard() {
    return (
        <>
            <Header />
            <main className="dashboard-container">
                <div>
                    <Logout />
                    <Todolist />
                </div>
            </main>
        </>
    )
}
export default Dashboard;