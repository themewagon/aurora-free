import { defaultAuthCredentials } from 'config';
import LoginForm from 'components/sections/authentications/LoginForm';

const Login = () => {
  return <LoginForm defaultCredential={defaultAuthCredentials} />;
};

export default Login;
