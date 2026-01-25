// payc/Home/DropUps/BankTransferSuccessDropUpContent.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Wallet } from 'lucide-react-native';

const BankTransferSuccessDropUpContent = () => {
    return (
        <View>
            <View style={styles.successContainer}>
                <Wallet size={144} color="#3B82F6" style={styles.successIcon} />

                <Text style={styles.successMessage}>
                    You have successfully deposited NGN 5000
                </Text>
            </View>

            <TouchableOpacity style={styles.checkButton} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Check Wallet</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BankTransferSuccessDropUpContent;

const styles = StyleSheet.create({
    successContainer: {
        marginTop: 16,
        alignItems: 'center',
        paddingBottom: 8,
    },
    successIcon: {
        marginTop: 32,
    },
    successMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 32,
    },
    checkButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 8,
        paddingVertical: 14,
        marginBottom: 32,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});