import { useField } from "formik";
import { Props } from "./type";

const RadioButton = ({ label, value, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <label>
      <span
        className={` py-1 px-6   text-white rounded-xl ${
          field.value === value ? "bg-primary" : "bg-slate-400"
        }`}
      >
        {label}
      </span>
      <input {...field} {...props} value={value} type={"radio"} hidden />
    </label>
  );
};

export default RadioButton;
