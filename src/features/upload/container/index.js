import { connect } from "react-redux";

import { users } from "../../../web-core";

import Component from "../view";

const mapStateToProps = state => ({
  users: users.selectors.users(state)
});

export default connect(mapStateToProps)(Component);
