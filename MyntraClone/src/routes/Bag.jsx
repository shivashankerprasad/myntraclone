import BagItem from "../components/bagItem";
import BagSummary from "../components/BagSummary";
import {useSelector} from "react-redux"


function Bag(){
  const bagItems = useSelector(store => store.bag)
  const items = useSelector(store => store.items)
  const finalItems = items.filter(item =>{
    const itemIndex = bagItems.indexOf(item.id)
    return itemIndex >= 0
  }
    
  ) 
    return <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item => <BagItem key={item.id} item={item} />)}
         
        </div>
        <div className="bag-summary">
          <BagSummary item= {items}/>
        </div>

      </div>
    </main>

}

export default Bag;