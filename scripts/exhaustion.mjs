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
  }
}