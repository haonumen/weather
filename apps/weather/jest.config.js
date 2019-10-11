module.exports = {
  name: 'weather',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/weather',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
