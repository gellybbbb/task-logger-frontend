import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginForm  from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";


function App() {
  return (
    <Router>
       <Routes>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
       </Routes>
    </Router>
  );
}

export default App;
