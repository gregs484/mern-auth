import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
    </BrowserRouter>
  )
}
