import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./tenant/components/homepage/Home";
import About from "./tenant/components/about/About";
import TenantLogin from "./tenant/components/tenantlogin/TenantLogin";
import Tenantdashboard from "./tenant/components/tenantdashboard/Tenantdashboard";
import AdminHome from "./admin/components/adminhome/AdminHome";
import Tenantsignupform from "./admin/components/tenantsignup/Tenantsignupform";
import Addpropertyform from "./admin/components/addproperty/Addpropertyform";
import Adminsignup from "./admin/components/adminsignup/Adminsignup";
import Complains from "./admin/components/complains/Complains";
import Viewtenant from "./admin/components/viewtenant/Viewtenant";
import Viewproperty from "./admin/components/viewproperty/Viewproperty";
import Adminlogin from "./admin/components/adminlogin/Adminlogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<TenantLogin />} />
          <Route path="/mydashboard" element={<Tenantdashboard />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/signup" element={<Adminsignup />} />
          <Route path="/admin/login" element={<Adminlogin />} />
          <Route path="/admin/tenantsignup" element={<Tenantsignupform />} />
          <Route path="/admin/addproperty" element={<Addpropertyform />} />
          <Route path="/admin/complains" element={<Complains />} />
          <Route path="/admin/viewtenants" element={<Viewtenant />} />
          <Route path="/admin/viewproperty" element={<Viewproperty />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
