import React, { useMemo, useState } from 'react';
import dropdown from './Dropdown.module.scss';
import down_arrow_icon from '../../img/icons/down-arrow-icon.svg';

type Props = {
  options: string[];
  width: number,
  onChange: (option: string) => void,
  value: string,
  title: string,
}

export const Dropdown = React.memo(function Dropdown({
  options,
  width,
  onChange,
  value,
  title
}: Props) {
  const [isOpen, setIsOpen] = useState(false);


  const filteredOptions = useMemo(() => {
    return options.filter(option => option !== value);
  }, [value]);

  return (
    <div className={dropdown.Dropdown} style={{ width }}>
      <p className={dropdown.title}>
        {title}
      </p>

      <button
        className={`${dropdown.option} ${dropdown.button}`}
        onClick={() => setIsOpen(prev => !prev)}
        style={isOpen ? { borderColor: '#0F0F11' } : undefined}
      >
        {value}
        <img src={down_arrow_icon} alt="arrow" />
      </button>

      {isOpen && (
        <ul className={dropdown.options}>
          {filteredOptions.map(option => (
            <li
              key={option}
              className={dropdown.option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
