import { TopNavbar } from "./components/navbar/TopNavbar.js";
import { Index } from "./pages/winGame/Index.js";
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "./components/footer/Footer.js";

function App() {
  return (
    <div style={{maxWidth: "500px", marginLeft:"auto", marginRight:"auto"}}>
      <TopNavbar />
      {/* <Register/> */}
      {/* <Login/> */}
      <Index />
      {/* <ResultTable /> */}
      <Footer/>
    </div>
  );
}

export default App;
