import { ScrollView,  TouchableOpacity, View } from "react-native"
import styled from "styled-components"
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer";
import { Text } from "../typography/Text";


const FavouritesWrapper=styled(View)`
padding: 10px;
;
`;
export const FavouritesBar=({favourites,navigate})=>{
   return (
    <FavouritesWrapper>
    <Spacer variant="left.large">
      <Text variant="caption">Favourites</Text>
    </Spacer>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {favourites.map((restaurant) => {
        const key = restaurant.name;
        return (
          <Spacer key={key} position="left" size="medium">
                <TouchableOpacity onPress={()=>{navigate("RestaurantDetail",{restaurant:restaurant})}}>
              <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            
          </Spacer>
        );
      })}
    </ScrollView>
  </FavouritesWrapper>
   )
}