import { Spacer } from "../../../components/spacer/spacer";
import {
  AccountBackground,
  AccountContainer,
  AnimationWrapper,
  AuthButton,
  Title,
} from "../components/account.styles";
import AnimatedLottieView from "lottie-react-native";
import { Image } from "react-native";

export const AccountsScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AnimationWrapper>
        <AnimatedLottieView
          style={{ width: 200, height: 300 }}
          source={require("../../../../assets/FastFood.json")}
          autoPlay
          loop
        />
      </AnimationWrapper>

      <Title>MealsToGo</Title>

      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="medium" />
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
