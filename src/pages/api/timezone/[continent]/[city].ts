// src/pages/timezone/[timezone].ts
import type { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";
import "moment-timezone";

const timezone = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = {
    datetime: moment().tz(`${req.query.continent}/${req.query.city}`).format()
  };
  res.status(200).json(body);
};

export default timezone;
