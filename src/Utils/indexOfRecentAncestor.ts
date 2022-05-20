type TIndexOfRecentAncestor = (
  ancestorsA: string[],
  ancestorsB: string[]
) => number;

const getIndexOfCommonAncestor: TIndexOfRecentAncestor = (
  ancestorsA,
  ancestorsB
) => {
  const smallestAncestors =
    ancestorsA.length < ancestorsB.length
      ? ancestorsA.length
      : ancestorsB.length;

  return [...Array(smallestAncestors)].reduce(
    (degreeParent, _, index) =>
      ancestorsA[index] === ancestorsB[index] ? index : degreeParent,
    0
  );
};

export default getIndexOfCommonAncestor;
