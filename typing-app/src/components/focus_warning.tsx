interface Properties {
  focused: boolean;
  setFocused: (boolean) => void;
}

function FocusWarning({ focused, setFocused }: Properties) {
  return (
    <div className="flex justify-center">
      {!focused ? (
        <p className="text-white mt-10 fixed">Click on the text to focus</p>
      ) : null}
    </div>
  );
}

export default FocusWarning;
