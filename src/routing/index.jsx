import { Route, Routes } from "react-router";
import Home from "../page/Home";
import About from "../page/About";
import Calculator from "../components/Calculator";
import Users from "../components/Users";
import UserSingle from "../page/UserSingle";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserSingle />} />
      </Routes>
    </>
  );
};

export default Routing;
