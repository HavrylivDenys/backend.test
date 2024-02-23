module.exports = {
  branches: ['main'],
  debug: true,
  ci: true,
  dryRun: false,
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
    "@semantic-release/github",
    ['@semantic-release/changelog',
      {
        // Custom configuration for @semantic-release/git plugin
        "changelogFile": "CHANGELOG.md",
        "assets": ["CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]

  ],
};
