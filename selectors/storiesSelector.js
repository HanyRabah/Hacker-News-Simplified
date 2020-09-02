/**
 * Select Stories Data to have clean object
 * @param {Number} id
 * @param {String} title
 * @param {String} by
 * @param {String} url
 * @param {Number} time
 * @param {Number} score
 * @param {Array} kids
 * @returns {Object}
 */
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
