// src/screens/Tournaments.tsx
import React, { useEffect } from 'react';
import {
	View,
	Text,
	FlatList,
	ActivityIndicator,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTournaments } from '../slices/tournamentSlice';
import { RootState } from '../store';
import { useNavigation } from '@react-navigation/native';

const Tournaments: React.FC = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const { tournaments, loading, error } = useSelector(
		(state: RootState) => state.tournaments,
	);

	useEffect(() => {
		dispatch(fetchTournaments());
	}, [dispatch]);

	if (loading) {
		return <ActivityIndicator size="large" />;
	}

	if (error) {
		return <Text>Error: {error}</Text>;
	}

	const renderItem = ({ item }: { item: any }) => (
		<TouchableOpacity
			onPress={() => navigation.navigate('TournamentDetail', { id: item._id })}
		>
			<Text style={styles.item}>{item.name}</Text>
		</TouchableOpacity>
	);

	return (
		<View>
			<FlatList
				data={tournaments}
				renderItem={renderItem}
				keyExtractor={(item) => item._id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 16,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
});

export default Tournaments;
