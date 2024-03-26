import { useState } from "react";

const Data = () => {
  const [excusesData, setExcusesData] = useState([
    { http_code: 701, tag: "Inexcusable", message: "Meh" },
    { http_code: 702, tag: "Inexcusable", message: "Emacs" },
    { http_code: 720, tag: "Edge Cases", message: "Unpossible" },
    { http_code: 721, tag: "Edge Cases", message: "Known Unknowns" },
    { http_code: 722, tag: "Edge Cases", message: "Unknown Unknowns" },
    { http_code: 723, tag: "Edge Cases", message: "Tricky" },
  ]);

  return { excusesData, setExcusesData };
};

export default Data;
