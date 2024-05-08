export class State {
  public readonly id: string;
  public readonly orderQuestId: string;
  public readonly buildQuestId: string;

  constructor(country: Element) {
    const neighborhoods = country.querySelector('neighborhoods');
    if (!neighborhoods) throw new Error('Country does not have state');

    const idText = neighborhoods.getAttribute('neighborhoods');
    if (!idText) throw new Error('State id not found');
    const id = JSON.parse(idText)[0].toString();

    const orderQuest = country.querySelector('generated_quest_order');
    if (!orderQuest) throw new Error('Generated quest order not found');
    const orderQuestId = orderQuest.getAttribute('id');
    if (!orderQuestId) throw new Error('Order quest id not found');

    const buildQuest = country.querySelector('generated_quest_buildsite');
    if (!buildQuest) throw new Error('Generated quest buildsite not found');
    const buildQuestId = buildQuest.getAttribute('id');
    if (!buildQuestId) throw new Error('Build quest id not found');

    this.id = id;
    this.orderQuestId = orderQuestId;
    this.buildQuestId = buildQuestId;
  }

  public static hasState(country: Element): boolean {
    const neighborhoods = country.querySelector('neighborhoods');
    if (!neighborhoods) return false;
    return neighborhoods.getAttribute('neighborhoods') !== null;
  }
}
