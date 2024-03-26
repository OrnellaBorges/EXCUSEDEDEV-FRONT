export type ApiExcuseType = {
  config: any;
  data: DataExcuseType;
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

//creation d'un noueau type avec un ancien
export type ExcuseType = Omit<ApiExcuseType, "createdAd" | "updatedAt" | "id">;
