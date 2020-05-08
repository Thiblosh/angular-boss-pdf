import { TDocumentDefinitions, TDocumentInformation } from 'pdfmake/interfaces';

export class PdfDefinition implements TDocumentDefinitions {
  info?: TDocumentInformation;
  header?: any;
  footer?: any;
  content: any;
  styles?: any;
  pageMargins?: [number, number, number, number];
  defaultStyle?: {
    font?: string;
  };

  constructor() {
    this.content = [];
  }
}
