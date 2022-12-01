export class CriticalModifier {
  init() {
    Hooks.on('dnd5e.preRollAttack', function(item, rollConfig) {
      // Non-PCs and spells do not crit
      if (rollConfig?.critical &&
        (
          item?.actor?.type != 'character' ||
          item?.type == 'spell'
        )) {
          rollConfig.critical = null;
        }
    });
  }
}