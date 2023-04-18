type ID = number;

interface Payment {
  sum: number;
  from: ID,
  to: ID,
}

interface Error {
  errorMessage: string;
  errorCode: number;
}

interface Req extends Payment {
}

type Res = {
  status: "success",
  data: Payment & { databaseId: ID }
} | {
  status: "failed",
  data: Error,
}
