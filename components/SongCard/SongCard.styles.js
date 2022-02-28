import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
  },
  info_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: "#bdbdbd",
    fontWeight: "bold",
  },
  content_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  soldout_container: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    fontSize: 12,
    color: "red",
  },
  album_container: {
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center"
  },
  album_title: {
    marginTop:10,
    borderWidth:1,
    padding:5,
    borderRadius:5,
    borderColor: "#ebebeb",
    color: "#fff",
    
  }
});
