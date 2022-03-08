interface Properties {
  language: string;
  setLanguage: (string) => void;
  setRunning: (boolean) => void;
  setTime: (number) => void;
}

function ToggleLanguage({
  language,
  setLanguage,
  setRunning,
  setTime,
}: Properties) {
  let toggleAsian = () => {
    setLanguage((language) => (language = "asian"));
    setRunning(false);
    setTime(0);
  };

  let toggleEnglish = () => {
    setLanguage((language) => (language = "english"));
    setRunning(false);

    setTime(0);
  };

  if (language === "asian") {
    return (
      <span className="z-10 mt-5">
        <span
          className="text-amber-300 mr-3 ease-in-out duration-200"
          onClick={toggleAsian}
        >
          asian
        </span>
        <span
          className="text-white ease-in-out duration-200"
          onClick={toggleEnglish}
        >
          english
        </span>
      </span>
    );
  } else if (language === "english") {
    return (
      <span className="z-10 mt-5">
        <span
          className="text-white mr-3 ease-in-out duration-200"
          onClick={toggleAsian}
        >
          asian
        </span>
        <span
          className="text-amber-300 ease-in-out duration-200"
          onClick={toggleEnglish}
        >
          english
        </span>
      </span>
    );
  } else {
    return null;
  }
}

export default ToggleLanguage;
