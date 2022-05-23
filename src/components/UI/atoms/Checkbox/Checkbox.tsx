import { useState, ChangeEvent, useEffect } from 'react';
import { CheckboxProps } from './Checkbox.interfaces';
import { Input, InputGroup, Label } from './Checkbox.styled';

export const Checkbox = ({
  id,
  name,
  label,
  initiallyChecked = false,
  onChange = () => {},
}: CheckboxProps) => {
 const [checked, setChecked] = useState(initiallyChecked);

 const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  setChecked(!checked);
  onChange(e);
 }

 useEffect(() => {
  setChecked(initiallyChecked);
 }, [initiallyChecked]);

 return (
  <InputGroup>
      <Input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleOnChange} 
      />
      <Label htmlFor={id}>{label}</Label>
    </InputGroup>
 );
};
