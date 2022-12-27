import { FlatList } from "react-native"
import CategoryItem from "../components/CategoryItem"

export default function Category({ term, setTerm }) {

    const commonCategories = [
        {
            name: "Burger",
            imgUrl: require("../assets/images/burger.png")
        },
        {
            name: "Pizza",
            imgUrl: require("../assets/images/pizza.png")
        },
        {
            name: "Dessert",
            imgUrl: require("../assets/images/cake.png")
        },
        {
            name: "Drinks",
            imgUrl: require("../assets/images/smoothies.png")
        },
        {
            name: "Steak",
            imgUrl: require("../assets/images/steak.png")
        },
        {
            name: "Pasta",
            imgUrl: require("../assets/images/pasta.png")
        }
    ]

    return (
        <FlatList
            data={commonCategories}
            renderItem={({ item, index }) => {
                return <CategoryItem
                    name={item.name}
                    imgUrl={item.imgUrl}
                    index={index}
                    active={item.name === term}
                    handlePress={() => setTerm(item.name)}
                />
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={category => category.name}
        />
    )
}