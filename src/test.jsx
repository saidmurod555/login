import { useState } from "react";

const LoginPage1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    if (email && password) {
      window.location.href = "/home";
    } else {
      console.log("Please fill in the required fields.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-500 ">
      <form
        onSubmit={handleLogin}
        className="container h-[400px] w-[500px] rounded bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-center text-2xl font-bold">Login</h2>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold">Email</label>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold">Password</label>
          <input
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 shadow focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage1;
