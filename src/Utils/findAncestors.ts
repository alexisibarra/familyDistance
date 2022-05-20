import { TFamilyGraph } from "../getFamilyDistance";
import findParent from "./findParent";

type TFindAncestors = (cousin: string, family: TFamilyGraph) => string[];

const findAncestors: TFindAncestors = (cousin, family) => {
  const parent = findParent(cousin, family);

  if (!parent) {
    return [];
  }

  return [...findAncestors(parent, family), parent];
};

export default findAncestors;
