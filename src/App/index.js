import { AppNavigation } from "./Components/Common";
import { Home } from "./Containers";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    // <BrowserRouter basename="/">
    //   <Routes/>
    // </BrowserRouter>
    <>
      <AppNavigation/>
      <Home/>
    </>
  )
}
