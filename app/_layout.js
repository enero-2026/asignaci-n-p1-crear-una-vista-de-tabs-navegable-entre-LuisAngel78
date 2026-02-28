import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Slot, useGlobalSearchParams, Link } from 'expo-router';

export default function Layout() {
  const { nombreComponente } = useGlobalSearchParams();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
        <Text style={styles.info}>Estas en el componente:</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{nombreComponente || "Inicio"}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Slot />
      </View>
      <View style={styles.navBar}>
        <Link href="/inicio?nombreComponente=Inicio" asChild>
          <Pressable style={styles.navButton}>
            <Text style={[styles.navText, nombreComponente === 'Inicio' && styles.active]}>Inicio</Text>
          </Pressable>
        </Link>
        <Link href="/buscar?nombreComponente=Buscar" asChild>
          <Pressable style={styles.navButton}>
            <Text style={[styles.navText, nombreComponente === 'Buscar' && styles.active]}>Buscar</Text>
          </Pressable>
        </Link>
        <Link href="/perfil?nombreComponente=Perfil" asChild>
          <Pressable style={styles.navButton}>
            <Text style={[styles.navText, nombreComponente === 'Perfil' && styles.active]}>Perfil</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1, backgroundColor: '#fff' },
  header: { height: 120, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', borderBottomWidth: 1, borderBottomColor: '#ddd', paddingTop: 30 },
  info: { fontSize: 14, color: '#666' },
  badge: { backgroundColor: '#007AFF', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginTop: 5 },
  badgeText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  navBar: { flexDirection: 'row', height: 70, borderTopWidth: 1, borderTopColor: '#eee' },
  navButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  navText: { color: '#888', fontWeight: 'bold' },
  active: { color: '#007AFF' }
});