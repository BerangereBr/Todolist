import Logout from "../components/Logout";
import Todolist from "../components/Todolist";

function Dashboard() {
    return (
        <>
            <h1>Bienvenue</h1>
            <Logout />
            <Todolist />
        </>
    )
}
export default Dashboard;