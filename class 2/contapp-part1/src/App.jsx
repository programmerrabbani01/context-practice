import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import UtilityContext from "./context/UtilityContext.js";
import { useContext } from "react";
import Student from "./components/Student.jsx";

function App() {
  const { load, setLoad, handleAction } = useContext(UtilityContext);

  return (
    <>
      <button className="btn btn-primary" onClick={handleAction}>
        Notify!
      </button>
      <LoadingBar
        color="#f11946"
        progress={load}
        onLoaderFinished={() => setLoad(0)}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover={false}
        theme="dark"
      />
      <Student />
    </>
  );
}

export default App;
