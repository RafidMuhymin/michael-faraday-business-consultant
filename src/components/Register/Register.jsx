import auth from "../../firebase/firebase";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { sendEmailVerification } from "firebase/auth";

export default function Register() {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    let timeoutId;

    if (notification) {
      timeoutId = setTimeout(() => {
        setNotification(null);
      }, 3000);
    }

    // clean timeout on unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, [notification]);

  let [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // register user callback
  const callback = (formdata) => {
    const { email, password } = formdata;

    createUserWithEmailAndPassword(email, password).then(() => {
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser).then(() => {
          setNotification("Verification email sent");
        });
      }
    });
  };

  return (
    <LoginForm
      register
      callback={callback}
      loading={loading}
      error={error}
      // force LoginForm to rerender when error changes
      key={error}
      notification={notification}
    />
  );
}
