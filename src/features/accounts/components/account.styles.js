import { ImageBackground, View,Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground=styled(ImageBackground).attrs({
    source : require('../../../../resources/BackgroundImages/AccountsBackground.jpg')
})`
flex: 1;
align-items:center;
justify-content:center;
`;

export const AccountContainer=styled(View)`
background-color: rgba(255,255,255,0.8);
padding: ${(props)=>props.theme.space[4]};
margin-top: ${(props)=>props.theme.space[2]};
`;

export const AuthButton=styled(Button).attrs({
    buttonColor : colors.ui.primary,
    
})`
border-radius:7px;
padding: ${(props)=>props.theme.space[2]};

`;

export const AuthInput=styled(TextInput)`
width: 300px;
`;

export const Title=styled(Text)`
font-size: 30px;
`;

export const AnimationWrapper=styled(View)`
width: 100%;
height: 40%;
position: absolute;
top: 100px;
left: 50px;

`;
