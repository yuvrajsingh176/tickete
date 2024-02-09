interface Props {
  open: boolean;
  setOpen: Function;
  title: string;
  desc: string;
}
const DropDown = ({ open, setOpen, title, desc }: Props) => {
  return (
    <div className="flex  border-[2px] rounded-xl p-5 my-6">
      <div className="flex ">
        <div
          className="mr-3"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="relative">
            {!open ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.375 12.0002C21.375 12.2986 21.2565 12.5848 21.0455 12.7957C20.8345 13.0067 20.5484 13.1252 20.25 13.1252H13.125V20.2502C13.125 20.5486 13.0065 20.8348 12.7955 21.0457C12.5845 21.2567 12.2984 21.3752 12 21.3752C11.7016 21.3752 11.4155 21.2567 11.2045 21.0457C10.9935 20.8348 10.875 20.5486 10.875 20.2502V13.1252H3.75C3.45163 13.1252 3.16548 13.0067 2.9545 12.7957C2.74353 12.5848 2.625 12.2986 2.625 12.0002C2.625 11.7019 2.74353 11.4157 2.9545 11.2047C3.16548 10.9938 3.45163 10.8752 3.75 10.8752H10.875V3.75024C10.875 3.45188 10.9935 3.16573 11.2045 2.95475C11.4155 2.74377 11.7016 2.62524 12 2.62524C12.2984 2.62524 12.5845 2.74377 12.7955 2.95475C13.0065 3.16573 13.125 3.45188 13.125 3.75024V10.8752H20.25C20.5484 10.8752 20.8345 10.9938 21.0455 11.2047C21.2565 11.4157 21.375 11.7019 21.375 12.0002Z"
                  fill="#60646C"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.546 17.9543C19.7573 18.1656 19.876 18.4523 19.876 18.7512C19.876 19.05 19.7573 19.3367 19.546 19.548C19.3346 19.7594 19.048 19.8781 18.7491 19.8781C18.4502 19.8781 18.1636 19.7594 17.9522 19.548L12 13.594L6.04596 19.5462C5.83461 19.7575 5.54797 19.8762 5.24908 19.8762C4.9502 19.8762 4.66355 19.7575 4.45221 19.5462C4.24086 19.3348 4.12213 19.0482 4.12213 18.7493C4.12213 18.4504 4.24086 18.1638 4.45221 17.9524L10.4063 12.0002L4.45408 6.04616C4.24274 5.83482 4.12401 5.54817 4.12401 5.24929C4.12401 4.9504 4.24274 4.66376 4.45408 4.45241C4.66543 4.24107 4.95207 4.12234 5.25096 4.12234C5.54984 4.12234 5.83649 4.24107 6.04783 4.45241L12 10.4065L17.9541 4.45148C18.1654 4.24013 18.4521 4.1214 18.751 4.1214C19.0498 4.1214 19.3365 4.24013 19.5478 4.45148C19.7592 4.66282 19.8779 4.94946 19.8779 5.24835C19.8779 5.54724 19.7592 5.83388 19.5478 6.04523L13.5938 12.0002L19.546 17.9543Z"
                  fill="#60646C"
                />
              </svg>
            )}
          </div>
        </div>
        <div>
          <p className="text-[18px] font-semibold ">{title}</p>
          <div
            className={`${
              open ? "" : "hidden"
            } text-[16px] text-[#60646C] pt-4`}
          >
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DropDown;