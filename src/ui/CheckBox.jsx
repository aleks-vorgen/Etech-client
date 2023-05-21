import React, { useState } from 'react';

const CheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-500"
        />
        <span className="ml-2 text-gray-700">{props.text}</span>
      </label>
    </div>
  );
};

export default CheckBox;
