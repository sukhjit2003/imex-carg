import react from "react";
function Navbar({ currentPage, handlePageChange }){
    return (
        <nav>
          <ul className="nav nav-tabs" style={{listStyle:"none",display:"flex",justifyContent:"space-around",justifyContent:"flex-end"}}>
          <h1 style={{marginRight:"700px",fontStyle:"oblique bold",fontSize:"60px"}}><a style={{color:"skyblue"}}>Im</a><a style={{color:"navy"}}>Ex Carg</a></h1>
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
        Track order
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
        </nav>
    )
}
export default Navbar