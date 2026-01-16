import '../styles/Loading.css';

function loading() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Chargement...</p>
        </div>
    );
}

export default loading;