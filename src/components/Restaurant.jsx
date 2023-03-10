import { useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

export default function Restaurant({ term }) {
    const [{ data, loading }, searchRestaurants] = useRestaurants()
    
    const shuffleArray = (array) => {
        if (term.length % 2 === 0 && term[0] === "D") return array.filter((item, index) => index < 3 && index > 1)
        if (term.length % 2 === 0) return array.reverse();
        if (term.length === 7) return array.filter((item, index) => index > 2)
        return array;
    }
    useEffect(() => {
        searchRestaurants();
    }, [term]);

    if (loading) return <ActivityIndicator size={"large"} marginVertical={30} />


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList
                data={shuffleArray(data)}
                keyExtractor={(restaurant) => restaurant.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <RestaurantItem restaurant={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 25,
        height: 400

    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,

    }
});
