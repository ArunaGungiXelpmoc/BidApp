import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS, NFTData } from "../constants";
import FocusedStatusBar from "../components/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import NFTCard from "../components/NFTCard";

const HomeScreen = () => {
  
  const [nftData, setNFTData] = useState(NFTData);
  
  const handleSearch = (value) => {
    //console.log("Invoking handleSearch")
    if (!value.length) return setNFTData(NFTData);
    else {
      const filterSearch = NFTData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      //console.log(filterSearch);
      if (filterSearch.length) {
        setNFTData(filterSearch);
      } else {
        setNFTData(NFTData);
      }
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          ></FlatList>
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default HomeScreen;
