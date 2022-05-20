import getIndexOfCommonAncestor from "../indexOfRecentAncestor";

describe("indexOfCommonAncestor function", () => {
  it("should return the index of the common ancestor", () => {
    expect(
      getIndexOfCommonAncestor(["A", "B", "F", "J"], ["A", "C", "G", "K"])
    ).toBe(0);

    expect(
      getIndexOfCommonAncestor(["B", "F", "J", "K"], ["A", "C", "G", "K"])
    ).toBe(3);

    expect(
      getIndexOfCommonAncestor(["B", "J", "K"], ["J", "B", "K", "A"])
    ).toBe(2);

    expect(
      getIndexOfCommonAncestor(
        ["X", "Y", "A", "B", "F", "J"],
        ["X", "Y", "A", "C", "Z", "G", "K"]
      )
    ).toBe(2);
  });
});
