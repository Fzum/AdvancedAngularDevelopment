module.exports = {
  name: 'other-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/other-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
