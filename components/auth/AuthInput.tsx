import { TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { styles } from "@/css/auth/authInput";


type Props = {
    icon: string;
    placeholder: string;
    secureTextEntry?: boolean;
}

export default function AuthInput({ icon, placeholder, secureTextEntry }: Props) {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={18} color="#555" style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#999"
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

