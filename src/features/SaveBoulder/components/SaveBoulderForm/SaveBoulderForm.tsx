import TextInput from "@/components/common/TextInput/TextInput";
import React from "react";
import { SaveBoulderFormProps } from "./SaveBoulderForm.types";
import { boulderGrades } from "@/domain/contants/boulderGrades";
import Select, { Option } from "@/components/common/Select";

const SaveBoulderForm = ({ onSubmit }: SaveBoulderFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      className="flex flex-col gap-5 w-3/4 max-w-xl -mt-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <TextInput
          className="text-stone-800"
          label="Name"
          labelClassName="sr-only"
          name="boulderName"
          placeholder="Boulder name"
          defaultValue="My First Boulder"
          required
        />
      </div>
      <div className="flex flex-col">
        <Select
          className="bg-white px-3 py-2 rounded border-r-8 border-white"
          name="boulderGrade"
        >
          {boulderGrades.map((grade, i) => (
            <Option
              className="active:bg-orange-200"
              key={grade}
              value={grade}
              defaultChecked={i === 0}
            >
              {grade}
            </Option>
          ))}
        </Select>
      </div>
      <button className="bg-purple-400 p-2 rounded" type="submit">
        Save Boulder
      </button>
    </form>
  );
};

export default SaveBoulderForm;
