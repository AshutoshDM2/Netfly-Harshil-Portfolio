/* eslint-disable @next/next/no-img-element */
const Logo = () => {
  return (
    <div className="fixed top-5 left-10 z-30 pointer-events-auto">
      <img
        src="/images/logo.png"
        alt="Harshil Bhaita"
        width={500}
        height={500}
        className="w-16 md:w-20 xl:w-32 object-contain"
      />
    </div>
  );
};

export default Logo;
