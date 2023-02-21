import { inject, InjectionToken } from '@angular/core';

export interface Params {
  [param: string]: any;
}

export const RoutePath = new InjectionToken('Route Path');

export const RouteParams = new InjectionToken('Route Params');

export const QueryParams = new InjectionToken('Query Params');

export function compareParams(previous: Params, current: Params): boolean {
  return (
    previous === current || JSON.stringify(previous) === JSON.stringify(current)
  );
}

/**
 * Returns the RoutePath observable from the current injector
 *
 * @returns RoutePath
 */
export function getRoutePath<T>(): () => T {
  return inject(RoutePath) as () => T;
}

/**
 * Returns the RoutePath observable from the current injector
 *
 * @returns RouteParams
 */
export function getRouteParams<T>(): () => T {
  return inject(RouteParams) as () => T;
}

/**
 * Returns the QueryParams observable from the current injector
 *
 * @returns QueryParams
 */
export function getQueryParams<T>(): () => T {
  return inject(QueryParams) as () => T;
}
