import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

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
          {...register("example")}
        />
      </div>
      <div className="flex flex-col">
        <label className="p-2">asdf</label>
        <input
          className="inputField"
          {...register("exampleRequired", { required: true })}
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
