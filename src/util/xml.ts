import { JSDOM } from 'jsdom';

export class Xml {
  public static parse(xml: string): Document {
    const dom = new JSDOM(xml, { contentType: 'text/xml' });
    return dom.window.document;
  }
}
