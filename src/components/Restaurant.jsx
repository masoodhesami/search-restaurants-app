import { useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";

export default function Restaurant() {
    const [{ data, loading }, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants();
    }, []);

    if (loading) return <ActivityIndicator size={"large"} marginVertical={30} />


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList
                data={data}
                keyExtractor={(restaurant) => restaurant.id}
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
       
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
       
    }
});
