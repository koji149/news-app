import React from 'react';
import { StyleSheet,  View,  FlatList, SafeAreaView} from 'react-native';
import Listitem from './components/Listitem';
import articles from './dummies/articles'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={articles}
      renderItem={({item}) => <Listitem 
      imageUrl={item.urlToImage}
      title={item.titlr}
      author={item.author}/>}
      keyExtractor={(item, index) => index.toString()}  
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  }
});
