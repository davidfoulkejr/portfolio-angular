import { Injectable } from '@angular/core';
import { loremIpsum, ILoremIpsumParams } from 'lorem-ipsum';

@Injectable({ providedIn: 'root' })
export class LoremIpsumService {
  generate(config: ILoremIpsumParams): string {
    return loremIpsum(config);
  }
}
