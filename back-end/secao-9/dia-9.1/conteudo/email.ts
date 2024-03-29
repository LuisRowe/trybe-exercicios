export class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;
  
  constructor(from: string, to: string, subject: string, message: string) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) {
      this._subject = newSubject;
    } else {
      console.log('Subject precisa ter no máximo 40 caracteres.');
    }
  }

  get subject():string {
    return this._subject;
  }

  get from():string {
    return this._from;
  }

  get to():string {
    return this._to;
  }

  get content():string {
    return `
    From ${this._from} to ${this._to}
    ${this._subject}
    
    ${this._message}`
  }
}