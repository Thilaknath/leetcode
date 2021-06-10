function getMovieList(year) {
    return new Promise(function (resolve, reject) {
      const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
  
      const req = https.get(url, res => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
  
        res.on('end', () => {
          const titles = JSON.parse(body).data.map(movie => movie.Title);
          resolve(titles);
        });
      });
  
      req.on('error', error => {
        reject(error);
      });
  
    });
  }