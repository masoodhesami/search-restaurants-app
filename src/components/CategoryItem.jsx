import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function CategoryItem({ name, imgUrl, index, active, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.container, styles.shadow, index === 0 ? { marginLeft: 25 } : { marginLeft: 8 }, active ? { backgroundColor: "rgb(241,186,87)" } : { backgroundColor: "white" }]}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={imgUrl} />
                </View>
                <Text style={styles.header}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        elevation: 3,
        shadowOpacity: 0.1
    },
    image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5
    },
    header: {
        fontWeight: "bold"
    }
})