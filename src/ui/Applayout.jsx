/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";

function Applayout() {
  const navigation=useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="flex flex-col gap-10">
      {isLoading && <Loader/>}
      <Header />
      <Outlet />
    </div>
  );
}

export default Applayout;
