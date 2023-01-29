import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import React, { useEffect } from "react";
import Dialog from "../../component/dialog/Dialog";
import RadioButton from "../../component/inputs/radioButton/RadioButton";
import TextField from "../../component/inputs/textField";
import useToggleEle from "../../hook/useToggleEle";

const Login = () => {
  const {
    open: openLoginDialog,
    handleClose: handleCloseLoginDialog,
    handleOpen: handleOpenLoginDialog,
  } = useToggleEle();

  useEffect(() => {
    handleOpenLoginDialog();
  }, []);

  return (
    <Dialog open={openLoginDialog} onClose={handleCloseLoginDialog}>
      <Formik
        {...{
          initialValues: {
            name: "",
            phoneNumber: "",
            age: "",
            gender: "male",
          },
          onSubmit(values, formikHelpers) {
            console.log(values);
            handleCloseLoginDialog();
          },
        }}
      >
        <Form>
          <div className=" text-center">
            <p className=" text-4xl">تسجيل الدخول</p>
            <section className=" flex flex-col gap-4 pt-6">
              <TextField name="name" label="الاسم" />
              <TextField name="phoneNumber" label="الرقم" />
              <TextField name="age" label="العمر" />
              <div className=" flex flex-row justify-evenly">
                <RadioButton name="gender" label="ذكر" value={"male"} />
                <RadioButton name="gender" label="انثى" value={"female"} />
              </div>
              <div>
                <button
                  type="submit"
                  className=" py-1 px-6 bg-black text-white rounded-xl"
                >
                  إضافة
                </button>
              </div>
            </section>
          </div>
        </Form>
      </Formik>
    </Dialog>
  );
};

export default Login;
