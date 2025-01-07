import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Result from "./pages/Result";
import { GameProvider } from "./context/GameContext.jsx";
import './style.css';

function App() {
    return (
        <GameProvider>
            <BrowserRouter>
                <h1>Jeu de dés</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/description" element={<Description />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </BrowserRouter>
        </GameProvider>
    );
}

export default App;
