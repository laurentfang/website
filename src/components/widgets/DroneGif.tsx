import Image from 'next/image';

const DroneGif = () => {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <Image
          src="/drone_slam.gif"
          alt="Drone SLAM Technology Demonstration"
          width={1920}
          height={1080}
          className="h-auto w-full"
          sizes="100vw"
          loading="lazy"
          priority={false}
        />
      </div>
    </section>
  );
};

export default DroneGif;
