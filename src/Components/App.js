import {connect} from 'react-redux'
import Main from './Main'
import Pagination from "./Pagination";
import * as action from '../redux/actions'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
function mapStateToProps(state)
{ 
    return state
}

function mapDispatchToProps(disptch){
       return bindActionCreators(action,disptch)
}

const App=withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

export default App