import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/css/auth/checkBox";
import Checkbox from 'expo-checkbox';
import { Link } from "expo-router";
import { useState } from "react";


type Props = {
    isSelected: boolean;
    onPress: () => void;
}

export default function CheckBox({ isSelected, onPress }: Props) {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#000' : undefined} // Optional: change color when checked
                />
                <Text style={styles.paragraph}>I agree to the <Link style={styles.termsCondition} href={"/auth/login"}>Terms</Link> and <Link style={styles.termsCondition} href={"/auth/login"}>Conditions</Link></Text>
            </View>
        </View>
    )
}

