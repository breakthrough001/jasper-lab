import Container from "./Container";
import RoundCorner from "./RoundCorner";

export default function Hero() {
  return (
    <Container>
      <div className="w-full">
        <h1 className="text-8xl font-thin mb-10 text-center max-w-screen-xl">
          Custom design meets webflow development
        </h1>
      </div>

      <div className="bg-black rounded-2xl h-[500px] relative">
        <div className="bg-white absolute top-[-1px] right-0 rounded-bl-2xl z-10">
          <p className="p-6">hello world</p>
          <RoundCorner className="top-0 left-[-16] w-4 h-4" />
          <RoundCorner className="bottom-[-15.5px] right-0" />
        </div>

        <div className="bg-white absolute bottom-0 left-0 rounded-tr-2xl z-10">
          <div className="h-10 w-20"></div>
          <RoundCorner className="top-[-15.5px] left-0 w-4 h-4 rotate-180" />
          <RoundCorner className="bottom-[-.5px] right-[-16px] rotate-180" />
        </div>

        <video
          src="/hero-video.mp4"
          alt="hero video of geometric object"
          className="w-full h-full object-cover rounded-2xl"
          priority="true"
          sizes="100%"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </Container>
  );
}
