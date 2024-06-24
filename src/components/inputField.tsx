import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

interface InputFieldProps {
  label: string;
  type: string;
  value: string | null;
  placeholder: string;
  onChange: (value: string) => void;
}

const InputField = ({
  label,
  type,
  value,
  placeholder,
  onChange,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className="mt-3 flex flex-col gap-2">
      <label htmlFor="name">{label}</label>
      <div
        className={`relative flex w-full items-center justify-between rounded-lg bg-black/20 `}
      >
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value ?? ""}
          placeholder={placeholder}
          onChange={handleInputChange}
          required
          className="h-full w-full rounded-lg border-none bg-transparent px-4 py-3 outline-none placeholder:opacity-50 focus:bg-black/50"
        />

        {type === "password" && (
          <span
            className="absolute right-5 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
