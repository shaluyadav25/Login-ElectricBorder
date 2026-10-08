import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ElectricBorder from '../ElectricBorder/ElectricBorder'
const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Minimum 6 characters is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);

    reset();

    navigate("/home");
  };

  return (
    <ElectricBorder
  color="#7df9ff"
  speed={1}
  chaos={0.12}
  thickness={2}
  style={{ borderRadius: 16 }}
>
    <div className="shadow-xl rounded-2xl h-120 w-100 m-20 p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <p className="text-xs text-gray-600">
          ACCOUNT ACCESS
        </p>

        <h1 className="text-3xl font-bold mt-5">
          Sign in
        </h1>

        <p className="text-sm text-gray-600 mb-5">
          Enter your account details to continue.
        </p>

        {/* Email */}
        <div className="m-1">
          <label htmlFor="email" className="font-bold">
            Email
          </label>

          <input
            className="h-10 w-80 border-2 rounded-lg m-3 p-3 border-gray-400"
            type="email"
            id="email"
            placeholder="Enter email"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="font-bold">
            Password
          </label>

          <input
            className="h-10 w-80 border-2 rounded-lg m-3 p-3 border-gray-400"
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-center items-center m-3 h-10 w-80 rounded-xl p-3 bg-blue-950 text-white font-semibold">
          <button type="submit">
            Sign In
          </button>
        </div>
        <span>

        <Link to="/register" >Register</Link>
        </span>
        
      </form>
    </div>
      </ElectricBorder>

  );
};

export default Login;