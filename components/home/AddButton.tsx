import { styles } from "@/css/home/addButton"
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Feather"

export default function AddButton() {
    return(
        <TouchableOpacity style={styles.addContainer}>
            <Icon name="plus" size={35} style={styles.add} />
        </TouchableOpacity>
    )
}

