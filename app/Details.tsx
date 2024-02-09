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
          <div className=" w-1/2  mr-2   border border-[#B9BBC6]   rounded-lg  flex  justify-around items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.41489 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM16.875 10C16.8757 10.882 16.7059 11.7558 16.375 12.5734L12.8828 10.4258C12.7343 10.3342 12.5682 10.2748 12.3953 10.2516L10.6125 10.0109C10.3668 9.9789 10.1172 10.0201 9.89483 10.1293C9.67247 10.2386 9.48729 10.411 9.3625 10.625H8.68125L8.38438 10.0109C8.30231 9.83995 8.18219 9.69002 8.03324 9.57261C7.88428 9.45521 7.71043 9.37345 7.525 9.33359L6.9 9.19844L7.51094 8.125H8.81641C9.02766 8.12459 9.23538 8.07084 9.42032 7.96875L10.3773 7.44062C10.4614 7.39376 10.54 7.33768 10.6117 7.27344L12.7141 5.37188C12.9248 5.18298 13.0649 4.92788 13.1112 4.64865C13.1575 4.36942 13.1073 4.08276 12.9688 3.83594L12.9406 3.78516C14.117 4.34297 15.1111 5.22296 15.8075 6.32301C16.5039 7.42306 16.8741 8.69805 16.875 10ZM3.125 10C3.12396 8.97814 3.35194 7.96904 3.79219 7.04687L4.67813 9.41172C4.75196 9.60752 4.87376 9.78165 5.03237 9.91815C5.19098 10.0546 5.38132 10.1491 5.58594 10.193L7.26016 10.5531L7.55782 11.1719C7.66112 11.3823 7.82121 11.5597 8.02001 11.6839C8.2188 11.8082 8.44839 11.8744 8.68282 11.875H8.79844L8.2336 13.143C8.13407 13.3662 8.1022 13.6138 8.14191 13.855C8.18162 14.0962 8.29118 14.3204 8.45703 14.5L8.46797 14.5109L10 16.0891L9.84844 16.8703C8.05299 16.8285 6.34497 16.0867 5.08885 14.8031C3.83273 13.5196 3.12798 11.7959 3.125 10Z"
                fill="#7E808A"
              />
            </svg>

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
