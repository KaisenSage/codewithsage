declare module "js-cookie" {
  export interface CookieAttributes {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
  }

  export interface CookiesStatic {
    get(name: string): string | undefined;
    get(): Record<string, string>;
    getJSON<T = unknown>(name: string): T;
    getJSON(): Record<string, unknown>;
    set(name: string, value: string | object, attributes?: CookieAttributes | number): void;
    remove(name: string, attributes?: CookieAttributes): void;
    defaults: CookieAttributes;
    noConflict(): CookiesStatic;
  }

  const Cookies: CookiesStatic;
  export default Cookies;
}