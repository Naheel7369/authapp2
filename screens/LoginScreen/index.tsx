import {useContext, useState} from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import {login} from '../../util/auth';
import {Alert} from 'react-native';
import {AuthContext} from '../../store/auth-context';

function LoginScreen() {
  const [isAuthentitcating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({email, password}: any) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication Failed turn on Alarm!!',
        'Could not Log you in prove your identity!! or try again later',
      );

      setIsAuthenticating(false);
    }
  }
  if (isAuthentitcating) {
    return (
      <LoadingOverlay message="You are being deployed GOOO GOOO!!!....." />
    );
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
