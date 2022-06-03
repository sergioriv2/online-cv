import Home from "./views/home.views";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCoffee,
  faFolderTree,
  faUser,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faFolderTree, faCoffee, faUser, faGraduationCap);

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
