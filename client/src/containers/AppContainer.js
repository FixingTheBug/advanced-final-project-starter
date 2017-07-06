import App from "../App";
import "../App.css";
import { connect } from "react-redux";
import {loadItems} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    loadItems: function() {
      dispatch(loadItems());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
