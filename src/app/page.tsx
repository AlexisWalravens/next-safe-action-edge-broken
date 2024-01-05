"use client"; // this is a Client Component

import { loginUser } from "./actions";

export default function Login() {
  return (
    <button
      onClick={async () => {
        // Typesafe action called from client.
        const res = await loginUser({
          username: "johndoe",
          password: "123456",
        });

        // Result keys.
        const { data, validationErrors, serverError } = res;
      }}
    >
      Log in
    </button>
  );
}
