import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView , View } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1') // Burada userId'yi istediğiniz kullanıcıya göre değiştirebilirsiniz
      .then(response => {
        return response.json();
      })
      .then(apiData => {
        setPosts(apiData);
      })
  }, []);

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
        {posts.map(post => (
          <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.body}>{post.body}</Text>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 8,
    fontSize: 16,
  },
});
