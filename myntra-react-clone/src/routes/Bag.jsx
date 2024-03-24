import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

function Bag() {
  const bag = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const bagItems = items.filter((item) => {
    return bag.includes(item.id);
  });

  console.log(bagItems);
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map((item, index) => (
              <BagItem key={index} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
}

export default Bag;
