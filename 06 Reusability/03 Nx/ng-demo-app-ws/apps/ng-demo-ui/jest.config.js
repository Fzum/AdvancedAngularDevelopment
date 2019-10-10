module.exports = {
  name: 'ng-demo-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-demo-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
