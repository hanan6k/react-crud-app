import React, {useEffect} from "react";
import {View, Text, Pressable} from "react-native";
// Images
import Avatar from "../../assets/images/Avatar.svg";
import EditIcon from "../../assets/images/ic_edit.svg";
import FeedbackIcon from "../../assets/images/menu/ic_feedback.svg";
import AnalysisIcon from "../../assets/images/menu/ic_analysis.svg";
import LogOutIcon from "../../assets/images/menu/ic_logout.svg";
import NotificationIcon from "../../assets/images/menu/ic_notifications.svg";
import LockIcon from "../../assets/images/menu/padlock.svg";
import PinIcon from "../../assets/images/menu/pin.svg";
import TrackingIcon from "../../assets/images/menu/Tracking.svg";
import {logout} from "../../redux/actions/userActions";
import {NavigationContainer, CommonActions} from "@react-navigation/native";
// components
import Wrapper from "../../components/Wrapper";
// import CardWrapper from "../../components/CardWrapper";

// tailwind css
import tw from "../../common/themeTailwind";
import {useDispatch} from "react-redux";

const Menu = ({navigation}) => {
	const dispatch = useDispatch();

	const profileList = [
		{
			id: 1,
			userId: "User ID: 630145",
			pic: Avatar,
			text: "Hammad Ahmad",
			icon: EditIcon,
			path: "Profile",
		},
	];

	const menuList = [
		{
			id: 1,
			icon: FeedbackIcon,
			text: "Feedback",
			path: "Feedback",
		},
		{
			id: 2,
			icon: NotificationIcon,
			text: "Store Profile",
			path: "StoreProfile",
		},
		{
			id: 3,
			icon: AnalysisIcon,
			text: "Performance Analysis",
			path: "PerformanceAnalysis",
		},
		{
			id: 4,
			icon: PinIcon,
			text: "Store Locator",
			path: "StoreLocator",
		},
		{
			id: 5,
			icon: TrackingIcon,
			text: "Order Tracking",
			path: "OrderTracking",
		},
		{
			id: 6,
			icon: LockIcon,
			text: "Change Password",
			path: "ChangePassword",
		},
		{
			id: 7,
			icon: LogOutIcon,
			text: "Logout",
			path: "Login",
		},
	];

	return (
		<Wrapper style='p-0' header={false} footer={true} navigation={navigation}>
			{profileList &&
				profileList.map((item) => (
					<View
						style={tw.style(`flex-row justify-between px-6 py-2 mt-6`)}
						key={item.id}
					>
						<View style={tw.style(`flex-row `)}>
							<item.pic />
							<Pressable
								style={tw.style(`px-4 py-5`)}
								onPress={() => navigation.navigate(item.path)}
							>
								<Text style={tw.style(`font-bold text-lg`)}>{item.text}</Text>
								<Text style={tw.style(`text-red text-xs py-2`)}>
									{item.userId}
								</Text>
							</Pressable>
						</View>
						<item.icon style={tw.style(`py-7 text-black`)} />
					</View>
				))}

			{menuList &&
				menuList.map((item) => (
					<View style={tw.style(`px-6 border border-gray-200`)} key={item.id}>
						<View style={tw.style(`flex-row py-6 px-4`)}>
							<View style={tw.style(`w-12`)}>
								<item.icon />
							</View>
							<Pressable
								onPress={() => {
									item.path === "Login"
										? dispatch(logout()) &&
										  navigation.navigate("Auth", {
												screen: "Login",
										  })
										: "";
									navigation.navigate(item.path);
								}}
							>
								<Text style={tw.style(`text-base py-2`)}>{item.text}</Text>

								{/* //   item.path === 'Login' && 
                //     navigation.navigate('Auth', {
                //       screen: 'Login',
                //     });
                //   item.path === 'ChangePassword' &&
                //     navigation.navigate('ChangePassword');
                //   item.path === 'OrderTracking' &&
                //     navigation.navigate('Home', {
                //       screen: 'OrderTracking',
                //     });
                //   item.path === 'StoreLocator' &&
                //     navigation.navigate('StoreLocator');
                //   item.path === 'OrderTracking' &&
                //     navigation.navigate('OrderTracking');
                //   item.path === 'PerformanceAnalysis' &&
                //     navigation.navigate('PerformanceAnalysis');
                //   item.path === 'StoreProfile' &&
                //     navigation.navigate('StoreProfile');
                //   item.path === 'Feedback' && navigation.navigate('Feedback');
                // }} */}
							</Pressable>
						</View>
					</View>
				))}
		</Wrapper>
	);
};

export default Menu;
