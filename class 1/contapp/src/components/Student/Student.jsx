import { useContext } from "react";
import UtilityContext from "../../context/UtilityContext.js";

const Student = () => {
  const { ageCal, title, subTitle } = useContext(UtilityContext);

  return (
    <>
      <div className="">
        <h2>Name : {title}</h2>
        <h3>Skill : {subTitle}</h3>
        <h4>age : {ageCal(1997)}</h4>
      </div>
    </>
  );
};

export default Student;
