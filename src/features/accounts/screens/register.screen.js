import { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/Text";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";

export const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword,setRepeatPassword]=useState("")
  const { error, onRegister, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <Title>MealsToGo</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(e) => setEmail(e)}
          autoCapitalize="none"
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          onChangeText={(p) => setPassword(p)}
          textContentType='password'
          autoCapitalize="none"
          secureTextEntry
        />
                <Spacer size="large" />
        <AuthInput
          label="Repeat Password"
          value={repeatPassword}
          onChangeText={(p) => setRepeatPassword(p)}
          textContentType='password'
          autoCapitalize="none"
          secureTextEntry
        />
        <Spacer size="large" />
        {error && (<Spacer>
            <Text variant="error">{error}</Text>
        </Spacer>)}
        {!isLoading ?(<AuthButton
          icon="email"
          mode="contained"
          onPress={()=>onRegister(email,password,repeatPassword)}
        >
          Register
        </AuthButton>):(<ActivityIndicator color="blue" />)}
      </AccountContainer>
      <Spacer size='large' />
      <AuthButton
      mode="contained"
      onPress={()=>navigation.navigate("Main")}
      >Back</AuthButton>
    </AccountBackground>
  );
};
