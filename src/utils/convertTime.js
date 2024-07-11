const ConvertTime = (isoDateString) => {
  const date = new Date(isoDateString);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getUTCFullYear();
  const month = monthNames[date.getUTCMonth()];
  const day = date.getUTCDate();

  const formattedDate = `${month} ${day}, ${year}`;

  return formattedDate;
};

export default ConvertTime;
