import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const textColor = 'black'
const fontType = 'Lato'

export const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

})

export const login = StyleSheet.create ({

    container: {
        flex: 1,
    },

    containerImage: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerForm: {
        flex: 6,
    },

    containerTeks: {
        flex: 1,
        padding: 30,
    },

    form: {
        padding: 55,
    },

    nisn: {
        backgroundColor: '#dddddd',
        borderRadius: 5,
        height: height * 0.065,
        width: width * 0.7,
        padding: 8,
        marginBottom: 18,
    },

    password: {
        backgroundColor: '#dddddd',
        borderRadius: 5,
        height: height * 0.065,
        width: width * 0.7,
        padding: 8
    },

    button: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        height: height * 0.07, 
        width,
        backgroundColor: '#4384F4',
        borderRadius: 1,
    },

    teksHeader: {
        fontSize: 36,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#4384F4',
        textAlign: 'center',
        marginBottom: 18,
    },

    teksKeterangan: {
        fontSize: 18,
        textAlign: 'center'
    },

    teksChange: {

    },

    gantiPassword: {
        fontWeight: 'bold',
    },

    image: {
        height: 160,
        width: 160,  
    },

})

export const absen = StyleSheet.create ({

    containerProfil: {
        flex: 1,
        // backgroundColor: '#4384F4',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerCalendar: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerKeterangan: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
    },

    profil: {
        height: height * 0.09,
        width: width * 0.75,
        borderRadius: 10,
        backgroundColor: '#4384F4',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    calendar: {
        height: height * 0.55,
        width: width * 0.9,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#4384F4',
        justifyContent: 'center',
    },

    image: {
        borderRadius: 50,
        height: 50,
        width: 50,
    },

    nama: {
        fontSize: 24,
        color: 'white'
    },

    hadir: {
        borderRadius: 50,
        backgroundColor: '#3DC851',
        height: 20,
        width: 20,
    },

    izin: {
        borderRadius: 50,
        backgroundColor: '#FFBB33',
        height: 20,
        width: 20,
    },

    tp: {
        borderRadius: 50,
        backgroundColor: 'orange',
        height: 20,
        width: 20,
    },

    alpha: {
        borderRadius: 50,
        backgroundColor: '#FE3D46',
        height: 20,
        width: 20,
    },

    viewKeterangan: {
        flexDirection: 'row',
        padding: 10,
        margin: 5,
    },

})

export const keluhan = StyleSheet.create ({

    form: {
        flex: 1,
        // padding: 30,
        // margin: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center', 
    },

    inputTeks: {
        height: height * 0.095,
        width: width * 0.85,
        borderRadius: 5,
        borderWidth: 1,
        margin: 'auto'
    },

    deskripsi: {
        height: height * 0.3,
        width: width * 0.85,
        borderRadius: 5,
        borderWidth: 1,
    },

    teks: {
        fontSize: 18,
    },

    kotakImage: {
        height: height * 0.2,
        width: width * 0.4,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
    },

    image: {

    },

    button: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        height: height * 0.07, 
        width,
        backgroundColor: '#4384F4',
        borderRadius: 1,
    },

    containerpostget: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: 'auto',
        justifyContent: 'space-evenly',
    },

    post: {
        height: height * 0.1,
        width:  width * 0.5,
        // borderWidth: 1,
        borderRadius: 5,
        elevation: 15,
        backgroundColor: '#4384F4',
        margin: 'auto',
        padding: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },

    contbutton: {
        // margin: 15,
    },

    tekspostget: {
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
    },

    form1: {
        flex: 2,
        // backgroundColor: '#4384F4',
        justifyContent: 'center',
    },

    form2: {
        flex: 2,
        // backgroundColor: 'green',
    },

    form3: {
        flex: 2,
        // backgroundColor: 'yellow',
    },

})

export const swiper = StyleSheet.create ({
    
    wrapper: {
    },
  
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
  
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
  
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
  
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
  
    image : {
      height: '100%',
      width: '100%',
    },
  
    teksLogin : {
      position: 'absolute',
      bottom: 20,
      right: 20,
      fontSize: 24,
    },

})

export const landing = StyleSheet.create ({

    profil : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        borderRadius : 8,
        width : 320,
        height : 80,
        backgroundColor : '#5BB6FF', 
    },

    header : {
        borderRadius : 8,
        width : 320,
        height : 80,
        backgroundColor : '#5BB6FF', 
        marginLeft : 20,
        marginTop : 20, 
    },

    teksHeader : {
        fontSize : 22,
        color : '#4384F4',
        fontWeight : 'bold',
        marginLeft : 25,
        marginTop: 20,
    },

    profilTeks : {

    },

    imageProfile : {
        borderRadius : 50,
        height: 60,
        width: 60,

    },

    buttonProfil : {
        borderRadius : 50,
        width : 30,
        height : 30,
        backgroundColor : 'white' 
    },

    buttonMenu : {
        margin: 8,
        width: Dimensions.get('window').width / 2 - 18,
        height: Dimensions.get('window').width / 2 - 18,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'dashed',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'black',
        borderBottomEndRadius : 8,
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
        borderBottomStartRadius: 8,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },

})

export const post = StyleSheet.create ({

    containerPost: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerImage: {
        flex: 5,
        // backgroundColor: 'green',
        // justifyContent: 'flex-end',
        alignItems: 'center',

    },

    containerTambah: {
        flex: 1,
        // backgroundColor: '#4384F4',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 30,
    },

    contentImg: {
        borderWidth: 2,
        borderStyle: 'dotted',
        borderRadius: 5,
        flexDirection: 'row',
        height: height * 0.15,
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    image: {
        height: height * 0.1,
        width: width * 0.2,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    keluhan: {
        
    },

    textKeluhan: {
        height: height * 0.1,
        width: width * 0.8,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
    },

    button: {
        borderRadius: 50,
        backgroundColor: '#4384F4',
        height: height * 0.1,
        width: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export const home = StyleSheet.create ({

    container: {
        flex : 1,
        backgroundColor: '#4384F4'
    },

    alamat: {
        alignItems: "center",
        margin: 5,
        borderColor: "black", 
        backgroundColor: "white",
        borderRadius: 5,
        padding: 5
    },

    teksprofil: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
    },

    tekskehadiran: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
    },

    containerprofil: {
        height: "25%", 
        backgroundColor: "#4384F4",
        // borderWidth: 3,
        // borderColor: 'white',
        // borderRadius: 80,
    },

    containeriamge: {
        alignItems: "flex-start", 
        flex: 1,
        padding: 20,
    },

    imageprofil: {
        borderRadius: 50,
        borderColor: "white",
        // borderWidth: 1,
        width: 100,
        height: 100,
        marginTop: 5,
    },

    containerteksnama: {
        flexDirection:"column",
        // justifyContent:"center",
        // alignItems:"center",
        position: 'absolute',
        flex:1,
        // backgroundColor: 'red',
        top: 35,
        left: 140,
    },

    containertekskelas: {
        flexDirection:"column",
        // justifyContent:"center",
        // alignItems:"center",
        flex:1,
        // backgroundColor: 'pink',
        position: 'absolute',
        top: 35,
        left: 210,
    },

    containerkehadiran: {
        // borderWidth:1,
        margin:10,
        backgroundColor:"white",
        borderRadius:5,
        height:"20%", 
    },

    containerkethadir: {
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems:"center",
        flex:1,
    },

    hadir: {
        borderRadius:50,
        borderWidth:1,
        height:80,
        width:80,
        borderColor:"#009fff",
        backgroundColor: "#009fff",
        justifyContent:"center",
        alignItems:"center",
    },

    angkahadir: {
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    },

    tekshadir: {
        color:"white",
        fontWeight:"bold",
        fontSize:16,
    },  

    sakit: {
        borderRadius:50,
        borderWidth:1,
        height:80,
        width:80,
        borderColor:"#27a003",
        backgroundColor: "#27a003",
        justifyContent:"center",
        alignItems:"center",        
    },

    angkasakit: {
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    },

    tekssakit: {
        color:"white",
        fontWeight:"bold",
        fontSize:16,
    },

    alpa: {
        borderRadius:50,
        borderWidth:1,
        height:80,
        width:80,
        borderColor:"#d30000",
        backgroundColor: "#d30000",
        justifyContent:"center",
        alignItems:"center",
    },

    angkaalpa: {
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    },

    teksalpa: {
        color:"white",
        fontWeight:"bold",
        fontSize:14,       
    },

    containernilai: {
        borderWidth:1,
        flex:1,
        backgroundColor:"#4384F4",        
    },

    judulnilai: {
        alignSelf:"center",
        fontSize:20,
        fontWeight:"bold",       
    },

    scroll: {
        flex:1,
    },

    containerfungnilai: {
        margin:10, 
        // borderWidth:1, 
        padding:10,
        backgroundColor:"white",
        borderRadius:5
    },

})

export const nilai = StyleSheet.create ({

    containerdata: {
        padding:20,
        backgroundColor: "white", 
        borderRadius:5, 
        justifyContent:"space-around",
        flex:1,
    },

    containerdata1: {
        flexDirection:"row", 
        justifyContent: "space-around",
        margin:5,
    },

    containerdata2: {
        flexDirection:"row", 
        justifyContent: "space-around",
        margin:5,
        marginTop: 10,
    },

    tekstittle: {
        fontSize: 20,
        color: 'white',
    },

    quiz: {
        padding:20, 
        margin: 20,
        // borderWidth:1, 
        // borderStyle:"dashed", 
        // elevation:1,
        // borderColor:"grey",
        // borderRadius:5
    },

    assignment: {
        padding:20,
        margin: 20, 
        // borderWidth:1, 
        // borderStyle:"dashed", 
        // elevation:1,
        // borderColor:"grey",
        // borderRadius:5,
    },

    midterm: {
        padding:20, 
        margin: 20,
    },

    final: {
        padding:20, 
        margin: 20,
    },

    button: {
        backgroundColor: "#4384F4",
        padding:10, 
        alignItems:"center",
        borderRadius: 5,
    },

})