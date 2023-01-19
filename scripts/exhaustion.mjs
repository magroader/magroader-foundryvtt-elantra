import * as globals from './globals.mjs';

export class ExhaustionUpdater {
  init() {
    let rollHooks = [
      'Attack',
      'Formula',
      'ToolCheck',
      'Skill',
      'AbilityTest',
      'AbilitySave',
      'DeathSave'
    ];

    for (const hook of rollHooks) {
      Hooks.on('dnd5e.preRoll' + hook, function(item, rollConfig) {
        if (rollConfig?.data?.attributes?.exhaustion > 0) {
          rollConfig.parts.push('-@attributes.exhaustion');
        }
        return true;
      });
    }

    libWrapper.register(globals.moduleName, 'dnd5e.entities.Actor5e.prototype._prepareSpellcasting', function (wrapped, ...args) {
      const result = wrapped(...args);
      if (this.system.attributes.exhaustion > 0) {
        this.system.attributes.spelldc = this.system.attributes.spelldc - this.system.attributes.exhaustion;
      }
      return result;
    }, 'WRAPPER');
  }
}