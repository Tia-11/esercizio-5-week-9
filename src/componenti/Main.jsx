import Galleria from "./Galleria";


const Main = () => {
  return (
    <div>
      
        <h4 className="text-white fs-2 ms-3">Star Wars:</h4>
        <Galleria films="star wars" />
      
      
        <h4 className="text-white fs-2 ms-3">Lord of the Rings:</h4>
        <Galleria films="lord of the rings" />
      
      
        <h4 className="text-white fs-2 ms-3">Harry Potter:</h4>
        <Galleria films="harry potter" />
      
    </div>
  );
};

export default Main