import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(apiData => setProducts(apiData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {products.map(product => (
          <Card key={product.id} style={styles.card}>
            <Card.Content>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>Price: ${product.price}</Text>
              <ScrollView horizontal>
                {product.images.map((image, index) => (
                  <Image key={index} source={{ uri: image }} style={styles.image} />
                ))}
              </ScrollView>
              <Text style={styles.description}>{product.description}</Text>
            </Card.Content>
          </Card>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  card: {
    margin: 8,
    elevation: 11,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 8,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 8,
  }
});
