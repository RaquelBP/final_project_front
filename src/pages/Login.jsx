import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const doLogin = async () => {
    setError("");
    try {
      const payload = { email, password };
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, payload);

      if (response.status === 200) {
        const { token, userId } = response.data;

        if (token) {
          //Datos del admin
          const userResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });

          const user = userResponse.data;

          //Login con el token
          login(user, token);
          navigate("/profile");
        } else {
          setError("Token no recibido del servidor.");
        }
      } else {
        setError("Error de autenticación. Verifica tus credenciales.");
      }
    } catch (err) {
      setError("Error de autenticación. Verifica tus credenciales.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login page">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Email: <input type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
      <p>Contraseña: <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
      <button onClick={doLogin}>Acceder</button>
    </div>
  );
};

export default Login;
