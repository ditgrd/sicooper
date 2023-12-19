import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import React from "react"
import react from "react";
import func from "../system/func";
import { ImageBackground } from "react-native";

export default function Anggota({navigation}) {
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
    
    return (
      <ScrollView>
        {/* StatusBar */}
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
                  Data Anggota {anggota == null ? '-' : anggota.kode_user_anggota}
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

        {/* Border Card Detail Anggota */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ImageBackground source={require('../img/bg-agt.png')} style={{width: 350, height: 200, marginTop: 15, marginBottom: 10, borderRadius: 10, overflow: 'hidden'}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={anggota == null ? require('../img/logo.png') : {uri: env.base_url+"/foto_profil/" + anggota.foto_profil_anggota}} 
                  style={{
                    marginTop: 1,
                    marginLeft: 5,
                    width: 150,
                    height: 200,
                    borderRadius: 15
                  }}
                />

                {/* Nama Anggota */}
                <View 
                  style={{
                      flex: 1,
                      marginLeft: 10,
                      justifyContent: 'center'
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>{anggota == null ? '-' : anggota.nama_anggota}</Text>
                  <Text>{anggota == null ? '-' : anggota.kode_anggota}</Text>
                    <TouchableOpacity>
                      <Text>Status : 
                        <Text style={{color: '#A6FF96'}}> {anggota == null ? '-' : anggota.status_aktif_anggota}</Text>
                      </Text>
                    </TouchableOpacity>
                </View>
              </View>
          </ImageBackground>
        </View>

        {/* List Data */}
        <View style={{marginBottom: 30}}>

          {/* Informasi Anggota */}
          <View>
            <Text style={{
              marginLeft: 15,
              marginRight: 10,
              marginBottom: 10,
              fontSize: 20,
              fontWeight: 'bold'
              }}
            >Informasi Anggota
            </Text>
            <View style={{flexDirection: 'row',marginLeft: 15, marginHorizontal: 20}}>
              <Text style={{marginRight: 91}}>Nama</Text>
              <Text>: {anggota == null ? '-' : anggota.nama_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row',marginLeft: 15, marginHorizontal: 20}}>
              <Text style={{marginRight: 102}}>NIK </Text>
              <Text>: {anggota == null ? '-' : anggota.nik_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row',marginLeft: 15, marginHorizontal: 20}}>
              <Text style={{marginRight: 40}}>Jenis Kelamin</Text>
              <Text>: {anggota == null ? '-' : anggota.jenis_kelamin_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row',marginLeft: 15, marginHorizontal: 20}}>
              <Text style={{marginRight: 84}}>Agama</Text>
              <Text>: {anggota == null ? '-' : anggota.agama_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row',marginLeft: 15, marginHorizontal: 20}}>
              <Text style={{marginRight: 10}}>Tanggal Input User</Text>
              <Text>: {anggota == null ? '-' : anggota.tgl_input_anggota}</Text>
            </View>
          </View>

          {/* Kontak & Alamat */}
          <View>
            <Text style={{
              marginLeft: 15,
              marginRight: 10,
              marginBottom: 10,
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold'
              }}
            >Kontak & Alamat
            </Text>
            <View style={{flexDirection: 'row',marginLeft: 15, marginHorizontal: 20}}>
              <Text style={{marginRight: 50}}>No. Telp</Text>
              <Text>: +62{anggota == null ? '-' : anggota.telp_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 20}}>No. Telp Lain</Text>
              <Text>: +62{anggota == null ? '-' : anggota.telp2_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 68}}>Email</Text>
              <Text>: {anggota == null ? '-' : anggota.email_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 52}}>Provinsi</Text>
              <Text>: {anggota == null ? '-' : anggota.provinsi_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 73}}>Kota</Text>
              <Text>: {anggota == null ? '-' : anggota.kota_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 30}}>Kecamatan</Text>
              <Text>: {anggota == null ? '-' : anggota.kecamatan_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 40}}>Kelurahan</Text>
              <Text>: {anggota == null ? '-' : anggota.kelurahan_anggota}</Text>
            </View>
          </View>

          {/* Data Pekerjaan */}
          <View>
            <Text style={{
              marginLeft: 15, 
              marginRight: 10, 
              marginBottom: 10,
              marginTop: 10,
              fontSize: 20, 
              fontWeight: 'bold'
              }}
            >Data Pekerjaan
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 62}}>Status</Text>
              <Text>: {anggota == null ? '-' : anggota.status_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 4}}>Tempat Bekerja</Text>
              <Text>: {anggota == null ? '-' : anggota.pekerjaan_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 44}}>Deskripsi</Text>
              <Text>: {anggota == null ? '-' : anggota.deskripsi_pekerjaan}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 24}}>Penghasilan</Text>
              <Text>: Rp. {anggota == null ? '-' : anggota.penghasilan_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 73}}>PPH</Text>
              <Text>: Rp. {anggota == null ? '-' : anggota.pph_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 61}}>NPWP</Text>
              <Text>: {anggota == null ? '-' : anggota.npwp_anggota}</Text>
            </View>
          </View>

          {/* Data Keluarga Anggota */}
          <View>
            <Text style={{
              marginLeft: 15, 
              marginRight: 10, 
              marginBottom: 10,
              marginTop: 10,
              fontSize: 20, 
              fontWeight: 'bold'
              }}
            >Data Keluarga Anggota
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 61}}>Nama Wali</Text>
              <Text>: {anggota == null ? '-' : anggota.nama_wali_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 14}}>Status Pernikahan</Text>
              <Text>: {anggota == null ? '-' : anggota.status_pernikahan_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 24}}>Nama Pasangan</Text>
              <Text>: {anggota == null ? '-' : anggota.nama_pasangan_anggota}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 66}}>Ahli Waris</Text>
              <Text>: {anggota == null ? '-' : anggota.ahli_waris}</Text>
            </View>
          </View>

          {/* Data Afiliasi kankas */}
          <View>
            <Text style={{
              marginLeft: 15, 
              marginRight: 10, 
              marginBottom: 10,
              marginTop: 10,
              fontSize: 20, 
              fontWeight: 'bold'
              }}
            >Data Afaliasi kankas
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 85}}>Kankas</Text>
              <Text>: {anggota == null ? '-' : anggota.kode_kankas}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 43}}>AO/Marketing</Text>
              <Text>: {anggota == null ? '-' : anggota.kode_ao}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Text style={{marginRight: 15}}>Tanggal Registrasi</Text>
              <Text>: {anggota == null ? '-' : anggota.tgl_regist_anggota}</Text>
            </View>
          </View>
        </View>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
          <View style={{
            width: 150,
            height: 40,
            backgroundColor: '#C1F2B0',
            marginLeft: 10,
            marginBottom: 50,
            borderRadius: 7
          }}>
            <TouchableOpacity onPress={() => {
              func.SesDel('login');
              return navigation.navigate('Login');
            }}>
              <Text style={{textAlign: 'center', marginTop: 7}}>Logout</Text>
            </TouchableOpacity>    
          </View>
        </View>
      </ScrollView>        
    )
}