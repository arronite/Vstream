import { useForm } from "react-hook-form";
import axios from "axios";

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      axios.post("http://localhost:5892/user/signup", data);
    } catch (error) {
      console.error("Login error:", error);
    }
    window.location.pathname = "/login";
  };

  return (
    <form
      className="flex flex-col p-6 space-y-4 text-slate-50 rounded-lg w-full max-w-md mx-auto mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold  text-center">Signup</h2>

      <div className="flex flex-col">
        <label className="mb-2 font-medium ">Username</label>
        <input
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <span className="mt-1 text-red-500">{errors.username.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium ">Email</label>
        <input
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <span className="mt-1 text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-medium ">Password</label>
        <input
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <span className="mt-1 text-red-500">{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        Sign Up
      </button>
    </form>
  );
};
