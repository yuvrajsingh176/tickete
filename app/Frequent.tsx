"use client";
import { useState } from "react";
import DropDown from "./Dropdown";
interface Valuetype {
  title: string;
  desc: string;
}

const values: Array<Valuetype> = [
  {
    title: "What should I do on my first trip to Rome?",
    desc: "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    title: "What should I do on my first trip to Rome?",
    desc: "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    title: "What should I do on my first trip to Rome?",
    desc: "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    title: "What should I do on my first trip to Rome?",
    desc: "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    title: "What should I do on my first trip to Rome?",
    desc: "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
  {
    title: "What should I do on my first trip to Rome?",
    desc: "Rome is packed with hidden gems. If you love art, don't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance.",
  },
];
const Frequent = () => {
  const [opendropdown, setOpenDropdown] = useState<boolean[]>(
    Array(values.length).fill(false)
  );
  return (
    <div className="mt-[80px] flex flex-col md:flex-row  justify-between w-full ">
      <div className="md:w-2/5 w-full">
        <div>
          <p className="text-[24px] font-semibold">
            Frequently asked questions
          </p>

          <p className="text-[16px] text-[#60646C]  font-light">
            Here are some of our most asked questions.{" "}
          </p>
        </div>
        <div className="border rounded-xl mt-[32px] bg-[#EDEEF0] p-8 font-semibold text-[18px]  flex justify-between">
          <div>
            <div>
              <p className="text-[#1C2024]">Still need help?</p>
              <p className="text-[#1C2024]">We&apos;re here for you.</p>
            </div>
            <button className="bg-black p-3 rounded-xl text-white font-semibold text-[16px] mt-3">
              Chat with us
            </button>
          </div>
          <div>
            <svg
              width="158"
              height="100"
              viewBox="0 0 158 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M105.765 62.2215L108.743 61.6963L110.166 67.5876L106.443 68.2441L105.765 62.2215Z"
                fill="black"
              />
              <rect
                x="73.3073"
                y="74.0867"
                width="71.0741"
                height="27.2199"
                rx="10.7143"
                transform="rotate(-10 73.3073 74.0867)"
                fill="black"
              />
              <path
                d="M101.686 69.0829L108.305 67.9159L105.326 72.1701C104.413 73.4732 102.381 73.0226 102.104 71.4559L101.686 69.0829Z"
                fill="white"
              />
              <path
                d="M114.923 66.7489L108.305 67.9159L112.559 70.8947C113.862 71.8072 115.618 70.6886 115.342 69.1219L114.923 66.7489Z"
                fill="white"
              />
              <path
                d="M130.356 82.4227C130.564 82.3861 130.763 82.3295 130.951 82.2535C131.144 82.1767 131.333 82.089 131.517 81.9922L131.767 83.4111C131.578 83.5383 131.339 83.658 131.044 83.7711C130.755 83.8864 130.432 83.9762 130.074 84.0393C129.659 84.1126 129.271 84.1117 128.915 84.0375C128.562 83.958 128.261 83.7685 128.011 83.4696C127.764 83.1651 127.587 82.713 127.482 82.1132L126.887 78.7428L126.007 79.0762L125.754 77.6446L126.637 77.3223L126.373 75.8251L128.218 75.1535L128.482 76.6523L130.376 75.9621L130.628 77.3938L128.734 78.084L129.385 81.7759C129.432 82.043 129.543 82.2297 129.716 82.336C129.893 82.4385 130.107 82.4667 130.356 82.4227Z"
                fill="white"
                stroke="white"
                stroke-width="0.892857"
                stroke-linejoin="round"
              />
              <ellipse
                cx="80.8025"
                cy="40.1349"
                rx="12.0977"
                ry="15.1222"
                transform="rotate(-10 80.8025 40.1349)"
                fill="black"
              />
              <path
                d="M126.186 24.4548C123.648 10.0613 111.414 0.187631 98.8592 2.40132C86.3048 4.615 78.1849 18.0778 80.7228 32.4713"
                stroke="black"
                stroke-width="3.57143"
              />
              <circle
                cx="102.724"
                cy="36.2695"
                r="26.4638"
                transform="rotate(-10 102.724 36.2695)"
                fill="#08E8DE"
              />
              <ellipse
                cx="128.786"
                cy="31.6742"
                rx="12.0977"
                ry="15.1222"
                transform="rotate(-10 128.786 31.6742)"
                fill="black"
              />
              <path
                d="M109.391 45.3146C108.238 42.9508 105.387 41.9692 103.023 43.1221C100.659 44.275 99.6777 47.1258 100.831 49.4896C101.984 51.8533 104.834 52.8349 107.198 51.6821C109.562 50.5292 110.543 47.6784 109.391 45.3146ZM122.301 38.0243L104.719 46.5996L105.502 48.2046L123.084 39.6293L122.301 38.0243Z"
                fill="black"
              />
              <path
                d="M88.1893 26.8034C88.1893 26.8034 88.4672 40.4562 96.384 39.0602C104.301 37.6643 100.237 24.6791 100.237 24.6791"
                stroke="black"
                stroke-width="3.57143"
              />
              <circle
                cx="49.4787"
                cy="33.1229"
                r="11.5512"
                transform="rotate(37.6789 49.4787 33.1229)"
                fill="#FF7DF3"
              />
              <path
                d="M36.5414 24.1405C36.2217 23.4779 36.7957 22.7346 37.5177 22.8765L43.0068 23.9548L38.9723 29.1788L36.5414 24.1405Z"
                fill="#FF7DF3"
              />
              <path
                d="M8.92384 69.0059L22.1653 55.4847L67.5372 51.5152C71.4671 51.1714 74.9316 54.0785 75.2754 58.0083L77.1789 79.7653C77.5228 83.6952 74.6157 87.1597 70.6858 87.5035L18.1147 92.1029C14.1848 92.4467 10.7203 89.5397 10.3765 85.6098L8.92384 69.0059Z"
                fill="#FFF000"
              />
              <path
                d="M20.1192 55.6637L20.57 60.8168C20.9139 64.7467 18.0068 68.2112 14.0769 68.555L8.92384 69.0059L20.1192 55.6637Z"
                fill="#FFAA1D"
              />
              <path
                d="M80.3617 62.0659C81.046 62.3363 81.1278 63.2718 80.5009 63.657L75.7653 66.5664L75.1929 60.023L80.3617 62.0659Z"
                fill="#FFF000"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:ml-8 md:w-3/5 w-full">
        {values.map((val: Valuetype, index: number) => (
          <DropDown
            key={index}
            open={opendropdown[index]}
            setOpen={(isOpen: boolean) => {
              const newOpenDropdowns = [...opendropdown];
              newOpenDropdowns[index] = isOpen;
              setOpenDropdown(newOpenDropdowns);
            }}
            title={val.title}
            desc={val.desc}
          />
        ))}
      </div>
    </div>
  );
};
export default Frequent;
