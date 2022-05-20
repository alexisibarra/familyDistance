import findAncestors from "./Utils/findAncestors";
import getIndexOfCommonAncestor from "./Utils/indexOfRecentAncestor";

export type TFamilyNode = [string, string];
export type TFamilyGraph = TFamilyNode[];

const getFamilyDistance = (
  cousinA: string,
  cousinB: string,
  family: TFamilyGraph
) => {
  const AncestorsA = findAncestors(cousinA, family);
  const AncestorsB = findAncestors(cousinB, family);

  const indexOfCommonAncestor = getIndexOfCommonAncestor(
    AncestorsA,
    AncestorsB
  );

  const distanceCousinAToCommonAncestor =
    AncestorsA.length - indexOfCommonAncestor - 1;

  const distanceCousinBToCommonAncestor =
    AncestorsB.length - indexOfCommonAncestor - 1;

  const cousinsDegree =
    distanceCousinAToCommonAncestor < distanceCousinBToCommonAncestor
      ? distanceCousinAToCommonAncestor
      : distanceCousinBToCommonAncestor;

  const removalDegree = Math.abs(
    distanceCousinAToCommonAncestor - distanceCousinBToCommonAncestor
  );

  return {
    cousinsDegree,
    removalDegree,
  };
};

export default getFamilyDistance;
