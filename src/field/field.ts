import { Building, BuildingManager } from '../building';

export class Field {
  private readonly fieldMap: Map<number, Element> = new Map();

  constructor() {}

  public set(element: Element, room: number): Field {
    this.fieldMap.set(room, element);
    return this;
  }

  public getField(room: number): Element | null {
    return this.fieldMap.get(room) || null;
  }

  public getItemsByName(name: string, room: number): Building[] {
    const field = this.getField(room);
    if (!field) throw new Error(`Field not found for room ${room}`);

    const elements = field.getElementsByTagName(name);
    const buildings = [...elements].map(element => BuildingManager.fromElement(element));
    return buildings;
  }
}
