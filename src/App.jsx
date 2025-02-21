/* eslint-disable no-unused-vars */
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import School from "./school/School";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./school/dashboard/Dashboard";
import Attendance from "./school/attendance/Attendance";
import Class from "./school/class/Class";
import Examinations from "./school/examinations/Examinations";
import Notice from "./school/notice/Notice";
import Schedule from "./school/schedule/Schedule";
import Students from "./school/students/Students";
import Subjects from "./school/subjects/Subjects";
import Teachers from "./school/teachers/Teachers";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="school" element={<School />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="attendance" element={<Attendance />}></Route>
          <Route path="class" element={<Class />}></Route>
          <Route path="examinations" element={<Examinations />}></Route>
          <Route path="notice" element={<Notice />}></Route>
          <Route path="schedule" element={<Schedule />}></Route>
          <Route path="students" element={<Students />}></Route>
          <Route path="subjects" element={<Subjects />}></Route>
          <Route path="teachers" element={<Teachers />}></Route>
        </Route>

        <Route path="/" element={<Navbar />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
