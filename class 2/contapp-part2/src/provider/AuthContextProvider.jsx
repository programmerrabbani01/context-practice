import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext.js";

// create utility context provider function

const AuthContextProvider = ({ children }) => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    cell: "0123456789",
  };

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

// Define prop types
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// export utility context provider function

export default AuthContextProvider;
