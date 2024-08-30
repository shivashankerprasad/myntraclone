import { useSelector } from "react-redux";

function BagSummary() {
  const bagItems = useSelector(store => store.bag)
  const items = useSelector(store => store.items)
  const finalItems = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id)
    return itemIndex >= 0
  })

  const itemss = useSelector((store) => store.bag)
  let totalMRP =0
  let totalDiscount =0
  let Convenience =99
  let totalItem = itemss.length

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price
    totalDiscount += bagItem.original_price - bagItem.current_price
    
  });
  let finalPrice = totalMRP - totalDiscount + Convenience


  return (
    <>
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
          <span className="price-item-value">{Convenience}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPrice}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}
export default BagSummary;
