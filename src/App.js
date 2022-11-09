import "./style.css";
import { Link } from "react-router-dom";
import EmployeeList from "./common-component/employeeList/EmployeeList";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Registration from "./common-component/registration-page/registration";
import LoginPage from "./login-page/loginPage";
import Home from "./core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
function App() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.userData);
  console.log("cart data", results);
  const data = {
    name: "priyanka",
    role: "xyz",
  };
  return (
    <>
      {/* <button onClick={() => dispatch(addToCart(data))}>Add</button>
      <EmployeeList />
      <Registration />
      <LoginPage /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element=<div>
              <h1>Welcome to home PAge</h1>
            </div>
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login" element={<Rg />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </>
  );
}

export default App;
