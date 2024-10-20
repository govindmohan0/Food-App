import { Navigate, Routes, Route } from "react-router-dom";

const AppRoutes=()=>{
return (
<Routes>

<Route path="/" element={<span>HEllO</span>}/>

<Route path="/user-profile" element={<span>user profile</span>}/>



<Route path="*" element={<Navigate to="/"/>}/>



</Routes>


)
}
export default AppRoutes;


