
const MeScreen = ({ navigation }) => {
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => navigation.navigate('Notifications')}
      title="Go to notifications"
    />
  </View>
}

export default MeScreen;
