import { View, Image, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons"


export default function RestaurantItem({ restaurant }) {
    return (
        <View style={[styles.shadow, styles.container]}>
            <Image style={styles.image} source={{ uri: restaurant.imgUrl }} />
            <View style={styles.infoContainer}>
                <Text style={styles.header}>{restaurant.name}</Text>
                <View style={styles.info}>
                    <Text style={styles.rating}>
                        {Array.from(Array(Number(restaurant.stars))).map(() => {
                            return <FontAwesome name="star" size={18} color={"gold"} />
                        })}
                    </Text>
                    <Text style={styles.address}>{restaurant.address} | {restaurant.work_time}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        elevation: 3,
        shadowOpacity: 0.1
    },
    container: {
        backgroundColor: "white",
        height: 100,
        width: "95%",
        alignSelf: "stretch",
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 20
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4
    },
    info: {
        flexDirection: "row",
        marginTop: 5
    },
    rating: {
        marginRight: 20,
        color: "gold",
        display: "block"
    },
    address: {
        color: "gray"
    }
})