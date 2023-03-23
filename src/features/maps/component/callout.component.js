import react from "react"
import { Image, Text, View } from "react-native"
import styled from "styled-components"
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component"



export const CalloutComponent=({restaurant})=>{
return (
    <CompactRestaurantInfo restaurant={restaurant} isMap />

)

}