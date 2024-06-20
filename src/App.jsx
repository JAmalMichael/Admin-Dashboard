//importing components
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

//importing icons
import 'remixicon/fonts/remixicon.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Header />
    <SideBar />
    <Main />
    </div>
  )
}

export default App
