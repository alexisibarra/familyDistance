import { TFamilyGraph } from "../../getFamilyDistance";
import findAncestors from "../findAncestors";

const family: TFamilyGraph = [
  ["A", "B"],
  ["B", "C"],
  ["C", "D"],
];

describe("findAncestors function", () => {
  it("should return an empty array if the cousin is not a part of the family", () => {
    expect(findAncestors("E", family)).toEqual([]);
  });

  it("should return an empty array if the cousin does not have a parent", () => {
    expect(findAncestors("D", family)).toEqual([]);
  });

  it("should return all the ancestors of the cousin in reversed order", () => {
    expect(findAncestors("A", family)).toEqual(["D", "C", "B"]);
  });
});
