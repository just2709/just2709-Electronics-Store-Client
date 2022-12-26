import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { register as signup } from "../../../slices/userSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup.string().required("Hãy nhập tên của bạn"),
  email: yup.string().required("Hãy nhập Email").email("Email không hợp lệ"),
  password: yup.string().required("Hãy nhập mật khẩu"),
  passwordConfirm: yup
    .string()
    .required("Hãy nhập lại mật khẩu")
    .oneOf([yup.ref("password")], "Mật khẩu không khớp"),
  rememberMe: yup.bool(),
});

export default function SignUp() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      rememberMe: false,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      // data = JSON.stringify(data);
      const action = signup(data);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      setError("");
      enqueueSnackbar(`Đăng ký thành công, Xin chào ${user.name}`, { variant: "success" });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='h-screen bg-gradient-to-tl from-red-600 to-pink-500'>
      <div className='absolute w-full top-1/2 -translate-y-1/2 px-2'>
        <div className='max-w-[400px] p-3 mx-auto border rounded-lg bg-white'>
          <h1 className='text-center font-medium uppercase text-red-500'>Đăng ký tài khoản</h1>
          {error && <h1 className='text-red-500 mt-2 bg-gray-300 p-2 border rounded-lg'>{error}</h1>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} className='border w-full p-2 rounded-lg mt-2' placeholder='Tên người dùng' />
            <p className='text-red-500'>{errors.name?.message}</p>

            <input {...register("email")} className='border w-full p-2 rounded-lg mt-2' placeholder='Email' />
            <p className='text-red-500'>{errors.email?.message}</p>

            <input {...register("password")} type='password' className='border w-full p-2 rounded-lg mt-2' placeholder='Mật khẩu' />
            <p className='text-red-500'>{errors.password?.message}</p>

            <input {...register("passwordConfirm")} type='password' className='border w-full p-2 rounded-lg mt-2' placeholder='Nhập lại mật khẩu' />
            <p className='text-red-500'>{errors.passwordConfirm?.message}</p>
            <div className='flex items-center justify-between mt-2'>
              <div className='flex items-center'>
                <input {...register("rememberMe")} id='remember-me' type='checkbox' className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-900'>
                  Nhớ mật khẩu
                </label>
              </div>

              <div className='text-sm'>
                <a href='#' className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Quên mật khẩu?
                </a>
              </div>
            </div>
            <button type='submit' className='w-full text-white bg-red-600 mt-5 p-2 rounded-lg'>
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
