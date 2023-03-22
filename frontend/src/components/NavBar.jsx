import FooterNavbar from "./Head/FooterNavbar";
import HeadingNavbar from "./Head/HeadingNavbar";
import MainNavbar from "./Head/MainNavbar";
import ProfielScreen from "./Profile/ProfileScreen";
import Signup from "./Signup/Signup";
export default function NavBar() {
  return (
    <>
      <HeadingNavbar />
      <MainNavbar />
      <FooterNavbar />
      <ProfielScreen />
      {/* <Signup /> */}
    </>
  );
}
