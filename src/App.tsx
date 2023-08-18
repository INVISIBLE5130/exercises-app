import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Form } from "./components/blocks/form";
import { RootLayout } from "./layouts/root";
import "./input.css";
import { ExercisesContext, LoaderContext } from "./store";
import { type FC, useState } from "react";
import { ExerciseProps } from "./types";
import { Exercises } from "./components/blocks/exercises";
import { PageNotFound } from "./components/blocks/404";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Form />} />
      <Route path="exercises" element={<Exercises />} errorElement={<></>} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App: FC = () => {
  const [exercises, setExercises] = useState<ExerciseProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ExercisesContext.Provider value={{ exercises, setExercises }}>
      <LoaderContext.Provider value={{ loading, setLoading }}>
        <RouterProvider router={router} />
      </LoaderContext.Provider>
    </ExercisesContext.Provider>
  );
};

export default App;
