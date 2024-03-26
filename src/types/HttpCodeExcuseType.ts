export type HttpCodeExcuse = {
  http_code: number;
  tag: string;
  message: string;
};

export type HttpCodeExcusesDataState = {
  HttpCodeExcusesData: HttpCodeExcuse[];
};

//
export type HttpCodeExcusesDataActions = {
  setHttpCodeExcusesData: React.Dispatch<
    React.SetStateAction<HttpCodeExcuse[]>
  >;
};

export type HttpCodeExcusesDataHook = HttpCodeExcusesDataState &
  HttpCodeExcusesDataActions;
