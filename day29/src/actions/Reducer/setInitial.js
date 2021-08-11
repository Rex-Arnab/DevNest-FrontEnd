const initialState ={
    isWhetherSet:false,
    whether:{}
}
const setInitial=(state=initialState,action)=>{

    switch (action.type) {
        case "SETWHETHER": return {isWhetherSet:true,whether:action.payload}
        default: return initialState;
    }
}

export {setInitial};