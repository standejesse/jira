export const IssueType = {
  TASK: 'task',
  BUG: 'bug',
  STORY: 'story',
};

export const IssueStatus = {
  BACKLOG: 'backlog',
  SELECTED: 'selected',
  INPROGRESS: 'inprogress',
  DONE: 'done',
};

export const IssuePriority = {
  HIGHEST: '5',
  HIGH: '4',
  MEDIUM: '3',
  LOW: '2',
  LOWEST: '1',
};

export const IssueTypeCopy = {
  [IssueType.TASK]: 'Task',
  [IssueType.BUG]: 'Bug',
  [IssueType.STORY]: 'Story',
};

export const IssueStatusCopy = {
  [IssueStatus.BACKLOG]: 'NÃO INICIADO',
  [IssueStatus.SELECTED]: 'EM PROGRESSO',
  [IssueStatus.INPROGRESS]: 'CODE REVIEW',
  [IssueStatus.DONE]: 'iMPEDIDOS',
};

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: 'Highest',
  [IssuePriority.HIGH]: 'High',
  [IssuePriority.MEDIUM]: 'Medium',
  [IssuePriority.LOW]: 'Low',
  [IssuePriority.LOWEST]: 'Lowest',
};
