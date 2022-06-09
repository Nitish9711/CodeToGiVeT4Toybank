import EventDetails from './pages/EventDetails/EventDetails';
import Events from './pages/Events/Events';
import Home from './pages/home/Home'
import Volunteer from './pages/Volunteer/Volunteer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/profile/Profile';
import SignUp from './pages/signUp/SignUp';
// import MultiStep from './pages/MultiStep/MultiStep';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<>Register</>} />
          <Route path="login" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myEvents">
            <Route index element={<Events />} />
            <Route path=":eventId" element={<EventDetails />} />
          </Route>
          <Route path="volunteer" element={<Volunteer />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <MultiStep />
  );
}

export default App;
