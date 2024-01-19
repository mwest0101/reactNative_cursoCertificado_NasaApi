import React from "react";
import { Text, View ,StyleSheet,ScrollView} from "react-native";
import { PostImage } from "../../types";

const LastFiveDaysImages: FC<PostImage[]> = (PostImage) => {
    return(
      <View>
        <Text>
            Last Five Days
        </Text>
      </View>  
    );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginVertical: 8,
  },
  title:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  }
});

export default LastFiveDaysImages;