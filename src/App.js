import './App.css';
import {RecoilRoot} from "recoil";
import {Header} from "./Components/Head";
import {Body} from "./Components/Body";
import {SideBar} from "./Components/SideBar";


function App() {
  return (
    <RecoilRoot>
      <Header />
      <SideBar />
      <Body />
    </RecoilRoot>
  );
}

export default App;
