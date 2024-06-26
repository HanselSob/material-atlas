import { User } from "@/types/user";
import { Form, Input } from "antd";
import { Controller, type Control } from "react-hook-form";

interface ControllerInputProps {
  control: Control<User>;
  name: keyof User;
  label: string;
  placeholder?: string;
  password?: boolean;
}

export const ControllerInput = ({ control, name, label, placeholder, password }: ControllerInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Form.Item label={label}>{password ? <Input.Password placeholder={placeholder} {...field} /> : <Input placeholder={placeholder} {...field} />}</Form.Item>}
    />
  );
};
