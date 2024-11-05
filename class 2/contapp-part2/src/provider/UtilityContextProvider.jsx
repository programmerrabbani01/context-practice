import { toast } from "react-toastify";
import UtilityContext from "../context/UtilityContext.js";
import { useState } from "react";

import PropTypes from "prop-types";

// create utility context provider function

const UtilityContextProvider = ({ children }) => {
  const notify = () => toast.success("Wow so easy!");

  const [load, setLoad] = useState(0);

  //

  const handleAction = () => {
    setLoad(100); // Simulating a long-running task
    setTimeout(notify, 2000); // After 2 seconds, notify the user
  };
  return (
    <UtilityContext.Provider value={{ load, setLoad, handleAction }}>
      {children}
    </UtilityContext.Provider>
  );
};

// Define prop types
UtilityContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// export utility context provider function

export default UtilityContextProvider;
