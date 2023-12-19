import React from "react";
import { View, Text } from "react-native";

export default function About() {
    return(
        <View>
            <View style={{marginTop: 10}}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
                    Sejarah Singkat KSU BUSRA
                </Text>
                <View style={{marginLeft: 10, marginRight: 10, marginTop: 5}}>
                    <Text style={{fontSize: 14}}>
                        Koperasi Serba Usaha Bina Usaha Sejahtera (KSU BUSRA) adalah koperasi
                        yang bergerak di bidang penyediaan pembiayaan dan pemberdayaan kelompok
                        ekonomi rakyat keseluruhan yang memiliki usaha mandiri dan kebutuhan mendasar
                        yang terdiri dari kegiatan investasi dan tabungan (simpan), pembiayaan (pinjam),
                        asuransi dan jasa. KSU BUSRA lahir pada tanggal 10 Februari 2006 sebagai
                        Lembaga Kelompok Masyarakat Swadaya dengan badan hukum No.
                        488/BH/MENEG.I/V/2006 dan KSU BUSRA sudah melakukan PAD/ PART
                        sesuai UU No. 17 tahun 2012 tentang perkoperasian walaupun kembali lagi ke UU
                        No. 25 tahun 1992.
                    </Text>
                </View>
                <View style={{marginLeft: 10, marginRight: 10, marginTop: 5}}>
                    <Text style={{fontSize: 14}}>
                    KSU BUSRA merupakan koperasi berbasis syari’ah yang segala kegiatan
                    usaha harus berlandaskan Al-qur’an dan Hadist dengan status Primer Nasional
                    (dapat membuka cabang dimana saja). Berawal dari sekelompok orang yang
                    memiliki visi dan misi sama untuk memajukan perkoperasian dengan dasar
                    melakukan pembiayaan kepada usaha mikro yang unlimited.
                    </Text>
                </View>
            </View>
        </View>
    )
}