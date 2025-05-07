import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import Mainsection from "./components/Mainsection"
import Recommend from "./components/Recommend"
import Topics from "./components/Topics"
import Mostpopular from "./components/Mostpopular"
import Footer from "./components/Footer"


import { Fragment } from "react"

function App()
{
    return(
        <>
        <Navbar></Navbar>
        <Categories></Categories>
        <Mainsection></Mainsection>
        <Recommend></Recommend>
        <Topics></Topics>
        <Mostpopular></Mostpopular>
        <Recommend></Recommend>
        <Footer></Footer>
        </>
    )
}

export default App