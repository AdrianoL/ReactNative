// src/components/footer/FooterItem.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface FooterItemProps {
	name: string;
	text: string;
	handlePress: () => void;
	screenName: string;
	routeName: string;
}

const FooterItem: React.FC<FooterItemProps> = ({
	name,
	text,
	handlePress,
	screenName,
	routeName,
}) => {
	const activeScreenColor = screenName === routeName ? 'darkmagenta' : 'blue';

	return (
		<TouchableOpacity onPress={handlePress}>
			<FontAwesome5
				name={name}
				size={25}
				style={styles.fontStyle}
				color={activeScreenColor}
			/>
			<Text style={styles.iconText}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	fontStyle: {
		marginBottom: 3,
		alignSelf: 'center',
	},
	iconText: {
		fontSize: 12,
		textAlign: 'center',
		textTransform: 'uppercase',
		color: 'blue',
	},
});

export default React.memo(FooterItem);
