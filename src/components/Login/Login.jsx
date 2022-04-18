import auth from "../../firebase/firebase";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function Login() {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const callback = (formdata) => {
    const { email, password } = formdata;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <LoginForm
      callback={callback}
      user={user}
      loading={loading}
      error={error}
    />
  );
}
