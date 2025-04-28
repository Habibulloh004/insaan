import Image from "next/image";

const ReviewCardGoriz = ({ image, name, rating, level, text }) => {
  return (
    <div className="w-11/12 lg:w-10/12 flex-col md:flex-row flex justify-around items-center relative mx-auto bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] p-6 text-center">
      <div className="w-full flex justify-center items-center flex-col">
        <div className="z-10 w-28 bg-white flex justify-center">
          <Image
            src={"/assets/qosh.svg"} // bu yerga siz yuklagan rasm yo‘lini yozing
            alt={name}
            width={100}
            height={100}
            className="w-full h-full p-2 z-20 bg-white object-contain"
          />
        </div>
        <p className="text-gray-700 text-sm italic mb-4">{text}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="z-10 w-28 h-28 bg-white rounded-full flex justify-center">
          <Image
            src={image || "/home/avatar.webp"} // bu yerga siz yuklagan rasm yo‘lini yozing
            alt={name}
            width={100}
            height={100}
            className="w-full h-full p-2 z-20 bg-white rounded-full object-cover"
          />
        </div>

        <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
        {/* <p className="text-gray-500 text-sm">{level}</p> */}
      </div>
    </div>
  );
};

export default ReviewCardGoriz;
