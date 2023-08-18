import { createContext, useContext } from "react";
import { ExerciseContextProps, LoaderContextProps } from "src/types";

export const ExercisesContext = createContext<ExerciseContextProps>({
  exercises: [
    {
      name: "",
      type: "",
      muscle: "",
      equipment: "",
      difficulty: "",
      instructions: "",
    },
  ],
  setExercises: () => {},
});

export const useExercisesContext = () => useContext(ExercisesContext);

export const LoaderContext = createContext<LoaderContextProps>({
  loading: false,
  setLoading: () => {},
});

export const useLoaderContext = () => useContext(LoaderContext);
