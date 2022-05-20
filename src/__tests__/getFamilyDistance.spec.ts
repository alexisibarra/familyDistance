import getFamilyDistance from "../getFamilyDistance";
import { familyMock } from "../Mocks/familyMock";

describe("getFamilyDistance", () => {
  it("should return proper family distance", () => {
    const { cousinsDegree, removalDegree } = getFamilyDistance(
      "E",
      "G",
      familyMock
    );

    expect(cousinsDegree).toBe(1);
    expect(removalDegree).toBe(0);
  });

  it("should return proper family distance", () => {
    const { cousinsDegree, removalDegree } = getFamilyDistance(
      "E",
      "H",
      familyMock
    );

    expect(cousinsDegree).toBe(1);
    expect(removalDegree).toBe(0);
  });

  it("should return proper family distance", () => {
    const { cousinsDegree, removalDegree } = getFamilyDistance(
      "J",
      "K",
      familyMock
    );

    expect(cousinsDegree).toBe(2);
    expect(removalDegree).toBe(0);
  });

  it("should return proper family distance", () => {
    const { cousinsDegree, removalDegree } = getFamilyDistance(
      "M",
      "P",
      familyMock
    );

    expect(cousinsDegree).toBe(3);
    expect(removalDegree).toBe(0);
  });

  it("should return proper family distance", () => {
    const { cousinsDegree, removalDegree } = getFamilyDistance(
      "J",
      "H",
      familyMock
    );

    expect(cousinsDegree).toBe(1);
    expect(removalDegree).toBe(1);
  });

  it("should return proper family distance", () => {
    const { cousinsDegree, removalDegree } = getFamilyDistance(
      "M",
      "H",
      familyMock
    );

    expect(cousinsDegree).toBe(1);
    expect(removalDegree).toBe(2);
  });
});
