import { type FC } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export const RootLayout: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="root-layout">
      <header>
        <nav className="flex flex-col">
          <h1 className="text-center text-xl my-3">Exercise App</h1>
          {pathname === "/exercises" || pathname !== "/" ? (
            <NavLink
              to={"/"}
              className="w-max mx-auto uppercase underline underline-offset-4 hover:text-blue transition-all"
            >
              Home
            </NavLink>
          ) : null}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
