import { useState } from "react";
import "./Toast.css";

export default function Toast({ showToast }) {
  const [hide, setHide] = useState(true);

  const handleCut = () => {
    setHide(true);
  };

  return (
    <div
      class={
        "fp-toast position-fixed top-0 end-0 p-3" +
        (!hide || showToast ? "" : " d-none")
      }
      style={{
        zIndex: "11",
      }}
    >
      <div role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Sending Password Reset Mail</strong>
          <button
            onClick={handleCut}
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
}
