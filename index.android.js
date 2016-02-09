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
  MapView,
  View
} from 'react-native';

import RNGMap from 'react-native-gmaps';

class TwitterGeoloc extends Component {

  render() {
    return (
      <View>
        <RNGMap
          ref={'gmap'}
          style={ { height: 500, width: 500 } }
          markers={ [
                { coordinates: {lng: 0.1, lat: 51.0} },
                { 
                  coordinates: {lng: -0.1, lat: 51.0}, 
                  title: "Click marker to see this title!",
                  snippet: "Subtitle",
                  id: 0,
                  /*
                   * Able to use "my_icon" or {uri: 'my_icon', width: 100, height: 100 } here as well
                   */
                  // icon: require('image!my_icon'), // <-- android/app/src/main/res/drawable/my_icon.png
                  /*
                   * color is only working with default icon
                   */
                  color: 120,
                }
            ] }
          zoomLevel={10}
          onMapChange={(e) => console.log(e)}
          onMapError={(e) => console.log('Map error --> ', e)}
          center={ { lng: 0.1, lat: 51.0 } } 
          /*
           * clickMarker shows Info Window of Marker with id: 0,
           * hides Info Window if given null
           */
          clickMarker={0}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 300,
    margin: 0,
  },
});

AppRegistry.registerComponent('TwitterGeoloc', () => TwitterGeoloc);
