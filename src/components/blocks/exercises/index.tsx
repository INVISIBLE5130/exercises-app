import { type FC } from "react";
import { useExercisesContext, useLoaderContext } from "src/store";

export const Exercises: FC = () => {
  const { exercises } = useExercisesContext();
  const { loading } = useLoaderContext();

  return !loading ? (
    <div className="grid grid-cols-2 gap-4 p-4">
      {exercises.length ? (
        exercises.map((exercise) => (
          <div
            className="flex flex-col py-2 px-4 rounded border-2 border-blue"
            key={exercise.id}
          >
            {Object.entries(exercise).map(([key, value]) =>
              key !== "id" ? (
                <p key={key}>
                  <b>{key}</b>:
                  <br />
                  <i>{value}</i>
                </p>
              ) : null
            )}
          </div>
        ))
      ) : (
        <h2 className="text-center mt-4">No data found. Try to search again</h2>
      )}
    </div>
  ) : (
    <h2 className="text-center mt-4">Loading ...</h2>
  );
};
