import { useState } from "react";
import {
  ArrowLeft,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

import "../styles/ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setError("Enter a valid email address.");
      return;
    }

    // Temporary frontend-only response
    setSubmitted(true);
  };

  return (
    <AuthLayout>
      <div className="forgot-card">

        {/* Back to Login */}
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/login/patient")}
        >
          <ArrowLeft size={17} />
          Back to login
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="forgot-header">

              <div className="forgot-icon">
                <ShieldCheck size={24} />
              </div>

              <span className="forgot-label">
                Account recovery
              </span>

              <h2>Forgot your password?</h2>

              <p>
                Enter the email address associated
                with your account and we'll help you
                reset your password.
              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="forgot-form"
            >

              <div className="form-group">
                <label htmlFor="recoveryEmail">
                  Email address
                </label>

                <div className="input-wrapper">
                  <Mail size={19} />

                  <input
                    id="recoveryEmail"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setError("");
                    }}
                  />
                </div>

                {error && (
                  <span className="field-error">
                    {error}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="reset-button"
              >
                Send Reset Link
              </button>

            </form>
          </>
        ) : (
          /* Success */
          <div className="forgot-success">

            <div className="success-icon">
              ✓
            </div>

            <h2>Check your email</h2>

            <p>
              If an account exists for
              <strong> {email}</strong>, we've sent
              instructions to reset your password.
            </p>

            <button
              type="button"
              className="reset-button"
              onClick={() =>
                navigate("/login/patient")
              }
            >
              Back to Login
            </button>

          </div>
        )}

      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;