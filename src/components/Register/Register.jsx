import auth from "../../firebase/firebase";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function Register() {
  let [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const callback = (formdata) => {
    const { email, password } = formdata;

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <LoginForm
      register
      callback={callback}
      user={user}
      loading={loading}
      error={error}
      key={error}
    />
  );
}
