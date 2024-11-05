import { useState } from "react";
import Result from "./components/Result/Result.jsx";
import Student from "./components/Student/Student.jsx";
import Teacher from "./components/Teacher/Teacher.jsx";
import StudentContext from "./context/StudentsContext.js";
import UtilityContext from "./context/UtilityContext.js";

function App() {
  const [student, setStudent] = useState([
    {
      name: "John",
      grade: 95,
    },
    {
      name: "Jane",
      grade: 88,
    },
    {
      name: "Mike",
      grade: 92,
    },
  ]);

  return (
    <>
      <div className="mainContent">
        <UtilityContext.Provider
          value={{
            title: "Rabbani",
            subTitle: "MERN Stuck",
            ageCal: (year) => {
              return new Date().getFullYear() - year;
            },
          }}
        >
          <StudentContext.Provider value={[student, setStudent]}>
            <div className="stu">
              <Student />
            </div>
            <div className="tea">
              <Teacher />
            </div>
            <div className="res">
              <Result />
            </div>
          </StudentContext.Provider>
        </UtilityContext.Provider>
      </div>
    </>
  );
}

export default App;
