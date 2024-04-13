import { Request, Response } from "express";
import getCodechefContests from "../../platforms/codechef";
import getLeetcodeContests from "../../platforms/leetcode";
import getCodeforcesContests from "../../platforms/codeforces";

export const UpcomingContestsController = async (
  req: Request,
  res: Response
) => {
  const codechefContests = await getCodechefContests();
  const leetcodeContests = await getLeetcodeContests();
  const codeforcesContests = await getCodeforcesContests();

  const contests = [
    ...codechefContests,
    ...leetcodeContests,
    ...codeforcesContests,
  ];
  contests.sort(
    (contest1, contest2) =>
      (contest1.startTime as number) - (contest2.startTime as number)
  );

  res.status(200).json({
    upcoming_contests: contests,
  });
};