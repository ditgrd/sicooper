import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import react from "react";
import func from "../system/func";

export default function Pembiayaan({navigation}) {
    const [pembiayaan, setPembiayaan] = React.useState(null);

    async function getPembiayaan(kode_anggota) {
        var req = await fetch(env.base_url+'/api/mobile/pembiayaan/'+ kode_anggota, {
          method: 'GET'
        });
  
        var response = await req.json();
          if (response.status == 'success') {
               setPembiayaan(response.data);
          } 
          return;
      }
  
      react.useMemo(async() => {
        var usr= await JSON.parse(await func.SesGet ('login'))
        await getPembiayaan(usr.user_anggota);
      }, [])

    return(
        <View>
            {/* Header */}
            <View style={{flexDirection: 'row'}}>
                <View style={{
                        width: 195,
                        height: 80,
                        backgroundColor: '#DAFFFB'
                    }}>
                        <Text style={{
                        textAlign: 'left',
                        marginTop: 40,
                        marginLeft: 20,
                        fontWeight: 'bold',
                        fontSize: 20
                        }}>
                        Pembiayaan
                    </Text>
                </View>
                <View style={{
                    width: 195,
                    height: 80,
                    backgroundColor: '#DAFFFB'
                }}>
                </View>                
            </View>

            {/* Detail */}
            <ScrollView>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{
                        marginTop: 10,
                        width: 340,
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: '#FFFFFF'                                                
                    }}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 9}}>
                            Detail Pembiayaan {pembiayaan == null ? '-' : pembiayaan.kode_rek_pembiayaan}
                        </Text>                        
                    </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{
                        width: 365,
                        height: 400,
                        marginTop: 10,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 10
                    }}>
                        <View style={{marginHorizontal: 10}}>
                            <Text style={{fontWeight: 'bold', fontSize: 17, marginBottom: 10, marginTop: 5}}>Data Pembiayaan Anggota</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 115}}>Anggota</Text>
                                <Text>: {pembiayaan == null ? '-' : pembiayaan.kode_anggota}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 135}}>Jenis</Text>
                                <Text>: {pembiayaan == null ? '-' : pembiayaan.jenis_pembiayaan}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 114}}>No Akad</Text>
                                <Text>: {pembiayaan == null ? '-' : pembiayaan.nomor_akad_pembiayaan}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 38}}>Tujuan Pembiayaan</Text>
                                <Text>: {pembiayaan == null ? '-' : pembiayaan.tujuan_pembiayaan}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 114}}>Jaminan</Text>
                                <Text style={{color: 'blue'}}>: {pembiayaan == null ? '-' : pembiayaan.kode_jaminan}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 86}}>Suku Margin</Text>
                                <Text>: {pembiayaan == null ? '-' : pembiayaan.metode_penghitung_angsuran}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 67}}>Pokok Jaminan</Text>
                                <Text>: RP. {pembiayaan == null ? '-' : pembiayaan.pokok_pembiayaan}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 21}}>Tgl Mulai Pembiayaan</Text>
                                <Text>: {pembiayaan == null ? '-' : pembiayaan.tgl_mulai_pembiayaan}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 67}}>Lama Pinjaman</Text>
                                <Text>: {pembiayaan == null ? '-' : pembiayaan.jangka_waktu_pembiayaan} Bulan</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 87}}>Rate Margin</Text>
                                <Text>: {pembiayaan == null ? '-' : pembiayaan.rate_margin_angsuran} %</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 85}}>Total Margin</Text>
                                <Text>: Rp. {pembiayaan == null ? '-' : pembiayaan.margin_pembiayaan}</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 7}}>
                                <Text style={{fontWeight: 'bold', fontSize: 15, marginRight: 128}}>Pinalti</Text>
                                <Text>: Rp. {pembiayaan == null ? '-' : pembiayaan.pinalti_pembiayaan}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{
                        marginTop: 10,
                        width: 365,
                        height: 300,
                        backgroundColor: '#e0ffff'
                    }}>
                        <View>
                            
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}