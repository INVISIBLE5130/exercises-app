import axios from "axios";
import { useState, type FC, type FormEvent, useMemo } from "react";
import { Form as FormWrapper } from "react-router-dom";
import { Input } from "src/components/common/input";
import { useExercisesContext, useLoaderContext } from "src/store";
import { ExerciseProps } from "src/types";
import { v4 as uuidv4 } from "uuid";

export const Form: FC = () => {
  const API_KEY: string = process.env.REACT_APP_API_KEY || "";
  const API_URL: string = process.env.REACT_APP_API_URL || "";

  const { setExercises } = useExercisesContext();
  const { setLoading } = useLoaderContext();

  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [muscle, setMuscle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");

  const query: string = useMemo(() => {
    const queryData = Object.entries({ name, type, muscle, difficulty })
      .map(([key, value]) => (value ? `${key}=${value}` : ""))
      .filter((v) => v)
      .join("&");

    return queryData;
  }, [name, type, muscle, difficulty]);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);

    const { data } = await axios
      .get<ExerciseProps[]>(`${API_URL}${query ? `?${query}` : ""}`, {
        headers: {
          "X-API-KEY": API_KEY,
        },
      })
      .finally(() => {
        setLoading(false);
      });

    const exercisesData = data.map((d) => ({
      id: uuidv4(),
      ...d,
    }));

    setExercises(exercisesData);
  };

  return (
    <FormWrapper
      method="get"
      action="/exercises"
      onSubmit={submitHandler}
      className="mt-7 flex flex-col gap-4 items-center w-max mx-auto"
    >
      <Input
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        name="type"
        placeholder="Type"
        onChange={(e) => setType(e.target.value)}
      />
      <Input
        name="muscle"
        placeholder="Muscle"
        onChange={(e) => setMuscle(e.target.value)}
      />
      <Input
        name="difficulty"
        placeholder="Difficulty"
        onChange={(e) => setDifficulty(e.target.value)}
      />

      <button
        type="submit"
        disabled={!query}
        className="w-full text-center bg-blue rounded text-white py-2 px-4 hover:bg-white hover:text-blue disabled:bg-gray-300 disabled:text-white border-blue border-2 transition-all"
      >
        Search
      </button>
    </FormWrapper>
  );
};
