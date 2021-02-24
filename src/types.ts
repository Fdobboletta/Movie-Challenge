
export interface IMovie {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
  video:boolean;
  media_type: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  genre_ids:number[];
  release_date:string
}

export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

export interface IResponse {
  average_rating?: number;
  backdrop_path?: string;
  comments?: {
    [k: string]: null | string;
  };
  created_by?: {
    gravatar_hash: string;
    id: string;
    name: string;
    username: string;
  };
  description?: string;
  id?: number;
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  object_ids?: {
    [k: string]: string;
  };
  page?: number;
  poster_path?: string;
  public?: boolean;
  results?: IMovie[];
  revenue?: number;
  runtime?: number;
  sort_by?: string;
  total_pages?: number;
  total_results?: number;
}

export interface IError {
  status_code: number;
  status_message: string;
  success: boolean;
}