/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CheckBoxField from "@/components/CustomField/CheckboxField";
import InputField from "@/components/CustomField/InputField";
import { useAuthLogin } from "@/service/auth/useLogin";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import * as yup from "yup";

const validateSchemaLogin = yup.object().shape({
  username: yup.string().required("Vui lòng nhập tên đăng nhập"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

function Login() {
  const { mutate: login, isPending } = useAuthLogin();
  const formik = useFormik<IFormLogin>({
    initialValues: {
      remember_password: false,
      username: "",
      password: "",
    },
    validationSchema: validateSchemaLogin,
    onSubmit: (value) => {
      login(value);
    },
  });
  return (
    <form className="space-y-3 py-[20px] w-full" onSubmit={formik.handleSubmit}>
      <InputField
        formik={formik}
        name="username"
        label="Tên đăng nhập"
        clsLabelWrapper="mb-1 font-bold"
        className="!bg-[#F5F9FC]"
        placeholder="Nhập email đăng nhập"
        isVertical
        isRequired
      />

      <InputField
        formik={formik}
        type="password"
        name="password"
        label="Mật khẩu"
        clsLabelWrapper="mb-1 font-bold"
        placeholder="Nhập mật khẩu"
        className="!bg-[#F5F9FC]"
        isVertical
        isRequired
      />

      <div className="flex items-center justify-between">
        <CheckBoxField
          name="remember_password"
          label={"login.remember_password"}
          formik={formik}
        />
        <p
          role="button"
          className="text-sm font-bold hover:underline hover:text-blue-500"
        >
          Quên mật khẩu ?
        </p>
      </div>

      <div className="!mt-7 flex justify-center">
        <Button
          type="submit"
          className="hover:bg-blue-600 rounded-full shadow-md hover:shadow-none duration-200 border-blue-500 hover:translate-y-0.5 font-bold bg-blue-500 min-h-[36px] min-w-[250px]"
        >
          {isPending ? (
            <div className="loading size-[20px]"></div>
          ) : (
            "Đăng nhập"
          )}
        </Button>
      </div>
    </form>
  );
}

export default Login;
