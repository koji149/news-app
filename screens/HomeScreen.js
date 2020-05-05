import React, {useState, useEffect} from 'react';
import { StyleSheet,  View,  FlatList, SafeAreaView} from 'react-native';
import Listitem from '../components/Listitem';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`


export default HomeScreen = (props) => {
  const {navigation} = props;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArtcles();
  }, []);

  const fetchArtcles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={articles}
      renderItem={({item}) => <Listitem 
      imageUrl={item.urlToImage}
      title={item.title}
      author={item.author}
      onPress={() => navigation.navigate("Article", {article: item})}/>}
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
