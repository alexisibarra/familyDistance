import findParent from "../findParent";
import { familyMock } from "../../Mocks/familyMock";

describe("findParent function", () => {
  it("should return the parent of the child", () => {
    expect(findParent("C", familyMock)).toBe("A");
  });

  it("should return undefined if the child does not have a parent", () => {
    expect(findParent("D", familyMock)).toBeUndefined();
  });
});
