import React from 'react'
import  {SpinnerContainer,SpinnerOverlay} from './with.styles'

const Withspinnercomponent = (WrappedComponent) => {
 const spinner = ({isLoading, ...others})=>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ):(
        <WrappedComponent {...others}/>
    )
}
    return spinner
}

export default Withspinnercomponent
