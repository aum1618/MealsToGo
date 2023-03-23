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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, onLogin, isLoading } = useContext(AuthenticationContext);

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
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
        />
        <Spacer size="large" />
        {error && (
          <Spacer>
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator color="blue" />
        )}
      </AccountContainer>
      <Spacer size="large" />
      <AuthButton mode="contained" onPress={() => navigation.navigate("Main")}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
