import { memo } from 'react';

import { tw } from '../../../../utils';

type TPropsCmpElForm = {
  textLabel: string;
  base:
    | {
        element: 'input';
        type: 'text' | 'email';
      }
    | {
        element: 'textarea';
      };
  nameInput: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const LabelInputForm = tw.label`
mb-[12px] w-full uppercase tracking-[0.8px] text-white
`;

const InputForm = tw.input`
mb-[16px] block h-[48px] w-full rounded-[8px] border-[2px] border-[#ffffff0d] bg-[color:#ffffff0d] px-[12px] py-[8px] align-middle text-[16px] leading-[24px] text-white transition-all duration-[400ms] ease-[ease] placeholder:bg-[color:#161616] placeholder:text-[#999999] focus:border-white
`;

const TextareaForm = tw.textarea`
mb-[40px] block h-auto min-h-[160px] w-full rounded-[8px] border-[2px] border-[#ffffff0d] bg-[color:#ffffff0d] p-[12px] align-middle text-[16px] font-normal leading-[24px] text-white transition-all duration-[400ms] ease-[ease] placeholder:bg-[color:#161616] placeholder:text-[#999999] focus:border-white
`;

const CmpElForm = ({
  textLabel,
  base,
  nameInput,
  required,
  placeholder,
  value,
  setValue,
}: TPropsCmpElForm) => {
  return (
    <>
      <LabelInputForm htmlFor={nameInput}>{textLabel}</LabelInputForm>
      {base.element === 'input' && (
        <InputForm
          name={nameInput}
          type={base.type}
          maxLength={256}
          placeholder={placeholder || ''}
          required={required || false}
          value={value}
          onChange={(e) => {
            setValue(e.target.value || '');
          }}
        ></InputForm>
      )}
      {base.element === 'textarea' && (
        <TextareaForm
          name={nameInput}
          placeholder={placeholder || ''}
          required={required || false}
          value={value}
          onChange={(e) => {
            setValue(e.target.value || '');
          }}
        ></TextareaForm>
      )}
    </>
  );
};

export default memo(CmpElForm);
