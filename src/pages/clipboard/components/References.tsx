import {
  GoogleLogo,
  IBMLogo,
  MicrosoftLogo,
  HPLogo,
  VectorLogo,
} from "../images";

export default function References() {
  return (
    <section>
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <img src={GoogleLogo} alt="Google Logo" />
        <img src={IBMLogo} alt="IBM Logo" />
        <img src={MicrosoftLogo} alt="Microsoft Logo" />
        <img src={HPLogo} alt="HP Logo" />
        <img src={VectorLogo} alt="Vector Logo" />
      </div>
    </section>
  );
}
