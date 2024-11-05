import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

function App() {
  const notify = () => toast.success("Wow so easy!");

  const [load, setLoad] = useState(0);

  //

  const handleAction = () => {
    setLoad(100); // Simulating a long-running task
    setTimeout(notify, 2000); // After 2 seconds, notify the user
  };

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
    </>
  );
}

export default App;
