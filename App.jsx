import { createRoot } from "react-dom/client"
import SinglePageProfile from "./pages/SinglePageProfile"

const App = () => {
    return (
        <div>
            <SinglePageProfile />
            <h1>Ant Man</h1>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

