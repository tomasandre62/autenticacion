import { useNavigate } from 'react-router-dom';

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <button onClick={handleLogout} className="btn btn-outline-danger">Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
