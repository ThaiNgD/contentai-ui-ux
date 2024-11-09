/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CheckBoxField from "@/components/CustomField/CheckboxField";
import InputField from "@/components/CustomField/InputField";
import { setAccessToken } from "@/config";
import { authApi } from "@/service/axios/authApi";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const validateSchemaLogin = yup.object().shape({
  username: yup.string().required("Vui lòng nhập tên đăng nhập"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

function Login() {
  const router = useRouter();
  const formik = useFormik<IFormLogin>({
    initialValues: {
      remember_password: false,
      username: "",
      password: "",
    },
    validationSchema: validateSchemaLogin,
    onSubmit: async (value) => {
      await authApi.login(value).then((value) => {
        console.log(value);
        router.push("dashboard");
        setAccessToken(value.access_token);
      });
    },
  });
  return (
    <form className="space-y-3 w-full" onSubmit={formik.handleSubmit}>
      <InputField
        formik={formik}
        name="username"
        label="Tên đăng nhập"
        placeholder="Nhập email đăng nhập"
        isVertical
        isRequired
      />

      <InputField
        formik={formik}
        type="password"
        name="password"
        label="Mật khẩu"
        placeholder="Nhập mật khẩu"
        isVertical
        isRequired
      />

      <div className="flex justify-between">
        <CheckBoxField
          name="remember_password"
          label={"Ghi nhớ đăng nhập"}
          formik={formik}
        />
        <p className="underline text-blue-500">Quên mật khẩu ?</p>
      </div>

      <div className="!mt-5 flex justify-center">
        <Button
          type="submit"
          className="hover:bg-blue-600 bg-blue-500 min-w-[250px]"
        >
          Đăng nhập
        </Button>
      </div>
    </form>
  );
}

export default Login;
