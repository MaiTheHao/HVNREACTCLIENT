import React, { useState, useLayoutEffect } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import axios from "axios";
import useAppContext from "../Context/UseAppContext";

function AuthUser() {
	const { auth, setAuth } = useAppContext();
	const authLoginStatus = auth?.loginsuccess;
	const [isLoad, setIsLoad] = useState(authLoginStatus === undefined ? true : false);
	const location = useLocation();

	useLayoutEffect(() => {
		const fetchUserStatus = async () => {
			const response = await axios.get("/userstatus");
			const loginstatus = response?.data?.loginsuccess;
			const userData = { userName: response?.data?.userName };

			if (authLoginStatus !== loginstatus) {
				setAuth({ ...userData, loginsuccess: loginstatus });
			}
			setIsLoad(false);
		};
		fetchUserStatus();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{isLoad ? (
				<h1>Loading</h1>
			) : auth?.loginsuccess ? (
				<Outlet />
			) : (
				<Navigate to="/login" state={{ from: location.pathname }} replace></Navigate>
			)}
		</>
	);
}

export default AuthUser;
