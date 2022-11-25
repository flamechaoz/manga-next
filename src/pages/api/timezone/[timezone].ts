// src/pages/timezone/[timezone].ts
import type { NextApiRequest, NextApiResponse } from "next";

const timezone = async (req: NextApiRequest, res: NextApiResponse) => {
  const date_ob = new Date();

  // current date
  // adjust 0 before single digit date
  const date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  const year = date_ob.getFullYear();

  // current hours
  const hours = date_ob.getHours();

  // current minutes
  const minutes = date_ob.getMinutes();

  // current seconds
  const seconds = date_ob.getSeconds();

  // date format YYYY-MM-DDTHH-MM:SS
  const body = {
    datetime: `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`,
  };
  res.status(200).json(body);
};

export default timezone;
