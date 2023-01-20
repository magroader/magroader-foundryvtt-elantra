import { CriticalModifier } from './critical.mjs';
import { ExhaustionUpdater } from './exhaustion.mjs';
import { SpeciesEditor } from './species.mjs';

const criticalModifier = new CriticalModifier();
const exhaustionUpdater = new ExhaustionUpdater();
const speciesEditor = new SpeciesEditor();

Hooks.once('init', function () {
  criticalModifier.init();
  exhaustionUpdater.init();
  speciesEditor.init();
});