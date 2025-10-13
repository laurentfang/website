const VideoClip = () => {
  return (
    <section className="w-full">
      <div className="relative w-full">
        <video
          src="/IMG_0231_720p.mov"
          autoPlay
          loop
          muted
          playsInline
          className="h-auto w-full"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoClip;
