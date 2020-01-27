import React, { useState, FormEvent } from "react";
import Input from "./Input";

interface Props {
  onSubmit: (value: string) => void;
}

const AddTeamForm: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Team Name" value={value} onChange={handleChange} />
      <button type="submit">+</button>
    </form>
  );
};

export default AddTeamForm;
