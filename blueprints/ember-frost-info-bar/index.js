module.exports = {
  description: '',
  normalizeEntityName: function () {},

  /**
    Installs specified packages at the root level of the application.
    Triggered by 'ember install <addon name>'.

    @returns {Promise} package names and versions
  */
  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-frost-core', target: '>=0.8.0 <2.0.0'},
        {name: 'ember-block-slots', target: '>=0.12.1", <1.0.0'}
      ]
    })
  }
}
