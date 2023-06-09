import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, AboutPage, Navbar, UserProvider } from "./index";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* <Route path="/*" element={<HomePage/>}/> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};
