import { SafeArea } from "../../restaurants/screens/restaurants.screen";
import { Text } from "react-native";
import MapView, { Callout, Marker, MarkerAnimated } from "react-native-maps";
import { Search } from "../component/search.component";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { CalloutComponent } from "../component/callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({navigation}) => {
  const { restaurants } = useContext(RestaurantsContext);
  const { location } = useContext(LocationContext);

  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northEastLat = viewport.northeast.lat;
    const southWestLat = viewport.southwest.lat;
    setLatDelta(northEastLat - southWestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
           <MarkerAnimated 
           key={restaurant.name}
           title={restaurant.name}
           coordinate={{
             latitude: restaurant.geometry.location.lat,
             longitude: restaurant.geometry.location.lng,
           }}
         >
          <Callout onPress={()=>{navigation.navigate('RestaurantDetail',{restaurant})}} >
            <CalloutComponent restaurant={restaurant} />
          </Callout>
         </MarkerAnimated>
          );
        })}
      </Map>
    </>
  );
};
