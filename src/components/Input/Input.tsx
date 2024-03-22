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
    <label>
      {convertCamelCaseToWords(name)}
      <Element
        type={type ? type : "text"}
        name={name}
        onChange={handleChange}
        required={required}
      />
    </label>
  );
}
