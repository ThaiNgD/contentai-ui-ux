export {};
declare global {
  type IOptionSelectFormat = {
    readonly label: string;
    readonly value: string;
  };
  type IResult = {
    message: string;
    statusCode: string;
    active: boolean;
    result: string;
    tokenInput: string;
    tokenOutput: string;
  };
}
