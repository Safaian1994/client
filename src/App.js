import MainBox from "./components/elements/MainBox";
import Designe from "./components/forms/Designe";
import Declarations from "./components/forms/Declarations";
import Works from "./components/forms/Works";
import Search from "./components/forms/Search";
import Legal from "./components/forms/Legal";
import References from "./components/forms/References";
const App = () => {
  return (
    <MainBox title="Precision Medicine in Epilepsy Management (GET : Gene, Epilepsy, Treatment)">
      <Designe />
      <Declarations />
      <Legal />
      <Works />
      <References />
      <Search />
    </MainBox>
  );
};
export default App;
