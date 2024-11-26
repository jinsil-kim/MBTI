import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/Test";
import TestResult from "../pages/TestResult";
import TestResultList from "../pages/TestResultList";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/headerNavbar/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<TestResult />} />
            <Route path="/resul-list" element={<TestResultList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
