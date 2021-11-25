import React from "react";
import styled from "styled-components";
import {foods, formatPrice} from "../Data/foodData";
import { FoodGrid, Food, FoodLabel } from "./FoodGrid";

const MenuStyled = styled.div`
 height: 1000px;

 margin: 0px 100px 50px 20px;
`
const Menu =({setOpenFood})=>{

    return(
        <MenuStyled>
           {Object.entries(foods).map(([sectionName, foods]) =>

           <>
           <h1> {sectionName}</h1>
           <FoodGrid>
               {
                   foods.map(food =>(
                       <food img={food.img}
                       onClick={()=>{
                       setOpenFood(food);
                       }}
                       >
                           <FoodLabel>
                               <div> { food.name} </div>
                               
                               <div> {formatPrice(food.price)}</div>
                            </FoodLabel>
                       </food>
                   ))
               }
           </FoodGrid>

           </>
           
           )}
        </MenuStyled>
    )
}

export default Menu;