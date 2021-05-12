import "./App.css";
import Routes from "./Routes/Routes";
import AuthProvider from "./components/Context/AuthContext";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </div>
    );
}

export default App;
