//import useAuth from "../hooks/useAuth";
import { useSelector, useDispatch} from "react-redux";
import { login, logout } from '../redux/userSlice';

const Auth = () => {
    //const { user, token, login, logout } = useAuth();
    const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogin = () => {
      dispatch(login('raquel128312', 'password123'));
    };

    return (
      <div>
        {user ? (
          <div>
            <p>Welcome, {user.name}!</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
    );
}

export default Auth;