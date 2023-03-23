import FooterNavbar from "./Head/FooterNavbar";
import HeadingNavbar from "./Head/HeadingNavbar";
import MainNavbar from "./Head/MainNavbar";
import ProfielScreen from "./Profile/ProfileScreen";
import Signup from "./Login/Signup";
import Signin from "./Login/Signin";
export default function NavBar() {
  return (
    <>
      {/* <HeadingNavbar />
      <MainNavbar />
      <FooterNavbar />
      <ProfielScreen /> */}
      <Signup />
      <Signin />
    </>
  );
}
