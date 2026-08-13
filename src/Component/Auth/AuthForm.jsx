import { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";

export default function AuthForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    router.query.tab === "register" ? "register" : "login"
  ); // "login" | "register"

  return (
    <div className="w-full bg-white py-10 md:overflow-x-auto">
      <div className="w-full md:w-[1440px] mx-auto flex flex-col md:flex-row items-center">
        {/* Photo: hidden on mobile, exact Figma box on desktop */}
        <div className="relative hidden md:block w-[737px] h-[825px] md:ml-[41px] rounded-[29px] overflow-hidden shrink-0">
          <Image
            src="/images/login-classroom.png"
            alt="Student raising hand in classroom"
            fill
            className={`object-cover object-[70%_center] transition-opacity duration-500 ${
              activeTab === "login" ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/images/register-classroom.png"
            alt="Two students at desks in classroom"
            fill
            className={`object-cover transition-opacity duration-500 ${
              activeTab === "register" ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Form: full width on mobile, exact Figma box on desktop */}
        <div className="w-full max-w-[454px] px-6 md:px-0 md:ml-[111px] flex flex-col">
          <h2 className="text-center font-semibold text-lg mb-4">
            Welcome to TOTC!
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="flex justify-center mb-6">
            <div className="flex bg-base-200 rounded-full p-1">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "login" ? "bg-teal-400 text-white" : "text-gray-500"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "register" ? "bg-teal-400 text-white" : "text-gray-500"
                }`}
              >
                Register
              </button>
            </div>
          </div>

          {activeTab === "login" ? <LoginFields /> : <RegisterFields />}
        </div>
      </div>
    </div>
  );
}

// Small reusable banner for success/error feedback
function FormMessage({ message }) {
  if (!message) return null;

  const isError = message.type === "error";

  return (
    <div
      className={`text-sm rounded-full px-4 py-2 text-center ${
        isError ? "bg-red-100 text-red-600" : "bg-green-100 text-green-700"
      }`}
    >
      {message.text}
    </div>
  );
}

function LoginFields() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState(null); // { type: "error" | "success", text: string }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage({ type: "error", text: "Please fill in both fields." });
      return;
    }

    const savedUserRaw = localStorage.getItem("totc_user");

    if (!savedUserRaw) {
      setMessage({ type: "error", text: "No account found. Please register first." });
      return;
    }

    const savedUser = JSON.parse(savedUserRaw);

    if (savedUser.username === username && savedUser.password === password) {
      setMessage({ type: "success", text: `Welcome back, ${username}!` });
    } else {
      setMessage({ type: "error", text: "Incorrect username or password." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormMessage message={message} />

      <div>
        <label className="text-sm font-medium">User name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your User name"
          className="input input-bordered w-full rounded-full mt-1 bg-white border-gray-300 focus:border-teal-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="input input-bordered w-full rounded-full mt-1 pr-10 bg-white border-gray-300 focus:border-teal-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="checkbox checkbox-sm"
          />
          Remember me
        </label>
        <a href="#" className="text-gray-500 hover:underline">
          Forgot Password?
        </a>
      </div>

      <button
        type="submit"
        className="btn bg-teal-400 hover:bg-teal-500 border-none text-white rounded-full mt-2"
      >
        Login
      </button>
    </form>
  );
}

function RegisterFields() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    const newUser = { email, username, password };
    localStorage.setItem("totc_user", JSON.stringify(newUser));

    setMessage({ type: "success", text: "Account created! You can now log in." });
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormMessage message={message} />

      <div>
        <label className="text-sm font-medium">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email Address"
          className="input input-bordered w-full rounded-full mt-1 bg-white border-gray-300 focus:border-teal-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium">User name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your User name"
          className="input input-bordered w-full rounded-full mt-1 bg-white border-gray-300 focus:border-teal-400 focus:outline-none"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="input input-bordered w-full rounded-full mt-1 pr-10 bg-white border-gray-300 focus:border-teal-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="btn bg-teal-400 hover:bg-teal-500 border-none text-white rounded-full mt-2"
      >
        Register
      </button>
    </form>
  );
}