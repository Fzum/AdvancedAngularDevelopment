module.exports = {
  name: 'ux-system',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ux-system',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
