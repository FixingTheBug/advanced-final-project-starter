import {connect} from "react-redux";
import ListOfItems from "../components/ListOfItems";
import {updateItem, deleteItem} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        updateItem: function(item) {
            dispatch(updateItem(item));
        },
        deleteItem: function(item) {
            dispatch(deleteItem(item));
        }
    }
}

export default connect(null, mapDispatchToProps)(ListOfItems);
