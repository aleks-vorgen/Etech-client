import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none">
      <input
        type="checkbox"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      >
        <span
          className={`toggle-handle absolute inset-0 w-6 h-6 rounded-full bg-blue-500 transition-transform duration-300 transform ${
            isChecked ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
