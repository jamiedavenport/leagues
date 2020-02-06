import React, { useState, FormEvent } from "react";
import Input from "./Input";
import styled from "../styled";

interface Props {
  onSubmit: (value: string) => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

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
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Team Name" value={value} onChange={handleChange} />
    </Form>
  );
};

export default AddTeamForm;
