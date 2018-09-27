import 'materialize';

export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() );

    aurelia.start().then(a => a.setRoot());
}