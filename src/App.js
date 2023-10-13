import ButtonNavbar from "./Components/ButtonNavbar/ButtonNavbar";
import ListTable from "./Components/ListTable/ListTable";
import NavigationBar from "./Components/Sidebar/NavigationBar";
import TopNavbar from "./Components/TopNavbar/TopNavbar";

import Urlnavbar from "./Components/UrlNavbar/Urlnavbar";

function App() {
  return (
    <div className="w-full h-screen flex overflow-y-hidden">
      <NavigationBar />
      <div className="flex flex-col w-full h-screen">
        <TopNavbar/>
        <Urlnavbar />
        <ButtonNavbar />
        <ListTable />
      </div>
    </div>
  );
}

export default App;
