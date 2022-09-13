import "twin.macro";
import "./App.css";
import Clipboard from "./pages/clipboard/Clipboard";
import Fylo from "./pages/fylo/Fylo";
import Loop from "./pages/loop/Loop";
import Shortly from "./pages/shortly/Shortly";
import Testimonial from "./pages/testimonial/Testimonial";
import Bookmark from "./pages/bookmark/Bookmark";
import Presentation from "./pages/Presentation/Presentation";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Presentation />} />
      <Route path="/clipboard" element={<Clipboard />} />
      <Route path="/fylo" element={<Fylo />} />
      <Route path="/loop" element={<Loop />} />
      <Route path="/shortly" element={<Shortly />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  );
}

export default App;
