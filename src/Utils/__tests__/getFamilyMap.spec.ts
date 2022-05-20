import getFamilyMap from "../getFamilyMap";
import { familyMock } from "../../Mocks/familyMock";

describe("getFamilyMap function", () => {
  it("should the family map", () => {
    expect(getFamilyMap(familyMock)).toEqual({
      B: "A",
      C: "A",
      E: "B",
      F: "B",
      N: "E",
      M: "J",
      J: "F",
      G: "C",
      H: "C",
      K: "G",
      P: "K",
    });
  });
});
