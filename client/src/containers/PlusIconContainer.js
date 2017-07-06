import {connect} from "react-redux";
import PlusIcon from "../components/PlusIcon";
import {createItem} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        saveItem: function(item) {
            dispatch(createItem(item));
        }
    }
}

export default connect(null, mapDispatchToProps)(PlusIcon);