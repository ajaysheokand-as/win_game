import { TopNavbar } from "./components/navbar/TopNavbar.js";
import { ResultTable } from "./components/table/ResultTable.js";
import { Index } from "./pages/winGame/Index.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from "./components/footer/Footer.js";

function App() {
  return (
    <div>
      <TopNavbar />
      {/* <Register/> */}
      {/* <Login/> */}
      <Index />
      <ResultTable />
      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
}

export default App;
