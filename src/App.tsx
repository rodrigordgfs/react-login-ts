import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProtectedLayout from "./components/ProtectedLayout";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedLayout>
                <h2>Ola esse é o componente de Profile</h2>
              </ProtectedLayout>
            }
          />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
