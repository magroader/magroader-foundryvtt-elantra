export class SpeciesEditor {
  init() {
    const self = this;
    Hooks.once('ready', function () {
      self.ready();
    });
  }

  ready() {
    game.i18n.translations.DND5E.Race = "Species";
  }
}