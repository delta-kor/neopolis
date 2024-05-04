import { Building } from './building';
import { LeisureBuilding } from './leisure';
import { ResidentialBuilding } from './residential';

const ResidentialBuildingNames = ['bungalow_new2'];
const LeisureBuildingNames = ['burger_joint_new'];

export class BuildingManager {
  public static fromElement(element: Element): Building {
    const name = element.tagName;

    if (ResidentialBuildingNames.includes(name)) return new ResidentialBuilding(element);
    if (LeisureBuildingNames.includes(name)) return new LeisureBuilding(element);
    return new Building(element);
  }
}
