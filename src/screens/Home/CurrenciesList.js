import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import * as actions from '../../Actions';
import * as Colors from '../../utils/Colors';
import CurrencyItem from './CurrencyItem';

class CurrenciesList extends Component {
  componentDidMount() {
    const {fetchCurrencies} = this.props;
    fetchCurrencies();
  }

  renderItem({item}) {
    return <CurrencyItem currency={item} />;
  }
  renderEmptyList() {
    const {noCurrenciesContainer, noCurrenciesText} = styles;
    return (
      <View style={noCurrenciesContainer}>
        <Text style={noCurrenciesText}>No Currencies there</Text>
      </View>
    );
  }
  render() {
    const {currencies, hasNext, isLoading, fetchCurrencies} = this.props;
    const {container} = styles;
    return (
      <View style={container}>
        {((currencies.length === 0 && !isLoading) || currencies.length > 0) && (
          <FlatList
            data={currencies}
            renderItem={this.renderItem.bind(this)}
            onEndReached={() => {
              if (currencies.length > 0 && hasNext) {
                fetchCurrencies(currencies.length + 1);
              }
            }}
            ListEmptyComponent={() => this.renderEmptyList()}
            keyExtractor={(item, index) => `${index}`}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  noCurrenciesContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noCurrenciesText: {
    fontSize: 25,
    color: Colors.WHITE,
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorStyle: {
    height: 1,
    flex: 1,
    marginTop: 6,
    backgroundColor: Colors.WHITE,
  },
});

const mapStateToProps = ({currencies}, props) => {
  const {list, hasNext, isLoading} = currencies;
  return {
    currencies: list,
    hasNext: hasNext,
    isLoading: isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCurrencies: nextItemIndex =>
    dispatch(actions.fetchCurrencies(nextItemIndex)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrenciesList);
