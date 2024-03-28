type InputTextProps = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name: string;
  inputType?: "input" | "textarea";
  type?: string;
  required?: boolean;
};

export function Input({
  handleChange,
  name,
  inputType,
  type,
  required,
}: InputTextProps) {
  const convertCamelCaseToWords = (inputString: string) => {
    // maPetitePlante > ma Petite Plante > Ma Petite Plante
    const withSpaces = inputString.replace(/([A-Z])/g, " $1");
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
  };

  const Element = inputType === "textarea" ? "textarea" : "input";

  // composant couteau suisse sui se customise ne fonction de la props inputType soit textarea ou input

  return (
    <div className="mb-4 flex flex-col">
      <label className="block text-gray-500 font-normal md:text-right mb-1 md:mb-0 pr-4">
        {convertCamelCaseToWords(name)}
        <Element
          className="border-2 border-gray-300 rounded-md "
          type={type ? type : "text"}
          name={name}
          onChange={handleChange}
          required={required}
        />
      </label>
    </div>
  );
}
