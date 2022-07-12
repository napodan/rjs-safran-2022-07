import React, { useEffect, useState } from "react";

interface ITFProps {
  value: string;
  onChange: Function;
}

export function TF(props: ITFProps) {
  const [internalValue, setinternalValue] = useState(props.value);
  const [isValidInput, seisValidInput] = useState(false);

  useEffect(() => {
    props.onChange(internalValue, checkValueQuality(internalValue));
  }, [props, internalValue]);
  function checkValueQuality(inputValue: string) {
    const regex = /0\d\d{8}/gm;
    let isValidData = false;
    while (regex.exec(inputValue) !== null) {
      isValidData = true;
    }
    seisValidInput(isValidData);
    return isValidData;
  }
  return (
    <input
      type="text"
      defaultValue={props.value}
      style={{
        backgroundColor: !isValidInput ? "red" : undefined,
        color: !isValidInput ? "white" : undefined,
      }}
      onChange={(evt) => {
        setinternalValue(evt.target.value);
      }}
    />
  );
}
