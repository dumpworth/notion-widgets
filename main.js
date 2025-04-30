function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get(name)) || 0;
}

setProgress(getQueryParam("progress"));
