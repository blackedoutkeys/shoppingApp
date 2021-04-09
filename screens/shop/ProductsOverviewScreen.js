import React from 'react';
import { FlatList, Text }  from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);

    return( 
    <FlatList 
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => <ProductItem />}
    )
}

ProductOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductOverviewScreen