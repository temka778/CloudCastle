export function onKeyDownEnterOrSpace<T = unknown>(
  handler: (event: React.KeyboardEvent<T>) => void
) {
  return (event: React.KeyboardEvent<T>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handler(event);
    }
  };
}
