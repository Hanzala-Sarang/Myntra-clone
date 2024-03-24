import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function HomeItem({ item }) {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const handleAddBag = (id) => {
    dispatch(bagAction.addToBag(id));
  };

  const handleRemoveBag = (id) => {
    dispatch(bagAction.removeFromBag(id));
  };

  const bagItem = bag.find((id) => id === item.id);
  console.log(bagItem);

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">${item.company}</div>
        <div className="item-name">${item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {bagItem ? (
          <button
            onClick={() => handleRemoveBag(item.id)}
            className="btn btn-add-bag btn-danger"
          >
            Remove <MdDelete />
          </button>
        ) : (
          <button onClick={() => handleAddBag(item.id)} className="btn-add-bag">
            Add to Bag <MdOutlineAddCircleOutline />
          </button>
        )}
      </div>
    </>
  );
}

export default HomeItem;
