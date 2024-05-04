export class Field {
  private readonly fieldMap: Map<number, Element> = new Map();

  constructor() {}

  public set(element: Element, room: number): Field {
    this.fieldMap.set(room, element);
    return this;
  }

  public get(room: number): Element | null {
    return this.fieldMap.get(room) || null;
  }
}
