import { TFamilyGraph } from "../getFamilyDistance";

type TFindParent = (c: String, family: TFamilyGraph) => string | undefined;

const findParent: TFindParent = (cousin: String, family: TFamilyGraph) => {
  const firstCousinIndex = family.findIndex((node) => node[0] === cousin);

  const firstCousinNode =
    firstCousinIndex >= 0 ? family[firstCousinIndex] : undefined;

  return firstCousinNode ? firstCousinNode[1] : undefined;
};

export default findParent;
