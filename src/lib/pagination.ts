/**
 * Pagination utilities for blog posts and other content collections
 */

export interface PaginationOptions {
  page: number;
  pageSize: number;
}

export interface PaginationResult<T> {
  items: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

/**
 * Paginate an array of items
 */
export function paginate<T>(
  items: T[],
  options: PaginationOptions
): PaginationResult<T> {
  const { page, pageSize } = options;
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    items: paginatedItems,
    pagination: {
      page,
      pageSize,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

/**
 * Get pagination metadata without slicing the array
 */
export function getPaginationMeta(
  totalItems: number,
  options: PaginationOptions
) {
  const { page, pageSize } = options;
  const totalPages = Math.ceil(totalItems / pageSize);

  return {
    page,
    pageSize,
    totalItems,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
}

/**
 * Validate and normalize page number.
 *
 * Always returns a finite integer in [1, max(1, floor(maxPage))].
 * Strings keep lenient parseInt prefix parsing ("2abc" -> 2). Non-finite,
 * absent, unparseable, zero, or negative pages resolve to 1; fractional pages
 * are floored. An unusable maxPage (zero, negative, NaN, Infinity) acts as 1.
 */
export function normalizePage(page: number | string | undefined, maxPage: number): number {
  const lastPage = Number.isFinite(maxPage) ? Math.max(1, Math.floor(maxPage)) : 1;
  const requested = typeof page === "string" ? parseInt(page, 10) : page;
  if (typeof requested !== "number" || !Number.isFinite(requested)) return 1;
  const whole = Math.floor(requested);
  if (whole < 1) return 1;
  return Math.min(whole, lastPage);
}

