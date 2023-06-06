import Image from "next/image";

export default function Banner() {
  return (
    <div className="">
      <div className="container relative mx-auto h-80 overflow-hidden rounded-2xl bg-blue-500">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex">
          <Image
            src="/banner.png"
            alt={""}
            width={2000}
            height={1000}
            className="object-cover"
          />
        </div>

        <div className="absolute right-10 top-32 text-right text-white">
          <h1 className="text-2xl font-bold ">Fancy Heading Here</h1>
          <span>This is a subheading...</span>
        </div>
      </div>
    </div>
  );
}
