import {connect} from "react-redux";
import Wrapper from "../components/Wrapper";

function mapStateToProps(state) {
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps, null)(Wrapper);
