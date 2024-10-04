import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Review from "./pages/review/Review";
import { Rating } from "./pages/rating/Rating";
import LeaveReview from "./pages/leave_a_review/leave_review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/rating" element={<Rating />}></Route>
        <Route path="/leave-a-review" element={<LeaveReview />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
