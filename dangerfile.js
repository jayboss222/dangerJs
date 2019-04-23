import { fail, warn, message, markdown, danger } from "danger"

// export default async () => {
//   await verifyChangelogs();
//   await verifyNodeVersion();
// };

fail("This is a failure message")
warn("This is a warning")
message("This is a normal message")
markdown("*Markdown* is also **supported**")

const { additions = 0, deletions = 0 } = danger.github.pr
console.log(danger.github.pr)

const numRequestedReviewers = danger.github.pr.requested_reviewers.length
message(`:tada: The PR added ${additions} and removed ${deletions} lines. ${numRequestedReviewers} reviewer/s`)