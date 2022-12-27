import { View, TextInput, StyleSheet } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
export default function Search() {
    return (
        <View style={[styles.container, styles.shadow]}>
            <FontAwesome name="search" size={25} />
            <TextInput style={styles.input} placeholder="Restaurants, food" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 40,
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        elevation: 3,
        shadowOpacity: 0.1
    },
    input: {
        fontSize: 20,
        marginLeft: 10
    }

})

