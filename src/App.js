import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListOfEmplyeesComponent from "./myComponents/ListOfEmplyeesComponent";
import HeaderComponent from "./myComponents/HeaderComponent";
import FooterComponent from "./myComponents/FooterComponent";
import CreateEmployeeComponent from "./myComponents/CreateEmployeeComponent.jsx";

function App() {
  return (
    <>
      <div>
        <Router>
            <HeaderComponent />
              <div className="container">
                <Routes>
                  <Route path="/get-employees" element={<ListOfEmplyeesComponent/>}></Route>
                  <Route path="/add-employee" element = {<CreateEmployeeComponent/>}></Route>
                </Routes>
              </div>
            {/* <FooterComponent />  */}
        </Router>
      </div>
    </>
  );
}

export default App;
