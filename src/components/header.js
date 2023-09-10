import react from "react";
import Navbar from "./navbar";
function Header({currentPage,handlePageChange}){
    
    return (
        <header>
            <Navbar currentPage={currentPage}handlePageChange={handlePageChange}/>
        </header>
    )
}
export default Header