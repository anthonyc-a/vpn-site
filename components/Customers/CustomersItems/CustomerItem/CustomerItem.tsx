import React from "react";
import Image from "next/image";

const ReviewInfo = [
  {
    name: "Viezh Robert",
    img: "/img1.png",
    location: "Warsaw, Poland",
    rating: "4.5",
    review:
      "'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.'",
  },
  {
    name: "Yessica Christy",
    img: "/img2.png",
    location: "Shanxi, China",
    rating: "4.5",
    review:
      "'I like it because I like to travel far and still can connect with high speed.'",
  },
  {
    name: "Kim Young Jou",
    img: "/img3.png",
    location: "Seoul, South Korea",
    rating: "4.5",
    review:
      "'This is very unusual for my business that currently requires a virtual private network that has high security.'",
  },
  {
    name: "Viezh Robert",
    img: "/img1.png",
    location: "Warsaw, Poland",
    rating: "4.5",
    review:
      "'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.'",
  },
  {
    name: "Yessica Christy",
    img: "/img2.png",
    location: "Shanxi, China",
    rating: "4.5",
    review:
      "'I like it because I like to travel far and still can connect with high speed.'",
  },
];

interface BioProps {
  count: number;
}

const CustomerItem: React.FC<BioProps> = ({ count }: any): JSX.Element => {
  return (
    <>
      {ReviewInfo.map((item, i) => (
        <div className={count === i ? "item active" : "item"} key={i}>
          <div className="item-top">
            <div className="item-header">
              <div className="avatar">
                <Image src={item.img} alt={item.name} width={50} height={50} />
              </div>
              <div className="item-info">
                <h5>{item.name}</h5>
                <span>{item.location}</span>
              </div>
            </div>
            <div className="item-rating">
              {item.rating}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1891 5.41802L9.22187 4.84146L7.44844 1.24615C7.4 1.14771 7.32031 1.06802 7.22187 1.01959C6.975 0.897711 6.675 0.999273 6.55156 1.24615L4.77812 4.84146L0.810936 5.41802C0.701561 5.43365 0.601561 5.48521 0.524999 5.56334C0.432439 5.65847 0.381434 5.78646 0.383192 5.91918C0.38495 6.0519 0.439327 6.1785 0.534374 6.27115L3.40469 9.06959L2.72656 13.0211C2.71066 13.1131 2.72083 13.2076 2.75592 13.294C2.79102 13.3805 2.84963 13.4554 2.92511 13.5102C3.00059 13.565 3.08992 13.5976 3.18297 13.6042C3.27602 13.6108 3.36907 13.5913 3.45156 13.5477L7 11.6821L10.5484 13.5477C10.6453 13.5993 10.7578 13.6165 10.8656 13.5977C11.1375 13.5508 11.3203 13.293 11.2734 13.0211L10.5953 9.06959L13.4656 6.27115C13.5437 6.19459 13.5953 6.09459 13.6109 5.98521C13.6531 5.71177 13.4625 5.45865 13.1891 5.41802Z"
                  fill="#FEA250"
                />
              </svg>
            </div>
          </div>
          <div className="item-bottom">
            <p>{item.review}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomerItem;
