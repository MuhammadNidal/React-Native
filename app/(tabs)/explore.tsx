import { Text, StyleSheet, View, Image,TextInput, ScrollView } from "react-native";
import React,{useState} from "react";

export default function TabTwoScreen() {
  const [text,setText]=useState("");
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Images Row */}
        <View style={styles.imageRow}>
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/ec/a6/da/eca6da2e377514a38db858305a71a8d2.jpg",
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/ec/a6/da/eca6da2e377514a38db858305a71a8d2.jpg",
            }}
            style={styles.image}
          />
          <Image
            source={require("../../assets/images/android-icon-foreground.png")}
            style={styles.image}
          />
        </View>
        <TextInput
        placeholder="Enter text here"
          style={styles.textInput}
          onChangeText={text => setText(text)}
                  value={text}
        />
        {/* Text Section */}
        <View style={styles.textBox}>
          <Text style={styles.text}>Hello,{text}</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>This is my simple text</Text>
        </View>
           <Text style={styles.text}>This is my simple text</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>This is my simple text</Text>
        </View>
            <Text style={styles.text}>This is my simple text</Text>
            <View style={styles.textBox}>
              <Text style={styles.text}>This is my simple text</Text>
            </View>
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 scrollContainer: {
  flexGrow: 2,
  backgroundColor: "#f9f1f3",
  paddingVertical: 20,
  paddingHorizontal: 10,
},
textInput:{
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 5,
  paddingHorizontal: 80,
  marginBottom: 20,
},
 container: {
  backgroundColor: "#f9f1f3",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: 30,
},

  imageRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 10,
    marginBottom: 20,
    gap: 10,
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ff8c94",
  },
  textBox: {
    backgroundColor: "orange",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ff7300",
    marginVertical: 10,
    width: "90%",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
