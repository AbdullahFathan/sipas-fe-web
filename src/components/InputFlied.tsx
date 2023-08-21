interface InputFliedProps {
  placeHolder?: string;
  value?: string;
}

const InputFlied = ({ placeHolder, value }: InputFliedProps) => {
  return (
    <input
      type="text"
      className="w-full relative p-2 border border-border-grey rounded-md mt-2  pr-10"
      placeholder={placeHolder}
      value={value}
    />
  );
};
export default InputFlied;
