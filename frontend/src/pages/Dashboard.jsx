import Logout from "../components/Logout";
import Todolist from "../components/Todolist";

function Dashboard() {
    return (
        <div className="bg-red-200">
            <h1>Bienvenue</h1>
            <Logout />
            <Todolist />
        </div>
    )
}
export default Dashboard;