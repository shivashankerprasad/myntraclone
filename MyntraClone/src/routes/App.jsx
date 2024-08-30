import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchItems from "../components/FetchItems" 
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"

function App() {
  const spinnerStatus= useSelector(store =>store.fetchStatus )

  return (
    <>
    <Header/>
    <FetchItems/>
    {spinnerStatus.fetchingStatus ? <LoadingSpinner/>: <Outlet/>}
    
    <Footer/>
      
    </>
  )
}

export default App
