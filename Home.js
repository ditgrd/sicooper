import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView} from "react-native"
import { Ionicons, FontAwesome, Octicons, MaterialCommunityIcons, Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Simpanan from './Simpanan';
import Pembiayaan from './Pembiayaan';
import Transaksi from './Transaksi';
import react from "react";

export default function Home () {
  const navigation = useNavigation();

  const [anggota, setAnggota] = React.useState(null);

    async function getAnggota(kode_anggota) {
      var req = await fetch(env.base_url+'/api/mobile/anggota/'+ kode_anggota, {
        method: 'GET'
      });

      var response = await req.json();
        if (response.status == 'success') {
             setAnggota(response.data);
        } 
        return;
    }

    react.useMemo(async() => {
      var usr= await JSON.parse(await func.SesGet ('login'))
      await getAnggota(usr.user_anggota);
    }, [])

  const Simpanan = () => {
    navigation.navigate('Simpanan');
  };
  const Pembiayaan = () => {
    navigation.navigate('Pembiayaan');
  };
  const Transaksi = () => {
    navigation.navigate('Transaksi');
  };

    return (
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={{
                width: 195,
                height: 50,
                borderBottomLeftRadius: 10,
                backgroundColor: '#DAFFFB'
            }}>
              <Text style={{
                  textAlign: 'left',
                  marginTop: 5,
                  marginLeft: 15
              }}>
                Selamat Datang <Text style={{fontWeight: 'bold'}}>{anggota == null ? '-' : anggota.kode_anggota}</Text>
              </Text>
            </View>
            <View style={{
              width: 195,
              height: 50,
              borderBottomRightRadius: 10,
              backgroundColor: '#DAFFFB'
            }}>
            </View>
          </View>

          {/* Card Image */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{
              margin: 15,
              height: 200,
              width: 350,
              backgroundColor: '#FFFFFF',
              borderRadius: 15,
              elevation: 5
            }}>
              <Image 
                source={require('../img/home-img-card.jpg')}
                style={{width: 350, height: 200, borderRadius: 15}}
                />
            </View>
          </View>

          {/* Card Menu */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{
              flex: 1,
              margin: 15,
              height: 99,
              width: 350,
              backgroundColor: '#FFFFFF',
              borderRadius: 15,
              elevation: 5
            }}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginRight: 25, marginTop: 20}}>
                <TouchableOpacity onPress={Simpanan}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                      <FontAwesome name="balance-scale" size={35} color="black" />
                      <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Simpanan</Text>
                      </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Pembiayaan}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Entypo name="credit" size={35} color="black" />
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text>Pembiayaan</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={Transaksi}>
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Octicons name="repo-pull" size={35} color="black" />
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text>Transaksi</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* slide Image */}
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <View>
                <Text style={{marginLeft: 15, fontSize: 17, fontWeight: 'bold'}}>Ada apa aja hari ini!</Text>
                <View style={{
                  margin: 15,
                  height: 180,
                  width: 250,
                  backgroundColor: '#DAFFFB',
                  borderRadius: 15
                }}>
                  <View style={{
                    height: 150,
                    width: 250,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15
                  }}>
                    <Image
                      source={require('../img/card1.png')}
                      style={{width: 250, height: 150, borderRadius: 15, }}
                    />
                    <Text style={{marginLeft: 6, marginRight: 6, textAlign: 'center'}}>Best way to invest your many.</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={{
                  marginTop: 35,
                  margin: 15,
                  height: 180,
                  width: 250,
                  backgroundColor: '#DAFFFB',
                  borderRadius: 15
                }}>
                  <View style={{
                    height: 150,
                    width: 250,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15
                  }}>
                    <Image
                      source={require('../img/card2.png')}
                      style={{width: 250, height: 150, borderRadius: 15, }}
                    />
                    <Text style={{marginLeft: 6, marginRight: 6, textAlign: 'center'}}>Where to INVEST? Klik Here.</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={{
                  marginTop: 35,
                  margin: 15,
                  height: 180,
                  width: 250,
                  backgroundColor: '#DAFFFB',
                  borderRadius: 15
                }}>
                  <View style={{
                    height: 150,
                    width: 250,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15
                  }}>
                    <Image
                      source={require('../img/card3.png')}
                      style={{width: 250, height: 150, borderRadius: 15, }}
                    />
                    <Text style={{marginLeft: 6, marginRight: 6, textAlign: 'center'}}>Trading Secrets. Online Webinar</Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={{
                  marginTop: 35,
                  margin: 15,
                  height: 180,
                  width: 250,
                  backgroundColor: '#DAFFFB',
                  borderRadius: 15
                }}>
                  <View style={{
                    height: 150,
                    width: 250,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 15
                  }}>
                    <Image
                      source={require('../img/card4.png')}
                      style={{width: 250, height: 150, borderRadius: 15, }}
                    />
                    <Text style={{marginLeft: 6, marginRight: 6, textAlign: 'center'}}>How to Invest.</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    )
}
