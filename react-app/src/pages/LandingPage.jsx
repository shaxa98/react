import Header from "../components/Header";
import SideBarComponent from "../components/SidebarComponent";
import Footer from "../components/FooterComponent";
function App() {
  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Header user="Beka" />
      <div
        style={{
          display: "flex",
          backgroundColor: "red",
        }}
      >
        <SideBarComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
