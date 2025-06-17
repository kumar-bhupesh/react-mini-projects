import ImageCarousel from "./components/ImageCarousel";


function App() {
  const images = [
    "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg",
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
    "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg",
    "https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg",
    "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg",
    "https://images.pexels.com/photos/33227/sunrise-phu-quoc-island-ocean.jpg",
  ];
  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  );
}

export default App;
