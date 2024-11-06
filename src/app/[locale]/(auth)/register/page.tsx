"use client";
import InputField from "@/components/CustomField/InputField";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

const validateSchemaRegister = yup.object().shape({
  email: yup.string().required("Vui lòng nhập tên đăng nhập"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
});

function Register() {
  const router = useRouter();
  const formik = useFormik<IFormRegister>({
    initialValues: {
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      phone: "",
    },
    validationSchema: validateSchemaRegister,
    onSubmit: (value) => {
      console.log(value);
      router.push("/login");
    },
  });
  return (
    <form className="space-y-3 w-full" onSubmit={formik.handleSubmit}>
      <InputField
        formik={formik}
        name="email"
        label="Tên đăng nhập"
        placeholder="Nhập email đăng nhập"
        isVertical
        isRequired
      />

      <div className="flex justify-between gap-2">
        <InputField
          formik={formik}
          name="first_name"
          label="Họ"
          placeholder="Nhập họ người dùng"
          classWapper="w-[40%]"
          isVertical
        />
        <InputField
          formik={formik}
          name="last_name"
          label="Tên người dùng"
          placeholder="Nhập tên người dùng"
          classWapper="w-[57.5%]"
          isVertical
        />
      </div>

      <InputField
        formik={formik}
        type="password"
        name="password"
        label="Mật khẩu"
        placeholder="Nhập mật khẩu"
        isVertical
        isRequired
      />

      <InputField
        formik={formik}
        type="password"
        name="password_confirmation"
        label="Mật khẩu xác nhận"
        placeholder="Nhập mật khẩu xác nhận"
        isVertical
        isRequired
      />

      <div className="!mt-5 flex justify-center">
        <Button
          type="submit"
          className="hover:bg-blue-600 bg-blue-500 min-w-[250px]"
          onClick={(): void => {
            console.log(1);
          }}
        >
          Đăng ký
        </Button>
      </div>
    </form>
  );
}

export default Register;
