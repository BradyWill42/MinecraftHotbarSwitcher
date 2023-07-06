import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';
import { Video, ResizeMode } from 'expo-av';
import { Linking } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        automationsArray: [
            {
                title: "Iron Farm",
                videoLink: "https://codehs.com/uploads/21318f46933957ad4c0cc2a572aa51dd",
                linkToMaterialList: "https://www.youtube.com/watch?v=uffynASW9KI",
                num: 0,
                vidImage: "https://codehs.com/uploads/d75e311c9caa630af5f6ea01ab2b2c53",
            },
            {
                title: "General Mob Farm",
                videoLink: "https://codehs.com/uploads/86a34a0b4159cb965d0037487a02e271",
                linkToMaterialList: "https://www.youtube.com/watch?v=Aqf69erGGN8",
                num: 1,
                vidImage:"https://codehs.com/uploads/f7d95c89f9b8c1130a9735b79463018b",
            },
            {
                title: "Enderman XP Farm",
                videoLink: "https://codehs.com/uploads/765f79763737d4348a4d91b4b460e8b3",
                linkToMaterialList: "https://www.youtube.com/watch?v=teaOn3msuCA",
                num: 2,
                vidImage:"https://codehs.com/uploads/1e25870d3611e7dc7fe5622d44756616",
            },
            {
                title: "Gold Farm",
                videoLink: "https://codehs.com/uploads/66c54bbb4fb06bac54f10cceac41fe96",
                linkToMaterialList: "https://www.youtube.com/watch?v=eSHaNp5OGpc",
                num: 3,
                vidImage:"https://codehs.com/uploads/7a902be231d92e0004e667814b6418c5",
            },
            {
                title: "Drowned Farm",
                videoLink: "https://codehs.com/uploads/e8aac9f524de95eb65b3afd1b075c5f9",
                linkToMaterialList: "https://www.youtube.com/watch?v=47bzw-l7VVk",
                num: 4,
                vidImage:"https://codehs.com/uploads/592516ac1edcfcc57c70f1619955580c",
            },
        
        ],

        guidesArray: [
            {
                title: "Brewing Guide",
                linkToGuide: "https://minecraft.fandom.com/wiki/Brewing",
                num: 0,
                guideImage: "https://codehs.com/uploads/3f5585e59e7e3e04f0bf10666b6294bd",
            },
            {
                title: "Trading Guide",
                linkToGuide: "https://minecraft.fandom.com/wiki/Trading",
                num: 1,
                guideImage:"https://codehs.com/uploads/1ee54f3e9e626282a5bb4de4853028c0",
            },
            {
                title: "Enchanting Guide",
                linkToGuide: "https://minecraft.fandom.com/wiki/Enchanting",
                num: 2,
                guideImage:"https://codehs.com/uploads/292bd3223a5afe3c7f816c08fa1f8f89",
            },
        
        ],

        tipsArray: [
          {
            title: "Bonemeal Tip",
            content: "If you use bonemeal on a flower, you will get more of that same flower, as compared to bonemealing the grass."
          },
          {
            title: "Mob Heads",
            content: "If you trap a creeper and put a lightning rod next to it, and trap the mobs you wish to kill below it, when lightning strikes the rod, light the creeper on fire with flint and steel, then break the block below the creeper and get all the mob heads of the trapped mobs below the creeper.",
          },
          {
            title: "Super Beacon",
            content: "Build a Super Beacon. Start by building one beacon, then extend the top and build the pyramid around it until you can place 6 beacons on top, all of which are fully powered",
          },
          {
            title: "Wither Skeleton Killing",
            content: "Wither Skeletons are taller than 2 blocks high.",
          },
          {
            title: "Potion Tipped Arrows",
            content: "Fill a cauldron with a potion, and use arrows on it to tip them with that potion.",
          },
        ],
        
        automationMaterials: [
                  [
                  "365 solid blocks (5 stacks & 44)",
                  "88 leaves (1 stack & 24)",
                  "24 glass",
                  "20 beds",
                  "6 signs",
                  "2 buttons",
                  "2 chests",
                  "1 campfire",
                  "1 hopper",
                  "1 lightning rod",
                  "water",
                  "10-20 villagers",
                  "10-20 workstations",
                  "10-20 trapdoors (to keep villagers in place)",
                  "10-20 levers",
                  "1 zombie",
                  "1 minecart",
                  "rail for the zombie minecart track",
                  "golden apples & weakness potions/arrows",
                  "optional piecing crossbow",
                  "extra rails",
                  "walls to keep out mobs",
                ],
                [
                   "2,448 scaffolding (38 stacks & 16)",
                   "2,605 solid blocks (52 stacks & 5)",
                   "1,195 glass (18 stacks & 43)",
                   "544 signs (18 stacks of 16)",
                   "552 coral fans (optional) (8 stacks & 40)",
                   "1,161 slabs (18 stacks & 9)",
                   "408 leaves (6 stacks & 24)",
                   "62 magma blocks",
                   "60 packed ice",
                   "55 redstone",
                   "58 slabs",
                   "9 repeaters",
                   "8 pistons",
                   "8 observers",
                   "6 buttons",
                   "6 stairs",
                   "4 glass panes",
                   "3 trapdoors",
                   "2 droppers",
                   "1 soul sand",
                   "1 lever",
                   "2 impaling 5 tridents",
                   "water",
                   "marker blocks",
                ],
                [
                   "1,120 Netherrack",
                   "948 solid blocks for spawn platform",
                   "903~ glass dor entire build, and platforms",
                   "768 stone/cobble for water platform",
                   "698 slabs",
                   "619 filler temporary dirt",
                   "315 ice for water sources",
                   "21 trapdoors",
                   "14 rail",
                   "13 powered rail",
                   "9 walls",
                   "6 chests",
                   "6 levers",
                   "5 hoppers",
                   "1 hopper minecart",
                   "lots of flint and steel",
                   "infinite water source",
                   "extra rails, levels, and glass for walk ways to afk spot, and to main island.",
                ],
                [
                   "6 chests",
                   "10 hoppers",
                   "1 minecart with hopper",
                   "1 rail",
                   "2 dispensers",
                   "5 redstone repeaters",
                   "3 redstone comparators",
                   "2 lava buckets",
                   "2 water buckets",
                   "3 glass blocks",
                   "6 ladders",
                   "12 observers",
                   "1 sticky piston",
                   "4 pistons",
                   "1 trident",
                   "1 slab",
                   "2 torches",
                   "3 levers",
                   "5 wooden trapdoors",
                   "20 redstone torches",
                   "37 redstone",
                   "1 stack and 24 obsidian (88 obsidian)",
                   "41 rotten flesh",
                   "41 gold nuggets",
                   "41 gold ingots",
                   "1 flint and steel",
                   "544 solid blocks (8 stacks & 32)",
                ],
                [
                   "1 chest",
                   "1 hopper",
                   "20 smooth stone slabs",
                   "2 glass",
                   "1 soul sand",
                   "4 signs",
                   "2 water buckets",
                   "1 sea turtle egg",
                   "2 torches",
                   "22 ladders",
                   "38 kelp",
                   "224 smooth stone (3.5 stacks)",
                ]
        ],

        multiplier: 1,
        automationsPage: 'block',
        hintsPage: 'none',
        guidesPage: 'none',
        automationInformation: 'none',
        videoInformation: 'block',
    }

    handleAutomationsPagePress = () => {
        this.setState({ 
            automationsPage: 'block',
            hintsPage: 'none',
            guidesPage: 'none',
            automationInformation: 'none',
            videoInformation: 'block',
            multiplier: 1,
        });
    }
    handleHintsPagePress = () => {
        this.setState({ 
            automationsPage: 'none',
            hintsPage: 'block',
            guidesPage: 'none',
            automationInformation: 'none',
            videoInformation: 'none',
            multiplier: 1,
        });
    }
    handleGuidesPagePress = () => {
        this.setState({ 
            automationsPage: 'none',
            hintsPage: 'none',
            guidesPage: 'block',
            automationInformation: 'none',
            videoInformation: 'none',
            multiplier: 1,
        });
    }
    handleAutomationInfoPagePress = () => {
        this.setState({ 
            automationsPage: 'block',
            hintsPage: 'none',
            guidesPage: 'none',
            automationInformation: 'block', 
            videoInformation: 'none',
            multiplier: 3,
        });
    }



    render() {
        return (
            <View style={styles.container}>
            
                <View style={styles.headerCont}>
                    <ImageBackground
                        style={styles.topBar}
                        source={{ uri: 'https://codehs.com/uploads/687a89e39c44e2bc157e8dcdcb524b35' }}
                    >
                    
                    </ImageBackground>
                
                    <ImageBackground
                        style={styles.topBar}
                        source={{ uri: 'https://codehs.com/uploads/8f2ca67488fa0e790747ffde0dbdead8' }}
                    >
                    
                    </ImageBackground>
                </View>
                
                <View style={styles.sectionHolder}>
                    <View style={styles.sideBar}>
                    
                        <TouchableHighlight
                            onPress = {this.handleAutomationsPagePress}
                        >
                            <View style={styles.sideIcons}>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/ec5a00910bae1bb43a6e22a812d2e794' }}
                                    style={styles.sideIcons}
                                />
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress = {this.handleHintsPagePress}
                        >
                            <View style={styles.sideIcons}>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/8d87c08b0ecaa9222fe1ac4ca0f1a18d' }}
                                    style={styles.sideIcons}
                                />
                            </View>
                        </TouchableHighlight>
                        
                        <TouchableHighlight
                            onPress = {this.handleGuidesPagePress}
                        >
                            <View style={styles.sideIcons}>
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/a1a206354422c580c2785019c9270114' }}
                                    style={styles.sideIcons}
                                />
                            </View>
                        </TouchableHighlight>
                      
                    </View>
                    
                    <View style={{ display: this.state.automationsPage}}>                       
                        <View style={styles.pageContainer}>
                            <View style={styles.pageTitleBox}>
                                <Text style={styles.titleText}>
                                    Automations
                                </Text>
                            </View>
                            
                            <View style={styles.textBodyBox}>
                                <ScrollView
                                  maximumZoomScale={4}
                                  minimumZoomScale={1}
                                >
                                  {this.state.automationsArray.map((automation, index) => (
                                    <View style={styles.informationContainer}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.titleTextStyle}>
                                              {automation.title}
                                            </Text>
                                        </View>
                                        <View style={styles.videoBox}>
                                            <Video
                                              style={styles.videoBox}
                                              source={{uri: automation.videoLink}}
                                              resizeMode={ResizeMode.CONTAIN}
                                              posterSource={{uri: automation.vidImage}}
                                              useNativeControls={true}
                                              usePoster={false}
                                              isLooping={false}
                                              shouldPlay={false}
                                            />

                                            <View style={{ display: this.state.automationInformation}}>        
                                              <View style={styles.informationContainer}>  
                                                <View style= {styles.materialMargins}>             
                                                  {this.state.automationMaterials[index].map((mats) => (
                                                    <View style={styles.automationInformation}>
                                                      <View style={styles.materialContainer}>
                                                        <Text style={styles.materialTextStyle}>
                                                          {mats}
                                                        </Text>
                                                      </View>
                                                    </View>
                                                  ))}
                                                </View>
                                                <TouchableHighlight
                                                  onPress = {this.handleAutomationsPagePress}
                                                > 
                                                  <View style={styles.materialButton}>
                                                    <Text>
                                                        Hide Materials
                                                    </Text>
                                                  </View>
                                                </TouchableHighlight>
                                              </View>
                                            </View> 
                                            <View style={{ display: this.state.videoInformation}}>
                                              <View style={styles.videoBox}>
                                                <Image
                                                  source={{uri: automation.vidImage}}
                                                  style={styles.videoBox}
                                                />
                                              </View>
                                              <View style={styles.linkContainer}>
                                                <Text style={styles.linkTextStyle}
                                                      onPress={() => Linking.openURL(automation.linkToMaterialList)}>
                                                  Link to Video
                                                </Text>
                                              </View>
                                              <TouchableHighlight
                                                onPress = {this.handleAutomationInfoPagePress}
                                              >
                                                <View style={styles.materialButton}>
                                                  <Text>
                                                      View Materials
                                                  </Text>
                                                </View>
                                              </TouchableHighlight>
                                            </View>
                                        </View>
                                    </View>
                                  ))}
                                </ScrollView>
                            </View>
                          </View>
                        </View>
                    
                    <View style={{ display: this.state.hintsPage}}>                       
                        <View style={styles.pageContainer}>
                            <View style={styles.pageTitleBox}>
                                <Text style={styles.titleText}>
                                    Tips
                                </Text>
                            </View>
                            <View style={styles.textBodyBox}>
                                <ScrollView>
                                  {this.state.tipsArray.map((tips) => (
                                    <View style={styles.tipsBox}>
                                      <Text style={styles.tipsTitle}>
                                        {tips.title}
                                      </Text>
                                      <Text style={styles.tipsContent}>
                                        {tips.content}
                                      </Text>
                                    </View>
                                  ))}
                                </ScrollView>
                            </View>
                        </View>
                    </View> 
                    
                    <View style={{ display: this.state.guidesPage}}>                       
                        <View style={styles.pageContainer}>
                            <View style={styles.pageTitleBox}>
                                <Text style={styles.titleText}>
                                    Guides
                                </Text>
                            </View>
                            <View style={styles.textBodyBox}>
                                <ScrollView
                                  maximumZoomScale={4}
                                  minimumZoomScale={1}
                                >
                                  {this.state.guidesArray.map((guide) => (
                                    <View style={styles.guidesBox}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.titleTextStyle}>
                                              {guide.title}
                                            </Text>
                                        </View>
                                        <View style={styles.guideLinkContainer}>
                                          <Text style={styles.linkTextStyle}
                                              onPress={() => Linking.openURL(guide.linkToGuide)}>
                                              Link to Guide
                                          </Text>
                                        </View>   
                                        <ScrollView
                                            maximumZoomScale={4}
                                            minimumZoomScale={1}
                                            horizontal={true}
                                        >
                                          <View style={styles.guideImageContainer}>
                                            <Image
                                                source={{uri: guide.guideImage}}
                                                style={styles.guideImageBox}
                                            />
                                            <Image
                                                source={{uri: guide.guideImage2}}
                                                style={styles.guideImageBox}
                                            />  
                                          </View>
                                        </ScrollView>
                                    </View>   
                                  ))}
                                  
                                </ScrollView>
                            </View>
                        </View>
                    </View> 
                  </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#795548',
    },
    sectionHolder: {
        height: 13 * deviceHeight / 16,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerCont: {
        height: 3*deviceHeight / 16,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#795548",
    },
    topBar: {
        height: 2*deviceHeight / 24,
        width: 2*deviceWidth / 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    sideBar: {
        height: 13*deviceHeight / 16,
        width: deviceWidth / 5,
        backgroundColor: "#3e5c20",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    pageContainer: {
        height: 13*deviceHeight / 16,
        width: 4*deviceWidth / 5,
        backgroundColor: '#8E919E',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    sideIcons: {
        height: deviceHeight / 12,
        width: deviceHeight / 12,
        borderColor: 'black',
        borderWidth: 1,
    },
    pageTitleBox: {
        height: 2*deviceHeight / 16,
        width: 13*deviceWidth / 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    titleText: {
        color: "#474747",
        fontWeight: 'bold',
        fontSize: deviceHeight / 18,
        fontFamily: 'Comic Sans MS'
    },
    textBodyBox: {
      height: 11*deviceHeight / 16,
      width: 13*deviceWidth / 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    informationContainer: {
      height: (11 * deviceHeight / 16),
      width: 12* deviceWidth / 16,
      alignItems: 'center',
      marginBottom: deviceHeight / 25,
      marginTop: deviceHeight /50,
    },
    videoBox: {
      height: (12*(deviceWidth / 16)) / 1.78,
      width: 12*deviceWidth / 16,
    },
    titleContainer: {
      height: 1*deviceHeight / 16,
      width: 12*deviceWidth / 16,
      alignItems: 'center',
    },
    titleTextStyle: {
      color: 'black',
      fontSize: deviceHeight / 30,
      fontWeight: 'bold',
    },
    linkContainer: {
      marginTop: 10,
      height: 1*deviceHeight / 16,
      width: 12*deviceWidth / 16,
      alignItems: 'center',
    },
    linkTextStyle: {
      color: 'blue',
      fontSize: deviceHeight / 40,
    },
    materialButton: {
      height: 1* deviceHeight / 16,
      width: 12 * deviceWidth / 16,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: "center",
    },
    materialContainer: {
      height: 1 * deviceHeight / 80,
      width: 12* deviceWidth / 16,
      alignItems: 'flex-start',
    },
    materialTextStyle: {
      color: 'black',
      fontSize: deviceHeight / 100,
    },
    materialMargins: {
      margin: 10,
    },
    guidesBox: {
      height: 10 * deviceHeight / 16,
      width: 12 * deviceWidth / 16,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: deviceHeight / 25,
    },
    guideLinkContainer: {
      marginTop: 10,
      height: 1*deviceHeight / 16,
      width: 12*deviceWidth / 16,
      alignItems: 'center',
    },
    guideImageContainer: {
      height: 16 * deviceHeight / 16,
      width: 16.5 * deviceWidth / 16,
      flexDirection: 'row',
    },
    guideImageBox: {
      height: 800 / 2,
      width: 788 / 2,
    },
    tipsBox: {
      height: 5 * deviceHeight / 16,
      width: 12 * deviceWidth / 16,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: deviceHeight / 30,
    },
    tipsTitle: {
      color: 'black',
      fontSize: deviceHeight / 35,
      fontWeight: 'bold',
      marginBottom: deviceHeight / 20,
    },
    tipsContent: {
      color: 'black',
      fontSize: deviceHeight / 40,
    }



    
});