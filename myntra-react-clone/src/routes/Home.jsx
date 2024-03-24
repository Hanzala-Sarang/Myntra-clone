import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

function Home() {
  const items = useSelector((store) => store.items);
  //const items = JSON.parse(localStorage.getItem("Items"));
  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
