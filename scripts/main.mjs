import { CriticalModifier } from './critical.mjs';
import { ExhaustionUpdater } from './exhaustion.mjs';

let exhaustionUpdater = new ExhaustionUpdater();
let criticalModifier = new CriticalModifier();

Hooks.once('init', function () {
  exhaustionUpdater.init();
  criticalModifier.init();
});