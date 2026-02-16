import { Routes, Route } from "react-router-dom";
import MusicRoute from "./pages/MusicRoute";

function App() {
    return (
        <Routes>
            <Route path="/*" element={<MusicRoute />} />
        </Routes>
    );
}

export default App;
