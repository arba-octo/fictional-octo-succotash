export const getInitialsName = (name?: string | null) => {
  if (!name) { return 'U'; }

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(p => p[0]!.toUpperCase())
    .join('');
};
