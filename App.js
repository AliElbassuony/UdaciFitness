import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import History from './components/History'


const store = createStore(reducer)

const App  = ( ) => {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <View style={{height: 20}}/>
          <History />
        </View>
      </Provider>
    );
} 


export default App;