import {useLingui} from '@lingui/react';
import {FC, Suspense} from 'react';

import Markdown from 'react-markdown';

import packageJSON from '../../../../../../package.json';

const FLOOD_ORIGINAL_PROJECT_URL = 'https://github.com/Flood-UI/flood';

const AboutTab: FC = () => {
  const {i18n} = useLingui();

  const aboutMarkdown = [
    '# Flood <FloodVersion />',
    '',
    `[![${i18n._(
      'settings.about.latest.release',
    )}](https://img.shields.io/npm/v/flood?label=Latest%20Release)](https://www.npmjs.com/flood) <CommitBadge />`,
    '',
    '[![Github Actions build status badge](https://github.com/jesec/flood/actions/workflows/build.yml/badge.svg)](https://github.com/jesec/flood/actions/workflows/build.yml) [![Crowdin](https://badges.crowdin.net/flood/localized.svg)](https://crowdin.com/project/flood) [![Discord server badge](https://img.shields.io/discord/418267176873623553.svg?style=flat-square)](https://discord.gg/Z7yR5Uf)',
    '',
    `${i18n._('settings.about.description')} [${i18n._(
      'settings.about.original.project',
    )}](${FLOOD_ORIGINAL_PROJECT_URL}).`,
    '',
    `#### ${i18n._('settings.about.feedback.heading')}`,
    '',
    `${i18n._('settings.about.feedback.body.first')} [${i18n._(
      'settings.about.feedback.github.issue',
    )}](https://github.com/jesec/flood/issues). ${i18n._('settings.about.feedback.body.second')} [${i18n._(
      'settings.about.feedback.discord',
    )}](https://discord.gg/Z7yR5Uf) ${i18n._('settings.about.feedback.body.third')}`,
    '',
    `#### ${i18n._('settings.about.more.info.heading')}`,
    '',
    `${i18n._('settings.about.more.info.body.first')} [${i18n._(
      'settings.about.more.info.wiki',
    )}](https://github.com/jesec/flood/wiki) ${i18n._('settings.about.more.info.body.second')}`,
  ].join('\n');

  const versioned = aboutMarkdown.replaceAll('<FloodVersion />', packageJSON.version).replaceAll(
    '<CommitBadge />',
    packageJSON.version.length > 8
      ? // If user is on a rolling build, display latest version of rolling build.
        `![${i18n._('settings.about.latest.release')}](` +
          '"https://img.shields.io/npm/v/@jesec/flood?label=HEAD" "Latest version of rolling build")'
      : // If user is on a released build, display commits to project made since user's version.
        `![${i18n._('settings.about.commits.since')}](https://img.shields.io/github/commits-since/jesec/flood/v${
          packageJSON.version
        } "${i18n._('settings.about.commits.since.title')}")`,
  );

  return (
    <Suspense fallback={null}>
      <Markdown>{versioned}</Markdown>
    </Suspense>
  );
};

export default AboutTab;
