import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import PostList from "./components/PostList";
import CreatePosts from "./components/CreatePosts";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="app-container">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="content">
        <Header />
        {selectedTab == "Home" ? <CreatePosts /> : <PostList />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
