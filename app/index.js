import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { useState, useRef } from "react";
import { Stack, useRouter } from "expo-router";
import { Modalize } from "react-native-modalize";
import { COLORS, icons, images, SIZES } from "../constants";

import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import Categories from "../components/home/categorie/Categories";
import styles from "../components/home/nearby/nearbyjobs.style";
import Perguntas from "../components/home/pergunta/Perguntas";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [lei, setL] = useState("");
  const modalView = ["Categorias", "Perguntas"];
  const [activeModalView, setActiveModalView] = useState(modalView[0]);
  const [cat, setCat] = useState(); 
  const setLei = (getLei) => {
    setL(getLei);
  };
  const modalizeRef = useRef(null);

  const displayTabContent = () => {
    switch (activeModalView) {
      case "Categorias":
        return <View>
            <Categories lei={lei} setActiveModalView={setActiveModalView} modalView={modalView} />

                   
                </View>
      case "Perguntas":
        return <View>
            <Text>Aloooo</Text> 
        </View>
      default:
        break;
    }
  };

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const handleModal = () => {
    console.log("Handle modal");
    modalizeRef.current?.open();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.juris_icon} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs />

          <Nearbyjobs handleModal={handleModal} setLei={setLei} />
        </View>
      </ScrollView>
      <Modalize
        ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: true }}
        snapPoint={500}
        modalHeight={500}
        FloatingComponent={true}
        panGestureEnabled={true}
        withHandle={false}
        HeaderComponent={
          <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}
          >
            <Text style={styles.headerTitle}>{lei}</Text>
            <TouchableOpacity onPress={() =>{
                if(activeModalView==="Categorias") {
                    modalizeRef.current?.close();
                } else if(activeModalView==="P") {
                    setActiveModalView("Categorias")
                }
            }}>
            <Image 
                source={icons.left}
                resizeMode='contain'
                style={{width: 32}}
      />
      </TouchableOpacity>
          </View>
        }

      >
        {
            activeModalView==="Categorias" ? 
            <View>
                <Categories setCat={setCat} lei={lei} setActiveModalView={setActiveModalView} modalView={modalView} activeModalView={activeModalView} />
            </View> : 
            
            <View>
               <Perguntas cat={cat} lei={lei} setActiveModalView={setActiveModalView} modalView={modalView} activeModalView={activeModalView}/>
            </View>
            
            
        }
        {/* {displayTabContent()} */}
        
      </Modalize>
    </SafeAreaView>
  );
};

export default Home;
