import { useContext } from "react";
import AuthContext from "../context/AuthContext.js";

const Student = () => {
  const { name, email, age, cell } = useContext(AuthContext);
  return (
    <>
      <div className="m-[200px]">
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>Email : {email}</h3>
        <h4>Cell : {cell}</h4>
      </div>
    </>
  );
};

export default Student;
