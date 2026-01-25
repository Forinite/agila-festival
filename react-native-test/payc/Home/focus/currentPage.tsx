// payc/Home/focus/currentPage.tsx

import React, { useState } from 'react';
import {SafeAreaView, View, StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

// ──────────────────────────────────────────────
// All possible drop-up contents (import what you need)
// ──────────────────────────────────────────────
import AddMoneyDropUp from '@/payc/Home/main/addMoney/addMoneyDropUp';
import SendMoneyDropUP from '@/payc/Home/main/sendMoney/sendMoneyDropUP';
import LoadingDropUp_SendMoney from '@/payc/Home/main/sendMoney/LoadingDropUp_SendMoney';
import BankTransferDropUpContent from '@/payc/Home/main/addMoney/BankTransferDropUpContent';
import BankTransferSuccessDropUpContent from '@/payc/Home/main/addMoney/BankTransferSuccessDropUpContent';
import PhoneBehindCardIllustration from '@/payc/Home/main/addMoney/PhoneBehindCardIllustration';
import SelectCurrencyDropUpContent from '@/payc/Home/main/currency/SelectCurrencyDropUpContent';
import EnterAmountDropUpContent from '@/payc/Home/main/sendMoney/EnterAmountDropUpContent';
import ConfirmPin_SendMoney from '@/payc/Home/main/sendMoney/ConfirmPin_SendMoney';

// ──────────────────────────────────────────────
// Your main screens
// ──────────────────────────────────────────────
import ProfilePage from '@/payc/Home/main/profilePage';
import MainPage from '@/payc/Home/mainPage';
// import other screens as needed...

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type DropUpVariant = 'handle' | 'back-arrow';
type DropUpContentType =
    | 'add-money'
    | 'send-money'
    | 'loading-send-money'
    | 'bank-transfer'
    | 'bank-transfer-success'
    | 'phone-card-illustration'
    | 'select-currency'
    | 'enter-amount'
    | 'confirm-pin'
    | null;

const CurrentPage = () => {
    // ──────────────────────────────────────────────
    // Drop-up local state (simple & visible immediately)
    // ──────────────────────────────────────────────
    const [showDropUp, setShowDropUp] = useState(false);
    const [dropUpContent, setDropUpContent] = useState<DropUpContentType>(null);
    const [dropUpVariant, setDropUpVariant] = useState<DropUpVariant>('handle');

    // Helper to open drop-up with content + variant
    const openDropUp = (type: DropUpContentType, variant: DropUpVariant = 'handle') => {
        console.log(`Opening drop-up: ${type} (${variant})`);
        setDropUpContent(type);
        setDropUpVariant(variant);
        setShowDropUp(true);
    };

    const closeDropUp = () => {
        console.log('Closing drop-up');
        setShowDropUp(false);
        // Optional: clear content after animation
        setTimeout(() => setDropUpContent(null), 300);
    };

    // ──────────────────────────────────────────────
    // Render the active main screen (uncomment one)
    // ──────────────────────────────────────────────
    const renderMainContent = () => {
        // For testing — show ProfilePage + pass openDropUp to it
        return <ProfilePage openDropUp={openDropUp} />;

        // Alternatives (uncomment one at a time):
        // return <MainPage />;
        // return <SendPage />;
        // etc.
    };

    // ──────────────────────────────────────────────
    // Render the selected drop-up content
    // ──────────────────────────────────────────────
    const renderDropUpContent = () => {
        if (!dropUpContent) return null;

        switch (dropUpContent) {
            case 'add-money':
                return <AddMoneyDropUp />;
            case 'send-money':
                return <SendMoneyDropUP />;
            case 'loading-send-money':
                return <LoadingDropUp_SendMoney />;
            case 'bank-transfer':
                return <BankTransferDropUpContent />;
            case 'bank-transfer-success':
                return <BankTransferSuccessDropUpContent />;
            case 'phone-card-illustration':
                return <PhoneBehindCardIllustration />;
            case 'select-currency':
                return <SelectCurrencyDropUpContent />;
            case 'enter-amount':
                return <EnterAmountDropUpContent />;
            case 'confirm-pin':
                return <ConfirmPin_SendMoney />;
            default:
                return (
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', padding: 40 }}>
                        Unknown drop-up: {dropUpContent}
                    </Text>
                );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContent}>
                {/* Main screen content */}
                {renderMainContent()}

                {/* Drop-up overlay – only when showDropUp is true */}
                {showDropUp && dropUpContent && (
                    <View style={styles.overlay}>
                        {/* Backdrop – tap to close */}
                        <TouchableWithoutFeedback onPress={closeDropUp}>
                            <View style={styles.backdrop} />
                        </TouchableWithoutFeedback>

                        {/* Bottom sheet */}
                        <View style={styles.sheetContainer}>
                            <View style={styles.sheet}>
                                {/* Header variant */}
                                {dropUpVariant === 'handle' ? (
                                    <View style={styles.handleBar} />
                                ) : (
                                    <View style={styles.headerWithBack}>
                                        <TouchableOpacity onPress={closeDropUp} style={styles.backIcon}>
                                            <ArrowLeft size={28} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                )}

                                {/* Actual content */}
                                <View style={styles.contentPadding}>{renderDropUpContent()}</View>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172A',
    },
    innerContent: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000,
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
    },
    sheetContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    sheet: {
        backgroundColor: '#10182B',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        minHeight: 200,
        maxHeight: SCREEN_HEIGHT * 0.92,
    },
    handleBar: {
        width: 48,
        height: 5,
        backgroundColor: '#64748B',
        borderRadius: 999,
        alignSelf: 'center',
        marginTop: 12,
        marginBottom: 8,
    },
    headerWithBack: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 8,
    },
    backIcon: {
        padding: 8,
    },
    contentPadding: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
});

export default CurrentPage;