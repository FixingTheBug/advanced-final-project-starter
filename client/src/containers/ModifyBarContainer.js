import {connect} from "react-redux";
import ModifyBar from "../components/ModifyBar";
import {updateItem} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        updateItem: function(item) {
            dispatch(updateItem(item));
        }
    }
}

export default connect(null, mapDispatchToProps)(ModifyBar);
