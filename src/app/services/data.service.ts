import { Injectable } from '@angular/core';

export enum TokenType {
  SG = 0,
  SE = 1,
  SP = 2,
}
export interface Token {
  id: number;
  value: string;
  type: TokenType;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public tokens: Token[] = [
    {
      id: 0,
      value: '230403-SG01',
      type: TokenType.SG,
    },
    {
      id: 1,
      value: '230403-SE01',
      type: TokenType.SE,
    },
    {
      id: 2,
      value: '230403-SP02',
      type: TokenType.SP,
    },
  ];

  constructor() {}

  public getTokens(): Token[] {
    return this.tokens;
  }

  public getTokenById(id: number): Token {
    return this.tokens[id];
  }
}
