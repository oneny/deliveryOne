import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './categoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </ScrollView>
  )
}

export default Categories;