import { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import RoleSelector from "../components/RoleSelector";
import { loginConfig } from "../services/loginConfig";
import { loginUser } from "../services/api/authApi";

import "../styles/Login.css";

function Login({ role = "patient" }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [identifier, setIdentifier] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const config = loginConfig[role];
  const RoleIcon = config.icon;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await loginUser({
        role,
        identifier,
        password,
      });

      console.log("Login successful:", response);

      /*
       * Temporary navigation.
       *
       * Later, after the backend response
       * is finalized, we can navigate based
       * on the authenticated user's role.
       */

      if (role === "patient") {
        navigate("/patient/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);

      setError(
        error.message ||
          "Unable to login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = () => {
    navigate("/register", {
      state: {
        role,
      },
    });
  };

  return (
    <AuthLayout>
      <div className="login-card">

        <RoleSelector activeRole={role} />

        <div className="login-header">
          <div className="login-icon">
            <RoleIcon size={24} />
          </div>

          <span className="role-label">
            {config.roleLabel}
          </span>

          <h2>{config.title}</h2>

          <p>{config.subtitle}</p>
        </div>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="form-group">
            <label htmlFor="identifier">
              {config.fieldLabel}
            </label>

            <div className="input-wrapper">
              <Mail size={19} />

              <input
                id="identifier"
                type="text"
                placeholder={config.placeholder}
                value={identifier}
                onChange={(event) => {
                  setIdentifier(event.target.value);
                  setError("");
                }}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="password-label">
              <label htmlFor="password">
                Password
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  navigate("/forgot-password")
                }
              >
                Forgot password?
              </button>
            </div>

            <div className="input-wrapper">
              <Lock size={19} />

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>
        </form>

        {config.registerText && (
          <div className="register-link">
            <span>
              {config.registerText}
            </span>

            <button
              type="button"
              onClick={handleRegistration}
            >
              {role === "patient"
                ? "Create an account"
                : "Register here"}
            </button>
          </div>
        )}

      </div>
    </AuthLayout>
  );
}

export default Login;