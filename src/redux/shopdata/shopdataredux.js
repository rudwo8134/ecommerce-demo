import shopdata from './shopdata'
const INITIAL_STATE={
    collections: shopdata
}
    

const shopdataRedux = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state
    }
}

export default shopdataRedux