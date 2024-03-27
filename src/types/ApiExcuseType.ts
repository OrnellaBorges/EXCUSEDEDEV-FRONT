export type ApiExcuseType = {
  config: any;
  data: DataElementType;
  headers: any;
  request: any;
  status: number;
  statusText: string;
};

/* export type DataExcuseType = Omit<
  ApiExcuseType,
  "config" | "headers" | "request" | "status" | "statusText"
>; */

export type DataExcuseType = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type DataElementType = {
  http_code: number;
  tag: string;
  message: string;
};

export type NewExcuseType = {
  tag: string;
  message: string;
};

//creation d'un noueau type avec un ancien
export type ExcuseType = Omit<ApiExcuseType, "createdAd" | "updatedAt" | "id">;
