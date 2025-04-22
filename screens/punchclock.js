import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PunchClock() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const formatTime = (sec) => {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const remainingSeconds = sec % 60;

    return `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
  };

  const handleCheckIn = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(seconds)}</Text>
        <Text style={styles.text1}>Working time</Text>

        <TouchableOpacity style={styles.checkInButton} onPress={handleCheckIn}>
          <Icon
            name="check-circle"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Text style={styles.checkInText}>Check In</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.locationContainer}>
        <View style={styles.locationRow}>
          <Icon
            name="cellphone"
            size={20}
            color="#000"
            style={styles.inlineIcon}
          />
          <Text style={styles.text2}>19.1457, 72.8747</Text>
        </View>
        <View style={styles.locationRow}>
          <Icon
            name="map-marker"
            size={20}
            color="#000"
            style={styles.inlineIcon}
          />
          <Text style={styles.text3}>Not checked in</Text>
        </View>
      </View>

      
      <View style={styles.mapContainer}>
        <Image
          source={require('../assets/map.png')}
          style={styles.map}
          resizeMode="cover"
        />
      </View>

      
      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>History</Text>
        <View style={styles.historyTableHeader}>
          <Text style={styles.historyHeaderText}>In</Text>
          <Text style={styles.historyHeaderText}>Out</Text>
          <Text style={styles.historyHeaderText}>Hours</Text>
          <Text style={styles.historyHeaderText}>Loc. In</Text>
          <Text style={styles.historyHeaderText}>Loc. Out</Text>
        </View>
        <View style={styles.historyEmptyRow}>
          <Text style={styles.historyEmptyText}>No records found</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },

  timerContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#50a13a',
  },
  text1: {
    fontSize: 17,
    color: '#333',
    marginBottom: 20,
  },
  checkInButton: {
    flexDirection: 'row',
    backgroundColor: '#008000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  checkInText: {
    color: '#fff',
    fontSize: 16,
  },
  locationContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  text2: {
    fontSize: 17,
    marginBottom: 5,
    color: '#333',
  },
  text3: {
    fontSize: 17,
    color: '#333',
  },
  mapContainer: {
    height: 200,
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  historyContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  historyTableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  historyHeaderText: {
    fontWeight: '600',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  historyEmptyRow: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  historyEmptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  inlineIcon: {
    marginRight: 8,
  },
});
