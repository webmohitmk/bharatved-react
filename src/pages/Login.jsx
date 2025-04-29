import React from 'react';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <h1 className="text-center">Login</h1>
        <form className="mt-4 m-auto" style={{maxWidth:"600px",}}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="#" className="d-block">Lost your password?</a>
          <p className="mt-2">Don't have an account? <a href="#">Register now!</a></p>
          <div className="mt-4">
            <button className="btn btn-outline-secondary btn-block">
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
