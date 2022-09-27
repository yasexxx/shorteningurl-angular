import { Link } from "./link";

export interface ResponseLink {
  data: Link | undefined ,
  success?: boolean,
  error?: null | undefined | { error?: string }  ;
}

