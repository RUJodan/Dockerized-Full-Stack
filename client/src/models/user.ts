export interface User {
  id: number;
  username: string | null;
  email: string;
  sub: string;
  activated: boolean;
}
