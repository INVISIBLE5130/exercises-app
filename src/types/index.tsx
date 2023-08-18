import { ChangeEventHandler } from "react";

export interface ExerciseProps {
  id?: string;
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}

export interface ExerciseContextProps {
  exercises: ExerciseProps[];
  setExercises: (e: ExerciseProps[]) => void;
}

export interface LoaderContextProps {
  loading: boolean;
  setLoading: (e: boolean) => void;
}

export interface InputProps {
  name: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
