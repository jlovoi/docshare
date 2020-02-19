import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const showChecks = (group, checked, onChange) =>
  group.map(item => (
    <FormControlLabel
      key={item.value}
      control={
        <Checkbox
          value={item.value}
          checked={checked.includes(item.value)}
          onChange={onChange}
        />
      }
      label={item.label}
    />
  ));

const CheckGroup = ({ group, checked, onChange }) => {
  return <FormGroup>{showChecks(group, checked, onChange)}</FormGroup>;
};

export default CheckGroup;
