export function formatPrice(price){
    return price.toLocaleString("en-us",{
        style: "currency",
        currency: "USD",
    });
}

export const foodItems =[

    {
        name: "Cheese Pizza",
        img: "/img/B1.jpg",
        section: "Pizza",
        price: 1
    },
    {
        name: "Pepperonal Pizza",
        img: "/img/bb.jpg",
        section: "Pizza",
        price: 1.5
    },
    {
        name: "Chicken Pizza",
        img: "/img/B3.jpg",
        section: "Pizza",
        price: 2
    },
    
    
]

export const foods = foodItems.reduce((res,food)=>{
    if ( !res[food.section]){
        res[food.section] = []
    }
    res[food.section].push(food)
    return res;
}, {} )