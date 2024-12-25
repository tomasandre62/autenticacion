import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // Estado para almacenar el mensaje de error
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', { email, password });
      setIsAuthenticated(true);
      navigate('/private');
    } catch (error) {
      console.error('Error iniciando sesión:', error);
      setError('Correo o contraseña incorrectos');  // Establece el mensaje de error
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
      {error && <p className="text-danger mt-3">{error}</p>}  {/* Mensaje de error */}
      <p className="mt-3">
        ¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link>
      </p>
    </form>
  );
};

export default Login;
