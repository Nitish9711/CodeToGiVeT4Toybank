import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SingleVirtualEvent from "./pages/singleVirtualEvent/singleVirtualEvent";
import OnGroundNew from "./pages/onGroundNew/OnGroundNew"
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import SingleOnGroundEvent from "./pages/singleOnGroundEvent/singleOnGroundEvent";
import SingleVolunteer from "./pages/singleVolunteer/singleVolunteer";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="onGround">
              <Route index element={<List type='onGroundEvent' />} />
              <Route path=":eventId" element={<SingleOnGroundEvent/>} />
              <Route
                path="new"
                element={<OnGroundNew title="Add New On Ground Event" />}
              />
            </Route>
            <Route path="virtual">
              <Route index element={<List type='virtualEvent' />} />
              <Route path=":evnetId" element={<SingleVirtualEvent/>} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="volunteers">
              <Route index element={<List type='volunteer' />} />
              <Route path=":volunteerId" element={<SingleVolunteer/>} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
