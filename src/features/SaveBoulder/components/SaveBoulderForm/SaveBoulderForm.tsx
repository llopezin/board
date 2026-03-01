import ErrorBlock from "@/components/common/ErrorBlock/ErrorBlock";
import Spinner from "@/components/common/Spinner/Spinner";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import Form from "@/components/ui/Form/Form";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput/TextInput";
import { boulderGrades } from "@/domain/contants/boulderGrades";
import { useActionState, useEffect } from "react";
import { SaveBoulderFormProps } from "./SaveBoulderForm.types";

const initalFormState = { errors: [], success: false };

const SaveBoulderForm = ({ saveFn, boulder, onSuccess }: SaveBoulderFormProps) => {
  const [state, formAction, pending] = useActionState(saveFn, initalFormState);
  const { errors, success } = state;

  useEffect(() => { if (success) onSuccess(); }, [success]);

  return (
    <Form
      className="w-3/4 max-w-xl -mt-8"
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

      <SubmitButton disabled={pending} data-testid="test-save-boulder">
        {pending ? <Spinner className="max-h-6 max-w-6" /> : "Save Boulder"}
      </SubmitButton>
    </Form>
  );
};

export default SaveBoulderForm;
