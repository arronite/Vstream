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
      className="h-full flex w-full flex-col gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <label className="p-2 text">asdf</label>
        <input
          className="inputField"
          defaultValue="test"
          {...register("username")}
        />
      </div>
      <div className="flex flex-col">
        <label className="p-2">asdf</label>
        <input
          className="inputField"
          {...register("password", { required: true })}
        />
      </div>
      <input type="submit" />
      {errors.exampleRequired && <span>This field is required</span>}
      <div className="flex justify-center items-center w-full">
        <Link to={"/signup"}>
          <span>Signup</span>
        </Link>
      </div>
    </form>
  );
};
