import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { normalizePage } from "./pagination.ts";

describe("normalizePage", () => {
  describe("valid integer pages keep existing results", () => {
    it("returns an in-range numeric page unchanged", () => {
      assert.equal(normalizePage(1, 5), 1);
      assert.equal(normalizePage(3, 5), 3);
      assert.equal(normalizePage(5, 5), 5);
    });

    it("returns an in-range string page as its integer", () => {
      assert.equal(normalizePage("1", 5), 1);
      assert.equal(normalizePage("4", 5), 4);
    });

    it("clamps pages beyond the last page to the last page", () => {
      assert.equal(normalizePage(9, 5), 5);
      assert.equal(normalizePage("9", 5), 5);
    });
  });

  describe("unusable pages return 1", () => {
    it("returns 1 for an absent page", () => {
      assert.equal(normalizePage(undefined, 5), 1);
    });

    it("returns 1 for zero and negative pages", () => {
      assert.equal(normalizePage(0, 5), 1);
      assert.equal(normalizePage(-3, 5), 1);
      assert.equal(normalizePage("0", 5), 1);
      assert.equal(normalizePage("-2", 5), 1);
    });

    it("returns 1 for non-finite numeric pages", () => {
      assert.equal(normalizePage(Number.NaN, 5), 1);
      assert.equal(normalizePage(Number.POSITIVE_INFINITY, 5), 1);
      assert.equal(normalizePage(Number.NEGATIVE_INFINITY, 5), 1);
    });

    it("returns 1 for unparseable strings", () => {
      assert.equal(normalizePage("", 5), 1);
      assert.equal(normalizePage("abc", 5), 1);
      assert.equal(normalizePage("Infinity", 5), 1);
    });
  });

  describe("fractional pages", () => {
    it("floors finite positive fractional pages before clamping", () => {
      assert.equal(normalizePage(2.7, 5), 2);
      assert.equal(normalizePage(7.9, 5), 5);
    });

    it("returns 1 for fractional pages that floor below 1", () => {
      assert.equal(normalizePage(0.5, 5), 1);
    });
  });

  describe("lenient string prefix parsing is preserved", () => {
    it("parses the numeric prefix of a partially numeric string", () => {
      assert.equal(normalizePage("2abc", 5), 2);
    });

    it("clamps a parsed prefix to the last page", () => {
      assert.equal(normalizePage("9abc", 5), 5);
    });
  });

  describe("unusable page counts give an upper bound of 1", () => {
    it("returns 1 for an empty collection (maxPage 0)", () => {
      assert.equal(normalizePage(1, 0), 1);
      assert.equal(normalizePage(3, 0), 1);
      assert.equal(normalizePage("3", 0), 1);
      assert.equal(normalizePage(undefined, 0), 1);
    });

    it("returns 1 for negative, NaN, or infinite maxPage", () => {
      assert.equal(normalizePage(3, -2), 1);
      assert.equal(normalizePage(3, Number.NaN), 1);
      assert.equal(normalizePage(3, Number.POSITIVE_INFINITY), 1);
      assert.equal(normalizePage("3", Number.POSITIVE_INFINITY), 1);
    });

    it("floors a positive fractional maxPage", () => {
      assert.equal(normalizePage(4, 3.9), 3);
      assert.equal(normalizePage(2, 3.9), 2);
    });

    it("bounds a fractional maxPage below 1 up to 1", () => {
      assert.equal(normalizePage(3, 0.5), 1);
    });
  });
});
