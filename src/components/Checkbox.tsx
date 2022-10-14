import * as CheckboxComponent from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {}

export function Checkbox() {
  return (
    <CheckboxComponent.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
      <CheckboxComponent.Indicator asChild>
        <Check weight='bold' className='h-5 w-5 text-cyan-500' />
      </CheckboxComponent.Indicator>
    </CheckboxComponent.Root>
  );
}
