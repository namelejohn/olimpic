import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {filterData} from '../data/data.ts';
import COLORS from '../styles/colors.ts';
import {FONT_WEIGHT} from '../styles/constants.ts';

const CategoryFilter = ({
  activeFilter,
  onSelect,
}: {
  activeFilter: any;
  onSelect: (filter: any) => void;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.gradientBackground}>
        {filterData.map(filter => (
          <View key={filter.id} style={styles.filterContainer}>
            <Pressable
              onPress={() => onSelect(filter)}
              style={[
                styles.filterButton,
                activeFilter.name === filter.name && styles.activeFilterButton,
              ]}>
              <Text
                style={[
                  styles.filterText,
                  activeFilter.name === filter.name && styles.activeFilterText,
                ]}>
                {filter.name}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 6,
  },
  gradientBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 3,
    borderRadius: 32,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  activeFilterButton: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  activeFilter: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    color: COLORS.textColor,
    fontSize: 13,
    fontWeight: FONT_WEIGHT,
  },
  activeFilterText: {
    color: COLORS.textColor,
  },
  filterTextActive: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: FONT_WEIGHT,
    padding: 4,
  },
});

export default CategoryFilter;
