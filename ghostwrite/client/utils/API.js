const axios = require("axios");

export default {
  createBlock: (pieceId, authorId, text, wordCount) => {
    return axios.post('/testBlock', {
      pieceId: pieceId,
      authorId: authorId,
      text: text,
      wordCount: wordCount
    });
  }
}