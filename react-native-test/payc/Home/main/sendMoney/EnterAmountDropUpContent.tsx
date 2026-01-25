// payc/Home/DropUps/EnterAmountDropUpContent.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { ArrowLeft } from 'lucide-react-native';
import {nairaGlobe} from "@/payc/contants/images"; // SkipBack → ArrowLeft (common alias)

const EnterAmountDropUpContent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <View style={styles.avatarContainer}>
                    <Image source={nairaGlobe} style={styles.avatar} resizeMode="contain" />
                </View>

                <Text style={styles.title}>Enter amount</Text>
                <Text style={styles.recipientName}>John Doe</Text>
                <Text style={styles.recipientId}>PayC Id - @johndoe</Text>

                <Text style={styles.amountDisplay}>₦0.00</Text>
            </View>

            <View style={styles.keypadContainer}>
                <View style={styles.keypadRow}>
                    {[1, 2, 3].map((num) => (
                        <TouchableOpacity key={num} style={styles.keyButton} activeOpacity={0.7}>
                            <Text style={styles.keyText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.keypadRow}>
                    {[4, 5, 6].map((num) => (
                        <TouchableOpacity key={num} style={styles.keyButton} activeOpacity={0.7}>
                            <Text style={styles.keyText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.keypadRow}>
                    {[7, 8, 9].map((num) => (  // fixed the duplicate 8 → 9
                        <TouchableOpacity key={num} style={styles.keyButton} activeOpacity={0.7}>
                            <Text style={styles.keyText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.keypadRow}>
                    <View style={styles.placeholderKey} />

                    <TouchableOpacity style={styles.keyButton} activeOpacity={0.7}>
                        <Text style={styles.keyText}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.keyButton} activeOpacity={0.7}>
                        <ArrowLeft size={28} color={'#ffffff'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
                    <Text style={styles.sendButtonText}>Send Money</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EnterAmountDropUpContent;

const styles = StyleSheet.create({
    container: { flex: 1 },
    headerSection: { alignItems: 'center', marginTop: 12 },
    avatarContainer: {
        width: 64,
        height: 64,
        borderRadius: 999,
        overflow: 'hidden',
        marginBottom: 16,
    },
    avatar: { width: '100%', height: '100%' },
    title: { fontSize: 24, fontWeight: 'bold', color: 'white' },
    recipientName: { fontSize: 18, fontWeight: '600', color: 'white', marginTop: 8 },
    recipientId: { fontSize: 14, fontWeight: '600', color: '#3B82F6', marginTop: 4 },
    amountDisplay: { fontSize: 32, fontWeight: 'bold', color: '#22C55E', marginTop: 12, width: '100%', textAlign: 'center' },

    keypadContainer: { marginTop: 32, paddingBottom: 48, gap: 16 },
    keypadRow: { flexDirection: 'row', justifyContent: 'flex-end', gap: 16 },
    keyButton: {
        flex: 1,
        height: 48,
        backgroundColor: '#3B82F6',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    keyText: { color: 'white', fontSize: 24, fontWeight: '800' },
    placeholderKey: { flex: 1 },
    sendButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 12,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    sendButtonText: { color: 'white', fontSize: 16, fontWeight: '700' },
});