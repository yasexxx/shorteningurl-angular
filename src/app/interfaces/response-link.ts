import { Link } from "./link";

export interface ResponseLink {
  data: Link,
  success?: boolean,
  error?: null | undefined | { error?: string }  ;
}

