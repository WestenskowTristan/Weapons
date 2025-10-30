import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PageContainer from "./components/common/PageContainer";
import SignUp from "./Pages/SignUp";
import Navigation from "./components/common/Navigation";

const App = () => {
  const location = useLocation();
  const hideNavPages = ["/login", "/sign-up"];
  const showNav = !hideNavPages.includes(location.pathname);

  return (
    <>
      <PageContainer>
        {showNav && <Navigation />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </PageContainer>
    </>
  );
};

export default App;
