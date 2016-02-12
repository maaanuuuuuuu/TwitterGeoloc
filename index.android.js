/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNGMap from 'react-native-gmaps';

class TwitterGeoloc extends Component {


  services = {
    tools: {
      getColorForCategory: function(name) {

        return 120;
      }
    }
  };

  markers = [];
  geoloc = null;
  

  initMessages() {
    var newMarkers = [];
    for (var i = 0; i < messages.length; i++) {
      var title = messages[i].author;
      var snippet = messages[i].content;
      var coordinates = {
        lng: messages[i].coordinates.lng,
        lat: messages[i].coordinates.lat,
      };
      var id = messages[i].id;
      var color = this.services.tools.getColorForCategory(messages[i].category);
      newMarkers.push(
        {
            title: title,
            snippet: snippet,
            coordinates: coordinates,
            // id: id,
            /*
             * Able to use "my_icon" or {uri: 'my_icon', width: 100, height: 100 } here as well
             */
            // icon: require('image!my_icon'), // <-- android/app/src/main/res/drawable/my_icon.png
            /*
             * color is only working with default icon
             */
            color: color,
            // 
        }        
      );
    }
    console.log("newMarkers");
    console.log(newMarkers);
    this.markers = this.markers.concat(newMarkers);
  }

  initGeoloc() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(JSON.stringify(position));
        this.geoloc = { lng: pos.coords.longitude, lat: pos.coords.latitude };
      }
    );
  }

  render() {
    this.initMessages();
    this.initGeoloc();
    
    return (
      <View style={styles.mainView}>
        <RNGMap
          ref={'gmap'}
          style={styles.map}
          markers={this.markers}
          zoomLevel={config.zoomLevel}
          onMapChange={(e) => console.log(e)}
          onMapError={(e) => console.log('Map error --> ', e)}
          center={ this.geoloc } 
          /*
           * clickMarker shows Info Window of Marker with id: 0,
           * hides Info Window if given null
           */
          // clickMarker={1}
          />
      </View>
    );        
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'stretch',
  },
  map: { 
    flex: 1,
  },
});

const config = {
  zoomLevel: 10,
};

var categories = {
  NEWS: "news",
}

var messages = 
[
  {
    author: "@manu123",
    content: "Girls on fire here",
    coordinates: {lng: 0.1, lat: 51.0},
    category: categories.NEWS,
    id: 1,
  },
  { 
    coordinates: {lng: 0, lat: 51.0}, 
    author: "@dude",
    content: "So cool here",
    category: categories.NEWS,
    id: 2,
  }
];



AppRegistry.registerComponent('TwitterGeoloc', () => TwitterGeoloc);
