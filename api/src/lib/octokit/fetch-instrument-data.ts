import { octokit, repositoryConfig } from './config.ts';

export const fetchInstrumentData = (path: string) => {
  return octokit.rest.repos.getContent({
    path,
    ...repositoryConfig
  });
};
