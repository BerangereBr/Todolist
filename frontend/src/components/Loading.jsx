import '../styles/loading.scss';

function loading() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Chargement...</p>
        </div>
    );
}

export default loading;