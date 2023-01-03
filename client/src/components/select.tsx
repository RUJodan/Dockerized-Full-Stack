import React from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

interface Props {
  disabled?: boolean;
  multi?: boolean;
  closeMenuOnSelect: boolean;
  options: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
}

export const SelectWrapper: React.FC<Props> = ({ disabled, multi, closeMenuOnSelect, options }) => (
  <Select
    styles={{
      control: (styles, { isDisabled, isFocused }) => ({
        ...styles,
        boxShadow: 'none',
        borderColor: isFocused ? '#7368ee' : '#212227',
        borderWidth: '2px',
        backgroundColor: isDisabled ? '#0e0e11' : '#212227',
        ':hover': {
          borderColor: isDisabled ? '#212227' : '#7368ee',
        },
      }),
      singleValue: (styles, { isDisabled }) => ({
        ...styles,
        color: isDisabled ? '#564cae' : '#7368ee',
      }),
      placeholder: (styles, { isDisabled }) => ({
        ...styles,
        color: isDisabled ? '#564cae' : '#7368ee',
      }),
      indicatorSeparator: (styles) => ({
        ...styles,
        backgroundColor: '#7368ee',
      }),
      dropdownIndicator: (styles) => ({
        ...styles,
        color: '#7368ee',
        ':hover': { color: '#564cae' },
      }),
      clearIndicator: (styles) => ({
        ...styles,
        color: '#7368ee',
        ':hover': { color: '#564cae' },
      }),
      option: (styles, { isDisabled }) => ({
        ...styles,
        color: '#7368ee',
        backgroundColor: isDisabled ? '#0e0e11' : '#212227',
        ':hover': {
          backgroundColor: '#564cae',
          color: '#9797a1',
        },
      }),
      menuList: (styles) => ({
        ...styles,
        color: '#c9d1d9',
        backgroundColor: '#212227',
      }),
      multiValue: (styles) => ({
        ...styles,
        backgroundColor: '#3a3b41',
      }),
      multiValueLabel: (styles) => ({
        ...styles,
        color: '#c9d1d9',
        backgroundColor: '#7368ee',
      }),
      multiValueRemove: (styles) => ({
        ...styles,
        color: '#c9d1d9',
        backgroundColor: '#7368ee',
        ':hover': {
          backgroundColor: '#564cae',
          color: '#9797a1',
        },
      }),
    }}
    closeMenuOnSelect={closeMenuOnSelect}
    components={animatedComponents}
    isMulti={multi}
    options={options}
    isDisabled={disabled}
  />
);
