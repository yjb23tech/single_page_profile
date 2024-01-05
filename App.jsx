import { createRoot } from "react-dom/client"
import SinglePageProfile from "./pages/SinglePageProfile"

const App = () => {
    return (
        <div>
            <SinglePageProfile />
            <h1>Ant Man</h1>
            <h2>Warya</h2>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

