import { BoulderGrade, boulderGrades } from "@/domain/contants/boulderGrades";
import { GradeSelectorProps } from "./GradeSelector.types";

function GradeSelector({ setGrades, grades }: GradeSelectorProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const grade = value as BoulderGrade;

        setGrades((prevGrades) => {
            const currentGrades = prevGrades || [];
            if (checked) {
                return [...currentGrades, grade];
            } else {
                return currentGrades.filter((g) => g !== grade);
            }
        });
    }

    return (
        <div className="px-4 pb-4 text-white">
            <div className="flex items-center gap-2 mb-2">
                <h2 className="text-white ">Filter by grade:</h2>
                {!!grades?.length && <button className="bg-white text-black px-2 rounded-full" onClick={() => setGrades(undefined)}>Clear</button>}
            </div>
            <form className="overflow-x-auto no-scrollbar relative" action="/boulder-list" >
                <fieldset className="flex gap-2">
                    <legend className="sr-only">Filter by grade</legend>
                    {boulderGrades.map((grade) => (
                        <div key={grade}>
                            <input className="peer sr-only" onChange={handleChange} type="checkbox" id={grade} name="grade" value={grade} checked={!!grades && grades.includes(grade)} />
                            <label className="border border-white peer-checked:bg-purple-400 px-3 py-1 block rounded-full text-white font-bold" htmlFor={grade}>
                                <span>{grade}</span>
                            </label>
                        </div>
                    ))}
                </fieldset>
            </form>
        </div>
    )
}

export default GradeSelector