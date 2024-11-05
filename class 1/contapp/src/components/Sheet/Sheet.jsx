import { useContext } from "react";
import StudentContext from "../../context/StudentsContext.js";

const Sheet = () => {
  const [student, setStudent] = useContext(StudentContext);

  return (
    <>
      {student.map((stu) => {
        return (
          <div key={stu.name}>
            <h3>{stu.name}</h3>
            <p>Grade: {stu.grade}</p>
          </div>
        );
      })}
    </>
  );
};

export default Sheet;
