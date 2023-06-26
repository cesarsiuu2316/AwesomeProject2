import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const lugar1_1 = require('./assets/lugar1.jpeg');
const lugar1_2 = require('./assets/lugar1-1.jpeg');
const lugar1_3 = require('./assets/lugar1-2.jpeg');

const lugar2_1 = require('./assets/lugar2.jpg');
const lugar2_2 = require('./assets/lugar2-1.jpeg');
const lugar2_3 = require('./assets/lugar2-2.jpeg');

const lugar3_1 = require('./assets/lugar3.jpeg');
const lugar3_2 = require('./assets/lugar3-1.jpeg');
const lugar3_3 = require('./assets/lugar3-2.jpeg');

const lugar4_1 = require('./assets/lugar4.webp');
const lugar4_2 = require('./assets/lugar4-1.webp');
const lugar4_3 = require('./assets/lugar4-2.jpeg');

const lugar5_1 = require('./assets/lugar5.jpeg');
const lugar5_2 = require('./assets/lugar5-1.webp');
const lugar5_3 = require('./assets/lugar5-2.jpeg');

const starIcon = require('./assets/star.png');
const filterIcon = require('./assets/filter.png');

const perfilIcon = require('./assets/speech-bubble.png');
const commentsIcon = require('./assets/comments.png');
const heartIcon = require('./assets/heart.png');
const closeIcon = require('./assets/failed.png');

const MainScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const navigation = useNavigation();

  const places = [
    {
      id: 1,
      name: 'Ciudad Esmeralda',
      price: '$100',
      stars: 4,
      images: [lugar2_1, lugar2_2, lugar2_3],
    },
    {
      id: 2,
      name: 'Playa Dorada',
      price: '$150',
      stars: 5,
      images: [lugar3_1, lugar3_2, lugar3_3],
    },
    {
      id: 3,
      name: 'Valle Encantado',
      price: '$250',
      stars: 4,
      images: [lugar1_1, lugar1_2, lugar1_3],
    },
    {
      id: 4,
      name: 'Montaña azul',
      price: '$95',
      stars: 4,
      images: [lugar4_1, lugar4_2, lugar4_3],
    },
    {
      id: 5,
      name: 'Bosque escondido',
      price: '$124',
      stars: 4,
      images: [lugar5_1, lugar5_2, lugar5_3],
    },
    // ...agrega más lugares aquí...
  ];

  const handleLike = (placeId) => {
    const index = favorites.indexOf(placeId);
    if (index !== -1) {
      // Si ya existe, lo removemos de los favoritos
      setFavorites(favorites.filter((id) => id !== placeId));
    } else {
      // Si no existe, lo agregamos a los favoritos
      setFavorites([...favorites, placeId]);
    }
  };

  const handleComments = () => {
    setShowComments(true);
  };


  const comments = [
    {
      id: 1,
      profileImage: require('./assets/user.png'),
      username: 'Usuario1',
      comment: 'Comentario 1',
    },
    {
      id: 2,
      profileImage: require('./assets/user.png'),
      username: 'Usuario2',
      comment: 'Comentario 2',
    },
    {
      id: 3,
      profileImage: require('./assets/user.png'),
      username: 'Usuario3',
      comment: 'Comentario 3',
    },
    {
      id: 4,
      profileImage: require('./assets/user.png'),
      username: 'Usuario4',
      comment: 'Comentario 4',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchBar}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('FiltrarTitulo')} style={styles.filterButton}>
          <Image source={filterIcon} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {places.map((place) => (
          <View key={place.id} style={styles.card}>
            <ScrollView horizontal pagingEnabled>
              {place.images.map((image, index) => (
                <Image
                  key={index}
                  source={image}
                  style={{ width: 350, height: 200 }}
                />
              ))}
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('InfoLugar')}>
              <View style={styles.cardDetails}>
                <Text style={styles.cardName}>{place.name}</Text>
                <Text style={styles.cardPrice}>{place.price}</Text>
                <Text style={styles.cardStars}>
                  <Image source={starIcon} style={styles.starIcon} />
                  {place.stars} stars
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleLike(place.id)} style={styles.likeButton}>
              <Image
                source={favorites.includes(place.id) ? heartIcon : heartIcon}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleComments} style={styles.commentButton}>
              <Image source={commentsIcon} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Modal visible={showComments} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setShowComments(false)} style={styles.closeButton}>
            <Image source={closeIcon} style={styles.closeIcon} />
          </TouchableOpacity>
          <Image source={perfilIcon} style={styles.profileImage} />
          {comments.map((comment) => (
            <View key={comment.id} style={styles.commentContainer}>
              <Image source={comment.profileImage} style={styles.commentProfileImage} />
              <Text style={styles.commentUsername}>{comment.username}</Text>
              <Text style={styles.commentText}>{comment.comment}</Text>
            </View>
          ))}
        </View>
      </Modal>
      <View style={styles.bottomMenu}>
        <TouchableOpacity>
          <Image source={require('./assets/explore.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/wish-list.png')} style={styles.menuIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ReservasScreen')} style={styles.menuIcon}>
          <Image source={require('./assets/plane.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.menuIcon}>
          <Image source={require('./assets/user.png')} style={styles.menuIcon} />
        </TouchableOpacity>






      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 10,
  },
  searchBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    borderColor: '#ADD8E6',
    borderWidth: 2,
  },
  cardDetails: {
    marginTop: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardPrice: {
    fontSize: 14,
    color: '#888888',
  },
  cardStars: {
    fontSize: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  commentButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  commentContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    borderColor: '#ADD8E6',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentUsername: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: 14,
    color: '#888888',
  },
});

export default MainScreen;
