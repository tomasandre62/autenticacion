import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');  // Estado para el mensaje de éxito
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    try {
      await axios.post('http://localhost:5000/signup', { email, password });
      setSuccess('Usuario registrado con éxito');  // Mensaje de éxito
      setEmail('');
      setPassword('');
      setTimeout(() => navigate('/login'), 3000);  // Redirigir después de 3 segundos
    } catch (error) {
      console.error('Error registrando usuario:', error);
      setError('Error registrando usuario');
    }
  };

  return (
    <form onSubmit={handleSignup}>
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
      <button type="submit" className="btn btn-primary">Registrarse</button>
      {error && <p className="text-danger mt-3">{error}</p>}  {/* Mensaje de error */}
      {success && <p className="text-success mt-3">{success}</p>}  {/* Mensaje de éxito */}
    </form>
  );
};

export default Signup;
