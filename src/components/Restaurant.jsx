import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import useRestaurants from "../hooks/useRestaurants";

export default function Restaurant() {
    const [results, searchRestaurants] = useRestaurants()

    useEffect(() => {
        searchRestaurants();
    }, []);

    console.log(results);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restaurants</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 25,
        flex: 1
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
        height: 100
    }
});
