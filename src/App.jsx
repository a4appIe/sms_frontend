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
import Client from "./client/Client";
import Login from "./client/components/login/Login";
import Teacher from "./teacher/Teacher";
import Student from "./student/Student";
import TeacherDashboard from "./teacher/components/dashboard/TeacherDashboard";
import TeacherSchedule from "./teacher/components/schedule/TeacherSchedule";
import TeacherAttendance from "./teacher/components/attendance/TeacherAttendance";
import TeacherExaminations from "./teacher/components/examinations/TeacherExaminations";
import TeacherNotice from "./teacher/components/notice/TeacherNotice";
import StudentDashboard from "./student/components/dashboard/StudentDashboard";
import StudentSchedule from "./student/components/schedule/StudentSchedule";
import StudentAttendance from "./student/components/attendance/StudentAttendance";
import StudentExaminations from "./student/components/examinations/StudentExaminations";
import StudentNotice from "./student/components/notice/StudentNotice";

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

        {/* CLIENT  */}

        <Route path="/" element={<Client />}>
          <Route path="login" element={<Login />}></Route>
        </Route>

        {/* TEACHER ROUTES  */}
        <Route path="teacher" element={<Teacher />}>
          <Route index element={<TeacherDashboard />}></Route>
          <Route path="schedule" element={<TeacherSchedule />}></Route>
          <Route path="attendance" element={<TeacherAttendance />}></Route>
          <Route path="examinations" element={<TeacherExaminations />}></Route>
          <Route path="notice" element={<TeacherNotice />}></Route>
        </Route>

        {/* STUDENT ROUTES  */}
        <Route path="student" element={<Student />}>
          <Route index element={<StudentDashboard />}></Route>
          <Route path="schedule" element={<StudentSchedule />}></Route>
          <Route path="attendance" element={<StudentAttendance />}></Route>
          <Route path="examinations" element={<StudentExaminations />}></Route>
          <Route path="notice" element={<StudentNotice />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
