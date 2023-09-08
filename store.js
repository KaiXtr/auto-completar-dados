const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

window.localStorage.setItem('display_name',params.display_name);
window.localStorage.setItem('first_name',params.first_name);
window.localStorage.setItem('last_name',params.last_name);
window.localStorage.setItem('full_name',params.full_name);
console.log(first_name);