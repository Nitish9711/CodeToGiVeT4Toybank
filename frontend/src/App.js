import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SingleVirtualEvent from "./pages/singleVirtualEvent/singleVirtualEvent";
import OnGroundNew from "./pages/onGroundNew/OnGroundNew"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import SingleOnGroundEvent from "./pages/singleOnGroundEvent/singleOnGroundEvent";
import SingleVolunteer from "./pages/singleVolunteer/singleVolunteer";
import Profile from "./pages/profile/Profile";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        {user ?
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="onGround">
                <Route index element={<List type='onGroundEvent' />} />
                <Route path=":eventId" element={<SingleOnGroundEvent />} />
                <Route
                  path="new"
                  element={<OnGroundNew title="Add New On Ground Event" type="new" category="onGround" />}
                />
                <Route path = "edit">
                  <Route path=":eventId" element= {<OnGroundNew title="Edit On Ground Event" type="edit" category="onGround" />} />
                </Route>
              </Route>
              <Route path="virtual">
                <Route index element={<List type='virtualEvent' />} />
                <Route path=":eventId" element={<SingleVirtualEvent />} />
                <Route
                  path="new"
                  element={<OnGroundNew title="Add New Virtual Event" type="new" category="virtual" />}
                />
                <Route path = "edit">
                  <Route path=":eventId" element= {<OnGroundNew title="Edit On Virtual Event" type="edit" category="virtual" />} />
                </Route>
              </Route>
              <Route path="volunteers">
                <Route index element={<List type='volunteer' />} />
                <Route path=":volunteerId" element={<SingleVolunteer />} />
              </Route>
            </Route>
          </Routes>
          : <Login />}
      </BrowserRouter>
    </div>
  );
}

export default App;
