import auth from "../../firebase/firebase";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Login() {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    let timeoutId;

    // clean timeout on unmount
    if (notification) {
      timeoutId = setTimeout(() => {
        setNotification(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [notification]);

  const [signInWithEmailAndPassword, , loading, error] =
    useSignInWithEmailAndPassword(auth);

  // login user callback
  const callback = (formdata) => {
    const { email, password } = formdata;

    signInWithEmailAndPassword(email, password);
  };

  // forgot password callback
  const forgotPasswordCallback = (email, setShowToast) => {
    setShowToast(true);

    sendPasswordResetEmail(auth, email).then(() => {
      setNotification("Password reset email sent");
      setShowToast(false);
    });
  };

  return (
    <LoginForm
      callback={callback}
      forgotPasswordCallback={forgotPasswordCallback}
      loading={loading}
      error={error}
      // force LoginForm to rerender when error changes
      key={error}
      notification={notification}
    />
  );
}
