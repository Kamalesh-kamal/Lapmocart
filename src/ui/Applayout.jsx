/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

function Applayout() {
  const navigation=useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="flex flex-col gap-10">
      {isLoading && <Loader/>}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
