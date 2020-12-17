import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { SafeAreaView,View,Text,StyleSheet,Image,Dimensions,FlatList,ScrollView} from 'react-native';
import { MovieItem,MoviePopular,Header,SearchBar,AllFilms,ModalDetails } from '../components'
import auth from '@react-native-firebase/auth';


const apiKey = "xxxxxxxxxxxxxxxxxxxxx";

let originalList = [];
const MoviePage = (props) => {

    const [movieList, setMovieList] = useState([]);
    const [popList, setPopList] = useState([]);
    const [allMovie, setAllMovie] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [modalFlag, setModalFlag] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState([]);

    const fetchMovie = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
            params:{
                api_key: apiKey,
                page:1
            }
        })
        // console.log(response.data.results)
        setMovieList(response.data.results)
    }

    const renderMovie = ( { item }) => {
        return (
            < MovieItem data={item} onClicked={() => fetchModal(item)}/>
        )
    }

    const fetchModal = (mov) => {
        setModalFlag(() => !modalFlag)
        setSelectedMovie(mov);
    }




    const fetchPopular = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params:{
                api_key: apiKey,
                page:1
            }
        })
        // console.log(response.data.results)
        setPopList(response.data.results)
    }

    const fetchAllMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params:{
                api_key: apiKey,
                page:1,
                query: searchKeyword
            }
            
        })
        originalList = [...response.data.results]
        setAllMovie(response.data.results)

    }



    const renderPopular = ( { item }) => {
        return (
            < MoviePopular data={item} onClicked={() => fetchModal(item)}/>
        )
    }

    const searchingMovie = (value) => {
        const filteredMovie = originalList.filter(i => {
            const text = value.toLowerCase();
            const movie = i.toLowerCase();

            return movie.startsWith(text)
        })
        setAllMovie(filteredMovie)
    }

    const renderAllMovies = ( { item }) => {
        return (
            <AllFilms data={item} onClicked={() => fetchModal(item)} />
        )
    }

    useEffect(()=> {
        fetchMovie(),fetchPopular();
    },[]);


    return (
        <ScrollView>
        <SafeAreaView style={{flex:1}}>
                <Header logOut={() => auth().signOut()} />
                <SearchBar onSelected={(value) => searchingMovie(value)} onChanging={(value)=> setSearchKeyword(value)} onSelectPress={() => fetchAllMovies() }/>
                <View style={{backgroundColor:'#37474f'}}>
                <FlatList
                            horizontal
                            showsHorizontalScrollIndicator = {false}
                            keyExtractor={(_,index) => index.toString()}
                            data = {allMovie}
                            renderItem = {renderAllMovies}
                />

                    <Text style={styles.text}> Top Rated Movies </Text>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(_,index) => index.toString()}
                        data = {movieList}
                        renderItem = {renderMovie}
                    />
                </View>
                <View style={{backgroundColor:'#37474f'}}>
                    <Text style={styles.text}> Popular Movies </Text>
                    <FlatList
     
                        horizontal
                        keyExtractor={(_,index) => index.toString()}
                        data = {popList}
                        renderItem = {renderPopular}
                    />
                   
                </View>
                <ModalDetails visibility={modalFlag} turn={()=>setModalFlag(false)} selectedFilm = {selectedMovie} />
            
        </SafeAreaView>
        </ScrollView>

    )
}

export { MoviePage }

 const styles = StyleSheet.create({
    text: {
        fontWeight:'bold',
        color: '#f1f8e9',
        textAlign: 'left',
        fontSize: 30,
        margin:5,
    },

})


