import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from 'react-router-dom'
import SidebarContext from "./context/sidebarContext.jsx";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RecipesCOntext from "./context/RecipesCOntext.jsx";
import SearchContext from "./context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <SearchContext>
    <RecipesCOntext>
      <SidebarContext>
        <BrowserRouter>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop={true}
            hideProgressBar={true}
          />
        </BrowserRouter>
      </SidebarContext>
    </RecipesCOntext>
  </SearchContext>,
);
