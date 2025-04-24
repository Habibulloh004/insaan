import Image from "next/image";

const ReviewCard = ({ image, name, rating, level, text }) => {
  return (
    <div className="flex flex-col justify-center items-center relative max-w-[300px] mx-auto bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-6 text-center">
      <div className="-z-10 w-28 h-28 bg-white rounded-full absolute -top-14 flex justify-center shadow-[0_8px_24px_rgba(0,0,0,0.15)]"></div>
      <div className="z-10 w-28 h-28 bg-white rounded-full absolute -top-14 flex justify-center">
        <Image
          src={image || "/home/avatar.webp"} // bu yerga siz yuklagan rasm yo‘lini yozing
          alt={name}
          width={100}
          height={100}
          className="w-full h-full p-2 z-20 bg-white rounded-full object-cover"
        />
      </div>

      {/* Yulduzlar */}
      <div className="flex justify-center my-4 pt-4">
        {[...Array(4)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500 opacity-100"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 3.73L3.82 18z"
              fillOpacity="0.5"
            />
          </svg>
        ))}
        {/* Yarim yulduz */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-400 opacity-70"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 3.73L3.82 18z"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      <p className="text-gray-700 text-sm italic mb-4">{text}</p>
      <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
      <p className="text-gray-500 text-sm">{level}</p>
    </div>
  );
};

export default ReviewCard;
