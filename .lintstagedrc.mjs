import { ESLint } from 'eslint';

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    }),
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(' ');
};

const lintStagedConfig = {
  './**/*.(cjs|mjs|js|jsx|ts|tsx)': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);
    return [`npm run lint:base --fix ${filesToLint}`];
  },
};

export default lintStagedConfig;
