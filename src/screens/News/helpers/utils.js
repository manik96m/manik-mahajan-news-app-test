import { AsyncStorage } from 'react-native';

const BOOKMARK_KEY = 'articles';

const retrieveBookmarks = async () => {
  try {
    const value = await AsyncStorage.getItem(BOOKMARK_KEY);
    if (value !== null) {
      console.log('data retrieved');
      return value;
    }
  } catch (error) {
    console.log('Error retrieving data');
  }
};

const bookmarkArticle = async (article) => {
  let newProduct = await retrieveBookmarks();
  if(!newProduct){
    newProduct = [];
  } else {
    newProduct = JSON.parse(newProduct);
  }

  newProduct.push(article);
  try {
    await AsyncStorage.setItem(BOOKMARK_KEY, JSON.stringify(newProduct));
    console.log('data saved');
  } catch (error) {
    console.log('Error saving data');
  }
};



export { bookmarkArticle, retrieveBookmarks };
