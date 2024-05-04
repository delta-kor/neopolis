export type BuildingType = 'default';

export class Building {
  public readonly id: string;
  public readonly name: string;

  constructor(element: Element) {
    const id = element.getAttribute('id');
    if (!id) throw new Error('Cannot find building id');

    this.id = id;
    this.name = element.tagName;
  }
}
