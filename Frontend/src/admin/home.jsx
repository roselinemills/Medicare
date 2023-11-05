import { Outlet } from "react-router-dom";
import AdminNav from "./adminNav";
import AddSucess from "../components/Widjet/addSucess";
import { useDispatch, useSelector } from "react-redux";
import { addPro, cartin } from "../features/details";
function Admin() {
    const changes =useSelector(cartin)
    const unchange  = useDispatch()
    setTimeout(()=>{
        unchange(addPro(false) )
    },5000)
    return (  <div >
        <div className=" "><AdminNav/></div>
        <div>{changes && <div className="my-5" style={{position:'fixed',right:'0.001em',}} ><AddSucess/></div>} </div>
        <div className=" d-flex justify-content-center  pt-3">
        <Outlet/>
        </div>

    </div>);
}

export default Admin;