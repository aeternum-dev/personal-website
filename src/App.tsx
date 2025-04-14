import Header from "./components/header"
import AppRoutes from "./routes/routes"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh ">
      <Header/>
      <AppRoutes />
    </div>
  )
}

export default App
