import "./LoginForm.css";
import { Icon } from "@iconify/react";
import getErrorMessage from "../../utils/getErrorMessage";
import { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function LoginForm({
  register,
  callback,
  user,
  loading,
  error,
  notification,
}) {
  const [err, setErr] = useState(error);

  useEffect(() => {
    let timeoutId;

    if (err) {
      timeoutId = setTimeout(() => {
        setErr(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [err]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErr(null);

    const formdata = Object.fromEntries(new FormData(e.target).entries());

    if (
      formdata.confirmedPassword &&
      formdata.password !== formdata.confirmedPassword
    ) {
      return setErr({
        code: "auth/password-mismatch",
      });
    }

    callback(formdata);
  };

  return (
    <main className="sign p-3 mx-auto">
      <h1 className="pb-2 text-center">
        {register ? "Register an Account" : "Login to your Account"}
      </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">
          Enter Your Email Address
        </label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          required
        />

        <br />

        <label htmlFor="password" className="form-label">
          {register ? "Choose a Strong Password" : "Enter Your Password"}
        </label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="password"
          autoComplete={register ? "new-password" : "current-password"}
          required
        />
        {!register && (
          <button className="btn btn-link px-0">Forgot Password?</button>
        )}

        {register && (
          <>
            <br />
            <label htmlFor="confirmedPassword" className="form-label">
              Confirm Password
            </label>
            <input
              className="form-control"
              type="password"
              name="confirmedPassword"
              id="confirmedPassword"
              autoComplete="new-password"
              required
            />
          </>
        )}

        <br />

        <button className="px-5 btn btn-primary d-block mx-auto" type="submit">
          {loading ? "Loading..." : register ? "Register" : "Login"}
        </button>

        {err && (
          <p className="pt-3 text-danger text-center">{getErrorMessage(err)}</p>
        )}

        {notification && (
          <p className="pt-3 text-success text-center">{notification}</p>
        )}
      </form>

      <div className="d-flex gap-3 my-4 align-items-center">
        <hr className="flex-grow-1 m-0" />
        <span>Or,</span>
        <hr className="flex-grow-1 m-0" />
      </div>

      <button className="px-5 btn btn-primary d-flex gap-2 mx-auto align-items-center">
        <Icon icon="flat-color-icons:google"></Icon>
        Sign in Using Google
      </button>
    </main>
  );
}
