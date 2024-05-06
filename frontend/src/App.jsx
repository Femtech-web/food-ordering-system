import React, { Suspense, lazy } from "react";
import { useStorage } from "./context/useStorage";
import sessionAPI from "./API/getSessionAPI";
import useOrderNotification from "./hooks/useOrderNotification";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";
import theme from "./theme/styles";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";
import OrderNotificationPopUp from "./components/OrderNotificationPopUp";
import Header from "./components/Header";
import NotFound404Page from "./components/NotFound404Page";
import SuccessfulFormModal from "./components/SuccessfulFormModal";
import ShoppingCart from "./components/shopping_cart/ShoppingCart";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import DashboardOrderDetails from "./components/dashboard/DashboardOrderDetails";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "./components/account/MyProfile";
import EditMyProfile from "./components/account/EditMyProfile";
import UserOrdersPage from "./components/account/UserOrdersPage";
import UserOrderDetailsPage from "./components/account/UserOrderDetailsPage";
import DashboardNewProduct from "./components/dashboard/DashboardNewProduct";
import DashboardCategories from "./components/dashboard/DashboardCategories";
import DashboardOrders from "./components/dashboard/DashboardOrders";
import DashboardUsers from "./components/dashboard/DashboardUsers";
import DashboardEditProduct from "./components/dashboard/DashboardEditProduct";
import DashboardProducts from "./components/dashboard/DashboardProducts";

const EmailConfirmationModal = lazy(
  () => import("./components/auth/EmailConfirmationModal"),
);
const ResetPassword = lazy(() => import("./components/auth/ResetPassword"));

const BASE_URL = import.meta.env.VITE_FETCH_BASE_URL;

function App() {
  let {
    newOrdersCount,
    actualizationCount,
    orderActualizationMessage,
    closeActualizationNotification,
    closeNewOrderNotification,
  } = useOrderNotification();

  const {
    // setToken,
    // setIsNotLogin,
    // setCurrentUser,
    // setIsLogin,
    // setIsAdmin,
    // setIsModerator,
    setAllCategories,
    setIsLoading,
  } = useStorage();

  // React.useEffect(() => {
  //   const onSuccess = (data) => {
  //     setToken(data.token);
  //     setCurrentUser(data.user);
  //     if (data.user.roles[0].name === "admin") {
  //       setIsAdmin(true);
  //     } else if (data.user.roles[0].name === "moderator") {
  //       setIsModerator(true);
  //     }

  //     setIsLogin(true);
  //     setIsLoading(false)
  //   };
  //   const onError = () => {
  //     setToken("");
  //     setIsNotLogin();
  //     setIsAdmin(false);
  //     setIsModerator(false);
  //     console.log('not fetched successfully');
  //   };
  //   sessionAPI(onSuccess, onError);
  // }, []);

  React.useEffect(() => {
    const getCategoriesAPI = async () => {
      const headers = new Headers();
      headers.append("Accept", "application/json");

      const setting = {
        method: "GET",
        headers: headers,
      };
      try {
        let res = await fetch(`${BASE_URL}/api/categories`, setting);
        let json = await res.json();

        const { data } = json;

        setAllCategories(data);
        setIsLoading(false);
      } catch (err) {
        // getCategoriesAPI();
        // console.log(err);
      }
    };

    getCategoriesAPI();
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <ThemeProvider theme={theme}>
        <OrderNotificationPopUp
          message={orderActualizationMessage}
          notificationCount={actualizationCount}
          close={closeActualizationNotification}
        />
        <OrderNotificationPopUp
          message="New Orders"
          notificationCount={newOrdersCount}
          close={closeNewOrderNotification}
        />
        <SuccessfulFormModal />
        <LoadingPage />
        <ShoppingCart />
        <Header />

        <Suspense fallback={<LoadingPage isLoading={true} />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/menu" exact element={<Menu />} />

            <Route path="/authentication/login" exact element={<Login />} />
            <Route path="/authentication/signUp" exact element={<SignUp />} />
            <Route
              path="/authentication/resetPassword/:token"
              element={<ResetPassword />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/authentication/confirmation"
              exact
              element={
                <PublicRoute path="/authentication/confirmation">
                  <EmailConfirmationModal />
                </PublicRoute>
              }
            />
            <Route
              path="/myAccount/myProfile"
              element={
                <PublicRoute path="/myAccount/myProfile">
                  <MyProfile />
                </PublicRoute>
              }
            />

            <Route
              path="/myAccount/editProfile"
              element={
                <PublicRoute path="/myAccount/editProfile">
                  <EditMyProfile />
                </PublicRoute>
              }
            />

            <Route
              path="/myAccount/myOrders"
              exact
              element={
                <PublicRoute path="/myAccount/myOrders">
                  <UserOrdersPage
                    closeNotification={closeNewOrderNotification}
                  />
                </PublicRoute>
              }
            />

            <Route
              path="/myAccount/myOrders/:orderID"
              element={
                <PublicRoute path="/myAccount/myOrders/:orderID">
                  <UserOrderDetailsPage />
                </PublicRoute>
              }
            />

            <Route
              path="/dashboard/myProducts"
              element={
                <PrivateRoute path="/dashboard/myProducts">
                  <DashboardProducts />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/newProduct"
              element={
                <PrivateRoute path="/dashboard/newProduct">
                  <DashboardNewProduct />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/editProduct"
              element={
                <PrivateRoute path="/dashboard/editProduct">
                  <DashboardEditProduct />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/users"
              element={
                <PrivateRoute path="/dashboard/users">
                  <DashboardUsers />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/orders"
              exact
              element={
                <PrivateRoute>
                  {" "}
                  <DashboardOrders
                    path="/dashboard/orders"
                    closeNotification={closeActualizationNotification}
                  />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard/orders/:orderID"
              element={
                <PrivateRoute path="/dashboard/orders/:orderID">
                  <DashboardOrderDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/categories"
              element={
                <PrivateRoute path="/dashboard/categories">
                  <DashboardCategories />
                </PrivateRoute>
              }
            />
            <Route path="*" element={NotFound404Page} />
          </Routes>
        </Suspense>

        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
