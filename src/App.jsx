import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login/patient"
              replace
            />
          }
        />

        {/* Login Routes */}
        <Route
          path="/login/patient"
          element={<Login role="patient" />}
        />

        <Route
          path="/login/doctor"
          element={<Login role="doctor" />}
        />

        <Route
          path="/login/admin"
          element={<Login role="admin" />}
        />

        <Route
          path="/login/billing"
          element={<Login role="billing" />}
        />

        {/* Registration */}
        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;