import {FlatList, Platform, StyleSheet, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Header} from './src/header/Header';
import {Footer} from './src/footer/Footer';
import {Empty} from './src/empty/Empty';
import {PADDING, RenderItem} from './src/renderItem/RenderItem';
import {fakeData} from './src/data/Data';


export default function App() {


    return (
        <View style={styles.container}>
            <StatusBar style={'light'}/>
            <FlatList
                data={fakeData}
                renderItem={RenderItem}
                numColumns={2}
                contentContainerStyle={{paddingHorizontal: PADDING, flexGrow:1}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                ListHeaderComponent={Header}
                ListHeaderComponentStyle={styles.header}
                stickyHeaderIndices={[0]}
                ListFooterComponent={Footer}
                ListFooterComponentStyle={styles.footer}
                ListEmptyComponent={Empty}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cecece',
    },
    header: {
        borderWidth: 1,
        marginHorizontal: -PADDING,
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#21201E',
        marginBottom: 19,
    },
    footer:{
        marginHorizontal:-PADDING,
        backgroundColor:'#21201E',
    },
});
