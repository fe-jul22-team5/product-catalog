import React, { useMemo} from 'react';
import dropdown from './CustomSelect.module.scss';
import Select, { ActionMeta, SingleValue, StylesConfig } from 'react-select';

type Option = {
  value: string,
  label: string,
};

type Props = {
  options: Option[];
  width: number,
  onChange: (value: SingleValue<Option>, actionMeta: ActionMeta<Option>) => void,
  value: Option,
  title: string,
}

export const CustomSelect = React.memo(function Dropdown({
  options,
  width,
  onChange,
  value,
  title
}: Props) {
  const customStyles = useMemo(() => {
    const custom: StylesConfig<Option, false> = {
      container: (provided) => ({
        ...provided,
        '&: not(:last-child)': {
          'marginRight': '16px',
        },
        maxWidth: `${width}px`,
      }),
      control: (provided) => ({
        ...provided,
        borderRadius: '8px',
        border: '2px solid #B4BDC3',
        backgroundColor: '#fff',
        boxShadow: 'none',
        color: '#0F0F11',
        '&:hover': { borderColor: '#0F0F11' },
        '&:focus': { borderColor: '#0F0F11' },
      }),
      menu: (provided) => ({
        ...provided,
        borderRadius: '8px',
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none',
      }),
      option: (provided, state) => ({
        ...provided,
        fontWeight: '600',
        lineHeight: '21px',
        color: state.isSelected ? '#0F0F11' : '#89939A',
        backgroundColor: state.isSelected ? '#FAFBFC' : '#fff',
        transitionProperty: 'color, background-color',
        transition: '0.3s',
        '&:hover': { backgroundColor: '#FAFBFC',
          color: '#0F0F11' }
      }),
    };

    return custom;
  }, []);
  return (
    <div className={dropdown.Dropdown} style={{ width }}>
      <p className={dropdown.title}>
        {title}
      </p>

      <Select
        options={options}
        styles={customStyles}
        onChange={onChange}
        isSearchable={false}
        value={value}
      />

    </div>
  );
});
