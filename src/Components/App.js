import {connect} from 'react-redux'
import Main from './Main'
import * as action from '../redux/actions'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
function mapStateToProps(state)
{ console.log("mapping states")
    return state
}

function mapDispatchToProps(disptch){
    console.log("mapping dispatch")
       return bindActionCreators(action,disptch)
}

const App=withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

export default App