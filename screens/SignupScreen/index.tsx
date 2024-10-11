import {useContext, useState} from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import {createUser} from '../../util/auth';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import {Alert} from 'react-native';
import {AuthContext} from '../../store/auth-context';

function SignupScreen() {
  const [isAuthentitcating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function SignupHandler({email, password}: any) {
    setIsAuthenticating(true);
    try {
     const token = await createUser(email, password)

      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        ' Could not create user ,please check your inputs and try again later.',
      );
      setIsAuthenticating(false);
    }
  }
  if (isAuthentitcating) {
    return <LoadingOverlay message="Mission in progress....." />;
  }

  return <AuthContent onAuthenticate={SignupHandler} />;
}

export default SignupScreen;
