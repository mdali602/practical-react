
export const getApiEndpoint = url => "https://api.randomuser.me/" + url;

export const getHeaders = opts => {
  let headers = {
    // TODO:  temporary setting token into localstorage need to confirm,
    "X-AUTH-TOKEN": "slkdflsjd849lkjfjf",
    "Content-Type": "application/json",
    'Accept': 'application/json'
  };
  let customHeaders;
  let propsHeaders = opts.headers ? opts.headers : null;
  if (propsHeaders) {
    customHeaders = { ...propsHeaders, ...headers };
  } else {
    customHeaders = { ...headers };
  }

  let apiHeaders = {
    method: opts.method,
    headers: customHeaders,
    body: !opts.params ? JSON.stringify(opts.data) : opts.data,
  };

  return apiHeaders;
};

export const request = (url, opts) => {
  const apiUrl = getApiEndpoint(url);
  opts.method = opts.method || "get";
  return new Promise((resolve, reject) => {
    fetch(apiUrl, getHeaders(opts))
      .then(response => {
        /* if (response) {
          console.log("IF-IF-IF-IF-IF");
          resolve(response);
        } else {
          console.log("ELSE-ELSE-ELSE-ELSE");
          reject("error");
        } */
        // return response;
        resolve(response);
      })/* .then(result => {
        let data = result;
        resolve(data);
      }) */
      .catch(res => {
        let err = null;
        let response = res.response;
        if (response && response.data && response.data.error) {
          err = response.data.error;
        }
        reject(res);
        throw err;
      });
  });
};

export const get = (url, params) => request(url, { params });

export const post = (url, params, data) => request(url, { method: "post", params, data });

export const put = (url, params, data) => request(url, { method: "put", params, data });

export const del = (url, params, data) => request(url, { method: "delete", params, data });