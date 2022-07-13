export const removeWatchLater = (
    watchLaterState,
    dispatchVideoValue,
    action
)=>{
    console.log("watchLaterState",watchLaterState)
    console.log("dispatchVideoValue",dispatchVideoValue)
    console.log("action",action)
    let removedWatchLater = [];
    if(action === "REMOVE_FROM_WATCH_LATER") {
        removedWatchLater = watchLaterState.map((eachItem)=>{
            if(eachItem._id === dispatchVideoValue._id){
                return{...eachItem , inWatchLater: false};
            }else{
                return eachItem;
            }
        })
    }
    if (action === "REMOVE_FROM_PLAYLIST") {
        removedWatchLater = watchLaterState.map((eachItem) => {
          if (eachItem._id === dispatchVideoValue._id) {
            return { ...eachItem, inPlaylist: false };
          } else {
            return eachItem;
          }
        });
      }
    
      removedWatchLater = [...removedWatchLater].filter(
        (item) => item.inWatchLater || item.inPlaylist
      );
      return removedWatchLater;

}