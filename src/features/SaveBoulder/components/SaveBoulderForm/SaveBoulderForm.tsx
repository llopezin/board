import TextInput from "@/components/common/TextInput/TextInput";
import React from "react";
import { SaveBoulderFormProps } from "./SaveBoulderForm.types";

const SaveBoulderForm = ({ onSubmit }: SaveBoulderFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form
      className="flex flex-col gap-2 w-3/4 max-w-xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <TextInput
          className="text-stone-800"
          label="Name"
          name="boulderName"
          required
        />
      </div>
      <div className="flex flex-col">
        <TextInput
          className="text-stone-800"
          label="Grade"
          name="boulderGrade"
          required
        />
      </div>
      <button className="bg-purple-400 p-2 rounded mt-4" type="submit">
        Save Boulder
      </button>
    </form>
  );
};

export default SaveBoulderForm;
