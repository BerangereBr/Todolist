import Header from "../components/header";
import Todolist from "../components/Todolist";
import "../styles/dashboard.scss";

function Dashboard() {
    return (
        <>
            <Header />
            <main className="dashboard-container">
                <div>
                    <Todolist />
                </div>
            </main>
        </>
    )
}
export default Dashboard;