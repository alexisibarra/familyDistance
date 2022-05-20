import { TFamilyGraph } from "../getFamilyDistance";

type TFamilyMap = Record<string, string>;
type TGetFamilyMap = (family: TFamilyGraph) => TFamilyMap;

const getFamilyMap: TGetFamilyMap = (family: TFamilyGraph) =>
  family.reduce(
    (familyMap: TFamilyMap, [child, parent]) => ({
      ...familyMap,
      [child]: parent,
    }),
    {}
  );

export default getFamilyMap;
