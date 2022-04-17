import { Icon } from "@iconify/react";
import "./LoginForm.css";

export default function LoginForm({ register }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = Object.fromEntries(new FormData(e.target).entries());
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
            <label htmlFor="passwordConfirm" className="form-label">
              Confirm Password
            </label>
            <input
              className="form-control"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              autoComplete="new-password"
              required
            />
          </>
        )}

        <br />

        <button className="px-5 btn btn-primary d-block mx-auto" type="submit">
          {register ? "Register" : "Login"}
        </button>
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
