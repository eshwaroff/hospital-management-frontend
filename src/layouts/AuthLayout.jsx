import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* Left Section */}
        <section className="auth-brand">
          <div className="brand-content">

            <div className="brand-logo">
              <span className="brand-logo-icon">+</span>
              <span>CareConnect</span>
            </div>

            <div className="brand-message">
              <h1>
                Healthcare,
                <br />
                <span>connected.</span>
              </h1>

              <p>
                A smarter way to connect patients, doctors
                and hospital staff in one secure platform.
              </p>
            </div>

            <div className="brand-features">
              <div>
                <span>✓</span>
                Secure access
              </div>

              <div>
                <span>✓</span>
                Easy to use
              </div>

              <div>
                <span>✓</span>
                Connected care
              </div>
            </div>

          </div>
        </section>

        {/* Right Section */}
        <section className="auth-form-section">
          {children}
        </section>

      </div>
    </div>
  );
}

export default AuthLayout;