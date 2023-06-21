import React, { useContext } from "react";
import { privateRoutes, publicRoutes } from "../Routes/Routes";
import { Navigate, Route, Routes } from "react-router-dom";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../Utils/constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

export default function AppRouter() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
  return user ? (
    <Routes>
      {privateRoutes.map(({ component, path }) => {
        return <Route key={path} Component={component} path={path} />;
      })}
      <Route path='*' element={<Navigate to='/chat' />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ component, path }) => {
        return <Route key={path} Component={component} path={path} />;
      })}
   
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );
}
