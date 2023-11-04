import { ErrorMessage, Field, useField } from "formik";

interface IInput {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

const Input = ({ label, type, name, placeholder }: IInput) => {
  const [, meta] = useField(name);

  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        {label}
      </label>
      <Field
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
        className={`input__input ${
          meta.error && meta.touched && "input__input__error"
        }`}
      />
      <span className="input__errTxt">
        {" "}
        <ErrorMessage name={name} />
      </span>
    </div>
  );
};

export default Input;
