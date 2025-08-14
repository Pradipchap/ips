export interface IApiResponseWithPagination<T> {
  count: number;
  total_pages: number;
  next: string | null;
  previous: string | null;
  results: T;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export type IUserListResponse = IApiResponseWithPagination<IUser[]>;
