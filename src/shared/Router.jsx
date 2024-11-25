import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/Test";
import TestResult from "../pages/TestResult";
import TestResultList from "../pages/TestResultList";
// import ProtectedRoute from "../components/ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/test-result" element={<TestResult />} />
          <Route path="/test-resul-list" element={<TestResultList />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
