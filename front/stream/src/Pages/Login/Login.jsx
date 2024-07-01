import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="glass w-1/2 h-3/4 p-8 rounded-md ">
        <LoginForm />
      </div>
    </div>
  );
};
