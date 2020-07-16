import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
  };

  render() {
    const { data, onRemove, onUpdate } = this.props;

    if (!data) return null;

    const list = data.map((info) => {
      return (
        <PhoneInfo
          onUpdate={onUpdate}
          onRemove={onRemove}
          info={info}
          key={info.id}
        />
      );
    });

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
