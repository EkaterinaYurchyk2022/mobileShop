import {Dimensions, Image, ListRenderItem, Pressable, StyleSheet, Text, View} from 'react-native';
import BasketIconBlack from '../icons/BasketIconBlack';

export type ItemType = {
    id: number
    title: string
    price: number
    image: any
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen')
export const PADDING = 20

export const RenderItem: ListRenderItem<ItemType> = ({item}) => {
    return <View style={styles.itemPhone}>
        <Image
            style={styles.phoneImage}
            resizeMode={'contain'}
            source={item.image}
        />
        <View style={styles.infoPhone}>
            <Text style={styles.phoneName}>{item.title}</Text>
            <View style={styles.containerPhonePrice}>
                <Text style={styles.phonePrice}>${item.price}</Text>
                <Pressable>
                    <BasketIconBlack/>
                </Pressable>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    itemPhone: {
        backgroundColor: '#fff',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        paddingTop: 12,
    },
    phoneImage: {
        width: (WIDTH - PADDING * 2) / 2 - 8,
        height: (WIDTH - PADDING * 2) / 2 - 8,
    },
    infoPhone: {
        marginTop: 19,
        marginBottom: 22,
        paddingLeft: 12,
        paddingRight: 15,
    },
    phoneName: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 16,
    },
    containerPhonePrice: {
        marginTop: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    phonePrice: {
        fontWeight: '400',
        lineHeight: 12,
        fontSize: 12,
    },
})