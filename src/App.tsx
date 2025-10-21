import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PageContainer from "./components/common/PageContainer";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <Router>
      <PageContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </PageContainer>
    </Router>
  );
};

export default App;
