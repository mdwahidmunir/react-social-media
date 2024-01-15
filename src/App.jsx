import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import CreatePosts from "./components/CreatePosts";
import "./App.css";
import { useState } from "react";
import PostListContextProvider from "./store/post_list_store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListContextProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab == "Home" ? <PostList /> : <CreatePosts />}
          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
