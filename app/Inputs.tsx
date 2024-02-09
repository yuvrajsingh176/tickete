interface Props {
  name: string;
}
const Inputs = ({ name }: Props) => {
  return (
    <input
      className="h-[56px] border border-[#B9BBC6] rounded-2xl p-6   w-full focus:outline-none "
      type="text"
      required
      placeholder={name}
    />
  );
};
export default Inputs;
