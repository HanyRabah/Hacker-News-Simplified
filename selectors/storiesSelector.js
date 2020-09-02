export const storiesSelector = ({ id, title, by, url, time, score, kids } = {}) => {
  return (
    {
      id,
      title,
      by,
      url,
      time,
      score,
      comments: kids ? kids.length  : 0
    }
  )
}
