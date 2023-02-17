import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SHADOWS, SIZES, assets } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import { CircleButton } from "./Button";
import { RectButton } from "./Button";
import { SubInfo, NFTTitle, EthPrice } from "./SubInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  //console.log("In NFT Card Component:",data);
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderRadius: SIZES.font,
          marginBottom: SIZES.extraLarge,
          margin: SIZES.base,
          ...SHADOWS.dark,
        }}
      >
        <View style={{ width: "100%", height: 250 }}>
          {/* <Text>{data.image}</Text> */}
          <Image
            source={data.image}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: SIZES.font,
              borderTopRightRadius: SIZES.font,
            }}
          ></Image>
          <CircleButton
            imgUrl={assets.heart}
            right={10}
            top={10}
          ></CircleButton>
        </View>

        <SubInfo />
        <View style={{ width: "100%", padding: SIZES.font }}>
          <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          ></NFTTitle>
        </View>

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>

        <View style={{ width: "100%", padding: SIZES.font }}></View>
      </View>
    </ScrollView>
  );
};

export default NFTCard;
