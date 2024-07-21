import React from "react";
import { AppRegistry, StyleSheet, Text, ScrollView, View, TouchableOpacity, Linking, Alert, ImageBackground  } from "react-native";
// import tools from './tools.json'; // Uncomment if using tools from a JSON file
import { name as appName } from '../app.json'; // Uncomment if using appName for registration


const myWorks = {
  Projects: [
    {
      name: "tom-menu",
      link: "https://thomaskitaba.github.io/tom-blog-post",
      description: "A simple hotel menu with a list of items and prices with the capability to add and remove items from the cart.",
      technologyUsed: "React, JavaScript, HTML, CSS"
    },
    {
      name: "k2n Consultants",
      link: "https://k2nconsultant.free.nf/",
      description: "A consultancy service website for K2N Consultants.",
      technologyUsed: "HTML, CSS, JavaScript"
    },
    {
      name: "Who I am",
      link: "https://thomas-kitaba.my.canva.site/tom-heritage",
      description: "A personal site about who I am and my heritage.",
      technologyUsed: "Canva"
    },
    {
      name: "Google Portfolio",
      link: "https://sites.google.com/view/thomaskitaba",
      description: "A portfolio of my work hosted on Google Sites.",
      technologyUsed: "Google Sites"
    },
    {
      name: "Tom Marketer",
      link: "https://thomas-kitaba.my.canva.site/",
      description: "A marketing website showcasing my skills and services.",
      technologyUsed: "Canva"
    },
    {
      name: "Tom Travel",
      link: "https://tomtravel.netlify.app/",
      description: "A travel website providing information about travel destinations.",
      technologyUsed: "HTML, CSS, JavaScript"
    },
    {
      name: "Tom Restaurant",
      link: "https://tomrestorant.netlify.app/",
      description: "A restaurant website featuring menus and reservation capabilities.",
      technologyUsed: "HTML, CSS, JavaScript"
    },
    {
      name: "React Portfolio",
      link: "https://thomaskitaba.github.io/thomas-portifolio",
      description: "A portfolio showcasing my projects and skills, built with React.",
      technologyUsed: "React, JavaScript, HTML, CSS"
    },
    {
      name: "Tom Blog Post",
      link: "https://thomaskitaba.github.io/tom-blog-post/",
      description: "A blog platform where I post articles about various topics.",
      technologyUsed: "HTML, CSS, JavaScript"
    },
    {
      name: "Panorama Menu",
      link: "https://thomaskitaba.github.io/panorama-menu/",
      description: "A menu for Panorama Restaurant with item filtering and cart functionality.",
      technologyUsed: "HTML, CSS, JavaScript"
    }
  ]
};

const Page = () => {
  const openURL = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>tom-web-toolbox</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {Object.keys(myWorks).map((subcategory, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionHeader}>{subcategory}</Text>
            <View style={styles.buttonContainer}>
              {myWorks[subcategory].map((work, key) => (
                <TouchableOpacity
                  key={key}
                  style={styles.customButton}
                  onPress={() => openURL(work.link)}
                >
                  <Text style={styles.textButton}>{work.name}</Text>
                  <Text style={styles.textTechnology}>{work.technologyUsed}</Text>
                  <Text style={styles.textDescription}>{work.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  textDescription: {
    fontSize: 16,
  },
  textTechnology: {
    fontSize: 20,
    color: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  main: {
    alignItems: "center",
    marginVertical: 20,
  },
  customButton: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 10,
    margin: 5,
    width: '45%', // Each button takes up about half the width of the container
    alignItems: "center",

    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow properties for Android
    elevation: 5,
  },
  textButton: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

// Uncomment if you need to register the component with AppRegistry
AppRegistry.registerComponent(appName, () => Page);

export default Page;

  // The code above is a simple React Native app that displays a list of projects with their names, descriptions, and technologies used. The projects are stored in an object called  myWorks  and are displayed in a scrollable list.
  // To run the app, you can use the following
  // command:
  // npx expo start

  // if you are unbable to run it on conected device then
  // use
  // command: npx expo start --tunnel
