import {connect} from "react-redux";
import ListOfItems from "../components/ListOfItems";
import {updateItem, deleteItem} from "../actions";

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ListOfItems);