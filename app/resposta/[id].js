import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, images, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import RespostasSlide from "../../components/common/slide/RespostasSlide";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("respostas", {
    query: 'respostas',
    resposta: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(()=>{
    setRefreshing(true)
    refetch()
    setRefreshing(false)
  })
  const tabs = ["About", "Qualifications", "Responsibilities"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return <Specifics 
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ['N/A']}
        />
      case "About":
        return <JobAbout 
            info={data[0].job_description ?? ['No data provided']}
        />
      case "Responsibilities":
        return <Specifics 
        title="Responsibilities"
        points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
        />

      default:
        break;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Sommething went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={images.juris_icon}
                jobTitle={data[0].titulo}
                companyName={''}
                location={''}
              />
              
              <View>
                <RespostasSlide respostas={data[0].respostas}/>
              </View>
              {/* {displayTabContent()} */}
              <JobFooter url={data[0]?.referencia ?? 'https://careers.google.com/jobs/results'}/>
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
