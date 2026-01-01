import TextInput from "@/components/ui/TextInput/TextInput";
import { SaveBoulderFormProps } from "./SaveBoulderForm.types";
import { boulderGrades } from "@/domain/contants/boulderGrades";
import Select from "@/components/ui/Select";
import ErrorBlock from "@/components/common/ErrorBlock/ErrorBlock";
import { useActionState, useEffect } from "react";

const initalFormState = { errors: [], success: false };

const SaveBoulderForm = ({ saveFn, boulder, onSuccess }: SaveBoulderFormProps) => {
  const [state, formAction, pending] = useActionState(saveFn, initalFormState);
  const { errors, success } = state;

  useEffect(() => { if (success) onSuccess(); }, [success]);

  return (
    <form
      className="flex flex-col gap-5 w-3/4 max-w-xl -mt-8"
      action={formAction}
    >
      <input type="hidden" name="boulder" value={JSON.stringify(boulder)} />

      <div className="flex flex-col">
        <TextInput
          className="text-stone-800"
          label="Name"
          labelClassName="sr-only"
          name="name"
          placeholder="Boulder name"
          defaultValue="My First Boulder"
          aria-invalid={success ? true : undefined}
          required
        />
      </div>
      <div className="flex flex-col">
        <Select
          className="bg-white px-3 py-2 rounded border-r-8 border-white"
          name="grade"
        >
          {boulderGrades.map((grade, i) => (
            <Select.Option
              className="active:bg-orange-200"
              key={grade}
              value={grade}
              defaultChecked={i === 0}
            >
              {grade}
            </Select.Option>
          ))}
        </Select>
      </div>

      {!!errors?.length && <ErrorBlock errors={errors} />}

      <button disabled={pending} data-testid="test-save-boulder" className="bg-purple-400 p-2 rounded disabled:opacity-50" type="submit">
        Save Boulder
      </button>
    </form>
  );
};

export default SaveBoulderForm;
