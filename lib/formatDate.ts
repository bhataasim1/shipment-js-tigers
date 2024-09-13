export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return {
    date: date.toLocaleDateString("en-US", optionsDate),
    time: date.toLocaleTimeString("en-US", optionsTime),
  };
};
