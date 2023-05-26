import {Pressable, StyleSheet, View} from 'react-native';
import BurgerIcon from '../icons/BurgerIcon';
import BasketIconWhite from '../icons/BasketIconWhite';

export const Header = () => {
    return (
        <View style={styles.headerContent}>
            <Pressable>
                <BurgerIcon/>
            </Pressable>
            <Pressable>
                <BasketIconWhite/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
})