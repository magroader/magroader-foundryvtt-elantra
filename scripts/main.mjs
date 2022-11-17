import { ExhaustionUpdater } from './exhaustion.mjs';

let exhaustionUpdater = new ExhaustionUpdater();

Hooks.once('init', function () {
  exhaustionUpdater.init();
});