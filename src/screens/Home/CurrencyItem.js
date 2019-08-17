import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import * as Colors from '../../utils/Colors';

const CurrencyItem = ({currency}) => (
  <View style={styles.container}>
    <View style={styles.symbolContainer}>
      <Text style={styles.symbolText}>{currency.symbol}</Text>
    </View>
    <View style={styles.secondContainer}>
      <Text style={styles.priceText}>{`$ ${Math.round(currency.usdPrice * 100) /
        100}`}</Text>
      <Text style={styles.nameText}>{currency.name}</Text>
      <Text style={styles.dateText}>{`Updated at ${
        currency.lastUpdated
      }`}</Text>
    </View>
    {currency.isMineable && <Image source={require('../../assets/mineable.png')} resizeMode="contain" style={styles.minableImage}/> }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    height: 71,
    borderRadius: 5,
    shadowColor: Colors.WHITE,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 5,
  },
  symbolContainer: {
    backgroundColor: Colors.SAND,
    width: 71,
    height: 71,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  symbolText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.BLACK,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.SAND,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.BLACK,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.WARM_GREY,
  },
  minableImage: {
    width: 30,
    height: 30,
  },
});
export default CurrencyItem;
