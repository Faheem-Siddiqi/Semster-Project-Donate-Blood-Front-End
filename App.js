import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { GoogleSignin, statusCodes, GoogleSigninButton } from 'react-native-google-signin';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
  AlertNotificationDialog,
} from 'react-native-alert-notification';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Linking,
  Alert,
} from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import EncryptedStorage from 'react-native-encrypted-storage';
import { block } from 'react-native-reanimated';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const redcolor = '#C53437';
const URL = 'http://192.168.17.120np:5000';
const showSuccessToast = message => {
  Toast.show({
    type: ALERT_TYPE.SUCCESS,
    title: 'Success',
    textBody: message,
  });
};
const App = () => {
  return (
    <AlertNotificationRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main Screen"
          screenOptions={{
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
              color: 'black',
            },
            // headerLeft: () =>  <Ionicons name={'home-outline'} size={22} color={color} />
          }}
        >
          <Stack.Screen name="TempHome" component={TempHome} />
          <Stack.Screen
            name="Main Screen"
            component={MainScreen}
            options={{ headerShown: false }
            }
          />
          <Stack.Screen
            name="Login Screen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp Screen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Forget Password"
            component={ForgetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTPPassword Screen"
            component={OTPPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword Screen"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPasswordComplete Screen"
            component={ResetPasswordComplete}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Get Donations" component={GetDonations} options={{
            title: 'Get Donations',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="My Campaigns" component={MyCampaigns} options={{
            title: 'Campaigns',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="Donors" component={Donors} options={{
            title: 'Donors',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="Active Campaigns" component={ActiveCampaigns} options={{
            title: 'Campaigns',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="Blood Banks" component={BloodBanks} options={{
            title: 'Blood Banks',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="Campaign Details" component={CampaignDetails} options={{
            title: 'Campaigns',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="Feedback" component={Feedback} options={{
            title: 'Feedback',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="About Us" component={AboutUs} options={{
            title: 'About Us',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            headerStyle: {
              backgroundColor: '#E61F26'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="Donation History" component={DonationHistory} options={{
            title: 'Donation History',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="Profile" component={Profile} options={{
            title: 'Profile',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }}
          />
          <Stack.Screen name="Top Donors" component={TopDonors} options={{
            title: 'Top Donors',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} options={{
            title: 'Privacy Policy',
            headerTintColor: '#E52027',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#E52027',
              fontSize: 21,
              fontFamily: 'Outfit-Regular',
              fontWeight: 'bold'
            },
            drawerIcon: ({ color }) => (
              <Ionicons name={'share-social-outline'} size={22} color={color} />
            ),
          }} />
          <Stack.Screen
            name="Home"
            component={DrawerM}
            options={{
              headerShown: false,
              title: 'Home',
              headerTintColor: '#E52027',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#E52027',
                fontSize: 21,
                fontFamily: 'Outfit-Regular',
                fontWeight: 'bold'
              },
              drawerIcon: ({ color }) => (
                <Ionicons name={'share-social-outline'} size={22} color={color} />
              ),
            }}
          />
          <Stack.Screen
            name="Blood Type"
            component={BloodTypeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: 'Follow Us',
              headerTintColor: '#E52027',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#E52027',
                fontSize: 21,
                fontFamily: 'Outfit-Regular',
                fontWeight: 'bold'
              },
              drawerIcon: ({ color }) => (
                <Ionicons name={'share-social-outline'} size={22} color={color} />
              ),
            }}
          />
          <Stack.Screen
            name="Socials"
            component={SocialsScreen}
            options={{
              title: 'Follow Us',
              headerTintColor: '#E52027',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#E52027',
                fontSize: 21,
                fontFamily: 'Outfit-Regular',
                fontWeight: 'bold'
              },
              drawerIcon: ({ color }) => (
                <Ionicons name={'share-social-outline'} size={22} color={color} />
              ),
            }}
          />
          <Stack.Screen
            name="Drawer"
            component={DrawerM}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AlertNotificationRoot>
  );
};
//pprivacy
const PrivacyPolicy = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Image
            style={{ height: 170, width: 140, marginTop: 60 }}
            source={require('./images/RedLogo.png')}
          />
          <ScreenTitle title={'Privacy Policy for Donate Life'} />
        </View>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: '200', color: "black" }}>
            At Donate Blood, accessible from www.DonateBlood.com, one of
            our main priorities is the privacy of our visitors.
            {'\n'}
            {'\n'}This Privacy Policy document contains types of information
            that is collected and recorded by Donate Blood and how we use
            it.{'\n'}
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us. {'\n'}
            {'\n'}
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Donate Blood. This policy
            is not applicable to any information collected offline or via
            channels other than this website. {'\n'}
            Consent By using our website, you hereby consent to our Privacy
            Policy and agree to its terms. {'\n'}
            {'\n'}
            Information we collect {'\n'}
            {'\n'}
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. {'\n'}
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide. {'\n'}
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number. {'\n'}
            {'\n'}
            How we use your information {'\n'}
            We use the information we collect in various ways, including to:
            {'\n'}
            Provide, operate, and maintain our website{'\n'}
            Improve, personalize, and expand our website{'\n'}
            Understand and analyze how you use our website{'\n'}
            Develop new products, services, features, and functionality{'\n'}
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes{'\n'}
            Send you emails{'\n'}
            Find and prevent fraud{'\n'}
            {'\n'}
            Log Files
            {'\n'}
            Donate Blood follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information.{'\n'}
            Cookies and Web Beacons{'\n'}
            {'\n'}
            Like any other website, Donate Blood uses 'cookies'. These
            cookies are used to store information including visitors'
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users'
            experience by customizing our web page content based on visitors'
            browser type and/or other information.{'\n'}
            Advertising Partners Privacy Policies{'\n'}
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Donate Blood.{'\n'}
            {'\n'}
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Blood Donation
            Inc, which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.{'\n'}
            Note that Donate Blood has no access to or control over these
            cookies that are used by third-party advertisers.{'\n'}
            {'\n'}
            Third Party Privacy Policies{'\n'}
            Donate Blood's Privacy Policy does not apply to other
            advertisers or websites. Thus, we are advising you to consult the
            respective Privacy Policies of these third-party ad servers for more
            detailed information. It may include their practices and
            instructions about how to opt-out of certain options.{'\n'}
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.{'\n'}
            {'\n'}
            CCPA Privacy Rights (Do Not Sell My Personal Information){'\n'}
            Under the CCPA, among other rights, California consumers have the
            right to:{'\n'}
            {'\n'}
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.{'\n'}
            {'\n'}
            Request that a business delete any personal data about the consumer
            that a business has collected.{'\n'}
            {'\n'}
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.{'\n'}
            {'\n'}
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.{'\n'}
            {'\n'}
            GDPR Data Protection Rights{'\n'}
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:{'\n'}
            {'\n'}
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.{'\n'}
            {'\n'}
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.{'\n'}
            {'\n'}
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.{'\n'}
            {'\n'}
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.{'\n'}
            {'\n'}
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
            {'\n'}
            {'\n'}
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.{'\n'}
            {'\n'}
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.{'\n'}
            {'\n'}
            Children's Information Another part of our priority is adding
            protection for children while using the internet. We encourage
            parents and guardians to observe, participate in, and/or monitor and
            guide their online activity.{'\n'}
            {'\n'}
            Donate Blood does not knowingly collect any Personal
            Identifiable Information from children under the age of 13. If you
            think that your child provided this kind of information on our
            website, we strongly encourage you to contact us immediately and we
            will do our best efforts to promptly remove such information from
            our records.{'\n'}
          </Text>
          <View style={styles.rectangle} /></View>
      </ScrollView>
    </View>
  );
};
const TopDonors = () => {
  return (
    <View style={styles.bgSignup}>
      <View style={styles.titleContainer}>
        <Image
          style={{ height: 200, width: 370, marginTop: 40 }}
          source={require('./images/hero.png')}
        />
      </View>
      <ScrollView>
        <TopDonorsCard name="Azan" year="2018" bags="8" imageSource={require('./images/Azan.jpg')} />
        <TopDonorsCard name="Faheem" year="2016" bags="8" imageSource={require('./images/faheem.jpg')} />
        <TopDonorsCard name="Maira" year="2019" bags="8" imageSource={require('./images/maira.jpg')} />
        <TopDonorsCard name="Alisha" year="2018" bags="8" imageSource={require('./images/AlishaPic.jpg')} />
        <View style={styles.rectangleTopDonor} />
      </ScrollView>
    </View>
  );
};
//pProfile
const Profile = ({ navigation }) => {
  return (
    <View style={styles.bgSignup}>
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={
              styles.dpProfile}
            source={require('./images/placeholder.png')}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 5,
            marginLeft: 20,
          }}>
          <Text style={{
            fontSize: 20, color: 'black', marginRight: 10, marginLeft: 80
          }}>John Doe</Text>
          <Text style={{
            fontSize: 10,
            color: 'black',
            textDecorationLine: 'underline'
          }}
          >Edit Name</Text>
          <TouchableOpacity>
            <Image
              style={{ height: 20, width: 20, marginLeft: 5, marginRight: 10, left: -30, bottom: 30 }}
              source={require('./images/Gear.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ProfileCardGender gender="Male" />
          <ProfileCardAddress address="House No:675-D Rawalpindi" />
          <ProfileCardIllness illnesses="None" />
          <ProfileCardBlood blood="O+" />
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: 10, marginRight: 16 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Donation History');
            }}>
            <Text
              style={{
                color: "#E52027",
                marginLeft: 20,
                fontFamily: 'Outfit-Regular',
                fontSize: 16,
                textDecorationLine: 'underline',
                marginTop: 20,
              }}>
              Donation History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Feedback');
            }}>
            <Text
              style={{
                color: "#E52027",
                marginLeft: 20,
                fontFamily: 'Outfit-Regular',
                fontSize: 16,
                textDecorationLine: 'underline',
                marginTop: 20,
              }}>
              FeedBack
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};
//pdonation histpry
const DonationHistory = () => {
  return (
    <View style={styles.bgSignup}>
      <View style={styles.titleContainer}>
        <Image
          style={{
            height: 150,
            width: 150,
            borderColor: 'white',
            marginTop: 50
          }}
          source={require('./images/placeholder.png')}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 7, color: 'black' }}>
          Mr. XYZ
          {'\n'}
          {'\n'}
        </Text>
      </View>
      <View styles={{
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'pink',
        flex: 1,
        marginTop: 15
      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          // justifyContent:'space-around',
        }}>
          <Text style={{
            color: 'black',
            fontSize: 15,
            textAlign: 'center',
            width: '25%',
          }}>Date</Text>
          <Text style={{
            color: 'black',
            width: '42%',
            textAlign: 'center',
            fontSize: 15
          }}>Address</Text>
          <Text style={{
            color: 'black',
            width: '31%',
            textAlign: 'center',
            marginRight: 1,
            fontSize: 15
          }}>Campaign</Text>
        </View>
        <View style={styles.history
        }>
          <Text style={{
            color: 'black',
            fontSize: 15,
            width: '25%',
            color: 'white',
            paddingLeft: 4
          }}>13/05/2023</Text>
          <Text style={{
            color: 'black',
            width: '42%',
            color: 'white',
            paddingLeft: 50,
            fontSize: 15
          }}>I-8 branch {'\n'}Islamabad</Text>
          <Text style={{
            color: 'black',
            width: '31%',
            color: 'white',
            paddingLeft: 60,
            fontSize: 15
          }}>No</Text>
        </View>
        <View styles={{
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: 'pink',
          flex: 1,
          marginTop: 15
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            // justifyContent:'space-around',
          }}>
            <Text style={{
              color: 'black',
              fontSize: 15,
              textAlign: 'center',
              width: '25%',
            }}>Date</Text>
            <Text style={{
              color: 'black',
              width: '42%',
              textAlign: 'center',
              fontSize: 15
            }}>Address</Text>
            <Text style={{
              color: 'black',
              width: '31%',
              textAlign: 'center',
              marginRight: 1,
              fontSize: 15
            }}>Campaign</Text>
          </View>
          <View style={styles.history
          }>
            <Text style={{
              color: 'black',
              fontSize: 15,
              width: '25%',
              color: 'white',
              paddingLeft: 4
            }}>14/05/2023</Text>
            <Text style={{
              color: 'black',
              width: '42%',
              color: 'white',
              paddingLeft: 50,
              fontSize: 15
            }}>Comsats  {'\n'}Islamabad</Text>
            <Text style={{
              color: 'black',
              width: '31%',
              color: 'white',
              paddingLeft: 60,
              fontSize: 15
            }}>Yes</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleDonationScreen} />
    </View>
  );
};
//pAboutUs
const AboutUs = () => {
  return (
    <View style={styles.bgMain}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Image
            style={{ height: 250, width: 250 }}
            source={require('./images/Logo.png')}
          />
        </View>
        <View style={styles.containerAboutUs}>
          <Text style={styles.tAboutUs}>
            This organization Was Created To Aid Blood Transfusions
            Across Pakistan. We Aim To Facilitate This Process
            Through This Application. With This Application People Can
            Pledge To Donate To Active Blood Campaigns. This Method
            Will Provide Ease And Confirmation On The People
            Willing To Donate. {'\n'}{'\n'}
            <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
              Not All Heroes Wear Capes, Some Simply Donate Blood.
            </Text>
          </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleFeedback}>Founders</Text>
        </View>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Image
              style={{
                height: 120,
                width: 120,
                borderRadius: 100,
                marginRight: 30,
              }}
              source={require('./images/maira.jpg')}
            />
            <Image
              style={{
                height: 120,
                width: 120,
                borderRadius: 100,
                marginLeft: 30,
              }}
              source={require('./images/AlishaPic.jpg')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ marginRight: 20, fontWeight: 'bold', fontSize: 18 }}>
              Maira Anjum
            </Text>
            <Text style={{ marginLeft: 0, fontWeight: 'bold', fontSize: 18 }}>
              Alisha Asghar
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 30,
            }}>
            <Image
              style={{
                height: 120,
                width: 120,
                borderRadius: 100,
                marginRight: 30,
              }}
              source={require('./images/Azan.jpg')}
            />
            <Image
              style={{
                height: 120,
                width: 120,
                borderRadius: 100,
                marginLeft: 30,
              }}
              source={require('./images/faheem.jpg')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{ marginRight: 15, fontWeight: 'bold', fontSize: 18 }}>
              Azan Ahmad
            </Text>
            <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 18 }}>
              Faheem Siddiqi
            </Text>
          </View>
        </View>
        <View style={styles.whiteRectangle} />
      </ScrollView>
    </View>
  );
};
//pfeedback
const Feedback = () => {
  return (
    <View style={styles.bgSignup}>
      <Text style={{ fontSize: 35, color: 'black', textAlign: 'center', fontWeight: 'bold', marginTop: 50, marginBottom: 50 }}>We Would Love to Hear Your Feedback</Text>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.containerFeedback}>Email</Text>
          <TextInput style={styles.inputFieldFeedback} />
        </View>
        <View style={styles.container}>
          <Text style={styles.containerFeedback}>Feedback</Text>
          <TextInput style={styles.inputAreaFeedback} />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.btnText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};
//PMain Screen
const MainScreen = ({ navigation }) => {
  // const check = async () => {
  //   let token = await EncryptedStorage.getItem('JWT');
  //   if (token) {
  //     navigation.navigate('Drawer');
  //   }
  // };
  // useEffect(() => {
  //   check();
  // }, []);
  return (
    <View style={styles.bgMain}>
      <ScrollView>
        <Text style={styles.paragraph} />
        <View>
          <Image
            style={{ height: 290, width: 290, alignSelf: 'center', marginTop: 20 }}
            source={require('./images/Logo.png')}
          />
          <Text style={styles.LogoName} > Donate Life</Text>
          <Text style={styles.LogoSlogan}> Donate | Save | Community</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login Screen')}>
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'white',
              padding: 20,
              width: 350,
              marginTop: 90,
              alignContent: 'center',
              marginLeft: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#B0303B',
                fontSize: 22,
                fontFamily: 'Outfit-Regular',
              }}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp Screen')}>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: "rgba(0, 0, 0, 0.582)",
              borderWidth: 1,
              padding: 20,
              width: 350,
              marginTop: 20,
              alignContent: 'center',
              marginLeft: 20,
              marginBottom: -20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#DFDBDB',
                fontSize: 22,
                fontFamily: 'Outfit-Regular',
              }}>
              Create Account
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 100,
        }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Privacy Policy');
          }}>
            <Text
              style={{
                color: '#DFDBDB',
                marginLeft: 23,
                fontFamily: 'Outfit-Regular',
              }}>
              Learn More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: '#DFDBDB',
                fontFamily: 'Outfit-Regular',
                marginLeft: 200
              }}
              onPress={() => {
                navigation.navigate('TempHome');
              }}>
              Skip Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
//plogin
//psignin
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = async () => {
    try {
      await auth()
        .signInWithEmailAndPassword(username, password)
        .then(userCredential => {
          const user = userCredential.user;
          if (user) {
            console.log(user);
            setIsLogin(true);
            navigation.navigate('Home');
          }
        });
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Wrong Password Entered',
        button: 'Close',
      })
    }
  };
  return (
    <View style={styles.bgLogin}>
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Blood Bank',
              button: 'Close',
            })
          }>
          <View>
            <Image
              style={{
                height: 330,
                width: 270,
                alignSelf: 'center',
                marginTop: 60,
                marginBottom: 4,
              }}
              source={require('./images/RedLogo.png')}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              color: "#E52027",
              marginTop: -12,
              fontSize: 32,
              fontFamily: 'Outfit-Regular',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <TextInput
            placeholderTextColor={'black'}
            onChangeText={setUsername}
            style={{
              borderBottomWidth: 1,
              width: '90%',
              padding: 5,
              color: "black",
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
            }}
            placeholder="Username"
          />
          <TextInput
            onChangeText={setPassword}
            placeholderTextColor={'black'}
            style={{
              padding: 5,
              borderBottomWidth: 1,
              width: '90%',
              color: "black",
              marginTop: 40,
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
            }}
            placeholder="Password"
            secureTextEntry
          />
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={handleLogin}>
              <View
                style={styles.Standardbtn}>
                <Text
                  style={styles.standardbtnText}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ marginTop: 20, marginLeft: 25, alignSelf: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Forget Password')}>
                <Text
                  style={{
                    fontFamily: 'Outfit-Regular',
                    color: '#E62128',
                    fontSize: 18,
                  }}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 40, marginLeft: 25, alignSelf: 'center' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp Screen')}>
                <Text style={{ color: '#E62128', fontFamily: 'Outfit-Regular' }}>
                  Don't Have An Account?{' '}
                  <Text
                    style={{ color: '#E62128', fontFamily: 'Outfit-Regular', fontWeight: 'bold' }}>
                    Sign Up
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
//psignup 
const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Confirmpassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      //await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log("User Info:", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error)
        // some other error happened
      }
    }
  };
  const handleRegister = async () => {
    if (email && password && Confirmpassword) {
      if (Confirmpassword !== password) {
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Password Doesn't Match",
          textBody: '',
          button: 'Close',
        });
      } else {
        if (password.length < 6) {
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: "Password less than 6 characters",
            textBody: '',
            button: 'Close',
          });
        } else {
          await auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              const user = userCredential.user
              Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Signed Up Successfully",
                textBody: '',
                button: 'Close',
              });
            }).catch(error => {
              console.log('Can not register', error);
            })
        }
      }
    }
  }
  return (
    <>
      <View style={styles.bgSignup}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./assets/icons/backArrowWhite.png')}
            style={{ marginTop: 20, marginLeft: 10, width: 14, height: 28 }}
          />
        </TouchableOpacity>
        <StatusBar backgroundColor={redcolor} />
        <View style={{ marginTop: 70, alignSelf: 'center' }}>
          <Text
            style={{ color: "#E52027", fontWeight: 'bold', fontSize: 35 }}>
            SignUp
          </Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 90 }}>
          <TextInput
            onChangeText={setName}
            placeholderTextColor={'black'}
            style={{
              borderBottomWidth: 0.7,
              width: '90%',
              padding: 5,
              color: "black",
              fontSize: 20,
              fontFamily: 'Outfit-Regular',
            }}
            placeholder="Full Name"
          />
          <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
            <Icon name="person" size={25} color="black" />
          </View>
          <TextInput
            placeholderTextColor={'black'}
            onChangeText={setEmail}
            style={{
              padding: 5,
              borderBottomWidth: 0.7,
              color: "black",
              width: '90%',
              marginTop: 40,
              fontSize: 20,
              fontFamily: 'Outfit-Regular',
            }}
            placeholder="Email"
          />
          <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
            <MIcon name="email" size={25} color="black" />
          </View>
          <TextInput
            onChangeText={setPhone}
            placeholderTextColor={'black'}
            style={{
              padding: 5,
              color: "black",
              borderBottomWidth: 0.7,
              width: '90%',
              marginTop: 40,
              fontSize: 20,
              fontFamily: 'Outfit-Regular',
            }}
            placeholder="Phone Number"
          />
          <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
            <MIcon name="card-account-phone" size={25} color="black" />
          </View>
          <TextInput
            onChangeText={setPassword}
            placeholderTextColor={'black'}
            style={{
              padding: 5,
              borderBottomWidth: 0.7,
              color: "black",
              width: '90%',
              marginTop: 40,
              fontSize: 20,
              fontFamily: 'Outfit-Regular',
            }}
            placeholder="Password"
            secureTextEntry={passwordVisibility}
          />
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
              <MIcon name="eye" size={25} color="black" />
            </View>
          </TouchableOpacity>
          <TextInput
            onChangeText={setConfirmPassword}
            placeholderTextColor={'black'}
            style={{
              color: "black",
              padding: 5,
              borderBottomWidth: 0.7,
              width: '90%',
              marginTop: 40,
              fontSize: 20,
              fontFamily: 'Outfit-Regular',
            }}
            placeholder="Confirm Password"
            secureTextEntry={passwordVisibility}
          />
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <View style={{ marginLeft: 310, marginTop: -35, padding: 2 }}>
              <MIcon name="eye" size={25} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegister}>
            <View
              style={{
                backgroundColor: '#D71519',
                borderRadius: 10,
                borderColor: 'white',
                padding: 10,
                width: 250,
                marginTop: 30,
                alignContent: 'center',
                marginLeft: 20,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 22,
                  fontFamily: 'Outfit-Regular',
                }}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={signIn}>
            <View
              style={{
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'black',
                padding: 12,
                marginTop: 20,
                alignContent: 'center',
                marginLeft: 15,
                alignItems: 'center',
                width: 250,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 16,
                  fontFamily: 'Outfit-Regular',
                  marginLeft: 20,
                }}>
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{ marginLeft: -155, marginTop: -33, padding: 2 }}>
            <Image
              source={require('./images/Google.png')}
            // style={{ marginRight: 340, bottom: 690, width: 14, height: 28 }}
            />
          </View>
          <View style={{ marginTop: 30, marginLeft: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Login Screen")}>
              <Text style={{ color: '#E62128', fontFamily: 'Outfit-Regular' }}>
                Have An Account?{' '}
                <Text style={{ fontFamily: 'Outfit-Regular', color: '#E62128', fontWeight: 'bold' }}>
                  Sign In
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
//pforgetpassword
const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const forget = async () => {
    /* try {
       let res = await axios.post(`${URL}/api/v1/auth/forgotpassword`, {
         email: email,
       });
       if (res.data.success === true) {
         navigation.navigate('OTPPassword Screen');
       }
     } catch { }*/
    navigation.navigate('OTPPassword Screen');
    //neche wla code comment h pehle se
  };
  return (
    <>
      <View style={styles.bgSignup}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./assets/icons/backArrowWhite.png')}
            style={{ marginTop: 20, marginLeft: 10, width: 14, height: 28 }}
          />
        </TouchableOpacity>
        <StatusBar backgroundColor={redcolor} />
        <View style={{ alignSelf: 'center', top: -60 }}>
          <Text
            style={{ color: "#E52027", fontSize: 25, marginTop: 200, fontWeight: 'bold' }}>
            {' '}
            Forget Password?{' '}
          </Text>
        </View>
        <View style={{ alignSelf: 'center', marginLeft: 50, marginRight: 50 }}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Outfit-Regular',
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: -10,
            }}>
            Enter your email address for verification
          </Text>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Outfit-Regular',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            reset your password
          </Text>
        </View>
        <TextInput
          onChangeText={setEmail}
          placeholderTextColor={'black'}
          style={styles.inputFIeldForget}
          placeholder="Email"
        />
        <TouchableOpacity onPress={forget}>
          <View
            style={{
              backgroundColor: "#E52027",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'white',
              padding: 10,
              width: 150,
              marginTop: 50,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 22,
                fontFamily: 'Outfit-Regular',
              }}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.forgetpassrectangle}></View>
      </View>
    </>
  );
};
//pOTPPassoword
const OTPPassword = ({ navigation }) => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [fourth, setFourth] = useState('');
  const fwdcode = () => {
    let code = first + second + third + fourth;
    navigation.navigate('ResetPassword Screen', {
      code,
    });
  };
  return (
    <>
      <View style={styles.bgSignup}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./assets/icons/backArrowWhite.png')}
            style={{
              marginRight: 340,
              marginTop: 10,
              width: 14,
              height: 28,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
        <StatusBar backgroundColor={redcolor} />
        <View style={{ alignSelf: 'center', top: -60 }}>
          <Text
            style={{ color: "#E52027", fontSize: 25, marginTop: 200, fontWeight: 'bold' }}>
            {' '}
            Forget Password?{' '}
          </Text>
        </View>
        <View style={{ alignSelf: 'center', top: -60 }}>
          <Text
            style={{ color: 'black', fontSize: 22, marginTop: 50, marginleft: 30 }}>
            Enter the verification code sent to the Email Address{' '}
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            top: -20,
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <View
            style={styles.otp}>
            <TextInput
              onChangeText={setFirst}
              style={styles.otpText}
              maxLength={1}
            />
          </View>
          <View
            style={styles.otp}>
            <TextInput
              onChangeText={setSecond}
              style={styles.otpText}
              maxLength={1}
            />
          </View>
          <View
            style={styles.otp}>
            <TextInput
              onChangeText={setThird}
              style={styles.otpText}
              maxLength={1}
            />
          </View>
          <View
            style={styles.otp}>
            <TextInput
              style={styles.otpText}
              onChangeText={setFourth}
              maxLength={1}
            />
          </View>
        </View>
        <TouchableOpacity onPress={fwdcode}>
          <View
            style={{
              backgroundColor: "#E52027",
              borderWidth: 1,
              borderRadius: 10,
              borderColor: 'white',
              padding: 10,
              width: 150,
              marginTop: 10,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 22,
                fontFamily: 'Outfit-Regular',
              }}>
              Verify
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.forgetpassrectangle}></View>
      </View>
    </>
  );
};
//presetpassword
const ResetPassword = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.bgSignup}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('./assets/icons/backArrowWhite.png')}
            style={{
              marginRight: 340,
              marginTop: 10,
              width: 14,
              height: 28,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
        <StatusBar backgroundColor={redcolor} />
        <View style={{ alignSelf: 'center' }}>
          <Text
            style={{
              color: "#E52027",
              marginTop: 125,
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            {' '}
            Reset Your Password{' '}
          </Text>
        </View>
        <TextInput
          // onChangeText={setPassword}
          placeholderTextColor={'black'}
          style={styles.inputFields}
          placeholder="New Password"
        />
        <TextInput
          // onChangeText={setcPassword}
          placeholderTextColor={'black'}
          style={{
            padding: 10,
            alignSelf: 'center',
            width: '80%',
            marginTop: 40,
            color: "black",
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 100,
            },
            shadowOpacity: 0.31,
            shadowRadius: 80,
            elevation: 20,
            fontSize: 20,
            borderRadius: 8,
            fontFamily: 'Outfit-Regular',
            backgroundColor: '#F2F2F2',
            borderColor: '#FFFFFF',
          }}
          placeholder="Confirm Password"
        />
        <TouchableOpacity >
          <View
            style={{
              backgroundColor: '#E52027',
              borderRadius: 10,
              borderColor: '#E52027',
              padding: 10,
              width: 200,
              marginTop: 50,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 22,
                fontFamily: 'Outfit-Regular',
              }}>
              Reset
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ marginLeft: 5, bottom: 540 }}>
            <MIcon name="arrow-left" size={40} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <View style={styles.forgetpassrectangle}></View>
      </View>
    </>
  );
};
//presetpasswordcomplete
const ResetPasswordComplete = ({ navigation }) => {
  return (
    <>
      <View style={styles.bgSignup}>
        <StatusBar backgroundColor={redcolor} />
        <View style={{ alignSelf: 'center' }}>
          <Text
            style={{ color: '#E52027', marginTop: 125, fontSize: 22, fontWeight: 'bold' }}>
            {' '}
            Reset Your Password{' '}
          </Text>
        </View>
        <View style={{ alignSelf: 'center', top: 0 }}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Outfit-Regular',
              fontSize: 20,
              marginTop: 90,
              marginLeft: 30,
              marginRight: 30,
              fontWeight: 'bold',
            }}>
            Password updated successfuly. Login with EMAIL
          </Text>
        </View>
        <View style={{ alignSelf: 'center', top: 0 }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Outfit-Regular',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {' '}
            successfully. Login now with your{' '}
          </Text>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Outfit-Regular',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {' '}
            new password{' '}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login Screen')}>
          <View
            style={{
              backgroundColor: '#E52027',
              borderRadius: 10,
              padding: 10,
              width: 200,
              marginTop: 40,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 22,
                fontFamily: 'Outfit-Regular',
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.forgetpassrectangle4}></View>
      </View>
    </>
  );
};
//Components
const ScreenTitle = props => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};
const CampaignCard = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bgMyCampaign}>
      <View >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MIcon style={{ marginLeft: 12, marginTop: 12 }} name="blood-bag" size={30} color="#FFFFFF" />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 8, marginTop: 12 }}>{props.blood}</Text>
        </View>
        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MIcon style={{ marginTop: -38, marginRight: 30 }} name="hospital-building" size={30} color="white" />
          <View style={{ width: 15 }} />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 175, marginTop: -25 }}>{props.hospital}</Text>
        </View>
      </View>
      <View >
        <Icon style={{ marginTop: 12, marginLeft: 12 }} name="location-sharp" size={30} color="#FFFFFF" />
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 50, marginTop: -25 }}>{props.address}</Text>
      </View>
      <View >
        <TouchableOpacity
          style={styles.btncampaign}
          onPress={() => navigation.navigate('Donors')}
        >
          <Text style={styles.btnTextCampaign}>{props.button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const CampaignCardtwo = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bgMyCampaign}>
      <View >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MIcon style={{ marginLeft: 12, marginTop: 12 }} name="blood-bag" size={30} color="#FFFFFF" />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 8, marginTop: 12 }}>{props.blood}</Text>
        </View>
        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MIcon style={{ marginTop: -38, marginRight: 30 }} name="hospital-building" size={30} color="white" />
          <View style={{ width: 15 }} />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 175, marginTop: -25 }}>{props.hospital}</Text>
        </View>
      </View>
      <View >
        <Icon style={{ marginTop: 12, marginLeft: 12 }} name="location-sharp" size={30} color="#FFFFFF" />
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 50, marginTop: -25 }}>{props.address}</Text>
      </View>
      <View >
        <TouchableOpacity
          style={styles.btncampaign}
          onPress={() => navigation.navigate('Campaign Details')}
        >
          <Text style={styles.btnTextCampaign}>{props.button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ProfileCardGender = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Gender
        </Text>
      </View>
      <View >
        <Text style={styles.Infobg} >{props.gender}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: 'rgba(148,12,12,0.7)', textDecorationLine: 'underline', }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ProfileCardAddress = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Address
        </Text>
      </View>
      <View >
        <Text Text style={styles.Infobg}>
          {props.address}
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: 'rgba(148,12,12,0.7)', textDecorationLine: 'underline', }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ProfileCardBlood = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Blood Group
        </Text>
      </View>
      <View >
        <Text style={styles.Infobg}>{props.blood}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: 'rgba(148,12,12,0.7)', textDecorationLine: 'underline', }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ProfileCardMedications = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 14,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
          }}>
          Any Disease
        </Text>
      </View>
      <View >
        <Text style={{ fontSize: 20, color: 'black' }}>{props.medications}</Text>
      </View>
      <View style={styles.ProfileCardRedRight}>
        <TouchableOpacity>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('./images/GearRed.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ProfileCardIllness = props => {
  return (
    <View style={styles.ProfileCardStyle}>
      <View style={styles.ProfileCardRed}>
        <Text
          style={{
            fontSize: 16,
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
            alignContent: "center",
          }}>
          Any Disease
        </Text>
      </View>
      <View >
        <Text style={styles.Infobg}>{props.illnesses}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: 'rgba(148,12,12,0.7)', textDecorationLine: 'underline', }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const DonorCard = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.campaignsCardDonor}>
        <View style={{ width: "25%" }}>
          <Image
            source={props.img}
            style={{ borderRadius: 60, height: 80, width: 80 }}
          />
        </View>
        <View style={{ marginTop: 17, marginLeft: 10 }} >
          <Text style={{ color: 'black', fontSize: 18 }}>Name:  </Text>
          <Text style={{ color: 'black', fontSize: 18 }}>Blood: </Text>
        </View>
        <View
          style={{
            width: "75%",
            marginTop: 17,
            marginLeft: 10
          }}>
          <Text style={styles.donordetails}> {props.name}</Text>
          <Text style={styles.donordetails}>
            {props.blood}
          </Text>
          <TouchableOpacity
            style={styles.btncampaignDonorCard}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text
              style={{
                fontFamily: 'Outfit-SemiBold',
                textAlign: 'center',
                fontSize: 18,
                color: 'white',
              }} >Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const TopDonorsCard = props => {
  return (
    <>
      <View style={styles.TopDonorsCardStyle}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <Image
            style={{ height: 60, width: 60, borderRadius: 100, marginLeft: 20 }}
            source={props.imageSource}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
              maxWidth: 100,
              marginLeft: 20
            }}>
            {props.name}
          </Text>
        </View>
        <View style={{ justifyContent: 'center', marginRight: 10 }}>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}>
            Donating Since
          </Text>
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              fontSize: 15,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white'
            }}>
            {props.year}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <View style={styles.BoxGray}>
            <Text
              style={{
                fontFamily: 'Outfit-Regular',
                fontSize: 15,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black'
              }}>
              {props.bags} bags donated
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
const BloodBankCard = props => {
  const navigation = useNavigation()
  return (
    <View style={styles.bgMyCampaign}>
      <View >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            marginLeft: 15
          }}>
          <MIcon style={{ marginTop: -38, marginRight: 30 }} name="hospital-building" size={30} color="white" />
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: -25, marginTop: -25 }}>{props.hospital}</Text>
        </View>
        <View
          style={{
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </View>
      </View>
      <View >
        <Icon style={{ marginTop: 12, marginLeft: 12 }} name="location-sharp" size={30} color="#FFFFFF" />
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15, marginLeft: 50, marginTop: -25 }}>{props.address}</Text>
      </View>
      <View >
        <TouchableOpacity
          style={styles.btncampaign}
          onPress={() => navigation.navigate('Donors')}
        >
          <Text style={styles.btnTextCampaign}>{props.button}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// Screens
//pgetdonations
const GetDonations = ({ navigation }) => {
  const [patientName, setPatientName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setlocation] = useState('');
  const [contactNumber, setcontactNumber] = useState('');
  const [details, setDetails] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <ScreenTitle title={'Enter Details'} />
        <View style={styles.containerDetail}>
          <TextInput
            placeholderTextColor={'black'}
            onChangeText={setPatientName}
            style={{
              borderBottomWidth: 1,
              width: '90%',
              padding: 5,
              color: "black",
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
              marginBottom: 30
            }}
            placeholder="Patient Name"
          />
        </View>
        <View style={styles.containerDetail}>
          <TextInput
            placeholderTextColor={'black'}
            onChangeText={setBloodGroup}
            style={{
              borderBottomWidth: 1,
              width: '90%',
              padding: 5,
              color: "black",
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
              marginBottom: 30
            }}
            placeholder="Blood Group"
          />
        </View>
        <View style={styles.containerDetail}>
          <TextInput
            placeholderTextColor={'black'}
            onChangeText={setlocation}
            style={{
              borderBottomWidth: 1,
              width: '90%',
              padding: 5,
              color: "black",
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
              marginBottom: 30
            }}
            placeholder="Location"
          />
          <Icon
            style={styles.aciconGetDonation}
            name="location-outline"
            size={30}
            color="red"
          />
        </View>
        <View style={styles.containerDetail}>
          <TextInput
            placeholderTextColor={'black'}
            onChangeText={setcontactNumber}
            style={{
              borderBottomWidth: 1,
              width: '90%',
              padding: 5,
              color: "black",
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
              marginBottom: 30
            }}
            placeholder="Contact Number"
          />
        </View>
        <View style={styles.containerDetail}>
          <TextInput
            placeholderTextColor={'black'}
            onChangeText={setcontactNumber}
            style={{
              borderBottomWidth: 1,
              width: '90%',
              padding: 5,
              color: "black",
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
              marginBottom: 100
            }}
            placeholder="Patient Medical Details"
          />
        </View>
        <View style={styles.container}  >
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Active Campaigns')}>
            <Text style={styles.btnText}>Request Donations</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rectangle} />
      </ScrollView>
    </View>
  );
};
//pmycam
const MyCampaigns = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <ScreenTitle title={'My Campaigns'} />
        <CampaignCard
          blood='O+ve'
          hospital='HBS Medical College'
          address='Taramri Chowk,Islamabad'
          button='View Donors'
        />
        <CampaignCard
          blood='AB+ve'
          hospital='NIH, Islamabad '
          address='Park Road, Islamabad'
          button='View Donors'
        />
        <CampaignCard
          blood='O+ve'
          hospital='Comsats Islamabad'
          address='Park Road,Islamabad'
          button='View Donors'
        />
      </ScrollView>
      <View style={styles.rectangle} />
    </View>
  );
};
//pdonor  
const Donors = (navigation) => {
  return (
    <View style={styles.bgSignup}>
      <ScrollView>
        <View style={{ marginTop: 30, marginBottom: 30 }}>
          <CampaignCardtwo
            blood="O+ve"
            hospital="HBS Medical College"
            address="Taramari Chowk, Islamabad"
            button={'Campaign Details'}
          />
        </View>
        <Text style={{ color: 'black', fontSize: 25, fontWeight: "bold", marginLeft: 100, marginBottom: 30 }}>Available Donors</Text>
        <DonorCard
          img={require('./images/maira.jpg')}
          name="Maira Anjum"
          blood="A+"
        />
        <DonorCard
          img={require('./images/AlishaPic.jpg')}
          name="Alisha Asghar"
          blood="O+"
        />
        <DonorCard
          img={require('./images/Azan.jpg')}
          name="Azan Ahmed"
          blood="O+"
        />
        <DonorCard
          img={require('./images/faheem.jpg')}
          name="Faheem Siddiqi"
          blood="A+"
        />
      </ScrollView>
    </View>
  );
};
//pactive
const ActiveCampaigns = ({ navigation, props }) => {
  return (
    <View style={styles.bgSignup}>
      <ScrollView>
        <ScreenTitle title={'Active Campaigns'} />
        <View>
          <TextInput
            placeholderTextColor={'black'}
            style={{
              padding: 5,
              borderBottomWidth: 1,
              width: '90%',
              color: "black",
              marginLeft: 20,
              marginTop: 40,
              marginBottom: 30,
              fontSize: 22,
              fontFamily: 'Outfit-Regular',
            }}
            placeholder="Islamabad"
          />
          <Icon
            style={styles.acicon}
            name="location-outline"
            size={30}
            color="red"
          />
        </View>
        <CampaignCard
          blood='O+ve'
          hospital='HBS Medical College'
          address='Taramri Chowk, Islamabad'
          button='View Donors'
        />
        <CampaignCard
          blood='AB+ve'
          hospital='NIH, Islamabad'
          address='Park Road, Islamabad'
          button='View Donors'
        />
      </ScrollView>
    </View>
  );
};
// pbloodbank
const BloodBanks = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View style={{ marginBottom: 25, fontSize: '18' }}>
          <View>
            <TextInput
              placeholderTextColor={'black'}
              style={{
                padding: 5,
                borderBottomWidth: 1,
                width: '90%',
                color: "black",
                marginLeft: 20,
                marginTop: 40,
                marginBottom: 30,
                fontSize: 22,
                fontFamily: 'Outfit-Regular',
              }}
              placeholder="Islamabad"
            />
            <Icon
              style={styles.acicon}
              name="location-outline"
              size={30}
              color="red"
            />
          </View>
        </View>
        <Text style={{ textAlign: "center", fontSize: 35, color: "black", marginBottom: 12 }}>Available  Blood Bank</Text>
        <BloodBankCard
          hospital="HBS Medical College"
          address="Taramari Chowk,Islamabad"
          button="Contact"
        />
        <BloodBankCard
          hospital="HBS Medical College"
          address="Taramari Chowk,Islamabad"
          button="Contact"
        />
        <BloodBankCard
          hospital="HBS Medical College"
          address="Taramari Chowk,Islamabad"
          button="Contact"
        />
      </ScrollView>
    </View>
  );
};
//pCampaignDetails
const CampaignDetails = ({ navigation }) => {
  return (
    <View style={styles.bgSignup}>
      <ScreenTitle title={'Campaign Details'} />
      <View style={styles.campaigncardDetails}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ color: '#E52027', fontWeight: 'bold', width: "50%", marginLeft: 12 }}>
            Patient Name
          </Text>
          <Text style={{ color: 'black', fontWeight: 'light', width: "50%", marginLeft: 12 }}>
            XYZ
          </Text>
        </View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ color: '#E52027', fontWeight: 'bold', width: "50%", marginLeft: 12 }}>
            Blood Group
          </Text>
          <Text style={{ color: 'black', fontWeight: 'light', width: "50%", marginLeft: 12 }}>
            O +ive
          </Text>
        </View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ color: '#E52027', fontWeight: 'bold', width: "50%", marginLeft: 12 }}>
            Location
          </Text>
          <Text style={{ color: 'black', fontWeight: 'light', width: "50%", marginLeft: 12 }}>
            HBS, Islamabad
          </Text>
        </View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ color: '#E52027', fontWeight: 'bold', width: "50%", marginLeft: 12 }}>
            Contact Number
          </Text>
          <Text style={{ color: 'black', fontWeight: 'light', width: "50%", marginLeft: 12 }}>
            XXX-XXXXXXXXXXX
          </Text>
        </View>
        <View style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ color: '#E52027', fontWeight: 'bold', width: "50%", marginLeft: 12 }}>
            Patient Medical Details
          </Text>
          <Text style={{ color: 'black', fontWeight: 'light', width: "50%", marginLeft: 12 }}>
            Bypass Operation
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <View style={styles.innerBtnTextCDS}>
            <Text style={styles.innerBtnText}>Donate</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('My Campaigns');
        }}>
        <Text
          style={{
            color: "#E52027",
            marginLeft: 20,
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            textDecorationLine: 'underline',
            marginTop: 100,
          }}>
          View My Campaigns
        </Text>
      </TouchableOpacity>
      <View style={styles.rectangleCDS}></View>
    </View>
  );
};
//MAK Screens and Drawer
//pbloodtypescreen
function BloodTypeScreen({ navigation }) {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.bgSignup}>
      <View
        style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('./assets/images/bloodBank.png')}
          style={{
            height: 110,
            width: 110,
          }}
        />
      </View>
      <Text style={styles.HeaderBloodType}>Please Select Blood Group</Text>
      <View style={styles.bloodWhiteContainer}>
        <View>
          <TouchableOpacity style={styles.bigBox}>
            <Text style={styles.innerText}>A</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.bigBoxRed}>
            <Text style={styles.innerTextRed}>B</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.bigBox}>
            <Text style={styles.innerText}>O</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.bigBox}>
            <Text style={styles.innerText}>AB</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: '12%',
        }}>
        <View >
          <TouchableOpacity style={styles.smBoxRed}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Positive
            </Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.smBox}>
            <Text
              style={styles.smBtnTextWhite}>
              Negative
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Blood Banks')}>
          <View style={styles.button}>
            <Text style={styles.innerBtnText}>Finish</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//pdashboard
function DashboardScreen({ navigation }) {
  return (
    <View style={styles.bgSignup}>
      <View
        style={{ alignItems: 'center', justifyContent: 'center', margin: 20 }}>
        <Text style={styles.textD}>Nearby  Blood Bank Stocks</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '38%',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            height: '90%',
            width: '88%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/images/bloodstock.png')}
            style={{ height: '100%', width: '100%', marginTop: 10 }}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Blood Banks')}>
          <View
            style={
              styles.bgDashboardOpt
            }>
            <Image
              source={require('./assets/images/bloodBank.png')}
              style={{ width: 59, height: 74 }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                fontFamily: 'Outfit-Regular',
                marginTop: 10,
              }}>
              Blood Banks
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Get Donations')}>
          <View
            style={
              styles.bgDashboardOpt
            }>
            <Image
              source={require('./assets/images/Campaign.png')}
              style={{ width: 70, height: 70 }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                fontFamily: 'Outfit-Regular',
                marginTop: 10,
              }}>
              Campaign
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Socials')}>
        <Text style={{
          color: "#E52027",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 38,
        }}>Share @ social media</Text>
      </TouchableOpacity>
      <View style={styles.rectangle} />
    </View>
  );
}
//psocial
function SocialsScreen({ navigation }) {
  return (
    <View style={styles.bgSignup}>
      <View style={styles.ContainerSms}>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Facebook',
              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBoxFB}>
            <View style={{
              alignItems: 'center', justifyContent: 'center'
            }}>
              <Image
                source={require('./assets/logos/fb.png')}
                style={{
                  width: 86,
                  height: 86,
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text3}>Facebook</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Twitter',
              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBoxTW}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/logos/twitter.png')}
                style={{
                  width: 96,
                  height: 96,
                }}
              />
              <View style={{ marginTop: 10 }}>
                <Text style={styles.text3}>Twitter</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to LinkedIn',
              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBoxLI}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/logos/linkedin.png')}
                style={{
                  width: 96,
                  height: 96,
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text3}>LinkedIn</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Instagram',
              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBoxIG}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/logos/instagram.png')}
                style={{
                  marginTop: 15,
                  width: 56,
                  height: 56,
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text3}>Instagram</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Welcome to Youtube',
              button: 'Close',
            })
          }>
          <View style={styles.SocialMediaBoxYT}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={require('./assets/logos/yt.png')}
                style={{
                  marginTop: 30,
                  width: 76,
                  height: 56,
                  borderRadius: 7,
                }}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.text3}>Youtube</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//pSettingsScreen
function SettingsScreen({ navigation }) {
  return (
    <View
      style={styles.bgSignup}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <View style={{ alignItems: 'center', marginBottom: 5 }}>
          <View style={{ flexDirection: 'row', margin: 10 }}>
            <Image
              source={require('./assets/images/mt.png')}
              style={{ width: 58, height: 58, borderRadius: 38 / 2, marginTop: 40 }}
            />
            <View style={{ marginRight: 130, marginLeft: 15, marginTop: 50 }}>
              <Text
                style={{
                  fontFamily: 'Outfit-SemiBold',
                  fontSize: 16,
                  color: 'black',
                }}>
                Faheem Siddiqi
              </Text>
              <Text
                style={{
                  fontFamily: 'Outfit-Light',
                  fontSize: 12,
                  color: 'grey',
                }}>
                Edit Personal details
              </Text>
            </View>
            <Image
              source={require('./assets/icons/arrowW.png')}
              style={{ width: 10, height: 20, marginRight: 20, marginTop: 6, marginTop: 50 }}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: 'Outfit-SemiBold',
          fontSize: 16,
          color: 'black',
        }}>
        _________________________________________________
      </Text>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            color: 'black',
            marginRight: 260,
            marginTop: 50,
            fontWeight: 'bold',
          }}>
          Profile
        </Text>
        <View
          style={{
            width: '80%',
            height: 153,
            borderRadius: 10,
            margin: 10,
            padding: 10,
            backgroundColor: '#E52027',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 100,
            },
            shadowOpacity: 0.25,
            shadowRadius: 80,
            elevation: 5,
          }}>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Image
              source={require('./assets/icons/profile.png')}
              style={{ width: 24, height: 24 }}
            />
            <Text style={styles.textS}>Edit Profile</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={{ marginLeft: '30%' }}>
              <Image
                source={require('./assets/icons/arrow-right.png')}
                style={{ width: 12, height: 22, marginLeft: '48%' }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 15, flexDirection: 'row' }}>
            <Image
              source={require('./assets/icons/password.png')}
              style={{ width: 24, height: 24, marginTop: 10, }}
            />
            <Text style={styles.textS}>Change Password</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ResetPassword Screen')}
              style={{ marginLeft: '23%' }}>
              <Image
                source={require('./assets/icons/arrow-right.png')}
                style={{ width: 12, height: 22, marginLeft: '32%' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'Outfit-Regular',
            fontSize: 16,
            color: 'black',
            marginRight: 250,
            marginTop: 20,
            fontWeight: 'bold'
          }}>
          Regional
        </Text>
        <View
          style={{
            width: '80%',
            height: 153,
            borderRadius: 10,
            margin: 10,
            padding: 10,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 100,
            },
            shadowOpacity: 0.25,
            shadowRadius: 80,
            elevation: 5,
          }}>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Image
              source={require('./assets/icons/language.png')}
              style={{ width: 24, height: 24, marginTop: 10, }}
            />
            <Text style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Outfit-Regular',
              margin: 3,
              marginLeft: 28,
              marginTop: 12,
            }}>Language</Text>
            <TouchableOpacity
              style={{ marginLeft: '30%' }}
              onPress={() => navigation.navigate('TempHome')}>
              <Image
                source={require('./assets/icons/arrowW.png')}
                style={{ width: 12, height: 22, marginLeft: '51%' }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Main Screen')}>
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
              <Image
                source={require('./assets/icons/logout.png')}
                style={{ width: 24, height: 24, marginTop: 10, }}
              />
              <Text style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Outfit-Regular',
                margin: 3,
                marginTop: 12,
                marginLeft: 28,
              }}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
//pdrawer custom
const CustomDrawer = props => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('./assets/images/bg.png')}
      style={{
        flex: 1,
        resizeMode: 'cover',
      }}
    >
      <View style={{ flex: 1, }}>
        <DrawerContentScrollView
          {...props}
        >
          <Image
            source={require('./assets/images/person1.png')}
            style={{ height: 80, width: 80, borderRadius: 40, marginLeft: 100 }}
          />
          <Text
            style={{
              fontFamily: 'Outfit-Regular',
              color: 'white',
              fontSize: 18,
              marginLeft: 100,
              marginTop: 8
            }}>
            Person XYZ
          </Text>
          <Text
            style={{
              fontFamily: 'Outfit-SemiBold',
              fontSize: 16,
              color: 'white',
            }}>
            ___________________________________
          </Text>
          <View style={{ backgroundColor: 'transparent', paddingTop: 10 }}>
            <DrawerItemList {...props} />
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', height: 245 }} />
            <DrawerItem
              label="About Us"
              labelStyle={{
                marginLeft: 10,
                fontFamily: 'Outfit-Regular',
                fontSize: 15,
                color: 'black',
                position: 'absolute',
                bottom: -40,
                width: '100%',
                height: 50,
              }}
              onPress={() => navigation.navigate('About Us')}
            />
          </View>
        </DrawerContentScrollView>
        <View style={{ padding: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Main Screen')}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name={'log-out-outline'} size={22} color={'black'} />
              <Text
                style={{
                  fontFamily: 'Outfit-Regular',
                  fontSize: 15,
                  marginLeft: 5,
                  color: '#333',
                }}>
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
//psidedrawerh
const DrawerM = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Outfit-Regular',
          fontSize: 15,
        },
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'white',
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          headerTintColor: '#E52027',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#E52027',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
            fontWeight: 'bold'
          },
          drawerIcon: ({ color }) => (
            <Ionicons name={'home-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name={'person-outline'} size={22} color={color} />
          ),
          headerTintColor: '#E52027',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#E52027',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
            fontWeight: 'bold'
          },
        }}
      />
      <Drawer.Screen
        name="Top Donors"
        component={TopDonors}
        options={{
          title: 'Top Donors',
          headerTintColor: '#E52027',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#E52027',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
            fontWeight: 'bold'
          },
          drawerIcon: ({ color }) => (
            <Ionicons name={'home-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Campaign"
        component={MyCampaigns}
        options={{
          title: 'My Campaign',
          headerTintColor: '#E52027',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#E52027',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
            fontWeight: 'bold'
          },
          drawerIcon: ({ color }) => (
            <Ionicons name={'home-outline'} size={22} color={color} />
          ),
        }}
      />
      {/* pdrawer */}
      <Drawer.Screen
        name="Socials"
        component={SocialsScreen}
        options={{
          title: 'Follow Us',
          headerTintColor: '#E52027',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#E52027',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
            fontWeight: 'bold'
          },
          drawerIcon: ({ color }) => (
            <Ionicons name={'share-social-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerTintColor: '#E52027',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#E52027',
            fontSize: 21,
            fontFamily: 'Outfit-Regular',
            fontWeight: 'bold'
          },
          drawerIcon: ({ color }) => (
            <Ionicons name={'home-outline'} size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Blood"
        component={BloodTypeScreen}
        options={{
          headerShown: false,
          drawerLabelStyle: {
            marginLeft: -20,
            fontFamily: 'Outfit-Regular',
            fontSize: 15,
          },
          drawerIcon: ({ color }) => (
            <Fontisto
              name={'blood-drop'}
              size={22}
              color={color}
              style={{ marginLeft: 5 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const logout1 = async ({ navigation }) => {
  let token = await EncryptedStorage.setItem('JWT', null);
  try {
    if (!token) {
      navigation.navigate('Setting');
    }
  } catch {
    console.log('Error');
  }
};
const TempHome = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={{ marginVertical: 10 }}>
          <Button
            title={'Get Blood Donation'}
            onPress={() => navigation.navigate('Get Donations')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'My Campaigns'}
            onPress={() => navigation.navigate('My Campaigns')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Donors'}
            onPress={() => navigation.navigate('Donors')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Active Campaigns'}
            onPress={() => navigation.navigate('Active Campaigns')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Blood Banks'}
            onPress={() => navigation.navigate('Blood Banks')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Campaign Details'}
            onPress={() => navigation.navigate('Campaign Details')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Main Screen'}
            onPress={() => navigation.navigate('Main Screen')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Login Screen'}
            onPress={() => navigation.navigate('Login Screen')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'SignUp Screen'}
            onPress={() => navigation.navigate('SignUp Screen')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Forget Password'}
            onPress={() => navigation.navigate('Forget Password')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'OTPPassword Screen'}
            onPress={() => navigation.navigate('OTPPassword Screen')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'ResetPassword Screen'}
            onPress={() => navigation.navigate('ResetPassword Screen')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'ResetPasswordComplete Screen'}
            onPress={() => navigation.navigate('ResetPasswordComplete Screen')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Feedback'}
            onPress={() => navigation.navigate('Feedback')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'About Us'}
            onPress={() => navigation.navigate('About Us')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Donation History'}
            onPress={() => navigation.navigate('Donation History')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Profile'}
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Top Donors'}
            onPress={() => navigation.navigate('Top Donors')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Privacy Policy'}
            onPress={() => navigation.navigate('Privacy Policy')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button title={'Home'} onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Blood Type'}
            onPress={() => navigation.navigate('Blood Type')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Settings'}
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Socials'}
            onPress={() => navigation.navigate('Socials')}
          />
        </View>
        <View style={{ marginVertical: 1 }}>
          <Button
            title={'Drawer'}
            onPress={() => navigation.navigate('Drawer')}
          />
        </View>
      </ScrollView>
    </>
  );
};
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  bgMain: {
    backgroundColor: "#E61F26",
    flex: 1,
  },
  LogoName: {
    fontSize: 33,
    textAlign: "center",
    alignContent: "center",
    color: "white"
  }
  ,
  LogoSlogan: {
    marginTop: 10,
    fontSize: 21,
    textAlign: "center",
    alignContent: "center",
    color: "white"
  },
  bgLogin: {
    backgroundColor: "white",
    flex: 1,
  },
  Standardbtn: {
    backgroundColor: "#E52027",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    padding: 10,
    width: 220,
    marginTop: 70,
    alignContent: 'center',
    marginLeft: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  standardbtnText: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: "#E52027",
    fontSize: 22,
    fontFamily: 'Outfit-Regular',
    fontWeight: 'bold',
  },
  bgSignup: {
    backgroundColor: "white",
    flex: 1,
  },
  inputFields: {
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    marginTop: 60,
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.31,
    shadowRadius: 80,
    elevation: 20,
    borderRadius: 8,
    color: "black",
    fontFamily: 'Outfit-Regular',
    backgroundColor: '#F2F2F2',
    borderColor: '#FFFFFF',
  },
  inputFieldFeedback: {
    padding: 10,
    alignSelf: 'center',
    width: '100%',
    marginTop: 20,
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.31,
    shadowRadius: 80,
    elevation: 20,
    borderRadius: 8,
    color: "black",
    fontFamily: 'Outfit-Regular',
    backgroundColor: '#F2F2F2',
    borderColor: '#FFFFFF',
  },
  inputAreaFeedback: {
    padding: 10,
    alignSelf: 'center',
    width: '100%',
    height: 200,
    marginTop: 20,
    fontSize: 20,
    shadowColor: '#000',
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.31,
    shadowRadius: 80,
    elevation: 20,
    borderRadius: 8,
    color: "black",
    fontFamily: 'Outfit-Regular',
    backgroundColor: '#F2F2F2',
    borderColor: '#FFFFFF',
  },
  otp: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.31,
    shadowRadius: 80,
    elevation: 20,
    padding: 1,
    borderRadius: 8,
    width: 64,
    height: 66,
    marginRight: 9,
  },
  otpText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 9,
    color: "black",
    alignSelf: 'center',
    marginRight: 5,
  },
  inputFIeldForget: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.31,
    shadowRadius: 80,
    elevation: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.31,
    shadowRadius: 80,
    elevation: 20, alignSelf: 'center',
    color: "black",
    width: '70%',
    marginTop: 40,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: 'Outfit-Regular',
    backgroundColor: '#F2F2F2',
    borderColor: '#FFFFFF',
  },
  dpProfile: {
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: '#E52027',
    borderColor: '#F4F4F4',
    borderWidth: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.23,
    shadowRadius: 80,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 41.7776,
    },
    shadowRadius: 33.4221,
    shadowOpacity: 0.001,
    shadowOffset: {
      width: 1,
      height: 22.3363,
    },
    shadowRadius: 3.21381,
    shadowOpacity: 0.0646635,
  },
  campaigncard: {
    backgroundColor: redcolor,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 330,
    width: '100%',
    minHeight: 250,
    borderRadius: 10,
    padding: 15,
  },
  campaigncardDetails: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E52027',
    borderRadius: 10,
    shadowColor: '#000',
    width: '85%',
    padding: 12,
    marginLeft: 30,
    marginBottom: 20,
    paddingTop: 60,
    height: 320,
    alignContent: 'center',
    shadowOffset: {
      width: 0,
      height: 51,
    },
    shadowOpacity: 0.16,
    shadowRadius: 80,
    elevation: 8,
  },
  donorCardInnerRight: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  donordetails: {
    fontFamily: 'Outfit-Bold',
    textAlign: 'left',
    fontSize: 20,
    color: 'black',
  },
  cpmrowdetail: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'left',
    fontSize: 20,
    color: 'white',
  },
  campaignsCard: {
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 142,
    backgroundColor: redcolor,
    maxWidth: 330,
    width: '100%',
    borderRadius: 16,
    flexDirection: 'column',
    marginBottom: 20,
  },
  campaignsCardDonor: {
    padding: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 142,
    maxWidth: 385,
    width: '100%',
    borderRadius: 16,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#FF0505',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.2,
    shadowRadius: 80,
    elevation: 5,
  },
  Infobg: {
    fontSize: 20,
    color: "black",
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.31,
    shadowRadius: 80,
    elevation: 20,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: -15,
    width: 160,
    height: 53,
    padding: 12,
  },
  //pcss
  forgetpassrectangle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 282,
    color: "black",
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
  },
  forgetpassrectangle4: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 362,
    color: "black",
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
  },
  btnTextCampaign: {
    color: "#E11F26",
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "center",
    alignContent: "center"
  },
  innerBtnTextCDS: {
    backgroundColor: '#E11F26',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.3,
    shadowRadius: 80,
    elevation: 8,
    padding: 18,
    width: 300,
    height: 60,
    borderRadius: 10,
    marginBottom: 80,
    marginTop: 10,
  },
  bgMyCampaign: {
    backgroundColor: '#E52027',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    minWidth: '85%',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.2,
    shadowRadius: 80,
    elevation: 8,
    marginBottom: 15
  },
  bgDashboardOpt: {
    backgroundColor: '#FFFFFF',
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 156,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.09,
    shadowRadius: 80,
    elevation: 5,
  },
  history: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginLeft: 20,
    height: 60,
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(229, 32, 39, 0.9)',
    borderWidth: 2,
    borderColor: '#C53437',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.28,
    shadowRadius: 80,
    elevation: 8,
  },
  campaignsCardInnerDonor: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  // campaignsCardInner: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   padding: 10,
  //   alignItems: 'center',
  //   backgroundColor:'red'
  // },
  // campaignsCardInnerRight: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   alignItems: 'center',
  //   justifyContent: 'flex-end',
  //   backgroundColor:'red'
  // },
  // campaignBloodgrp: {
  //   fontFamily: 'Outfit-Bold',
  //   textAlign: 'center',
  //   fontSize: 24,
  //   color: 'white',
  // },
  // campaignHospital: {
  //   fontFamily: 'Outfit-Bold',
  //   textAlign: 'center',
  //   fontSize: 20,
  //   color: 'white',
  // },
  // hospitaladdress: {
  //   fontFamily: 'Outfit-Bold',
  //   textAlign: 'center',
  //   fontSize: 13,
  //   color: 'white',
  // },
  btncampaign: {
    height: 43,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginVertical: 3,
    marginTop: 20,
  },
  btncampaignDonorCard: {
    height: 50,
    width: '120%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    marginVertical: 3,
    marginTop: 50,
    marginBottom: 4,
    marginLeft: -150,
  },
  inputContainer: {
    justifyContent: 'center',
    maxWidth: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '55%',
    fontWeight: 'bold',
  },
  acicon: {
    position: 'absolute',
    right: 10,
    top: '42%',
    fontWeight: 'bold',
  },
  aciconGetDonation: {
    position: 'absolute',
    right: 40,
    top: '0%',
    fontWeight: 'bold',
  },
  containerDetail: {
    maxWidth: 360,
    marginLeft: 'auto',
    marginBottom: 10,
    width: '100%',
    borderRadius: 10
  },
  container: {
    maxWidth: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    width: '100%',
    borderRadius: 10
  },
  containerAboutUs: {
    maxWidth: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5,
    width: '100%',
    backgroundColor: 'rgba(50, 15, 16, 0.85)',
    borderWidth: 1,
    borderColor: 'black',
  },
  containerFeedback: {
    color: '#C53437',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  container2: {
    maxWidth: 330,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    width: '100%',
    borderColor: redcolor,
  },
  titleContainer: {
    minHeight: 144,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
  },
  titleFeedback: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
  },
  tfield: {
    fontSize: 24,
    fontFamily: 'Outfit-Regular',
    color: 'black',
  },
  input: {
    height: 60,
    marginTop: 12,
    borderWidth: 2,
    padding: 10,
    width: 330,
  },
  textArea: {
    height: 92,
    marginTop: 12,
    borderWidth: 2,
    padding: 10,
    width: 330,
  },
  btn: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E52027",
    padding: 10,
    borderRadius: 16,
    marginVertical: 12,
  },
  btnText: {
    fontFamily: 'Outfit-Regular',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  main: {
    flex: 1,
    backgroundColor: '#C53437',
  },
  topLeft: {
    position: 'relative',
    left: -140,
    top: -80,
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    backgroundColor: '#CD4254',
  },
  rectangleCDS: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 212,
    color: "black",
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
  },
  rectangle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 72,
    color: "black",
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
  },
  rectangleTopDonor: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 72,
    color: "black",
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
  },
  rectangleDonationScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 72,
    color: "black",
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'red',
    marginTop: 260
  },
  whiteRectangle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 135,
    marginTop: 72,
    color: "black",
    marginBottom: 7,
    height: 4,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
  },
  inputFeedback: {
    height: 220,
    marginTop: 12,
    borderWidth: 2,
    padding: 10,
    width: 330,
  },
  tAboutUs: {
    padding: 20,
    fontSize: 15,
    fontFamily: 'Outfit-Regular',
    color: 'white',
    backgroundColor: '#C53437',
  },
  ProfileCardStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 50,
    backgroundColor: 'white',
    maxWidth: 360,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
  },
  ProfileCardRed: {
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#C53437',
    maxWidth: 120,
    mindWidth: 120,
    minHeight: 50,
    width: '100%',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16
  },
  ProfileCardRedRight: {
    padding: 110,
    alignItems: 'center',
    backgroundColor: 'white',
    maxWidth: 70,
    mindWidth: 70,
    minHeight: 50,
    width: 120,
    color: 'red'
  },
  TopDonorsCard: {
    backgroundColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  TopDonorsCardStyle: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 120,
    maxHeight: 120,
    maxWidth: 400,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#E52027',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 0.2,
    shadowRadius: 80,
    elevation: 8,
  },
  BoxGray: {
    padding: 10,
    marginRight: 20,
    height: 100,
    alignItems: 'center',
    maxWidth: 110,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 11,
  },
  HistoryCard: {
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 40,
  },
  HistoryCardStyle: {
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: 50,
    backgroundColor: 'white',
    maxWidth: 360,
    width: '100%',
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  HistoryCardRed: {
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#C53437',
    maxWidth: 120,
    width: '100%',
  },
  HistoryCardWhite: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    maxWidth: 120,
    width: '100%',
  },
  textD: {
    textAlign: 'center',
    fontFamily: 'Outfit-Light',
    color: 'black',
    fontSize: 35,
    lineHeight: 45,
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  //Blood Type Screen
  mainBTS: {
    backgroundColor: '#EBEBEB',
    height: '100%',
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Outfit-Light',
    color: 'black',
    fontSize: 35,
    marginLeft: 22,
    marginRight: 25,
    marginBottom: 25,
    lineHeight: 45,
    letterSpacing: 0.5,
  },
  HeaderBloodType: {
    textAlign: 'center',
    fontFamily: 'Outfit-Light',
    color: 'black',
    fontSize: 25,
    marginLeft: 22,
    marginRight: 25,
    marginBottom: 25,
    lineHeight: 45,
    letterSpacing: 0.5,
    fontWeight: "bold",
  }
  ,
  text2: {
    textAlign: 'center',
    color: '#C83335',
    fontSize: 18,
    fontFamily: 'Outfit-Light',
  },
  text3: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: 'Outfit-Light',
  },
  bloodWhiteContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    flexWrap: 'wrap',
    height: '100%',
    padding: 5,
  },
  bigBox: {
    backgroundColor: '#FFFEFE',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    shadowOpacity: 1,
    elevation: 24,
    borderRadius: 10,
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 75,
    borderRadius: 10,
  },
  innerText: {
    color: 'grey',
    fontSize: 25,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBoxRed: {
    backgroundColor: '#E52027',
    borderRadius: 10,
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 75,
    borderRadius: 10,
  },
  innerTextRed: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Outfit-SemiBold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smBox: {
    backgroundColor: '#FFFEFE',
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    shadowOpacity: 1,
    elevation: 24,
    padding: 10,
    width: 120,
    height: 50,
    borderRadius: 10,
    marginBottom: 40,
  },
  smBoxRed: {
    backgroundColor: '#E52027',
    padding: 10,
    width: 120,
    height: 50,
    borderRadius: 10,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#E52027',
    padding: 18,
    width: 300,
    height: 60,
    borderRadius: 10,
    marginBottom: 80,
    marginTop: 10,
  },
  innerBtnText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Outfit-Light',
    textAlign: 'center',
  },
  smBtnTextWhite: {
    justifyContent: "center",
    alignContent: "center",
    color: 'grey',
    fontSize: 20,
    fontFamily: 'Outfit-Light',
    textAlign: 'center',
  },
  //Social Media Screen
  ContainerSms: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '6%',
  },
  SocialMediaBoxFB: {
    backgroundColor: 'rgba(60, 90, 154, 0.8)',
    borderRadius: 16,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 1,
    shadowRadius: 80,
    elevation: 100,
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 180,
    borderRadius: 10,
    shadowColor: '#000',
  },
  SocialMediaBoxTW: {
    shadowColor: 'white',
    backgroundColor: 'rgba(69, 190, 244, 0.4)',
    shadowOffset: {
      width: 0,
      height: 2.767256498336792,
    },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 16,
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  SocialMediaBoxIG: {
    shadowColor: 'white',
    backgroundColor: 'rgba(133, 50, 203, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2.767256498336792,
    },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 16,
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  SocialMediaBoxLI: {
    shadowColor: 'white',
    backgroundColor: 'rgba(69, 190, 244, 0.4)',
    shadowOffset: {
      width: 0,
      height: 2.767256498336792,
    },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 16,
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  SocialMediaBoxYT: {
    shadowColor: 'white',
    backgroundColor: 'rgba(215, 46, 45, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2.767256498336792,
    },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 16,
    marginTop: 25,
    padding: 24,
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  //Settings Screen
  textS: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Outfit-Regular',
    margin: 3,
    marginLeft: 28,
    marginTop: 10,
  },
});
export default App;
