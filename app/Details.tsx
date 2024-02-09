// import Inputs from "./Inputs";
import TextField from "@mui/material/TextField";

const Details = () => {
  return (
    <div className="my-[32px] w-full">
      <div className="mb-[32px]">
        <h3 className="text-[24px] font-semibold h-[48px]">
          Enter your details
        </h3>
        <p className=" text-[16px] text-[#60646C] h-[40px]">
          We&apos;ll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>
      </div>
      <div>
        <div className="w-full">
          <TextField
            className="w-full"
            id="outlined-basic"
            label="Full name"
            variant="outlined"
          />
        </div>
        {/* 2 */}
        <div className="my-[24px] flex">
          <div className=" w-1/2  mr-2   border border-[#B9BBC6]   rounded-md  flex  justify-around items-center">
            <div className="relative">
              <TextField
                id="standard-basic"
                label="Country code"
                variant="standard"
                className="ml-2 "
              />
            </div>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path
                d="M16.9133 8.1633L10.6633 14.4133C10.5762 14.5007 10.4727 14.57 10.3588 14.6174C10.2448 14.6647 10.1226 14.689 9.99925 14.689C9.87586 14.689 9.75368 14.6647 9.63973 14.6174C9.52577 14.57 9.42228 14.5007 9.33518 14.4133L3.08518 8.1633C2.90906 7.98718 2.81012 7.74831 2.81012 7.49923C2.81012 7.25016 2.90906 7.01129 3.08518 6.83517C3.2613 6.65905 3.50017 6.56011 3.74925 6.56011C3.99832 6.56011 4.23719 6.65905 4.41331 6.83517L10 12.4219L15.5867 6.83439C15.7629 6.65827 16.0017 6.55933 16.2508 6.55933C16.4999 6.55933 16.7387 6.65827 16.9149 6.83439C17.091 7.01051 17.1899 7.24938 17.1899 7.49845C17.1899 7.74752 17.091 7.9864 16.9149 8.16252L16.9133 8.1633Z"
                fill="#7E808A"
              />
            </svg>
          </div>
          <div className="w-1/2">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
            />
          </div>
        </div>
        {/* 3 */}
        <div className="my-[24px]  flex">
          <div className="w-full mr-2 ">
            <TextField
              className="w-full rounded-xl"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>
          <div className="w-full">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Confirm email"
              variant="outlined"
            />
          </div>
        </div>
      </div>

      <div className="border border-[#B9BBC6] h-[1px]"></div>
    </div>
  );
};
export default Details;
