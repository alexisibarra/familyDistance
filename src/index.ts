import getFamilyDistance from "./getFamilyDistance";
import { familyMock } from "./Mocks/familyMock";

const familyDistance = getFamilyDistance("E", "G", familyMock);

console.log(familyDistance);
