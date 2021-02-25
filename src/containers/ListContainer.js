import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = (state, ownProps) => {
    //! ownPropps are the properties passed to the container when you use it
    return {
        list: state.lists.entities[ownProps.listId]
    }
}

export default connect(mapStateToProps)(List)