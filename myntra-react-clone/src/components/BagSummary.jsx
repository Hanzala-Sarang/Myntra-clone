import { useSelector } from "react-redux";

function BagSummary() {
  const bag = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const bagItems = items.filter((item) => {
    return bag.includes(item.id);
  });

  const convenienceFee = 99;
  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItems.forEach((item) => {
    totalMRP = totalMRP + item.original_price;
    totalDiscount = totalDiscount + item.original_price - item.current_price;
  });

  let finalPayment = totalMRP + totalDiscount;
  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹{convenienceFee}</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
}

export default BagSummary;
