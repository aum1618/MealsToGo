import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";

import { Avatar, List } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/Text";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem=styled(List.Item)`
padding: ${(props)=>props.theme.space[3]};
`;

const AvatarContainer=styled(View)`
align-items: center;
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogout,user } = useContext(AuthenticationContext);
  const [photo,setPhoto]=useState(null)

  const getPicture=async(cr=user)=>{

    const photoURI= await AsyncStorage.getItem(`${cr.uid}-photo`)
      setPhoto(photoURI)

  }

  useFocusEffect(
    React.useCallback(() => {
      getPicture(user);
    }, [user])
  );
  

  return (
    <SafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={()=>navigation.navigate("Camera")}>
{!photo ?<Avatar.Icon icon='account' size={180}  />:<Avatar.Image source={{uri:photo}} size={180}  />}
        </TouchableOpacity>
        <Spacer />
        <Text>{user.email}</Text>
        </AvatarContainer>
      <List.Section>
        <SettingsItem
        
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};