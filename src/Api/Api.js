import axios from 'axios';

const KEY = 'a087ec88dfb73069c17edb46f5fa13b0';

// `https://api.themoviedb.org/3/movie/661374?api_key=a087ec88dfb73069c17edb46f5fa13b0&language=en-US
// `;

// `https://api.themoviedb.org/3/movie/{661374}/images?api_key=a087ec88dfb73069c17edb46f5fa13b0&language=en-US`

export const Api = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`)
    .then(response => {
      return response;
    })
    .then(data => {
      return data.data.results;
    });
};

export const ApiId = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
    )
    .then(response => {
      return response;
    })
    .then(data => {
      return data.data;
    });
};

export const ApiCasts = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-USS`
    )
    .then(response => {
      return response;
    })
    .then(data => {
      // console.log(data);
      return data.data;
    });
};

export const ApiReviews = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    )
    .then(response => {
      return response;
    })
    .then(data => {
      return data.data;
    });
};

export const ApiName = name => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${name}`
    )
    .then(response => {
      return response;
    })
    .then(data => {
      return data.data;
    });
};
