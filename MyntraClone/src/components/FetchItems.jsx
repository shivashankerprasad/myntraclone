import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { itemActions } from "../store/itemsSlice";
import {fetchActions} from "../store/fetchStatusSlice"

function FetchItems(){
    const fetchStatus = useSelector(store => store.fetchStatus)
    const dispatch = useDispatch();


    useEffect(() => {
        if (fetchStatus.fetchStatus) return

        const controller = new AbortController();
        const signal = controller.signal;
    dispatch(fetchActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchActions.markFetchDone());
        dispatch(fetchActions.markFetchingFinished());
        dispatch(itemActions.displayitems(items[0]));
      });

      return () => {
        controller.abort();
      };
    }, [fetchStatus]);

    return <>
    
    </>
    
}

export default FetchItems;