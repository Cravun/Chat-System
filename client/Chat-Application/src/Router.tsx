import { createBrowserRouter, Outlet } from "react-router-dom";
import { AuthProvider } from "./Pages/Layouts/AuthContext";

// ======= Components =======
import Authenticator from "./Pages/Layouts/Authenticator";
import Login from "./Pages/Layouts/Login";
import SignUp from "./Pages/Layouts/SignUp";

export const Router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        element: <Authenticator />,
        children: [
          { path: "Login", element: <Login /> },
          { path: "SignUp", element: <SignUp /> },
        ],
      },
    ],
  },
]);

function ContextWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export default Router;
