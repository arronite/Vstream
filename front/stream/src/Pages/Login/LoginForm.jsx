import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    axios
      .get("http://localhost:5892/user/login", {
        params: {
          data,
        },
      })
      .then(function (response) {
        localStorage.setItem("token", response.data);
        console.log("set");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        window.location.pathname = "/home";
      });
  };

  return (
    <form
      className="flex flex-col p-6 space-y-4 text-slate-50 rounded-lg w-full max-w-md mx-auto mt-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <div className="flex flex-col">
        <label className="mb-2 font-medium ">Username or Email</label>
        <input
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          {...register("username", {
            required: "Username or email is required",
          })}
        />
        {errors.username && (
          <span className="mt-1 text-red-500">{errors.username.message}</span>
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
        Log In
      </button>

      <div className="flex justify-center items-center w-full mt-4">
        <Link to="/signup" className="text-blue-500 hover:underline">
          Signup
        </Link>
      </div>
    </form>
  );
};
