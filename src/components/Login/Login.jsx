import auth from "../../firebase/firebase";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Login() {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    let timeoutId;

    if (notification) {
      timeoutId = setTimeout(() => {
        setNotification(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [notification]);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const callback = (formdata) => {
    const { email, password } = formdata;

    signInWithEmailAndPassword(email, password);
  };

  const forgotPasswordCallback = (email) => {
    sendPasswordResetEmail(auth, email).then(() => {
      setNotification("Password reset email sent");
    });
  };

  return (
    <LoginForm
      callback={callback}
      forgotPasswordCallback={forgotPasswordCallback}
      user={user}
      loading={loading}
      error={error}
      key={error}
      notification={notification}
    />
  );
}
