import React from "react";
import "./AuthLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <>
      {/* AUTH CONTENT */}
      <div className="auth-wrapper">
        <div className="auth-container">
          <div className="auth-image"></div>
          <div className="auth-form">{children}</div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="auth-footer">
        <div className="footer-links">
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>
        </div>

        <div className="footer-bottom">
          <span>English</span>
          <span>© 2026 Instagram from Meta</span>
        </div>
      </footer>
    </>
  );
};

export default AuthLayout;
